import * as THREE from "three";

const simulationVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const simulationFragmentShader = `
uniform float uTime;
uniform float uNoiseScale;
uniform float uNoiseIntensity;
uniform float uTimeScale;
uniform sampler2D positions;
uniform float uPlaneScale;

varying vec2 vUv;

// Simplex 3D noise
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 curl(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  float x = snoise(p + dy) - snoise(p - dy);
  float y = snoise(p + dz) - snoise(p - dz);
  float z = snoise(p + dx) - snoise(p - dx);

  return normalize(vec3(x, y, z) / (2.0 * e));
}

void main() {
  vec4 pos = texture2D(positions, vUv);
  
  vec3 noisePos = pos.xyz * uNoiseScale + uTime * uTimeScale;
  vec3 velocity = curl(noisePos) * uNoiseIntensity;
  
  pos.xyz += velocity * 0.01;
  
  // Boundary check - wrap around
  float bound = uPlaneScale * 2.0;
  if (pos.x > bound) pos.x = -bound;
  if (pos.x < -bound) pos.x = bound;
  if (pos.y > bound) pos.y = -bound;
  if (pos.y < -bound) pos.y = bound;
  if (pos.z > bound) pos.z = -bound;
  if (pos.z < -bound) pos.z = bound;
  
  gl_FragColor = pos;
}
`;

export class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(
    size: number = 512,
    planeScale: number = 1.0,
    textureType: THREE.TextureDataType = THREE.HalfFloatType
  ) {
    const isHalf = textureType === THREE.HalfFloatType;
    const data = isHalf
      ? new Uint16Array(size * size * 4)
      : new Float32Array(size * size * 4);

    for (let i = 0; i < size * size; i++) {
      const i4 = i * 4;
      const x = (Math.random() - 0.5) * planeScale * 4;
      const y = (Math.random() - 0.5) * planeScale * 4;
      const z = (Math.random() - 0.5) * planeScale * 2;

      if (isHalf) {
        (data as Uint16Array)[i4 + 0] = THREE.DataUtils.toHalfFloat(x);
        (data as Uint16Array)[i4 + 1] = THREE.DataUtils.toHalfFloat(y);
        (data as Uint16Array)[i4 + 2] = THREE.DataUtils.toHalfFloat(z);
        (data as Uint16Array)[i4 + 3] = THREE.DataUtils.toHalfFloat(1.0);
      } else {
        (data as Float32Array)[i4 + 0] = x;
        (data as Float32Array)[i4 + 1] = y;
        (data as Float32Array)[i4 + 2] = z;
        (data as Float32Array)[i4 + 3] = 1.0;
      }
    }

    const positionsTexture = new THREE.DataTexture(
      data as any,
      size,
      size,
      THREE.RGBAFormat,
      textureType
    );
    positionsTexture.needsUpdate = true;
    positionsTexture.minFilter = THREE.NearestFilter;
    positionsTexture.magFilter = THREE.NearestFilter;
    positionsTexture.generateMipmaps = false;

    super({
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uNoiseScale: { value: 1.0 },
        uNoiseIntensity: { value: 0.5 },
        uTimeScale: { value: 0.5 },
        uPlaneScale: { value: planeScale },
      },
    });
  }
}

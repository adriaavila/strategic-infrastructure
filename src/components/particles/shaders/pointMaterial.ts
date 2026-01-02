import * as THREE from "three";

const pointVertexShader = `
uniform sampler2D positions;
uniform sampler2D initialPositions;
uniform float uTime;
uniform float uFocus;
uniform float uBlur;
uniform float uPointSize;
uniform float uTransition;
uniform float uRevealFactor;
uniform float uRevealProgress;

varying float vDistance;
varying float vAlpha;

void main() {
  vec3 pos = texture2D(positions, position.xy).xyz;
  vec3 initPos = texture2D(initialPositions, position.xy).xyz;
  
  // Interpolate between simulation position and initial position
  vec3 finalPos = mix(pos, initPos, uTransition);
  
  vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
  
  // Calculate distance from center for reveal animation
  float distFromCenter = length(finalPos.xy);
  
  // Reveal animation - particles appear from center outward
  float revealThreshold = uRevealFactor;
  float revealAlpha = smoothstep(revealThreshold - 1.0, revealThreshold, distFromCenter);
  revealAlpha = 1.0 - revealAlpha;
  revealAlpha = mix(revealAlpha, 1.0, uRevealProgress);
  
  vAlpha = revealAlpha;
  
  gl_Position = projectionMatrix * mvPosition;
  
  // Distance-based size
  vDistance = abs(uFocus - -mvPosition.z);
  float size = uPointSize * (1.0 + vDistance * uBlur);
  gl_PointSize = size * (1.0 / -mvPosition.z);
}
`;

const pointFragmentShader = `
uniform float uOpacity;

varying float vDistance;
varying float vAlpha;

void main() {
  // Circular point
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  
  if (dist > 0.5) discard;
  
  // Soft edge
  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
  alpha *= uOpacity * vAlpha;
  
  // Depth of field blur effect
  float blur = 1.0 / (1.0 + vDistance * 0.5);
  alpha *= blur;
  
  // Emerald/teal color matching the site theme
  vec3 color = vec3(0.2, 0.8, 0.6);
  
  gl_FragColor = vec4(color, alpha);
}
`;

export class DofPointsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: pointVertexShader,
      fragmentShader: pointFragmentShader,
      uniforms: {
        positions: { value: null },
        initialPositions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.0 },
        uBlur: { value: 0.1 },
        uPointSize: { value: 2.0 },
        uOpacity: { value: 1.0 },
        uTransition: { value: 0.0 },
        uRevealFactor: { value: 0.0 },
        uRevealProgress: { value: 0.0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
}

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { designTokens } from "../../design-system/tokens";

// Simple shader for rounded particles
const roundedParticleVertexShader = `
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 280.0 / -mvPosition.z;
  }
`;

const roundedParticleFragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  
  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    // Create circular particle with soft edges
    if (dist > 0.5) discard;
    
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= uOpacity;
    
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export function ParticleField({
  count = 3500,
  radius = 8,
}: {
  count?: number;
  radius?: number;
} = {}) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * radius * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * radius * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * radius * 1.2;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count, radius]);

  const material = useMemo(() => {
    // Convert design system HSL color to RGB for Three.js
    // Using muted foreground color: hsl(0, 0%, 40%) for subtle particles
    const hslColor = designTokens.colors.base.grey[500]; // hsl(0, 0%, 40%)
    const hslMatch = hslColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    
    let particleColor: THREE.Color;
    if (hslMatch) {
      const h = parseInt(hslMatch[1]) / 360;
      const s = parseInt(hslMatch[2]) / 100;
      const l = parseInt(hslMatch[3]) / 100;
      particleColor = new THREE.Color().setHSL(h, s, l);
    } else {
      // Fallback to muted grey if parsing fails
      particleColor = new THREE.Color(0.4, 0.4, 0.4);
    }

    return new THREE.ShaderMaterial({
      vertexShader: roundedParticleVertexShader,
      fragmentShader: roundedParticleFragmentShader,
      uniforms: {
        uColor: { value: particleColor },
        uOpacity: { value: 0.15 }, // Subtle opacity to match design system aesthetic
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending, // Changed from AdditiveBlending for more subtle effect
    });
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    // Smooth rotation animation
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
  });

  return <points ref={ref} geometry={geometry} material={material} />;
}

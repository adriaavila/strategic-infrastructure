import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

import { Particles } from "./Particles";
import { SimpleParticleField } from "./SimpleParticleField";

function supportsSimulation(gl: THREE.WebGLRenderer) {
  const ctx = gl.getContext();

  // WebGL2: EXT_color_buffer_float / EXT_color_buffer_half_float
  if (gl.capabilities.isWebGL2) {
    return Boolean(
      ctx.getExtension("EXT_color_buffer_float") ||
        ctx.getExtension("EXT_color_buffer_half_float")
    );
  }

  // WebGL1: needs color buffer + texture extensions
  const hasHalfTex = Boolean(ctx.getExtension("OES_texture_half_float"));
  const hasFloatTex = Boolean(ctx.getExtension("OES_texture_float"));
  const hasCBFloat = Boolean(ctx.getExtension("WEBGL_color_buffer_float"));
  const hasCBHalf = Boolean(ctx.getExtension("EXT_color_buffer_half_float"));

  return (hasFloatTex && hasCBFloat) || (hasHalfTex && hasCBHalf) || hasCBHalf;
}

function ParticleScene() {
  const gl = useThree((s) => s.gl);
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = supportsSimulation(gl);
    setSupported(ok);
    console.info("[Particles] simulation supported:", ok);
  }, [gl]);

  // Keep stable params (memo) so re-renders don't reset the reveal every time
  const params = useMemo(
    () => ({
      speed: 0.35,
      aperture: 0.15,
      focus: 4,
      size: 128,
      noiseScale: 1.4,
      noiseIntensity: 0.7,
      timeScale: 0.28,
      pointSize: 9.0,
      opacity: 0.9,
      planeScale: 3.5,
    }),
    []
  );

  // Render fallback while checking, and for unsupported devices
  if (!supported) return <SimpleParticleField />;

  return <Particles {...params} />;
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ParticleScene />
        </Suspense>
      </Canvas>
    </div>
  );
}


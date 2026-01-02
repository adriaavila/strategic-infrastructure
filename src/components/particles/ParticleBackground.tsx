import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { Suspense } from "react";

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Particles
            speed={0.3}
            aperture={0.5}
            focus={5}
            size={256}
            noiseScale={0.8}
            noiseIntensity={0.4}
            timeScale={0.3}
            pointSize={3.0}
            opacity={0.6}
            planeScale={2.0}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

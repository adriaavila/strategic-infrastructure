import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { Suspense } from "react";

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
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
            aperture={0.1}
            focus={3}
            size={32}
            noiseScale={2.0}
            noiseIntensity={1.0}
            timeScale={0.2}
            pointSize={25.0}
            opacity={1.0}
            planeScale={5.0}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

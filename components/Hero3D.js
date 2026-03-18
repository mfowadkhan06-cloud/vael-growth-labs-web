"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Box() {
  return (
    <Float speed={2} rotationIntensity={1.5}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#C79F1F" />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      <Box />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

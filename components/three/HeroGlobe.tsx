"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const pins = [
  { position: [0.2, 0.75, 0.66], color: "#f0a500" },
  { position: [-0.48, 0.52, 0.72], color: "#0a9b8e" },
  { position: [-0.68, 0.38, 0.56], color: "#ffd166" },
  { position: [0.66, 0.22, 0.58], color: "#ff6b5e" }
];

function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#071820"
          emissive="#063b36"
          emissiveIntensity={0.5}
          roughness={0.55}
          metalness={0.18}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.016, 64, 64]} />
        <meshBasicMaterial color="#0a9b8e" wireframe transparent opacity={0.12} />
      </mesh>
      {pins.map((pin, index) => (
        <mesh key={index} position={pin.position as [number, number, number]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color={pin.color} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.13, 0.006, 8, 120]} />
        <meshBasicMaterial color="#ffd166" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

export function HeroGlobe() {
  return (
    <div className="hero-globe" aria-label="Rotating globe with highlighted destination pins">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }} dpr={[1, 1.8]}>
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 2, 3]} intensity={2.2} color="#ffd166" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#0a9b8e" />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const count = 5000;
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Parallax effect
    const targetX = mouse.y * 0.6 + Math.PI / 4;
    const targetY = mouse.x * 0.6;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;

    // Black hole pull effect
    const mouse3D = new THREE.Vector3(mouse.x * 5, -mouse.y * 5, 0);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const particle = new THREE.Vector3(
        positions[idx],
        positions[idx + 1],
        positions[idx + 2]
      );
      const dist = particle.distanceTo(mouse3D);
      if (dist < 2) {
        // Pull strength decreases with distance, and is slow
        const pull = (2 - dist) * 0.01; // 0.01 is the speed factor
        particle.lerp(mouse3D, pull);
        positions[idx] = particle.x;
        positions[idx + 1] = particle.y;
        positions[idx + 2] = particle.z;
      }
    }
    // Mark positions as needing update
    if (ref.current && ref.current.children[0]) {
      ref.current.children[0].geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
} 
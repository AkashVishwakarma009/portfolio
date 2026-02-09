import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <mesh 
        ref={cubeRef} 
        position={[0, 0, -5]} 
        rotation={[0, 0, Math.PI / 4]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
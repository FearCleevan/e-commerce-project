// components/Main/Banner/ThreeScene.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// GLTF Model component with auto-rotation
function PcModel({ url, ...props }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  
  // Auto-rotation animation
  useFrame((state, delta) => {
    if (group.current) {
      // Slow continuous rotation
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

// Main ThreeScene component
function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [8, 6, 8], fov: 35 }} // Zoomed out more
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent' // Transparent background
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting - increased intensity for better visibility */}
        <ambientLight intensity={0.7} />
        <spotLight
          position={[12, 15, 12]}
          angle={0.25}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.6} />
        <directionalLight position={[-6, 12, 6]} intensity={0.4} />

        {/* Your GLTF Model - adjusted scale and position */}
        <PcModel
          url="/models/scene.gltf"
          scale={3.8} // Slightly larger scale
          position={[0, -1, 0]} // Adjusted position
        />

        {/* Environment for better lighting - using a brighter preset */}
        <Environment 
          preset="studio" // Brighter environment
          background={false}
        />

        {/* Controls - adjusted for wider view */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxDistance={25} // Increased max distance
          minDistance={10}  // Increased min distance
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 6}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
        />

        {/* Transparent floor for shadows only */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial 
            transparent={true}
            opacity={0.3} // Very transparent
            color="#1a1a1a" // Dark but transparent
            roughness={0.9} 
            metalness={0.1} 
          />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

export default ThreeScene;
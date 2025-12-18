import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface ShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  rotationSpeed?: number;
}

const FloatingBox = ({ position, color, speed = 1, rotationSpeed = 0.01 }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  );
};

const FloatingSphere = ({ position, color, speed = 1 }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 1) * 0.4;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.3} />
    </mesh>
  );
};

const FloatingCone = ({ position, color, speed = 1, rotationSpeed = 0.02 }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 2) * 0.25;
      meshRef.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.3, 0.6, 32]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
    </mesh>
  );
};

const FloatingTorus = ({ position, color, speed = 1, rotationSpeed = 0.015 }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 3) * 0.35;
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.3, 0.12, 16, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

const Scene = () => {
  const shapes = useMemo(() => [
    { type: "box", position: [-3, 1, -2] as [number, number, number], color: "#F28B64", speed: 0.8 },
    { type: "sphere", position: [3, 0.5, -1] as [number, number, number], color: "#3DA5A5", speed: 1.2 },
    { type: "cone", position: [-2, -0.5, -1.5] as [number, number, number], color: "#F5C542", speed: 1 },
    { type: "torus", position: [2.5, 1.5, -2.5] as [number, number, number], color: "#A56EBF", speed: 0.9 },
    { type: "sphere", position: [-3.5, -1, -2] as [number, number, number], color: "#4CAF7D", speed: 1.1 },
    { type: "box", position: [3.5, -0.8, -1.8] as [number, number, number], color: "#F28B64", speed: 0.7 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, 3, 2]} intensity={0.4} />
      
      {shapes.map((shape, index) => {
        switch (shape.type) {
          case "box":
            return <FloatingBox key={index} {...shape} />;
          case "sphere":
            return <FloatingSphere key={index} {...shape} />;
          case "cone":
            return <FloatingCone key={index} {...shape} />;
          case "torus":
            return <FloatingTorus key={index} {...shape} />;
          default:
            return null;
        }
      })}
    </>
  );
};

interface FloatingShapesProps {
  className?: string;
}

const FloatingShapes = ({ className = "" }: FloatingShapesProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;

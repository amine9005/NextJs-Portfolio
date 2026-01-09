"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function Model({ scale }: { scale: number }) {
  const { scene } = useGLTF("/models/computer-optimized-transformed.glb");
  return <primitive object={scene} scale={scale} />;
}
const Hero3DModelMolecule = () => {
  return (
    <Canvas camera={{ fov: 45 }} className="cursor-pointer">
      {" "}
      {/* Fallback component */}
      <OrbitControls></OrbitControls>
      <Stage environment={"sunset"}>
        <Model scale={0.1} />
      </Stage>
    </Canvas>
  );
};

export default Hero3DModelMolecule;

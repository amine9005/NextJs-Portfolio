"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Model(props: any) {
  const { scene } = useGLTF("/computer-optimized-transformed.glb");
  return <primitive object={scene} {...props} />;
}
const Hero3DModelMolecule = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />

      <OrbitControls></OrbitControls>

      <Stage environment={"sunset"}>
        <Model scale={0.01} />
      </Stage>
    </Canvas>
  );
};

export default Hero3DModelMolecule;

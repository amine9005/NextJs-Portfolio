"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { ReactNode, Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { LoaderPinwheelIcon } from "lucide-react";
import { useRef } from "react";

import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

//type
import type { Mesh } from "three";
function Model({
  scale,
  modelName,
  preview = false,
}: {
  scale: number;
  modelName: string;
  preview?: boolean;
}) {
  const modelRef = useRef<Mesh>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });
  const { scene } = useGLTF("/models/" + modelName);
  return <primitive object={scene} scale={scale} />;
}
function Loader(): ReactNode {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="flex w-full animate-pulse flex-col justify-center items-center gap-5">
        {/* <span className="canvas-load"></span> */}
        <LoaderPinwheelIcon className="size-10 animate-spin text-gray-700" />
        <span className="text-gray-700 font-bold text-md">
          {"Loading " + progress.toFixed(2)}%
        </span>
      </div>
    </Html>
  );
}

const ROTATION_SPEED = 0.005;

function Cube() {
  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += ROTATION_SPEED;
      boxRef.current.rotation.y += ROTATION_SPEED;
    }
  });

  return (
    <Box ref={boxRef}>
      <meshBasicMaterial color="orange" />
    </Box>
  );
}

const Project3DModelMolecule = ({
  modelName,
  preview = false,
}: {
  modelName: string;
  className?: string;
  preview?: boolean;
}) => {
  return (
    // <div style={{ height: "100vh", width: "100vw" }}>
    //   <Canvas>
    //     <OrbitControls />
    //     <gridHelper />
    //     <Cube />
    //   </Canvas>
    // </div>
    <Canvas
      camera={{ fov: 360 }}
      className={"cursor-pointer min-h-50 w-full bg-gray-100 rounded-lg"}
    >
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <OrbitControls></OrbitControls>
        <Stage environment={"sunset"}>
          <Model scale={0.1} modelName={modelName} />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default Project3DModelMolecule;

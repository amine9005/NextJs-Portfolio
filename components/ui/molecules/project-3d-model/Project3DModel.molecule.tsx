"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { ReactNode, Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { LoaderPinwheelIcon } from "lucide-react";

function Model({ scale, modelName }: { scale: number; modelName: string }) {
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

const Project3DModelMolecule = ({
  modelName,
}: {
  modelName: string;
  className?: string;
}) => {
  return (
    <Canvas
      camera={{ fov: 45 }}
      className={"cursor-pointer w-full bg-gray-100 rounded-lg"}
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

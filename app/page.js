"use client";
import Experience from "@/components/Experience";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-purple-300">
      <div className="absolute top-10 left-1/2 z-10 text-6xl text-shadow font-bold  text-white translate-x-[-50%]">
        Politigram
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 text-2xl flex flex-col text-shadow font-bold  text-black translate-x-[-50%]">
        <div className="bg-white p-4  rounded-lg flex items-center justify-center mb-4 hover:bg-black hover:text-white">
          Start
        </div>
        <div className="bg-white p-4  rounded-lg flex items-center justify-center mb-4 hover:bg-black hover:text-white">
          Make your own
        </div>
        <div className="bg-white p-4  rounded-lg flex items-center justify-center mb-4 hover:bg-black hover:text-white">
          Submit Your Results
        </div>
      </div>
      <Canvas>
        <Experience />
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}

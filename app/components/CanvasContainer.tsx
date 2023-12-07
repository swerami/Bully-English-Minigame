"use client"

import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { ApiResponse } from "../page";

interface Props {
  items: ApiResponse
}

const CanvasContainer = ({items}: Props) => {
    
  return <div className="h-screen w-full">
    <Canvas className="">
      <Experience items={items} />
    </Canvas>
  </div>;
};

export default CanvasContainer;

import { OrbitControls } from "@react-three/drei";
import React, { useEffect } from "react";
import { Chalkboard } from "./models/Chalkboard";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import Question from "./Question";
import { ApiResponse } from "../page";
import gsap from "gsap";

interface Props {
    items: ApiResponse
  }

const Experience = ({items}: Props) => {

    useFrame((state, delta) => {
        // state.camera.position.copy(new Vector3(0,0,2.5))
    })

    const camera = useThree()

    useEffect(() => {
      gsap.to(camera.camera.position, {
        z: 2.6,
        duration: 3,
        ease: "power1.out",
      })
    })

  return <>
    <OrbitControls enableRotate={false} />
    <ambientLight intensity={1.0} />
    <Chalkboard items={items} />
    {/* <Question items={items} /> */}
  </>;
};

export default Experience;

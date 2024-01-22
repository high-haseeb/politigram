import { Line, RoundedBox, Sphere, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Experience = () => {
  // const ref = useRef();
  // useFrame(()=>{
  //   ref.current.position.x += 0.001;
  //   ref.current.position.y += 0.001;
  // })
  return (
    <>
      {/* <Text color={'black'} position={[0, 10, 0]} fontSize={1}>Hello world</Text> */}
      <Sphere args={[1]} position={[4, 4, 4]}>
        <meshBasicMaterial color="red" />
      </Sphere>

      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        args={[100, 100, 100, 100]}
      >
        <meshBasicMaterial wireframe />
      </Plane>
      <Sphere args={[0.2]} position={[0, 0, 0]} />
      <Line
        points={[
          [0, -100, 0],
          [0, 100, 0],
        ]}
        lineWidth={10}
        color={"red"}
      />
      <Line
        points={[
          [-100, 0, 0],
          [100, 0, 0],
        ]}
        lineWidth={10}
        color={"lime"}
      />

      <Line
        points={[
          [0, 0, -100],
          [0, 0, 100],
        ]}
        lineWidth={10}
        color={"pink"}
      />
    </>
  );
};

export default Experience;

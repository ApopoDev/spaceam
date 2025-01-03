"use client";

import { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
  rotation?: number;
  scale?: number;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "barbiz",
      floatSpeed = 1.5,
      rotationIntensity = 0.5,
      floatIntensity = 0.5,
      floatingRange = [-0.1, 0.1],
      children,
      rotation,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
          rotation={[0, Math.PI, 0]}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;

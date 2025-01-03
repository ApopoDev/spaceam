"use client";

import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const groupRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true); // Usa il tuo hook personalizzato

  useEffect(() => {
    if (!groupRef.current) return;

    // Imposta la posizione iniziale fuori dallo schermo
    gsap.set(groupRef.current.position, { x: -0.1, y: 0.4, z: 0.1 });
    gsap.set(groupRef.current.rotation, { x: 0, y: -1.7, z: 0 });
    gsap.set(groupRef.current.scale, { x: 1.4, y: 1.4, z: 1.4 });

    // Crea l'animazione con ScrollTrigger
  }, []);

  return (
    <group ref={groupRef}>
      <FloatingCan />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}

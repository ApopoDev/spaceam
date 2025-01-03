"use client";

import { Environment, Scroll } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FloatingCan from "@/components/FloatingCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {};

export default function Scene({}: Props) {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#a2958c", "#c79675", "#d5a557"];

  useGSAP(() => {
    if (!canRef.current) return;

    gsap.set(canRef.current.position, { x: 1, y: 0, z: 0 });
    gsap.set(canRef.current.rotation, { x: 0, y: -1.9, z: 0 });
    gsap.set(canRef.current.scale, { x: 0.7, y: 0.7, z: 0.7 });

    const sections = gsap.utils.toArray(".alternating-section");
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".alternating-text-view",
        endTrigger: ".alternating-text-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onLeave: () => {
          // Animazione per far uscire l'oggetto verso destra
          if (canRef.current) {
            gsap.to(canRef.current.position, {
              x: 5, // Esce verso destra
              ease: "power1.inOut",
              duration: 1,
            });
          }
        },
        onEnterBack: () => {
          // Animazione per far rientrare l'oggetto
          if (canRef.current) {
            gsap.to(canRef.current.position, {
              x: 1, // Torna alla posizione iniziale
              ease: "power1.inOut",
              duration: 1,
            });
          }
        },
      },
    });

    sections.forEach((_, index) => {
      if (!canRef.current) return;
      if (index === 0) return;

      const isOdd = index % 2 !== 0;

      const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
      const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;
      scrollTl
        .to(canRef.current.position, {
          x: xPosition,
          ease: "circ.inOut",
          delay: 0.5,
        })
        .to(
          canRef.current.rotation,
          {
            y: yRotation,
            ease: "back.inOut",
          },
          "<"
        )
        .to(
          canRef.current.rotation,
          {
            y: "+=6.28", // Rotazione completa sull'asse x (2π per rotazione completa in radianti)
            ease: "none",
            duration: 0.5,
          },
          "<" // Parte contemporaneamente alle altre animazioni
        )
        .to(".alternating-text-container", {
          backgroundColor: gsap.utils.wrap(bgColors, index),
        });
    });
  }, [isDesktop]);

  return (
    <group
      ref={canRef}
      position-x={isDesktop ? 1 : 0}
      rotation-y={isDesktop ? -0.3 : 0}
    >
      <FloatingCan flavor="barbiz" />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

"use client";

import FloatingCan from "@/components/FloatingCan";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { group } from "console";

gsap.registerPlugin(useEffect, ScrollTrigger);

type Props = {};

export default function Scene({}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const isReady = useStore((state) => state.isReady);

  const canBarbiz1 = useRef<Group>(null);
  const canBarbiz2 = useRef<Group>(null);
  const groupBarbiz = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useEffect(() => {
    if (!canBarbiz1.current || !canBarbiz2.current || !groupBarbiz.current)
      return;
    isReady();

    gsap.set(canBarbiz1.current.position, { x: -1.5 });
    gsap.set(canBarbiz1.current.rotation, { z: -0.5 });
    gsap.set(canBarbiz1.current.scale, { x: 0.7, y: 0.7, z: 0.7 });

    gsap.set(canBarbiz2.current.position, { x: 1.5 });
    gsap.set(canBarbiz2.current.rotation, { z: 0.5 });
    gsap.set(canBarbiz2.current.scale, { x: 0.7, y: 0.7, z: 0.7 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.3)",
      },
    });

    if (window.scrollY < 20) {
      introTl.from(canBarbiz1.current.position, { y: -5, x: 1 }, 0);
      introTl.from(canBarbiz1.current.rotation, { z: 3 }, 0);
      introTl.from(canBarbiz2.current.position, { y: 5, x: 1 }, 0);
      introTl.from(canBarbiz2.current.rotation, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero-main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

    scrollTl.to(groupBarbiz.current.rotation, { y: Math.PI * 2 });
    scrollTl.to(
      canBarbiz1.current.position,
      { x: -3, y: -2, z: 1, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );
    scrollTl.to(
      canBarbiz2.current.position,
      { x: 1, y: 0, z: 0, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );
    scrollTl.to(
      canBarbiz2.current.rotation,
      { x: 0, y: -1.9, z: 0, duration: 1, ease: "power1.inOut" },
      "-=0.5"
    );
    // .to(
    //   canBarbiz1.current.position,
    //   { x: 1, y: 0, z: 0, duration: 2, ease: "sine.inOut" },
    //   "-=1.5"
    // )
    // .to(
    //   canBarbiz1.current.rotation,
    //   { x: 0, y: -1.9, z: 0, duration: 2, ease: "sine.inOut" },
    //   "-=2"
    // )
    // .to(
    //   canBarbiz2.current.position,
    //   { x: 1, y: 0, z: 0, duration: 2, ease: "sine.inOut" },
    //   "-=2"
    // )
    // .to(
    //   canBarbiz2.current.position,
    //   { x: 10, y: 0, z: 0, duration: 2, ease: "sine.inOut" },
    //   "-=1.5"
    // )
    // .to(
    //   canBarbiz2.current.position,
    //   { x: 20, y: 0, z: 0, duration: 2, ease: "sine.inOut" },
    //   "-=1.5"
    // )
    // .to(canBarbiz2.current.position, {
    //   x: 30, // Sposta l'oggetto a destra
    //   y: -10, // Sposta l'oggetto in basso
    //   duration: 2,
    //   ease: "power1.in",
    // })
    // .to(
    //   canBarbiz2.current.position,
    //   { x: -30, y: 0, z: 0, duration: 0, ease: "sine.inOut" },
    //   "-=0.1"
    // );
  }, [isReady]);

  // gsap.set(canRef.current.position, { x: 1, y: 0, z: 0 });
  // gsap.set(canRef.current.rotation, { x: 0, y: -1.9, z: 0 });
  return (
    <group ref={groupBarbiz}>
      <group>
        <FloatingCan
          ref={canBarbiz1}
          flavor="barbiz"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group>
        <FloatingCan
          ref={canBarbiz2}
          flavor="barbiz"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <OrbitControls />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}

// const can1Ref = useRef<Group>(null);
// const can2Ref = useRef<Group>(null);
// const can3Ref = useRef<Group>(null);
// const can4Ref = useRef<Group>(null);
// const can5Ref = useRef<Group>(null);

// const can1GroupRef = useRef<Group>(null);
// const can2GroupRef = useRef<Group>(null);

// const groupRef = useRef<Group>(null);
// const FLOAT_SPEED = 1.5;

// useEffect(() => {
//   if (
//     !can1Ref.current ||
//     !can2Ref.current ||
//     !can3Ref.current ||
//     !can4Ref.current ||
//     !can5Ref.current ||
//     !can1GroupRef.current ||
//     !can2GroupRef.current ||
//     !groupRef.current
//   )
//     return;

//   isReady();

//   //set can starting location, posizione iniziale delle lattine
//   gsap.set(can1Ref.current.position, { x: -1.5 });
//   gsap.set(can1Ref.current.rotation, { z: -0.5 });
//   gsap.set(can1Ref.current.scale, { x: 0.7, y: 0.7, z: 0.7 });
//   //gsap.set(can1Ref.current.rotation, { z: -0.5 });

//   gsap.set(can2Ref.current.position, { x: 1.5 });
//   gsap.set(can2Ref.current.rotation, { z: 0.5 });
//   gsap.set(can2Ref.current.scale, { x: 0.7, y: 0.7, z: 0.7 });
//   //gsap.set(can2Ref.current.rotation, { z: 0.5, y: 1, x: 0.5 });

//   gsap.set(can3Ref.current.position, { y: 5, z: 2 });
//   gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
//   gsap.set(can5Ref.current.position, { y: -5 });

//   //gsap

//   const introTl = gsap.timeline({
//     defaults: {
//       duration: 3,
//       ease: "back.out(1.3)",
//     },
//   });
//   if (window.scrollY < 20) {
//     introTl.from(can1GroupRef.current.position, { y: -5, x: 1 }, 0);
//     introTl.from(can1GroupRef.current.rotation, { z: 3 }, 0);
//     introTl.from(can2GroupRef.current.position, { y: 5, x: 1 }, 0);
//     introTl.from(can2GroupRef.current.rotation, { z: 3 }, 0);
//   }

//   const scrollTl = gsap.timeline({
//     defaults: {
//       duration: 2,
//     },
//     scrollTrigger: {
//       trigger: ".hero1",
//       start: "top top ",
//       end: "bottom bottom",
//       scrub: 1.5,
//     },
//   });

//   //animation

//   scrollTl
//     //Rotation Can Group, fa ruotare le 2 lattine iniziali ( rosse verdi)
//     .to(groupRef.current.rotation, { y: Math.PI * 2 })

//     //can 1- black cherry
//     .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: 2 }, 0)
//     .to(can1Ref.current.rotation, { z: 0.3 }, 0)

//     //can 2-  Lemon Lime
//     .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
//     .to(can2Ref.current.rotation, { z: 0 }, 0)

//     // //can 3- Grope
//     .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
//     .to(can3Ref.current.rotation, { z: -0.1 }, 0)

//     //can 4- Strawberry Lemonade
//     .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
//     .to(can4Ref.current.rotation, { z: 0.3 }, 0)

//     //can 5- Watermelon
//     .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
//     .to(can5Ref.current.rotation, { z: -0.25 }, 0)
//     .to(
//       groupRef.current.position,
//       { x: 1, duration: 3, ease: "sine.inOut" },
//       1.3
//     )
//     // Aggiungi l'animazione per far uscire gli oggetti dalla scena
//     .to(
//       [
//         can1Ref.current.position,
//         can2Ref.current.position,
//         can3Ref.current.position,
//         can4Ref.current.position,
//         can5Ref.current.position,
//       ],
//       {
//         x: 10, // Sposta gli oggetti a destra
//         y: -10, // Sposta gli oggetti in basso
//         duration: 2,
//         ease: "power1.in",
//       }
//     );
// }, [isReady]);

// return (
//   <group ref={groupRef}>
//     <group ref={can1GroupRef}>
//       <FloatingCan ref={can1Ref} flavor="barbiz" floatSpeed={FLOAT_SPEED} />
//     </group>
//     <group ref={can2GroupRef}>
//       <FloatingCan ref={can2Ref} flavor="barbiz" floatSpeed={FLOAT_SPEED} />
//     </group>
//     <FloatingCan ref={can3Ref} flavor="barbiz" floatSpeed={FLOAT_SPEED} />
//     <FloatingCan ref={can4Ref} flavor="barbiz" floatSpeed={FLOAT_SPEED} />

//     <FloatingCan ref={can5Ref} flavor="barbiz" floatSpeed={FLOAT_SPEED} />

//     <OrbitControls />

//     <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
//   </group>
// );
//}

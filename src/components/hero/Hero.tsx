"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Scene from "./Scene";
import { Button } from "../ui/button";
import Header from "../Header";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = (): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )

        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })

        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top ",
          end: "bottom bottom",
          scrub: 1.5,
          //markers: true,
        },
      });

      //cambio colore quadno scrollo
      scrollTl
        .fromTo(
          "body",
          {
            background: "bg-salmon",
          },
          {
            backgroundColor: "bg-salmon-light",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <section className="hero " id="hero">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
        </View>
      )}

      <main className="hero-main grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-5xl font-black uppercase leading-[.8] text-[#1F1D20] md:text-[9rem] lg:text-[13rem]">
              <div className="hero-header-word">
                <span>Space</span>
                <br />
                <span>AM</span>
              </div>
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-[#4D4845] lg:text-6xl">
              Customized Barrels
            </div>
            <div className="hero-body text-2xl font-normal text-[#4D4845]">
              Personalize your barrel with your logo or choose from our
              exclusive, handcrafted designs.
            </div>
            <Button
              className="hero-button mt-12 hover:shadow-lg"
              onClick={() => (window.location.href = "#products")}
            >
              Shop Now
            </Button>
          </div>
        </div>

        <div className="text-side relative grid h-screen items-center gap-4 md:grid-cols-2">
          <div className="flex flex-col place-items-center">
            <h2 className="text-side-heading text-balance text-center text-6xl font-black uppercase text-[#1F1D20] lg:text-8xl leading-tight">
              Explore
              <br />
              Our Barrels
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-center text-xl font-normal text-[#4D4845]">
              Enhance your space with our customizable barrels, designed to add
              character and style. Choose from our curated selection of
              handcrafted barrels, or personalize your own by adding your unique
              logo to create a distinctive statement piece that reflects your
              brand’s identity and complements your decor.
            </p>
            <div className="mt-12">
              <Button
                className="hero-button-2 "
                onClick={() => (window.location.href = "#products")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;

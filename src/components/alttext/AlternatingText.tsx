"use client";
import { View } from "@react-three/drei";
import clsx from "clsx";
import Scene from "./Scene";
import { useEffect } from "react";

const text = [
  {
    title: "Gut-Friendly Goodness",
    description:
      "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    title: "Light Calories, Big Flavor",
    description:
      "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    title: "Naturally Refreshing",
    description:
      "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

const AlternatingText = (): JSX.Element => {
  useEffect(() => {
    // Codice GSAP che dipende dagli elementi nel DOM
  }, []);
  return (
    <section
      className="alternating-text-container relative bg-salmon-light text-[#1F1D20] w-full h-full"
      id="alttext"
    >
      <div>
        <div className="relative  grid w-full h-full">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {text.map((item, index) => (
            <div
              key={index}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4  max-md:bg-white/30 max-w-md mx-auto"
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.title}
                </h2>
                <p className="mt-4 text-xl max-w-md leading-relaxed ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternatingText;

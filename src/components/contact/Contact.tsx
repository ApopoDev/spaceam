"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { View } from "@react-three/drei";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Scene from "./Scene";

const Contact = (): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  return (
    <section
      className="contact opacity-none  bg-[#d5a557] py-12 px-6 md:px-12"
      id="contact"
    >
      <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col gap-12">
        <div className=" text-center ">
          {/* Titolo principale */}
          <h1 className="text-7xl font-bold text-gray-800 mb-2 mt-12">
            Contact us
          </h1>
          {/* Titolo secondario */}
          <h2 className="text-xl font-semibold  text-gray-600 ">
            Reach Out for a Personalized Quote!
          </h2>
        </div>

        {/* Sezione a due colonne */}
        <div className="flex flex-1 flex-col md:flex-row gap-6 bg-[#d5a557] p-8  rounded-lg">
          {/* Colonna Sinistra */}
          <div className="flex-1 ">
            <View className="contact-scene pointer-events-none sticky top-0 z-20 h-full w-full">
              <Scene />
            </View>
          </div>

          {/* Colonna Destra */}
          <div className="flex-1 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
              Send a Message
            </h2>
            <div className="flex justify-center items-center">
              <div className="flex gap-4 flex-col w-full">
                {/* Nome */}
                <div className="flex w-full flex-col gap-2 mb-4">
                  <Label className="text-xl font-medium">Nome</Label>
                  <Textarea
                    className="rounded-md border border-gray-300 pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="nome..."
                    rows={1}
                  />
                </div>
                {/* Email */}
                <div className="flex w-full flex-col gap-2 mb-4">
                  <Label className="text-xl font-medium">Email</Label>
                  <Textarea
                    className="rounded-md border border-gray-300 pl-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email..."
                    rows={1}
                  />
                </div>
                {/* Messaggio */}
                <div className="flex w-full flex-col gap-2 mb-4">
                  <Label className="text-xl font-medium">Messaggio</Label>
                  <Textarea
                    className="rounded-md border border-gray-300 pl-2 py-1 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="messaggio..."
                  />
                </div>
                {/* Pulsante Invia */}
                <button className="bg-blue-500 text-white w-1/2 self-center rounded-md py-2 hover:bg-blue-600">
                  Invia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

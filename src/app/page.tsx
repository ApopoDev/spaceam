import AlternatingText from "@/components/alttext/AlternatingText";
import Carousel from "@/components/carousel/Carousel";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";

export default async function Home() {
  return (
    <div>
      <Hero />
      <AlternatingText />
      <Carousel />
      <Contact />
    </div>
  );
}

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Play } from "@/components/Play";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Play />
        <Contact />
      </main>
    </>
  );
}

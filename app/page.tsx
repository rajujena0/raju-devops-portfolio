import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Techstacks from "@/components/sections/Techstacks";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Techstacks />

    </>
  );
}
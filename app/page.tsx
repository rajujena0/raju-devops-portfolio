import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Techstacks from "@/components/sections/Techstacks";
import GithubStats from "@/components/sections/GithubStats";
import AIShowcase from "@/components/sections/AIShowcase";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GitHubProfile from "@/components/sections/GitHubProfile";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      
      <BackgroundGrid />
      
      <ScrollProgress />

      <MouseGlow />
      
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Techstacks />

      <Projects />

      <AIShowcase/>

      <GitHubProfile />

      <GithubStats/>

      <Certifications />

      <Contact />

      <Footer />

    </>
  );
}
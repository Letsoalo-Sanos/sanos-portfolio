import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Resume from "@/components/sections/Resume";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Blog />
      <Resume />
      <Certifications />
      <Contact />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <SelectedWork />
      <Quote />
      <Contact />
    </>
  );
}

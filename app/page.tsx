import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USP from "@/components/USP";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Marketing from "@/components/Marketing";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <USP />
        <Services />
        <Process />
        <Marketing />
        <Portfolio />
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

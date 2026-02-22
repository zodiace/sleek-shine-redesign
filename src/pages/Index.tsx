import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoBar from "@/components/landing/LogoBar";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiator from "@/components/landing/Differentiator";
import UseCases from "@/components/landing/UseCases";
import MultiPersonaDemo from "@/components/landing/MultiPersonaDemo";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoBar />
      <HowItWorks />
      <Differentiator />
      <UseCases />
      <MultiPersonaDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

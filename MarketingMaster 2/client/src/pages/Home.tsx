import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import BenefitsHighlight from "@/components/BenefitsHighlight";
import Bonus from "@/components/Bonus";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-neutral-50 text-gray-700">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <UseCases />
      <BenefitsHighlight />
      <Bonus />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

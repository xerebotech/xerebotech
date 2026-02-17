import Header from '@/components/Header';
import Hero from "@/components/Hero";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import SpecificServices from "@/components/SpecificServices";
import CaseStudy from "@/components/CaseStudy";
import About from '@/components/About';
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CompetitorAnalysis />
      <ProblemSection />
      <HowItWorks />
      <Services />
      <SpecificServices />
      <CaseStudy />
      <About />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

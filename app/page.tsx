import Header from '@/components/Header';
import Hero from "@/components/Hero";
import SocialProofTicker from '@/components/ui/SocialProofTicker';
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import HowItWorks from "@/components/HowItWorks";
import About from '@/components/About';
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from '@/components/Footer';
import SolutionSection from '@/components/SolutionSection';
import Qualifier from '@/components/Qualifier';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import AgencyProblem from '@/components/AgencyProblem';

export default function Home() {
  return (
    <main>
      <SocialProofTicker />
      <Header />
      <Hero />
      <AgencyProblem />

      <SolutionSection />
      <CompetitorAnalysis />

      <HowItWorks />
      <Testimonials />

      <Qualifier />
      <Pricing />

      <About />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

import Navbar from '../../components/landing/Navbar';
import Hero from '../../components/landing/Hero';
import ProblemSection from '../../components/landing/ProblemSection';
import FeaturesSection from '../../components/landing/FeaturesSection';
import HowItWorks from '../../components/landing/HowItWorks';
import TargetCompanies from '../../components/landing/TargetCompanies';
import Roadmap from '../../components/landing/Roadmap';
import SocialProof from '../../components/landing/SocialProof';
import WaitlistSection from '../../components/landing/WaitlistSection';
import FAQ from '../../components/landing/FAQ';
import Footer from '../../components/landing/Footer';
import VisitorBadge from '../../components/landing/ui/VisitorBadge';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <TargetCompanies />
        <Roadmap />
        <SocialProof />
        <WaitlistSection />
        <FAQ />
      </main>
      <Footer />
      <VisitorBadge />
    </div>
  );
}

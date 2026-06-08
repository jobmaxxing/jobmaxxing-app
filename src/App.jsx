import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import TargetCompanies from './components/TargetCompanies';
import Roadmap from './components/Roadmap';
import SocialProof from './components/SocialProof';
import WaitlistSection from './components/WaitlistSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" />

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
    </div>
  );
}

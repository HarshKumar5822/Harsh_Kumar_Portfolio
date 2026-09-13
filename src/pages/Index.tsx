import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Animated Cyber Background & Mouse Spotlight */}
      <BackgroundEffects />

      {/* Reading Progress Bar & Scroll Top Action */}
      <ScrollProgress />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16 space-y-4">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Services />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;

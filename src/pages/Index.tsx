import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ProductSuite } from "@/components/ProductSuite";
import { HowItWorks } from "@/components/HowItWorks";
import { SolutionsByUser } from "@/components/SolutionsByUser";
import { IntelligentWorkflow } from "@/components/IntelligentWorkflow";
import { AnalystPerformance } from "@/components/AnalystPerformance";
import { Differentiators } from "@/components/Differentiators";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="relative">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="problem">
        <ProblemStatement />
      </div>
      <div id="products">
        <ProductSuite />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="solutions">
        <SolutionsByUser />
      </div>
      <IntelligentWorkflow />
      <div id="performance">
        <AnalystPerformance />
      </div>
      <div id="differentiators">
        <Differentiators />
      </div>
      <div id="cta">
        <CTASection />
      </div>
    </main>
  );
};

export default Index;

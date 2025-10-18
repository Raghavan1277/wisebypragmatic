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
      <Hero />
      <ProblemStatement />
      <ProductSuite />
      <HowItWorks />
      <SolutionsByUser />
      <IntelligentWorkflow />
      <AnalystPerformance />
      <Differentiators />
      <CTASection />
    </main>
  );
};

export default Index;

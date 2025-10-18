import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { ProductSuite } from "@/components/ProductSuite";
import { IntelligentWorkflow } from "@/components/IntelligentWorkflow";
import { AnalystPerformance } from "@/components/AnalystPerformance";
import { Differentiators } from "@/components/Differentiators";
import { Pricing } from "@/components/Pricing";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <ProblemStatement />
      <ProductSuite />
      <IntelligentWorkflow />
      <AnalystPerformance />
      <Differentiators />
      <Pricing />
      <CTASection />
    </main>
  );
};

export default Index;

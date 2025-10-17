import { Hero } from "@/components/Hero";
import { ResearchAnalytics } from "@/components/ResearchAnalytics";
import { UserEngagement } from "@/components/UserEngagement";
import { AnalystPerformance } from "@/components/AnalystPerformance";
import { ControlCentre } from "@/components/ControlCentre";
import { IntelligentWorkflow } from "@/components/IntelligentWorkflow";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <ResearchAnalytics />
      <UserEngagement />
      <AnalystPerformance />
      <ControlCentre />
      <IntelligentWorkflow />
      <CTASection />
    </main>
  );
};

export default Index;

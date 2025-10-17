import { Award, TrendingUp, Target, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export const AnalystPerformance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('analyst-performance');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const analysts = [
    { name: "Prasanth E.G", successRate: 87, closedCalls: 45, specialty: "Technology", color: "text-primary" },
    { name: "Raghavan K", successRate: 92, closedCalls: 38, specialty: "Healthcare", color: "text-secondary" },
    { name: "Sharma R", successRate: 78, closedCalls: 52, specialty: "Finance", color: "text-accent" }
  ];

  const metrics = [
    { icon: Target, title: "Call Quality", value: "92%", desc: "High conviction calls" },
    { icon: Award, title: "Success Rate", value: "85%", desc: "Average across team" },
    { icon: TrendingUp, title: "Diversification", value: "12", desc: "Sectors covered" }
  ];

  return (
    <section id="analyst-performance" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Double Down on
            <br />
            <span className="text-gradient-accent">What Actually Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Move from opinions to data. Discover which analysts and which calls generate the most trading activity.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {metrics.map((metric, index) => (
            <div key={index} className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <metric.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="font-semibold mb-1">{metric.title}</div>
              <div className="text-sm text-muted-foreground">{metric.desc}</div>
            </div>
          ))}
        </div>

        {/* Analyst Performance Table */}
        <div className={`glass p-8 rounded-3xl mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-8">Analyst Success Rates</h3>
          
          <div className="space-y-6">
            {analysts.map((analyst, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xl font-semibold mb-1">{analyst.name}</div>
                    <div className="text-sm text-muted-foreground">Specialty: {analyst.specialty}</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className={`text-3xl font-bold ${analyst.color}`}>{analyst.successRate}%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{analyst.closedCalls}</div>
                      <div className="text-xs text-muted-foreground">Closed Calls</div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      analyst.color === 'text-primary' ? 'bg-primary' : 
                      analyst.color === 'text-secondary' ? 'bg-secondary' : 'bg-accent'
                    }`}
                    style={{ width: `${analyst.successRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          {[
            {
              icon: Target,
              title: "Quantify Performance",
              desc: "Move from opinions to data on which analysts generate the most trading activity"
            },
            {
              icon: Lightbulb,
              title: "Discover Hidden Talent",
              desc: "Find your niche expert who excels in specific sectors"
            },
            {
              icon: TrendingUp,
              title: "Strategic Resource Allocation",
              desc: "Direct your best talent to the most promising opportunities"
            }
          ].map((benefit, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <benefit.icon className="h-8 w-8 mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

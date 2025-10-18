import { useEffect, useState } from "react";
import { TrendingDown, Target, Clock, FileCheck, Rocket } from "lucide-react";

export const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('problem-statement');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: TrendingDown,
      title: "Lost in Translation",
      description: "70% of your recommendations are ignored because clients don't understand the context or timing",
      impact: "₹1-2 crore annual loss per analyst due to poor communication",
      color: "text-destructive"
    },
    {
      icon: Target,
      title: "Flying Blind",
      description: "Zero visibility into which clients actually trade on your calls or why they ignore others",
      impact: "Unable to improve what you can't measure",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Manual Chaos",
      description: "4+ hours daily wasted on Excel coordination, email chains, and version control",
      impact: "Time that should be spent building relationships",
      color: "text-accent"
    },
    {
      icon: FileCheck,
      title: "Compliance Nightmare",
      description: "₹50,000+ monthly on manual SEBI compliance and constant audit anxiety",
      impact: "Regulatory risk and operational overhead",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Competitor Advantage",
      description: "Competitors with worse analysis are winning your clients through better communication",
      impact: "Market share erosion to relationship-focused firms",
      color: "text-destructive"
    }
  ];

  return (
    <section id="problem-statement" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Is Your Brilliant Research Falling Into a{" "}
            <span className="bg-gradient-to-r from-destructive to-destructive/60 bg-clip-text text-transparent">
              Communication Black Hole?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Even the best research fails without proper distribution, tracking, and client engagement
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 ${problem.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{problem.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-destructive">
                    Impact: {problem.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Statement */}
        <div className={`text-center max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            <span className="font-bold">The Hidden Cost:</span> While you're perfecting your analysis, 
            competitors who prioritize client experience are building unbreakable relationships. 
            <span className="text-primary font-bold"> The firms that solve this first will dominate their markets.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

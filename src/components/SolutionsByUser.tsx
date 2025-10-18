import { useEffect, useState } from "react";
import { Brain, Building2, TrendingUp } from "lucide-react";

export const SolutionsByUser = () => {
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

    const element = document.getElementById('solutions-by-user');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: Brain,
      title: "For Research Analysts",
      description: "Spend more time analyzing and less time administrating. Co-Analyst handles the data gathering while you focus on strategic insights.",
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30"
    },
    {
      icon: Building2,
      title: "For Advisory Firms",
      description: "Scale your business without proportional overhead. Consistent quality control, professional client experience, and clear business intelligence.",
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30"
    },
    {
      icon: TrendingUp,
      title: "For Active Traders",
      description: "Never miss an opportunity. Get instant notifications, easy-to-understand analysis, and seamless tracking of all recommendations.",
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section id="solutions-by-user" className="py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Solutions by User Type
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${solution.gradient} border ${solution.borderColor} hover:shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

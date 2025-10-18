import { useEffect, useState } from "react";
import { AlertCircle, Users, Clock, Shield } from "lucide-react";

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
      icon: AlertCircle,
      title: "Fragmented Workflow",
      description: "You're juggling multiple apps for analysis, writing, and distribution. Your process is patched together with WhatsApp, Excel, and email.",
      color: "from-red-500/20 to-red-500/5"
    },
    {
      icon: Users,
      title: "Missing Client Insights",
      description: "You have no visibility into which clients actually read your research or why they ignore your best calls.",
      color: "from-orange-500/20 to-orange-500/5"
    },
    {
      icon: Clock,
      title: "Manual Distribution Headaches",
      description: "Hours wasted on copying, pasting, and sending research across different channels instead of analyzing markets.",
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      icon: Shield,
      title: "Compliance Anxiety",
      description: "Constantly worrying about SEBI audit trails and manual compliance reporting.",
      color: "from-blue-500/20 to-blue-500/5"
    }
  ];

  return (
    <section id="problem-statement" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Is Your Brilliant Research Getting Lost in Translation?
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${problem.color} border border-border hover:shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

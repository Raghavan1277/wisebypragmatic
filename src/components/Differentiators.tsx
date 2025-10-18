import { useEffect, useState } from "react";
import { Brain, Smartphone, Target, Network, MapPin } from "lucide-react";

export const Differentiators = () => {
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

    const element = document.getElementById('differentiators');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      icon: Network,
      title: "Integration Over Fragmentation",
      description: "Four products built to work together, not four separate tools patched together."
    },
    {
      icon: MapPin,
      title: "Built for India",
      description: "SEBI-compliant workflows, NSE/BSE real-time data, and understanding of local market nuances."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Native apps that work beautifully, even on slower Indian mobile networks."
    },
    {
      icon: Brain,
      title: "AI That Actually Helps",
      description: "Co-Analyst enhances your expertise, doesn't replace your judgment."
    }
  ];

  return (
    <section id="differentiators" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose WISE
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

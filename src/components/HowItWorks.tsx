import { useEffect, useState } from "react";
import { FileEdit, ShieldCheck, Send, Smartphone, BarChart3, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
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

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: FileEdit,
      title: "Create",
      description: "Analyst drafts call with Co-Analyst validation"
    },
    {
      icon: ShieldCheck,
      title: "Validate",
      description: "AI provides multi-factor confidence score"
    },
    {
      icon: Send,
      title: "Distribute",
      description: "One-click publishing across all channels"
    },
    {
      icon: Smartphone,
      title: "Engage",
      description: "Clients receive beautiful mobile experience"
    },
    {
      icon: BarChart3,
      title: "Analyze",
      description: "Track performance and client behavior"
    },
    {
      icon: TrendingUp,
      title: "Improve",
      description: "Use insights to refine your strategy"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works Together
          </h2>
          <p className="text-lg text-muted-foreground">
            The Seamless Flow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

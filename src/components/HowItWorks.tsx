import { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Rocket, Users, LineChart, Zap } from "lucide-react";

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
      icon: Sparkles,
      title: "Create",
      description: "Analyst drafts call with Co-Analyst validation",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      icon: ShieldCheck,
      title: "Validate",
      description: "AI provides multi-factor confidence score",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    {
      icon: Rocket,
      title: "Distribute",
      description: "One-click publishing across all channels",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Engage",
      description: "Clients receive beautiful mobile experience",
      gradient: "from-emerald-500 via-green-500 to-lime-500"
    },
    {
      icon: LineChart,
      title: "Analyze",
      description: "Track performance and client behavior",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Improve",
      description: "Use insights to refine your strategy",
      gradient: "from-amber-500 via-yellow-500 to-orange-500"
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
                  className={`group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-2xl hover:scale-105 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
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

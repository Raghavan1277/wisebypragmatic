import { Zap, Send, BarChart3, Target } from "lucide-react";
import { useEffect, useState } from "react";

export const IntelligentWorkflow = () => {
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

    const section = document.getElementById('workflow');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const workflow = [
    {
      icon: Zap,
      title: "CREATE",
      subtitle: "Analyst creates a call",
      desc: "Create any call type in one unified interface - Intraday, Positional, MTF, Basket, or Live Updates",
      color: "from-primary to-primary/50"
    },
    {
      icon: Send,
      title: "DISTRIBUTE & TRACK",
      subtitle: "Checker approves, WISE sends",
      desc: "Execute complex strategies instantly. Initiate Carry-Forwards, Book Profits, or Exit calls with one click",
      color: "from-secondary to-secondary/50"
    },
    {
      icon: BarChart3,
      title: "ENGAGE & ANALYSE",
      subtitle: "Client engages, WISE captures",
      desc: "Monitor entire universe in real-time dashboard. Live streaming data, not yesterday's closed prices",
      color: "from-accent to-accent/50"
    },
    {
      icon: Target,
      title: "OPTIMISE",
      subtitle: "Insights fuel better strategy",
      desc: "AI-powered content generation with relevant commentary. Base decisions on live intelligence",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section id="workflow" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Intelligence,
            <br />
            <span className="text-gradient-secondary">Built-In and Automatic</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The analytics aren't a separate product. They are the central nervous system of WISE Platform, automatically enriching every step of your workflow.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflow.map((step, index) => (
            <div key={index} className="relative">
              <div 
                className={`glass p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon className="h-7 w-7 text-background" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-primary">{step.subtitle}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Connector arrow (desktop only) */}
              {index < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlights */}
        <div className={`grid md:grid-cols-2 gap-8 mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Streamlined Creation & Strategy</h3>
            <ul className="space-y-3">
              {[
                "One-click lifecycle management",
                "Eliminate manual tracking and human error",
                "Ensure precision and compliance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gradient-secondary">Live Intelligence, Not Static Reports</h3>
            <ul className="space-y-3">
              {[
                "Real-time streaming data dashboard",
                "AI-powered content generation",
                "Instantly publish reinforcing research"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

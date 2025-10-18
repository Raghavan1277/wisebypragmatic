import { useEffect, useState } from "react";
import { Network, Smartphone, Brain, LineChart, MapPin, Target } from "lucide-react";

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
      others: "Separate tools for research, mobile, analytics—data silos, no insights",
      wise: "Four products purpose-built to work together, data flows seamlessly, insights compound",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      others: "PDF emails or responsive website (clunky on phone)",
      wise: "Native iOS/Android apps + PWA with 99% bundle optimization—Instagram-smooth experience",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Brain,
      title: "AI That Actually Helps",
      others: "Generic AI suggestions or expensive enterprise AI requiring technical integration",
      wise: "Customizable AI Co-Analyst that learns your investment style with 120+ tunable parameters",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: LineChart,
      title: "Analytics That Drive Action",
      others: "Basic dashboards showing what happened (descriptive)",
      wise: "Predictive insights showing what to do next: which sectors to focus on, when to publish, who needs attention",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: MapPin,
      title: "Built for Indian Market",
      others: "Global products poorly adapted to Indian workflows and compliance",
      wise: "SEBI compliance automation, NSE/BSE real-time integration, Hindi language support, WhatsApp distribution",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Target,
      title: "Proven ROI, Not Just Features",
      others: "Sell features and hope for results",
      wise: "90-day improvement guarantee or full refund—we're invested in your success",
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="differentiators" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Just Another Research Tool—
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              A Complete Advisory Transformation Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why forward-thinking advisory firms choose WISE over fragmented solutions
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${diff.color} border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground pt-2">{diff.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                    <div className="text-xs font-semibold text-destructive mb-2">❌ Others</div>
                    <p className="text-sm text-muted-foreground">{diff.others}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="text-xs font-semibold text-primary mb-2">✅ WISE</div>
                    <p className="text-sm text-foreground font-medium">{diff.wise}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

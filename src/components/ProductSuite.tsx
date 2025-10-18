import { useEffect, useState } from "react";
import { FileText, Brain, Smartphone, BarChart3, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export const ProductSuite = () => {
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

    const element = document.getElementById('product-suite');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      icon: FileText,
      title: "WISE Research Control Center",
      subtitle: "Professional Research Creation & Distribution",
      description: "Create professional-grade research calls in minutes instead of hours with AI assistance, real-time market integration, and maker-checker workflow.",
      features: [
        "Smart Research Creation with AI suggestions",
        "Real-Time Market Integration (NSE/BSE)",
        "Maker-Checker Workflow for quality control",
        "Multi-Stock Basket Recommendations",
        "Intelligent Call Management & audit trail"
      ],
      metrics: [
        { label: "80% faster", desc: "research creation" },
        { label: "100% SEBI", desc: "compliant" },
        { label: "Complete", desc: "audit trail" },
        { label: "Instant", desc: "distribution" }
      ],
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30"
    },
    {
      icon: Brain,
      title: "WISE AI Co-Analyst",
      subtitle: "Your 24/7 Research Assistant That Never Sleeps",
      description: "Get instant multi-dimensional analysis combining technicals, fundamentals, news sentiment, and upcoming events—all in conversational format with customizable intelligence.",
      features: [
        "Instant Multi-Dimensional Analysis (4 factors)",
        "Personalized Analysis Styles (Conservative to Aggressive)",
        "Real-Time Market Context from 50+ sources",
        "Conviction Scoring (0-100) with reasoning",
        "Customizable Intelligence (120+ parameters)"
      ],
      metrics: [
        { label: "4-factor", desc: "analysis" },
        { label: "50+ data", desc: "sources" },
        { label: "85%+", desc: "accuracy" },
        { label: "120+", desc: "parameters" }
      ],
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30"
    },
    {
      icon: Smartphone,
      title: "Native Mobile Experience",
      subtitle: "Your Clients Deserve Better Than PDFs",
      description: "Beautiful native iOS & Android apps with your branding. Swipe-friendly research cards, instant notifications, one-tap trading intent, and offline access.",
      features: [
        "Native iOS & Android Apps with branding",
        "Instant Push Notifications (smart timing)",
        "Swipe-Friendly Research Cards",
        "One-Tap Trading Intent tracking",
        "Portfolio Tracking & Offline Access"
      ],
      metrics: [
        { label: "99%", desc: "bundle reduction" },
        { label: "60fps", desc: "smooth UI" },
        { label: "Battery", desc: "optimized" },
        { label: "Works", desc: "offline" }
      ],
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      subtitle: "Finally, Know What's Actually Working",
      description: "Track analyst performance, client behavior, revenue attribution, sector performance, and market timing intelligence with real-time updates and predictive insights.",
      features: [
        "Analyst Performance Intelligence",
        "Client Behavior Analytics",
        "Revenue Attribution tracking",
        "Stock & Sector Performance analysis",
        "Market Timing Intelligence",
        "Strategic Decision Intelligence",
        "Real-Time Monitoring",
        "Executive Summary View"
      ],
      metrics: [
        { label: "8 modules", desc: "analytics" },
        { label: "Real-time", desc: "updates" },
        { label: "Revenue", desc: "tracking" },
        { label: "Predictive", desc: "insights" }
      ],
      gradient: "from-primary/20 via-secondary/10 to-accent/10",
      borderColor: "border-primary/30"
    }
  ];

  return (
    <section id="product-suite" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Complete Product Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet WISE: Your Complete
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Advisory Technology Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four Integrated Products. One Seamless Experience. Measurable Results.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={`p-8 md:p-10 rounded-3xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} hover:shadow-2xl transition-all`}>
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-foreground" />
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold mb-2 text-foreground">{product.title}</h3>
                        <p className="text-primary font-medium mb-4">{product.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>

                      <div className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Zap className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="mt-4">
                        Learn More About This Product
                      </Button>
                    </div>

                    {/* Metrics */}
                    <div className="lg:w-80">
                      <div className="grid grid-cols-2 gap-4">
                        {product.metrics.map((metric, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                            <div className="text-2xl font-bold text-foreground mb-1">{metric.label}</div>
                            <div className="text-sm text-muted-foreground">{metric.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Message */}
        <div className={`mt-16 text-center max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <Target className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">The Power is in the Integration</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WISE isn't just software—it's your complete advisory infrastructure. From research creation with AI assistance, 
            to native mobile apps for your clients, to advanced analytics that show exactly what's working—everything works 
            together to transform your advisory business.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>40% Client Retention Improvement</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>65% Research Effectiveness Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

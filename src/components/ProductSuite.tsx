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
      title: "Research Control Center",
      subtitle: "For Analysts",
      description: "Create, validate, and distribute research calls in one seamless workflow.",
      features: [
        "Smart Research Creation with pre-built templates",
        "Maker-Checker Workflow for quality control",
        "Multi-Channel Distribution (App, WhatsApp, Email, SMS)",
        "Call Lifecycle Management (Carry-forward, Exit, Book Profit)"
      ],
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30"
    },
    {
      icon: Brain,
      title: "Co-Analyst AI",
      subtitle: "Your Intelligent Research Partner",
      description: "Get data-backed validation for every recommendation.",
      features: [
        "Multi-Factor Analysis (Technical + Fundamental + News + Events)",
        "Real-time Market Context from 50+ data sources",
        "Customizable Parameters to match your investment style",
        "Clear Confidence Scoring with specific reasoning"
      ],
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30"
    },
    {
      icon: Smartphone,
      title: "Native Mobile Experience",
      subtitle: "For Your Clients",
      description: "Beautiful, branded mobile apps that make your research impossible to ignore.",
      features: [
        "Dedicated iOS & Android Apps with your branding",
        "Swipe-Friendly Research Cards designed for mobile",
        "One-Tap Trading Intent to capture client interest",
        "Offline Access for poor connectivity areas",
        "Fully customisable and modular architecture",
        "Light weight SDKs to integrate with your existing web and mobile apps"
      ],
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      subtitle: "For Your Business",
      description: "See exactly what's working and what needs improvement.",
      features: [
        "Analyst Performance Tracking",
        "Client Engagement Analytics",
        "Revenue Attribution (connect calls to trading activity)",
        "Real-time Business Intelligence"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            One Platform. Complete Control.
          </h2>
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

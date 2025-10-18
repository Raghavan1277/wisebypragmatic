import { useEffect, useState } from "react";
import { FileText, Brain, Smartphone, BarChart3, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import researchDashboard from "@/assets/research-control-collage.png";
import coAnalystVisual from "@/assets/co-analyst-visual.jpg";
import mobileAppVisual from "@/assets/mobile-app-visual.png";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

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
      subtitle: "For analysts",
      description: "Create, validate, and distribute research calls in one seamless workflow.",
      features: [
        "Smart research creation with pre-built templates",
        "Maker-checker workflow for quality control",
        "Multi-channel distribution (app, WhatsApp, email, SMS)",
        "Call lifecycle management (carry-forward, exit, book profit)"
      ],
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      image: researchDashboard
    },
    {
      icon: Brain,
      title: "Co-Analyst AI",
      subtitle: "Your intelligent research partner",
      description: "Get data-backed validation for every recommendation.",
      features: [
        "Multi-factor analysis (technical + fundamental + news + events)",
        "Real-time market context from 50+ data sources",
        "Customizable parameters to match your investment style",
        "Clear confidence scoring with specific reasoning"
      ],
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30",
      image: coAnalystVisual
    },
    {
      icon: Smartphone,
      title: "Native Mobile Experience",
      subtitle: "For your clients",
      description: "Beautiful, branded mobile apps that make your research impossible to ignore.",
      features: [
        "Dedicated iOS & Android apps with your branding",
        "Swipe-friendly research cards designed for mobile",
        "One-tap trading intent to capture client interest",
        "Offline access for poor connectivity areas",
        "Fully customisable and modular architecture",
        "Lightweight SDKs to integrate with your existing web and mobile apps"
      ],
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30",
      image: mobileAppVisual
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      subtitle: "For your business",
      description: "See exactly what's working and what needs improvement.",
      features: [
        "Analyst performance tracking",
        "Client engagement analytics",
        "Revenue attribution (connect calls to trading activity)",
        "Real-time business intelligence"
      ],
      gradient: "from-primary/20 via-secondary/10 to-accent/10",
      borderColor: "border-primary/30",
      image: analyticsDashboard
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

        {/* Products - Full Width Cards */}
        <div className="space-y-8 max-w-7xl mx-auto">
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
                <div className={`rounded-3xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} hover:shadow-2xl transition-all overflow-hidden`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Text Content Column */}
                    <div className={`${product.title === "Co-Analyst AI" ? "p-6 lg:p-8" : "p-8 lg:p-12"} flex flex-col justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-foreground" />
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">{product.title}</h3>
                        <p className="text-primary font-medium mb-4">{product.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Zap className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-fit">
                        Learn more
                      </Button>
                    </div>

                    {/* Image/Visual Column */}
                    <div className={`relative ${product.title === "Co-Analyst AI" ? "min-h-[150px] lg:min-h-[180px]" : product.title === "Native Mobile Experience" ? "" : "min-h-[400px] lg:min-h-[500px]"} bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden ${!isEven ? 'lg:col-start-1' : ''}`}>
                      {product.image ? (
                        product.title === "Native Mobile Experience" ? (
                          <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{ backgroundImage: `url(${product.image})` }}
                            aria-hidden="true"
                          />
                        ) : product.title === "Co-Analyst AI" ? (
                          <div
                            className="absolute inset-0 bg-center bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${product.image})` }}
                            aria-hidden="true"
                          />
                        ) : (
                          <img 
                            src={product.image} 
                            alt={`${product.title} dashboard interface`}
                            className="w-full h-full object-cover"
                          />
                        )
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <Icon className="w-64 h-64 text-foreground" />
                          </div>
                          <div className="relative z-10 text-center p-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
                              <Target className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">Visual Coming Soon</span>
                            </div>
                          </div>
                        </>
                      )}
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

import { useEffect, useState } from "react";
import { Check, Sparkles, Crown, Building2 } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
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

    const element = document.getElementById('pricing');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Growth Plan",
      icon: Sparkles,
      price: "₹25,000",
      period: "/month",
      annual: "Save ₹30,000 with annual billing",
      description: "For growing advisory firms",
      bestFor: "5-15 clients, 1-3 analysts",
      features: [
        "WISE Research Control Center (full platform)",
        "AI Co-Analyst with standard recipe",
        "Native mobile apps (iOS + Android + PWA)",
        "Basic analytics dashboard",
        "Up to 5 analysts",
        "Unlimited clients & research calls",
        "WhatsApp & SMS integration",
        "SEBI compliance automation",
        "Email & chat support (business hours)",
        "30-day free trial",
        "90-day improvement guarantee"
      ],
      roi: {
        timeSaved: "₹1.35L/month",
        netBenefit: "₹1.1L/month",
        payback: "3 weeks"
      },
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30"
    },
    {
      name: "Professional Plan",
      icon: Crown,
      price: "₹75,000",
      period: "/month",
      annual: "Save ₹90,000 with annual billing",
      description: "For established advisory firms",
      bestFor: "500-2000 clients, 5-20 analysts",
      popular: true,
      features: [
        "Everything in Growth Plan, plus:",
        "Advanced AI Co-Analyst (120+ parameters)",
        "Complete analytics suite (all 8 modules)",
        "Revenue attribution tracking",
        "Predictive client churn analytics",
        "Up to 20 analysts",
        "Priority API access for integrations",
        "Dedicated account manager",
        "Priority phone & email support (24/6)",
        "Quarterly business review",
        "Advanced branding customization"
      ],
      roi: {
        timeSaved: "₹1.2Cr/year",
        compliance: "₹6L/year saved",
        revenue: "₹50L/year increase",
        netROI: "217% first year"
      },
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30"
    },
    {
      name: "Enterprise Plan",
      icon: Building2,
      price: "Custom",
      period: "pricing",
      annual: "Typically ₹1.5-3L/month based on scale",
      description: "For large advisory firms",
      bestFor: "5000+ clients, unlimited analysts",
      features: [
        "Everything in Professional Plan, plus:",
        "Unlimited analysts",
        "White-label branding (complete)",
        "Custom AI model training on your data",
        "Custom integrations (CRM, trading platforms)",
        "Dedicated infrastructure (isolated)",
        "Custom analytics reports & dashboards",
        "API access with higher rate limits",
        "24/7 phone support with SLA",
        "On-site training and onboarding",
        "Dedicated technical account team",
        "Quarterly strategic planning",
        "Custom feature development budget"
      ],
      roi: {
        timeSaved: "₹5-8Cr/year",
        investment: "₹18-36L/year",
        netROI: "400-500%"
      },
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment That
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pays for Itself—Literally
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We charge based on value delivered, not features unlocked. Every plan includes the complete platform 
            because advisory success requires all pieces working together.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${plan.gradient} border-2 ${plan.popular ? 'border-secondary' : plan.borderColor} hover:shadow-2xl transition-all`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                      <p className="text-xs text-primary font-medium mt-1">{plan.bestFor}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} border ${plan.borderColor} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-xs text-primary">{plan.annual}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* ROI */}
                  <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border mb-6">
                    <div className="text-xs font-semibold text-primary mb-2">ROI Example</div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      {Object.entries(plan.roi).map(([key, value]) => (
                        <div key={key}>• {value}</div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className={`max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">All Plans Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Zero Lock-In", desc: "Cancel anytime, no contracts, export all your data" },
              { title: "Smooth Onboarding", desc: "2-week implementation, dedicated specialist, full training" },
              { title: "Continuous Improvement", desc: "Monthly feature updates, free upgrades, security patches" },
              { title: "Proven Results", desc: "90-day improvement guarantee or full refund" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

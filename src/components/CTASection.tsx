import { useEffect, useState } from "react";
import { Calendar, Mail, Phone, Target, Users, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
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

    const section = document.getElementById('cta');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const demoAgenda = [
    { icon: Target, title: "Your Workflow", description: "See how WISE fits your specific use case" },
    { icon: Users, title: "Live Analytics", description: "Real numbers from actual advisory firms" },
    { icon: MessageSquare, title: "Q&A Session", description: "Ask anything about features, pricing, or implementation" },
  ];

  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Join 50+ forward-thinking firms already using WISE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Your Advisory Business?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See exactly how WISE can grow your revenue and delight your clients with a personalized demo
          </p>
        </div>

        {/* Demo Agenda Grid */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          {demoAgenda.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className={`max-w-5xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience WISE in Action
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to get started with WISE Platform
            </p>
            
            {/* Multiple CTA Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-foreground mb-2">Start Free Trial</h4>
                <p className="text-sm text-muted-foreground mb-4">Full platform access for 30 days. No credit card required.</p>
                <Button className="w-full">Start Trial</Button>
              </div>

              <div className="p-6 rounded-xl bg-card border-2 border-primary/50 hover:border-primary transition-all">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-semibold text-foreground mb-2">Schedule Live Demo</h4>
                <p className="text-sm text-muted-foreground mb-4">30-minute personalized walkthrough with our team.</p>
                <Button variant="default" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Pick Your Time
                </Button>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="font-semibold text-foreground mb-2">Calculate ROI</h4>
                <p className="text-sm text-muted-foreground mb-4">See your exact savings and revenue potential.</p>
                <Button variant="outline" className="w-full">Try Calculator</Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91-98765-43210</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@wiseplatform.in</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>WhatsApp Support</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-muted-foreground">
              <div>✓ 99.9% uptime SLA</div>
              <div>✓ SEBI compliant</div>
              <div>✓ ISO 27001 certified</div>
              <div>✓ 90-day money-back guarantee</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-sm text-muted-foreground">
          <p>Made with ❤️ by GANMA | www.wiseplatform.in</p>
        </div>
      </div>
    </section>
  );
};

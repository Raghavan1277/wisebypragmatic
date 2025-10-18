import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <span className="text-sm font-medium text-primary">Trusted by 50+ advisory firms across India</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up leading-tight">
            Transform Your Research Into
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Unbreakable Client Relationships
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            The complete advisory platform that turns every recommendation into measurable business intelligence. 
            Research control center + AI co-analyst + advanced analytics + native mobile—all working together to grow your revenue and delight your clients.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="min-w-[200px] h-12 text-base">
              Watch Platform Demo
            </Button>
            <Button size="lg" variant="secondary" className="min-w-[200px] h-12 text-base">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] h-12 text-base">
              Calculate Your ROI
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: "🎯", value: "78%", label: "Better call success rates", desc: "through behavioral optimization" },
              { icon: "📈", value: "65%", label: "AUM growth", desc: "with deeper client understanding" },
              { icon: "💰", value: "₹2.8Cr", label: "Additional revenue", desc: "for medium firms" },
              { icon: "📱", value: "99%", label: "Mobile performance", desc: "native app experience" },
            ].map((stat, index) => (
              <div key={index} className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <span>✓</span> 1M+ research calls distributed
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> 99.9% uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> SEBI compliant by design
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

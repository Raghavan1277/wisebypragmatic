import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Creative Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-[gradient_15s_ease_infinite]" 
             style={{ 
               backgroundSize: '400% 400%',
               animation: 'gradient 15s ease infinite'
             }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 border border-primary/20 rounded-lg rotate-45 animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] right-[10%] w-24 h-24 border border-secondary/20 rounded-full animate-[float_25s_ease-in-out_infinite_reverse]" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] left-[40%] w-20 h-20 border border-accent/20 rotate-12 animate-[float_22s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
        <div className="absolute top-[40%] right-[35%] w-16 h-16 border border-primary/15 rounded-lg rotate-[30deg] animate-[float_18s_ease-in-out_infinite]" style={{ animationDelay: '9s' }} />
        
        {/* Glowing orbs with color transitions */}
        <div className="absolute top-[25%] right-[20%] w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[15%] left-[25%] w-80 h-80 bg-gradient-to-l from-secondary/8 to-accent/8 rounded-full blur-3xl animate-[float_28s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[50%] left-[10%] w-56 h-56 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-[float_24s_ease-in-out_infinite]" style={{ animationDelay: '8s' }} />
        
        {/* Animated dots/particles */}
        <div className="absolute top-[15%] left-[25%] w-2 h-2 bg-primary rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 bg-secondary rounded-full animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[35%] w-2 h-2 bg-accent rounded-full animate-[pulse_3.5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[70%] right-[40%] w-1 h-1 bg-primary rounded-full animate-[pulse_4.5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block mb-2">Stop Guessing.</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Start Knowing.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform that turns your stock recommendations into unbreakable client relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              See Platform Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Trusted by SEBI Registered Research Analysts</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Built for the Indian Financial Market</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Real-time exchange Data Integration</span>
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

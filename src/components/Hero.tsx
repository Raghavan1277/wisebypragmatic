import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[scale-in_20s_ease-in-out_infinite_alternate]"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: 'scale(1.15)'
          }}
        />
        {/* Lighter Gradient Overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />
        
        {/* Animated galaxy particles with parallax effect */}
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-primary rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] left-[80%] w-1 h-1 bg-secondary rounded-full animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[15%] w-1.5 h-1.5 bg-accent rounded-full animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[75%] w-1 h-1 bg-primary rounded-full animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-secondary rounded-full animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[30%] left-[90%] w-1 h-1 bg-accent rounded-full animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '5s' }} />
        
        {/* Animated accent waves with parallax */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[70%] left-[30%] w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-[float_16s_ease-in-out_infinite]" style={{ animationDelay: '6s' }} />
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

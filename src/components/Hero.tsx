import { Button } from "./ui/button";
import bannerBg from "@/assets/banner_BG.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bannerBg} 
          alt="Financial analytics dashboard background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-2xl">
            <span className="block mb-2 text-white">Stop Guessing.</span>
            <span className="block text-white drop-shadow-lg">
              Start Knowing.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            The all-in-one platform that turns your stock recommendations into unbreakable client relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              See Platform Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white">
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

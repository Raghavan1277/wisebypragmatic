import { useEffect, useState } from "react";
import { Video, Phone } from "lucide-react";
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

  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Card */}
        <div className={`max-w-5xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to See the WISE Difference?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Video className="mr-2 h-5 w-5" />
                See Platform Demo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              5-minute guided tour or personalized walkthrough
            </p>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Email: hello@wiseplatform.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

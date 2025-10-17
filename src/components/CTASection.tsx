import { Calendar, MessageSquare, TrendingUp, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

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
    { icon: TrendingUp, title: "User Engagement Dashboard", desc: "Walkthrough of engagement metrics and churn risk alerts" },
    { icon: BarChart3, title: "Analyst Performance Metrics", desc: "Deep dive into performance analytics and success rates" },
    { icon: Calendar, title: "Executive Summary", desc: "Review of leadership insights and strategic metrics" },
    { icon: MessageSquare, title: "Technical Q&A", desc: "Questions answered by our technical team" }
  ];

  return (
    <section id="cta" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let Us Show You
            <br />
            <span className="text-gradient">What You're Missing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The best way to understand the power of WISE is to see it working. Get a live, tailored tour of the platform focused on insights that matter most to you.
          </p>
        </div>

        {/* Demo Agenda Grid */}
        <div className={`grid md:grid-cols-2 gap-6 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {demoAgenda.map((item, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className={`glass p-12 rounded-3xl text-center max-w-4xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Research?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading Indian broking firms who have already transformed their research operations with WISE Platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Live Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-8">
            <a href="mailto:hello@pragmaticdigital.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              hello@pragmaticdigital.in
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 99400 23340 / +91 99403 13333</span>
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

const BarChart3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

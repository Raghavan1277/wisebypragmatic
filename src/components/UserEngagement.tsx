import { Clock, Eye, Zap, TrendingDown, Users } from "lucide-react";
import { useEffect, useState } from "react";

export const UserEngagement = () => {
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

    const section = document.getElementById('user-engagement');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { icon: Clock, label: "Avg Time Spent", value: "3.9min", change: "+15%", positive: true },
    { icon: Eye, label: "Calls Explored", value: "8", change: "+22%", positive: true },
    { icon: Zap, label: "Time to Trade", value: "26s", change: "-18%", positive: true },
    { icon: TrendingDown, label: "Exit After 1 Call", value: "84%", change: "-5%", positive: true }
  ];

  const patterns = [
    { label: "Quick converters", value: "10 users", detail: "< 10min", icon: Zap, color: "text-primary" },
    { label: "Detail browsers", value: "122", detail: "detail views", icon: Eye, color: "text-secondary" },
    { label: "High-engagement", value: "9 users", detail: "view 3+ calls", icon: Users, color: "text-accent" },
    { label: "Active traders", value: "90", detail: "converters", icon: TrendingDown, color: "text-primary" }
  ];

  return (
    <section id="user-engagement" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-secondary">Prevent Churn</span>
            <br />
            Before It Happens
          </h2>
          <p className="text-lg text-muted-foreground">
            Get alerts on clients with dropping engagement scores weeks before they consider leaving. Our most powerful retention tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Engagement Metrics */}
          <div className={`glass p-8 rounded-3xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8">User Engagement Insights</h3>
            
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-background/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <metric.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{metric.label}</span>
                    </div>
                    <span className={`text-sm font-semibold ${metric.positive ? 'text-primary' : 'text-destructive'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold pl-11">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Key Patterns & Features */}
          <div className="space-y-6">
            {/* Key Patterns */}
            <div className={`glass p-8 rounded-3xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6">Key Patterns</h3>
              <div className="grid grid-cols-2 gap-4">
                {patterns.map((pattern, index) => (
                  <div key={index} className="bg-background/50 p-4 rounded-xl border border-border/50">
                    <pattern.icon className={`h-6 w-6 mb-2 ${pattern.color}`} />
                    <div className="text-lg font-bold mb-1">{pattern.value}</div>
                    <div className="text-xs text-muted-foreground mb-1">{pattern.label}</div>
                    <div className="text-xs text-muted-foreground">{pattern.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className={`glass p-8 rounded-3xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold mb-6">Intelligent Insights</h3>
              <div className="space-y-4">
                {[
                  { title: "Identify Silent Risks", desc: "Get alerts on clients with dropping engagement scores" },
                  { title: "Client Preferences", desc: "See mobile alerts vs. desktop deep dives preference" },
                  { title: "Optimize Timing", desc: "Discover peak impact times for your research" }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 group cursor-pointer">
                    <div className="w-1.5 bg-gradient-to-b from-primary to-primary/20 rounded-full group-hover:from-primary group-hover:to-primary transition-all duration-300" />
                    <div>
                      <div className="font-semibold mb-1 group-hover:text-primary transition-colors">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

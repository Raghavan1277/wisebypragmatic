import { Activity, Smartphone, Monitor, TrendingUp, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export const ResearchAnalytics = () => {
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

    const section = document.getElementById('research-analytics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const devices = [
    { name: "Android", icon: Smartphone, users: 79, trades: 16, planning: 9, color: "text-primary" },
    { name: "iOS", icon: Smartphone, users: 21, trades: 8, planning: 4, color: "text-secondary" },
    { name: "Web", icon: Monitor, users: 34, trades: 12, planning: 6, color: "text-accent" }
  ];

  return (
    <section id="research-analytics" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Research Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The First Platform to
            <br />
            <span className="text-gradient">Connect Research to Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            WISE doesn't just deliver your research. We analyze its entire lifecycle and transform every interaction into actionable insights.
          </p>
        </div>

        {/* Analytics Flow */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Call", subtitle: "Research Recommendations", icon: TrendingUp },
            { title: "User Engagement", subtitle: "Track every interaction", icon: Eye },
            { title: "Influence", subtitle: "Measure impact", icon: Activity },
            { title: "Conversion", subtitle: "Revenue & Intelligence", icon: TrendingUp }
          ].map((item, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              {index < 3 && (
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Device Performance */}
        <div className={`glass p-8 rounded-3xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Device Performance & Conversion Rates</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {devices.map((device, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-2xl border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <device.icon className={`h-8 w-8 ${device.color}`} />
                  <h4 className="text-xl font-semibold">{device.name}</h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="text-2xl font-bold">{device.users}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Planning to Trade</span>
                    <span className={`text-xl font-semibold ${device.color}`}>{device.planning}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Completed Trades</span>
                    <span className={`text-xl font-semibold ${device.color}`}>{device.trades}</span>
                  </div>
                  
                  {/* Conversion Bar */}
                  <div className="pt-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${device.color === 'text-primary' ? 'bg-primary' : device.color === 'text-secondary' ? 'bg-secondary' : 'bg-accent'}`}
                        style={{ width: `${(device.trades / device.users) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

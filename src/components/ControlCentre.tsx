import { DollarSign, TrendingUp, CheckCircle, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export const ControlCentre = () => {
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

    const section = document.getElementById('control-centre');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const kpis = [
    { icon: TrendingUp, label: "Total Active P&L", value: "+5.5%", color: "text-primary" },
    { icon: CheckCircle, label: "Win Rate", value: "100%", color: "text-primary" },
    { icon: FileText, label: "Active Calls", value: "38", color: "text-secondary" },
    { icon: DollarSign, label: "Successful Calls", value: "14", color: "text-accent" }
  ];

  const recentCalls = [
    { symbol: "INFY", type: "Medium Term BUY", change: "+0.42%", date: "Sep 5, 2025" },
    { symbol: "ADANIENT", type: "Medium Term BUY", change: "+0.67%", date: "Sep 4, 2025" },
    { symbol: "IOC", type: "Quick Intraday", change: "+0.55%", date: "Sep 4, 2025" },
    { symbol: "TCS", type: "Long Term HOLD", change: "+2.91%", date: "Sep 3, 2025" }
  ];

  return (
    <section id="control-centre" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Research Division's
            <br />
            <span className="text-gradient">Control Centre</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time business health at your fingertips. Measure true ROI and understand revenue per analyst and value per research call.
          </p>
        </div>

        {/* KPI Dashboard */}
        <div className={`glass p-8 rounded-3xl mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-8">Real-Time Business Health</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${kpi.color}`}>{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Calls Table */}
        <div className={`glass p-8 rounded-3xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h3 className="text-2xl font-bold">Published Calls</h3>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Published: 35</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">Pending: 3</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Symbol</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Call Type</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Change</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Published</th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-mono font-semibold text-foreground">{call.symbol}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-muted-foreground">{call.type}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-primary font-semibold">{call.change}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-muted-foreground">{call.date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

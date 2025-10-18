import { TrendingUp, Target, Users, IndianRupee, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

export const AnalystPerformance = () => {
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

    const section = document.getElementById('analyst-performance');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const topMetrics = [
    { icon: Target, title: "Total Calls", value: "39", bgColor: "bg-blue-50 dark:bg-blue-950/20", iconColor: "text-blue-600 dark:text-blue-400" },
    { icon: Users, title: "Platform Adoption Rate", value: "100.0%", bgColor: "bg-green-50 dark:bg-green-950/20", iconColor: "text-green-600 dark:text-green-400" },
    { icon: TrendingUp, title: "Success Rate", value: "48.0%", bgColor: "bg-purple-50 dark:bg-purple-950/20", iconColor: "text-purple-600 dark:text-purple-400" },
    { icon: IndianRupee, title: "Average Return", value: "2.3%", bgColor: "bg-orange-50 dark:bg-orange-950/20", iconColor: "text-orange-600 dark:text-orange-400" }
  ];

  const qualityMetrics = [
    { label: "Call Quality", value: 65.4, color: "hsl(var(--primary))" },
    { label: "Conviction Level", value: 43.6, color: "hsl(142, 76%, 36%)" },
    { label: "Diversification", value: 90.4, color: "hsl(271, 91%, 65%)" }
  ];

  const successRatesData = [
    { name: "Analyst 1", rate: 48, calls: 25 },
    { name: "Analyst 2", rate: 100, calls: 20 },
    { name: "Analyst 3", rate: 35, calls: 15 },
    { name: "Analyst 4", rate: 25, calls: 10 }
  ];

  const returnMetricsData = [
    { name: "Analyst 1", return: 2.4, sharpe: 8 },
    { name: "Analyst 2", return: 2.3, sharpe: 7 },
    { name: "Analyst 3", return: 1.2, sharpe: 4 },
    { name: "Analyst 4", return: 1.1, sharpe: 3.5 }
  ];

  return (
    <section id="analyst-performance" className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Analytics Dashboard
          </h2>
          <p className="text-muted-foreground">
            Comprehensive analysis of research call performance
          </p>
        </div>

        {/* Top Metrics - 4 Cards */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {topMetrics.map((metric, index) => (
            <div key={index} className={`${metric.bgColor} p-4 rounded-xl border border-border/50`}>
              <div className="flex items-start justify-between mb-3">
                <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.title}</div>
            </div>
          ))}
        </div>

        {/* Call Quality Assessment */}
        <div className={`bg-card border border-border rounded-xl p-6 mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Call Quality Assessment</h3>
            <Info className="h-5 w-5 text-muted-foreground" />
          </div>
          
          <div className="space-y-4">
            {qualityMetrics.map((metric, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <span className="text-sm font-bold">{metric.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500"
                    style={{ width: `${metric.value}%`, backgroundColor: metric.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">19 symbols across 13 sectors</p>
        </div>

        {/* Charts Section */}
        <div className={`grid lg:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {/* Analyst Success Rates */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Analyst Success Rates</h3>
                <p className="text-xs text-muted-foreground">Success rates become more reliable with additional closed calls</p>
              </div>
              <Info className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={successRatesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Success Rate %', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Closed Calls', angle: 90, position: 'insideRight', style: { fontSize: 12 } }}
                />
                <Bar yAxisId="left" dataKey="rate" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Analyst Return Metrics */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Analyst Return Metrics</h3>
                <p className="text-xs text-muted-foreground">Comparison of returns and Sharpe ratios</p>
              </div>
              <Info className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={returnMetricsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Return %', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Sharpe Ratio', angle: 90, position: 'insideRight', style: { fontSize: 12 } }}
                />
                <Bar yAxisId="left" dataKey="return" fill="hsl(25, 95%, 53%)" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="right" dataKey="sharpe" fill="hsl(271, 91%, 65%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

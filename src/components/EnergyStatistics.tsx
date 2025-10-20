import { TrendingDown, Zap, Building2 } from "lucide-react";

const EnergyStatistics = () => {
  const statistics = [
    {
      icon: TrendingDown,
      value: "35%",
      label: "Average Heat Losses",
      description: "in commercial buildings",
      gradient: "from-accent-blue to-accent-cyan"
    },
    {
      icon: Zap,
      value: "9M Gcal",
      label: "Total Heat Losses in Kazakhstan",
      description: "comparable to all industrial communal needs",
      gradient: "from-accent-purple to-accent-blue"
    },
    {
      icon: Building2,
      value: "58%",
      label: "Actual Energy Efficiency",
      description: "according to UNECE/IEA assessment",
      gradient: "from-accent-cyan to-accent-purple"
    }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            The <span className="text-gradient">Energy Challenge</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto">
            Kazakhstan's commercial buildings face significant energy efficiency challenges
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 mx-auto`}>
                  <stat.icon className="w-full h-full text-black" />
                </div>
              </div>

              {/* Value */}
              <div className="text-center mb-4">
                <div className="text-4xl sm:text-5xl font-light text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-foreground-muted">
                  {stat.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyStatistics;

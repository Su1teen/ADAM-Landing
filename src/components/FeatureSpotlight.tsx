import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureSpotlightProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  reverse?: boolean;
  demoText?: string;
}

const FeatureSpotlight = ({ 
  icon: Icon, 
  title, 
  subtitle,
  description, 
  features, 
  gradient, 
  reverse = false,
  demoText = "See it in action"
}: FeatureSpotlightProps) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 sm:space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="space-y-4 sm:space-y-6">
              <div className={`inline-flex items-center justify-center w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 rounded-2xl bg-gradient-to-r ${gradient} p-4 sm:p-5`}>
                <Icon className="w-full h-full text-white" />
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4">
                  <span className="text-gradient">{title}</span>
                </h2>
                <p className="text-lg sm:text-xl text-foreground-muted mb-4 sm:mb-6">
                  {subtitle}
                </p>
                <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-2 sm:mt-3 flex-shrink-0`} />
                  <p className="text-sm sm:text-base text-foreground-muted">{feature}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              {demoText}
            </Button>
          </div>

          {/* Visual */}
          <div className={`${reverse ? 'lg:col-start-1' : ''} mt-8 lg:mt-0`}>
            <div className="relative">
              {/* Main visual container */}
              <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r ${gradient} rounded-full blur-2xl sm:blur-3xl animate-pulse`} />
                  <div className={`absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r ${gradient} rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r ${gradient} rounded-full mb-6 sm:mb-8 animate-glow-pulse`}>
                    <Icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-foreground">
                    Experience {title}
                  </h3>
                  
                  {/* Demo interface mockup */}
                  <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                    <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-left">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent-blue rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm text-foreground-muted">ADAM is learning...</span>
                      </div>
                      <div className="text-sm sm:text-base text-foreground">"{demoText}"</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="glass rounded-lg p-2 sm:p-3 text-center">
                        <div className="text-base sm:text-lg font-medium text-gradient">Active</div>
                        <div className="text-xs text-foreground-muted">Status</div>
                      </div>
                      <div className="glass rounded-lg p-2 sm:p-3 text-center">
                        <div className="text-base sm:text-lg font-medium text-gradient">24/7</div>
                        <div className="text-xs text-foreground-muted">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-accent-blue/20 rounded-full blur-lg animate-pulse" />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-10 sm:w-16 h-10 sm:h-16 bg-accent-purple/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
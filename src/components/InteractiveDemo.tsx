import { useState } from "react";
import { Play, Pause, Volume2, Home, Lightbulb, Thermometer, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDevice, setActiveDevice] = useState(0);

  const devices = [
    { icon: Lightbulb, name: "Smart Lighting", status: "Adjusting brightness", color: "from-accent-blue to-accent-cyan" },
    { icon: Thermometer, name: "Climate Control", status: "Optimizing temperature", color: "from-accent-purple to-accent-blue" },
    { icon: Volume2, name: "Audio System", status: "Playing ambient sounds", color: "from-accent-cyan to-accent-purple" },
    { icon: Shield, name: "Security System", status: "Monitoring perimeter", color: "from-accent-blue to-accent-purple" },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* 
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            See ADAM <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Watch how ADAM seamlessly orchestrates your entire home ecosystem in real-time.
          </p>
          
          <Button 
            variant="gradient" 
            size="lg" 
            className="group mb-12 sm:mb-14 md:mb-16 w-full sm:w-auto"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                Pause Demo
              </>
            ) : (
              <>
                <Play className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                Start Interactive Demo
              </>
            )}
          </Button>
        </div>
         */}
        {/* Interactive Demo Interface */}
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto">
          {/* Home Layout */}
          <div className="relative">
            {/* House Outline */}
            <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Home className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-center mb-6 sm:mb-8">Your Smart Home</h3>
              
              {/* Room Grid - Responsive */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {devices.map((device, index) => (
                  <div 
                    key={index}
                    className={`glass hover:glass-strong rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 cursor-pointer transition-all duration-300 ${
                      activeDevice === index ? 'shadow-glow border-primary/30' : ''
                    } ${isPlaying ? 'animate-pulse' : ''}`}
                    onClick={() => setActiveDevice(index)}
                  >
                    <div className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${device.color} p-2 sm:p-3 mb-3 sm:mb-4 mx-auto`}>
                      <device.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-medium text-center mb-1 sm:mb-2">{device.name}</h4>
                    <div className="text-xs text-foreground-muted text-center">
                      {isPlaying ? device.status : 'Ready'}
                    </div>
                    {activeDevice === index && isPlaying && (
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent-blue rounded-full mx-auto mt-1 sm:mt-2 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Status Panel */}
            <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <img src="/logo.svg" alt="ADAM" className="w-5 sm:w-6 h-5 sm:h-6 filter brightness-0 invert" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium">ADAM Assistant</h4>
                    <div className="text-xs sm:text-sm text-foreground-muted">
                      {isPlaying ? 'Actively learning your preferences...' : 'Ready to assist'}
                    </div>
                  </div>
                </div>
                <div className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${isPlaying ? 'bg-accent-blue animate-pulse' : 'bg-foreground-muted/30'}`} />
              </div>

              {/* Activity Feed */}
              <div className="space-y-2 sm:space-y-3">
                <div className={`glass rounded-lg p-3 sm:p-4 ${isPlaying ? 'animate-slide-up' : 'opacity-50'}`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Lightbulb className="w-3 sm:w-4 h-3 sm:h-4 text-accent-blue flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Dimming living room lights for movie time</span>
                    <div className="text-xs text-foreground-muted ml-auto">
                      {isPlaying ? 'now' : '2m ago'}
                    </div>
                  </div>
                </div>
                
                <div className={`glass rounded-lg p-3 sm:p-4 ${isPlaying ? 'animate-slide-up delay-200' : 'opacity-30'}`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Thermometer className="w-3 sm:w-4 h-3 sm:h-4 text-accent-purple flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Adjusting temperature to 72°F</span>
                    <div className="text-xs text-foreground-muted ml-auto">
                      {isPlaying ? '5s' : '5m ago'}
                    </div>
                  </div>
                </div>
                
                <div className={`glass rounded-lg p-3 sm:p-4 ${isPlaying ? 'animate-slide-up delay-500' : 'opacity-20'}`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Volume2 className="w-3 sm:w-4 h-3 sm:h-4 text-accent-cyan flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Playing your evening playlist</span>
                    <div className="text-xs text-foreground-muted ml-auto">
                      {isPlaying ? '10s' : '8m ago'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats - Responsive grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="text-center">
                  <div className={`text-lg sm:text-xl md:text-2xl font-light mb-1 ${isPlaying ? 'text-gradient animate-pulse' : 'text-foreground'}`}>
                    {isPlaying ? '847' : '0'}
                  </div>
                  <div className="text-xs text-foreground-muted">Decisions Made</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg sm:text-xl md:text-2xl font-light mb-1 ${isPlaying ? 'text-gradient animate-pulse' : 'text-foreground'}`}>
                    {isPlaying ? '23ms' : '--'}
                  </div>
                  <div className="text-xs text-foreground-muted">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className={`text-lg sm:text-xl md:text-2xl font-light mb-1 ${isPlaying ? 'text-gradient animate-pulse' : 'text-foreground'}`}>
                    {isPlaying ? '15%' : '0%'}
                  </div>
                  <div className="text-xs text-foreground-muted">Energy Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-foreground-muted max-w-3xl mx-auto">
            This is just a glimpse. ADAM learns from thousands of data points every day, 
            creating a truly personalized smart home experience that evolves with your lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
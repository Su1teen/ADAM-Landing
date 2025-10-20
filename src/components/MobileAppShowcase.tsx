import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, BarChart3, Zap, Settings, Building2, Layers, TrendingUp } from 'lucide-react';

interface ScreenshotItem {
  id: number;
  image: string;
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const MobileAppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const screenshots: ScreenshotItem[] = [
    {
      id: 1,
      image: '/media/Management Platform.PNG',
      icon: BarChart3,
      title: 'Management Platform',
      subtitle: 'Real-time Building Control',
      description: 'Comprehensive dashboard for monitoring and controlling all building systems. View real-time data, energy consumption, and system status at a glance.',
      features: ['Live system monitoring', 'Energy analytics', 'Quick controls', 'Alert notifications']
    },
    {
      id: 2,
      image: '/media/Management in Rooms.PNG',
      icon: Settings,
      title: 'Room-by-Room Control',
      subtitle: 'Zonal Management',
      description: 'Manage each zone independently with precision controls for HVAC, lighting, and occupancy settings. Optimize comfort and efficiency room by room.',
      features: ['Individual zone settings', 'Temperature control', 'Occupancy detection', 'Custom schedules']
    },
    {
      id: 3,
      image: '/media/Management Statistics.PNG',
      icon: Zap,
      title: 'Energy Statistics',
      subtitle: 'Data-Driven Insights',
      description: 'Track energy consumption patterns, identify savings opportunities, and monitor system performance with detailed analytics and reporting.',
      features: ['Consumption trends', 'Cost analysis', 'Performance metrics', 'Savings reports']
    },
    {
      id: 4,
      image: '/media/Automation Rules and Scenarios.PNG',
      icon: Smartphone,
      title: 'Automation Rules',
      subtitle: 'Smart Scheduling',
      description: 'Create intelligent automation rules and scenarios based on time, occupancy, weather, and custom triggers to maximize efficiency.',
      features: ['Custom automation', 'Schedule management', 'Trigger-based actions', 'Scenario creation']
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Background Design */}
        <div className="relative text-center mb-6 sm:mb-8 md:mb-10">
          {/* Decorative background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3">
              <span className="text-gradient">AI-Powered</span> Energy Management
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground-muted max-w-3xl mx-auto">
              Intelligent optimization for both automated and non-automated buildings
            </p>
          </div>
        </div>

        {/* Building Types - Prominent Section with Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {/* Automated Buildings */}
          <div className="group relative glass-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-accent-blue/30 hover:border-accent-blue/50 transition-all duration-300 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <div className="relative flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light">
                <span className="text-gradient">Automated Buildings</span>
              </h3>
            </div>
            
            <p className="relative text-sm sm:text-base text-foreground-muted leading-relaxed">
              AI layer integrates with existing BMS, optimizing HVAC, lighting, and load schedules in real-time.
            </p>
          </div>
          
          {/* Non-Automated Buildings */}
          <div className="group relative glass-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-accent-cyan/30 hover:border-accent-cyan/50 transition-all duration-300 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <div className="relative flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light">
                <span className="text-gradient">Non-Automated Buildings</span>
              </h3>
            </div>
            
            <p className="relative text-sm sm:text-base text-foreground-muted leading-relaxed">
              1-week audit, equipment installation, and AI implementation. Full optimization in 2-3 weeks.
            </p>
          </div>
        </div>


        {/* Two Column Layout: Mobile App Preview + Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Mobile App Preview */}
          <div className="relative order-2 lg:order-1">
            {/* Phone Mockup Container - Smaller and More Professional */}
            <div className="relative mx-auto max-w-[240px] sm:max-w-[260px] lg:max-w-[280px]">
              
              {/* Premium Professional Phone Frame */}
              <div className="relative w-full aspect-[9/19.5] rounded-[2rem] overflow-visible">
                {/* Elegant glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-cyan/10 rounded-[2.5rem] blur-2xl opacity-60"></div>
                
                {/* Glass frame with refined gradient */}
                <div className="relative w-full h-full rounded-[2rem] p-[2px] shadow-2xl" 
                     style={{
                       background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.4) 0%, rgba(51, 65, 85, 0.6) 50%, rgba(100, 116, 139, 0.4) 100%)'
                     }}>
                  
                  {/* Inner glass layer for depth */}
                  <div className="w-full h-full rounded-[1.95rem] p-[1px] bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40">
                    
                    {/* Phone body with elegant background */}
                    <div className="w-full h-full rounded-[1.9rem] bg-gradient-to-br from-slate-950 via-black to-slate-900 relative overflow-hidden">
                      
                      {/* Subtle inner highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                      
                      {/* Refined Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-30 shadow-lg">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-slate-700 rounded-full"></div>
                        <div className="absolute top-1.5 right-4 w-1 h-1 bg-slate-700 rounded-full"></div>
                      </div>
                      
                      {/* Professional Status Bar */}
                      <div className="h-10 bg-gradient-to-b from-black to-black/95 backdrop-blur-sm flex items-center justify-between px-4 pt-2 relative z-20">
                        <span className="text-[9px] font-medium text-slate-400 tracking-tight">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5">
                            <div className="w-0.5 h-1.5 bg-slate-500 rounded-full"></div>
                            <div className="w-0.5 h-2.5 bg-slate-400 rounded-full"></div>
                            <div className="w-0.5 h-2 bg-slate-500 rounded-full"></div>
                            <div className="w-0.5 h-1.5 bg-slate-600 rounded-full"></div>
                          </div>
                          <div className="w-4 h-2 border border-slate-600 rounded-sm relative">
                            <div className="w-2.5 h-1 bg-slate-600 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Screenshot Container with smooth transitions and swipe support */}
                      <div 
                        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-950 to-black touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                      >
                        {screenshots.map((screenshot, index) => (
                          <div
                            key={screenshot.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                              index === activeIndex
                                ? 'opacity-100 translate-x-0'
                                : index < activeIndex
                                ? 'opacity-0 -translate-x-full'
                                : 'opacity-0 translate-x-full'
                            }`}
                          >
                            <img
                              src={screenshot.image}
                              alt={screenshot.title}
                              className="w-full h-full object-cover pointer-events-none"
                              style={{ objectPosition: 'top' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-foreground-muted/30 hover:bg-foreground-muted/50'
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content - Larger Text Block */}
          <div className="space-y-4 sm:space-y-5 order-1 lg:order-2">
            {/* Dynamic content based on active screenshot */}
            <div 
              key={activeIndex}
              className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-glass-border/20 animate-in fade-in duration-700"
            >
              {/* Icon and Title - Larger */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl p-3 sm:p-3.5 flex items-center justify-center shadow-lg flex-shrink-0">
                  {React.createElement(screenshots[activeIndex].icon, { 
                    className: "w-full h-full text-black" 
                  })}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gradient">
                    {screenshots[activeIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground-muted">
                    {screenshots[activeIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Description - Larger text */}
              <p className="text-sm sm:text-base md:text-lg text-foreground-muted leading-relaxed mb-4 sm:mb-5">
                {screenshots[activeIndex].description}
              </p>

              {/* Features - Larger */}
              <div className="space-y-2.5 sm:space-y-3">
                {screenshots[activeIndex].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-in fade-in duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-blue rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;

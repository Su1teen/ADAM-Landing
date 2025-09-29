import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements - Responsive positioning */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-accent-blue/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-16 sm:bottom-32 right-6 sm:right-16 w-48 sm:w-96 h-48 sm:h-96 bg-accent-purple/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-accent-cyan/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Spline 3D Viewer - Responsive sizing and positioning */}
      <div className="absolute inset-0 flex items-center justify-center z-20" style={{paddingTop: 'clamp(15vh, 25vh, 30vh)'}}>
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <spline-viewer 
            url="https://prod.spline.design/Sq-I7umwgmMdCpGt/scene.splinecode"
            style={{width: '100%', height: '100%', opacity: '0.90'}}
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        {/* Main Logo - ADAM - Responsive sizing */}
        <div className="mb-6 sm:mb-8">
          <img 
            src="/media/LOGO_WHITE_NO_SLOGAN.svg" 
            alt="ADAM Logo" 
            className="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 mx-auto drop-shadow-2xl"
            style={{filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.9)) drop-shadow(0 0 15px rgba(0,0,0,1)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))'}} 
          />
        </div>
        

      
        
 
        {/*
        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed">
          Превратите своё жилое пространство в адаптивную среду, которая понимает, 
          изучает и служит вам через бесшовную интеграцию ИИ.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="gradient" size="lg" className="group">
            Опыт АДАМ
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="hero" size="lg" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Смотреть Демо
          </Button>
        </div>
        */}


        {/*
        <div className="mt-20 glass-strong rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gradient mb-2">99.9%</div>
              <div className="text-sm text-foreground-muted">Бесперебойность</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gradient mb-2">50+</div>
              <div className="text-sm text-foreground-muted">Типов Устройств</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gradient mb-2">24/7</div>
              <div className="text-sm text-foreground-muted">Обучение ИИ</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gradient mb-2">30%</div>
              <div className="text-sm text-foreground-muted">Экономия Энергии</div>
            </div>
          </div>
        </div>

        */}
      </div>
      
      {/* Bottom Right Text - Responsive positioning and sizing */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 right-3 sm:right-4 md:right-6 lg:right-8 z-30">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 glass-strong rounded-full text-xs sm:text-sm text-foreground backdrop-blur-lg border border-primary/20" style={{background: 'rgba(0,0,0,0.6)'}}>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-pulse" />
          <span className="hidden xs:inline sm:hidden md:inline">Your Friendly Home Assistant</span>
          <span className="inline xs:hidden sm:inline md:hidden">ADAM Assistant</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
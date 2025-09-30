import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Heart, Zap, Home, Brain, Settings, CheckCircle, Moon, Cpu } from 'lucide-react';

interface VideoItem {
  id: number;
  videoUrl: string;
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Touch/swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const videoItems: VideoItem[] = [
    {
      id: 1,
      videoUrl: '/media/video 4.mp4',
      icon: Shield,
      title: 'Умный Мониторинг',
      subtitle: 'Заботится о вас 24/7',
      description: 'ИИ следит за безопасностью, здоровьем и комфортом даже когда Вы спите. Анализирует сон, сердцебиение и активность, оптимизируя энергозатраты.',
      features: ['Мониторинг здоровья и сна', 'Контроль микроклиматом в доме', 'Оптимизация энергопотребления']
    },
    {
      id: 2,
      videoUrl: '/media/video 2.mp4',
      icon: Home,
      title: 'Единое Управление',
      subtitle: 'Все устройства как один',
      description: 'От освещения до робота-пылесоса — ADAM объединяет все устройства дома в единую экосистему, позволяя управлять ими как одним целым.',
      features: ['500+ совместимых устройств', 'Голосовое управление', 'Бытовая техника и освещение']
    },
    {
      id: 3,
      videoUrl: '/media/video 1.mp4',
      icon: Cpu,
      title: 'Полный Контроль',
      subtitle: 'Изучает ваши привычки',
      description: 'ИИ анализирует рутину и поведенческие особенности, адаптируя дом под ваши желания. Персонализированный комфорт без усилий.',
      features: ['Подстраивается под ваш образ жизни', 'Полная персонализация настроек', 'Создание персонализированных сценариев']
    },
    {
      id: 4,
      videoUrl: '/media/video 3.mp4',
      
      icon: Settings,
      title: 'Персонализация',
      subtitle: 'Ваш дом - Ваши правила.',
      description: 'Создавайте персональные сценарии и правила поведения. Полная кастомизация и контроль над всеми устройствами по вашему вкусу.',
      features: ['Персональные сценарии', 'Гибкие правила поведения', 'Безграничная кастомизация']
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % videoItems.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, videoItems.length]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % videoItems.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + videoItems.length) % videoItems.length);
    }
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - next item
        handleNavigation('next');
      } else {
        // Swipe right - previous item
        handleNavigation('prev');
      }
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse event handlers for desktop drag support (optional)
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 100; // Larger distance for mouse drag
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNavigation('next');
      } else {
        handleNavigation('prev');
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getVideoPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalVideos = videoItems.length;
    
    // Normalize difference to handle wrapping
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalVideos / 2) {
      normalizedDiff = diff > 0 ? diff - totalVideos : diff + totalVideos;
    }

    return normalizedDiff;
  };

  const getVideoStyle = (index: number) => {
    const position = getVideoPosition(index);
    const isActive = position === 0;
    
    if (Math.abs(position) > 2) {
      return {
        opacity: 0,
        transform: `translateX(${position > 0 ? '400px' : '-400px'}) scale(0.6)`,
        zIndex: 0,
        filter: 'brightness(0.3)'
      };
    }

    const baseTranslateX = position * 280;
    const scale = isActive ? 1 : 0.7;
    const opacity = isActive ? 1 : 0.6;
    const brightness = isActive ? 1 : 0.4;
    const zIndex = isActive ? 10 : Math.abs(position) === 1 ? 5 : 1;

    return {
      transform: `translateX(${baseTranslateX}px) scale(${scale})`,
      opacity,
      filter: `brightness(${brightness})`,
      zIndex,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  return (
    <section id="features" className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Ваш <span className="text-gradient">Умный Дом</span> с нашим ИИ
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto">
            Откройте для себя возможности современных технологий умного дома
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Video Carousel - Left Half */}
          <div className="relative">
            <div 
              ref={containerRef}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden select-none cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Fade out gradients on sides */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
              
              {/* Video Container */}
              <div className="relative flex items-center justify-center h-full">
                {videoItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="absolute w-[420px] sm:w-[480px] h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl"
                    style={getVideoStyle(index)}
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => handleNavigation('prev')}
                className="w-12 h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Предыдущее видео"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={() => handleNavigation('next')}
                className="w-12 h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Следующее видео"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="sm:hidden text-center mt-4">
              <p className="text-xs text-foreground-muted">
                Проведите пальцем влево или вправо для смены видео
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {videoItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-foreground-muted/30 hover:bg-foreground-muted/50'
                  }`}
                  aria-label={`Перейти к видео ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content - Right Half */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Content Container */}
            <div 
              key={activeIndex}
              className="glass-strong rounded-2xl p-6 sm:p-8 border border-glass-border/20 animate-in fade-in duration-700 slide-in-from-right-4 select-none cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg border border-glass-border/10">
                  {React.createElement(videoItems[activeIndex].icon, { 
                    className: "w-8 h-8 text-black" 
                  })}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gradient">
                    {videoItems[activeIndex].title}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground-muted">
                    {videoItems[activeIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-6">
                {videoItems[activeIndex].description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {videoItems[activeIndex].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-in fade-in duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-accent-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent-blue" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Swipe Hint for Text */}
            <div className="sm:hidden text-center">
              <p className="text-xs text-foreground-muted">
                Проведите пальцем влево или вправо по тексту для смены контента
              </p>
            </div>

            {/* Auto-play indicator */}
            {isAutoPlaying && (
              <div className="flex items-center gap-3 text-sm text-foreground-muted px-4">
                <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
                <span></span>
              </div>
            )}

            {/* Progress indicators */}
            <div className="flex gap-2 px-4">
              {videoItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeIndex 
                      ? 'w-12 bg-gradient-to-r from-accent-blue to-accent-cyan' 
                      : 'w-6 bg-glass-border/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
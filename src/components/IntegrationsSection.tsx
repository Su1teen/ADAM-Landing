import React, { useRef, useState } from 'react';

const IntegrationsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const integrations = [
    { name: 'Smart Group Kazakhstan', logo: '/logos & icons/Smart Group Kazakhstan.svg' },
    { name: 'Iridi', logo: '/logos & icons/Iridi.png' },
    { name: 'SmartThings', logo: '/logos & icons/SmartThings.jpeg' },
    { name: 'Zigbee', logo: '/logos & icons/Zigbee.png' },
    { name: 'Google Cast', logo: '/logos & icons/Google Cast.png' },
    { name: 'Matter', logo: '/logos & icons/Matter.jpg' },
    { name: 'Thread', logo: '/logos & icons/Thread.png' },
    { name: 'MQTT', logo: '/logos & icons/MQTT.png' },
    { name: 'KNX', logo: '/logos & icons/KNX.png' },
    { name: 'Philips Hue', logo: '/logos & icons/philips hue.png' },
    { name: 'IKEA', logo: '/logos & icons/ikea.png' },
    { name: 'TiS', logo: '/logos & icons/TIS.png' },
    { name: 'Sunricher', logo: '/logos & icons/sunriicher.png' },
    { name: 'Yandex Alisa', logo: '/logos & icons/yandex alisa.svg' },
    { name: 'Samsung', logo: '/logos & icons/samsung.png' },
    { name: 'Apple TV+', logo: '/logos & icons/apple tv plus.png' },
    { name: 'Spotify', logo: '/logos & icons/spotify.png' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    // Don't prevent default to allow native scrolling on mobile
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    // Resume animation after touch ends
    setTimeout(() => setIsPaused(false), 1000);
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse event handlers for desktop hover pause
  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseMove = () => {
    // Just for hover detection on desktop
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Полная <span className="text-gradient">Интеграция</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto">
            ADAM работает с лучшими в своем классе технологиями умного дома,
            обеспечивая беспрецедентную совместимость и функциональность
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden w-full">
          {/* Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className={`flex ${isPaused ? '' : 'md:animate-scroll-fast'} hover:animate-pause overflow-x-auto scrollbar-hide select-none`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}   
            onMouseLeave={handleMouseUp}
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              minWidth: 'max-content',
              touchAction: 'pan-x'
            }}
          >
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 lg:mx-8 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transform group-hover:scale-110">
                  <div className="w-full h-full flex items-center justify-center bg-glass-strong rounded-xl sm:rounded-2xl border border-glass-border/20 p-2 sm:p-3 md:p-4">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain max-w-full max-h-full"
                      loading="lazy"
                      onError={(e) => {
                        console.warn(`Failed to load logo: ${integration.logo}`);
                        // Show text fallback if image doesn't load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                          fallback.classList.remove('hidden');
                        }
                      }}
                    />
                    <span 
                      className="text-xs sm:text-sm md:text-base font-medium text-foreground text-center leading-tight hidden flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      {integration.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Bottom Description 
        <div className="text-center mt-16 sm:mt-20 md:mt-24">
          <div className="glass rounded-2xl p-8 sm:p-10 md:p-12 max-w-4xl mx-auto">
          {/*   <h4 className="text-2xl sm:text-3xl font-light mb-6 text-foreground">
              Универсальная Экосистема
            </h4>
            <p className="text-lg text-foreground-muted leading-relaxed">
              От протоколов умного дома до развлекательных сервисов — АДАМ объединяет
              все ваши устройства и сервисы в единую, гармонично работающую систему.
              Наша платформа поддерживает более 500 различных устройств и сервисов.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default IntegrationsSection;
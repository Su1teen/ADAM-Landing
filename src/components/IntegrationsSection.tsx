import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Smart Group Kazakhstan', logo: '/media/smart-group-logo.png' },
    { name: 'Iridi', logo: '/media/iridi-logo.png' },
    { name: 'SmartThings', logo: '/media/smartthings-logo.png' },
    { name: 'Zigbee', logo: '/media/zigbee-logo.png' },
    { name: 'Google Cast', logo: '/media/google-cast-logo.png' },
    { name: 'Matter', logo: '/media/matter-logo.png' },
    { name: 'Thread', logo: '/media/thread-logo.png' },
    { name: 'MQTT', logo: '/media/mqtt-logo.png' },
    { name: 'KNX', logo: '/media/knx-logo.png' },
    { name: 'Philips Hue', logo: '/media/philips-hue-logo.png' },
    { name: 'IKEA Tradfri', logo: '/media/ikea-tradfri-logo.png' },
    { name: 'TiS', logo: '/media/tis-logo.png' },
    { name: 'Sunricher', logo: '/media/sunricher-logo.png' },
    { name: 'Yandex Alisa', logo: '/media/yandex-alisa-logo.png' },
    { name: 'Samsung', logo: '/media/samsung-logo.png' },
    { name: 'Apple TV', logo: '/media/apple-tv-logo.png' },
    { name: 'Spotify', logo: '/media/spotify-logo.png' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Полная <span className="text-gradient">Интеграция</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto">
            АДАМ работает с лучшими в своем классе технологиями умного дома,
            обеспечивая беспрецедентную совместимость и функциональность
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-infinite hover:animate-pause">
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex-shrink-0 mx-8 sm:mx-12 md:mx-16 group"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transform group-hover:scale-110">
                  {/* Fallback text if logo image doesn't exist */}
                  <div className="w-full h-full flex items-center justify-center bg-glass-strong rounded-2xl border border-glass-border/20 p-4">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-foreground text-center leading-tight">
                      {integration.name}
                    </span>
                  </div>
                  {/* 
                  Uncomment when logo images are available:
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Hide image and show text fallback
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  */}
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
import React, { useState } from 'react';
import { Home, Calendar, MessageCircle, Heart, Smartphone, Brain, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const VoiceAssistantSection = () => {
  const [activePhoneIndex, setActivePhoneIndex] = useState(0);

  const phoneInterfaces = [
    {
      title: 'Умный Дом',
      description: 'Управление всеми устройствами в доме',
      icon: Home,
      gradient: 'from-accent-blue to-accent-cyan',
      interface: {
        header: 'Дом',
        content: [
          { type: 'device', name: 'Гостиная', status: 'Включено', icon: '💡' },
          { type: 'device', name: 'Спальня', status: 'Выключено', icon: '🛏️' },
          { type: 'device', name: 'Кухня', status: 'Включено', icon: '🍳' },
          { type: 'device', name: 'Термостат', status: '22°C', icon: '🌡️' }
        ]
      }
    },
    {
      title: 'Календарь',
      description: 'Планирование и напоминания',
      icon: Calendar,
      gradient: 'from-accent-purple to-accent-blue',
      interface: {
        header: 'Сегодня, 24 сентября',
        content: [
          { type: 'event', name: 'Встреча с командой', time: '10:00', icon: '👥', status: 'сейчас' },
          { type: 'event', name: 'Обед с клиентом', time: '13:00', icon: '🍽️' },
          { type: 'event', name: 'Звонок партнерам', time: '15:00', icon: '📞' },
          { type: 'new-event', name: '✨ Добавлено: Покупки', time: '18:00', icon: '🛒', isNew: true },
          { type: 'suggestion', name: 'Ева предлагает: Тренировка', time: '19:30', icon: '🏃‍♂️', isSuggestion: true }
        ]
      }
    },
    {
      title: 'Сообщения',
      description: 'Анализ переписок и инсайты',
      icon: MessageCircle,
      gradient: 'from-accent-cyan to-accent-purple',
      interface: {
        header: 'Чаты',
        content: [
          { type: 'chat', name: 'Семья', preview: 'Не забудь молоко', time: '2 мин', icon: '👨‍👩‍👧' },
          { type: 'chat', name: 'Работа', preview: 'Отчет готов', time: '5 мин', icon: '💼' },
          { type: 'chat', name: 'Друзья', preview: 'Встречаемся в 7?', time: '10 мин', icon: '👥' },
          { type: 'insight', name: '3 важных сообщения', icon: '⚡' }
        ]
      }
    },
    {
      title: 'Здоровье',
      description: 'Мониторинг показателей здоровья',
      icon: Heart,
      gradient: 'from-accent-blue to-accent-purple',
      interface: {
        header: 'Здоровье',
        content: [
          { type: 'metric', name: 'Пульс', value: '72 BPM', icon: '❤️' },
          { type: 'metric', name: 'Сон', value: '7ч 30м', icon: '😴' },
          { type: 'metric', name: 'Шаги', value: '8,450', icon: '👟' },
          { type: 'metric', name: 'Калории', value: '420 ккал', icon: '🔥' }
        ]
      }
    }
  ];
  const capabilities = [
    {
      icon: Home,
      title: 'Умный Дом',
      description: 'Полное голосовое управление всеми подключенными устройствами и системами',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    {
      icon: Calendar,
      title: 'Продуктивность',
      description: 'Интеграция с Google Calendar, заметками, задачами и планированием',
      gradient: 'from-accent-purple to-accent-blue'
    },
    {
      icon: MessageCircle,
      title: 'Коммуникации',
      description: 'Анализ сообщений WhatsApp, Telegram с умными инсайтами и напоминаниями',
      gradient: 'from-accent-cyan to-accent-purple'
    },
    {
      icon: Heart,
      title: 'Здоровье',
      description: 'Подключение к смарт-часам, кольцам, браслетам для анализа здоровья',
      gradient: 'from-accent-blue to-accent-purple'
    }
  ];

  // Navigation functions
  const nextPhone = () => {
    setActivePhoneIndex((prev) => (prev + 1) % phoneInterfaces.length);
  };

  const prevPhone = () => {
    setActivePhoneIndex((prev) => (prev - 1 + phoneInterfaces.length) % phoneInterfaces.length);
  };

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Apple-style Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="mb-4">
            <span className="text-lg sm:text-xl text-foreground-muted font-medium">
              Встречайте вашего нового
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-4 sm:mb-6">
            Голосового Ассистента
          </h1>
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light mb-4 sm:mb-6">
            <span className="text-gradient">Ева</span>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            Ваш персональный ИИ-ассистент для дома, работы и жизни
          </p>
        </div>

        {/* 3D Model - Smaller and positioned after description */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20 relative">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl relative h-[350px] sm:h-[420px] md:h-[490px]">
            <spline-viewer 
              url="https://prod.spline.design/wecqljf-aJRhjsaj/scene.splinecode"
              className="w-full h-full"
              style={{ background: 'transparent' }}
            />
            
            {/* Floating Name Tag */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl px-6 py-3 border border-glass-border/30 z-20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
                <span className="text-lg font-medium text-foreground">Ева</span>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass rounded-2xl px-6 py-3 border border-glass-border/30 z-20">
              <span className="text-sm text-foreground-muted">
                Готова помочь вам
              </span>
            </div>
          </div>
        </div>

        {/* Capabilities Grid with Phone Mockups */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          
          {/* Left Side - Capabilities */}
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                <span className="text-gradient">Возможности</span> Евы
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Персональный ассистент нового поколения для всех аспектов вашей жизни
              </p>
            </div>

            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="glass rounded-2xl p-6 sm:p-8 border-2 border-glass-border/40 hover:border-glass-border/60 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Revolving Circles with Blurred Edges for Outline Emphasis */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
                  {/* Large revolving circle - dark blue */}
                  <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:animate-spin-slow`} 
                       style={{ 
                         animationDuration: '20s',
                         animationIterationCount: 'infinite',
                         transformOrigin: 'center'
                       }}></div>
                  
                  {/* Medium revolving circle - white */}
                  <div className={`absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:animate-spin-slow`}
                       style={{ 
                         animationDuration: '25s',
                         animationIterationCount: 'infinite',
                         animationDelay: '1s',
                         transformOrigin: 'center'
                       }}></div>
                  
                  {/* Small revolving circle - dark blue */}
                  <div className={`absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-blue-500/15 blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:animate-spin-slow`}
                       style={{ 
                         animationDuration: '30s',
                         animationIterationCount: 'infinite',
                         animationDelay: '2s',
                         transformOrigin: 'center'
                       }}></div>
                </div>
                
                {/* Subtle background accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${capability.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-full -translate-y-8 translate-x-8`} />
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-16 h-16 relative rounded-2xl p-4 flex items-center justify-center group-hover:scale-110 transition-all duration-500 overflow-hidden">
                    {/* Multiple layered glass effects for liquid appearance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-white/10 rounded-2xl" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-15 group-hover:opacity-25 transition-all duration-500 rounded-2xl`} />
                    <div className={`absolute inset-0 bg-gradient-to-tl ${capability.gradient} opacity-10 group-hover:opacity-20 transition-all duration-500 rounded-2xl`} />
                    
                    {/* Animated liquid shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    </div>
                    
                    {/* Subtle border glow */}
                    <div className={`absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/30 transition-all duration-300`} />
                    <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br ${capability.gradient} opacity-20 group-hover:opacity-30 transition-all duration-300`} style={{ maskImage: 'linear-gradient(transparent, transparent), linear-gradient(white, white)', maskComposite: 'subtract' }} />
                    
                    {/* Glass reflection effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-2xl" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-white/15 to-transparent rounded-br-2xl" />
                    
                    {/* Shadow and backdrop blur */}
                    <div className="absolute inset-0 backdrop-blur-xl rounded-2xl" />
                    <div className={`absolute -inset-1 bg-gradient-to-br ${capability.gradient} opacity-20 blur-md rounded-2xl group-hover:opacity-30 transition-opacity duration-300`} style={{ zIndex: -1 }} />
                    
                    <capability.icon className="w-8 h-8 text-white relative z-20 group-hover:text-white transition-all duration-300 filter drop-shadow-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-light mb-3 text-foreground group-hover:text-gradient transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {capability.description}
                    </p>
                    
                    {/* Subtle visual accent line */}
                    <div className={`mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r ${capability.gradient} rounded-full transition-all duration-500`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Phone Carousel */}
          <div className="relative">
            {/* Phone Interface Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-light mb-4">
                <span className="text-gradient">{phoneInterfaces[activePhoneIndex].title}</span>
              </h3>
              <p className="text-foreground-muted">
                {phoneInterfaces[activePhoneIndex].description}
              </p>
            </div>

            {/* Main Phone Display - Ultra Premium Realistic Design */}
            <div className="relative mx-auto w-80 h-[600px] mb-8">
              {/* Enhanced Phone Frame with Realistic Highlighting */}
              <div className="w-full h-full relative">
                {/* Subtle Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-slate-400/10 via-slate-600/5 to-slate-400/10 rounded-[4rem] opacity-50 blur-3xl"></div>
                
                {/* Realistic Phone Border - Multi-layer with Metallic Finish */}
                <div className="relative w-full h-full rounded-[3.2rem] p-1 shadow-2xl" 
                     style={{
                       background: 'conic-gradient(from 0deg at 50% 50%, rgba(148, 163, 184, 0.7) 0deg, rgba(71, 85, 105, 0.8) 90deg, rgba(148, 163, 184, 0.7) 180deg, rgba(71, 85, 105, 0.8) 270deg, rgba(148, 163, 184, 0.7) 360deg)'
                     }}>
                  {/* Metallic Bezel Effect with Better Depth */}
                  <div className="absolute inset-0 rounded-[3.1rem] p-0.5">
                    <div className="w-full h-full rounded-[3rem] relative overflow-hidden">
                      {/* Multi-layered metallic gradient for realistic finish */}
                      <div className="absolute inset-0 rounded-[3rem]"
                           style={{
                             background: 'linear-gradient(145deg, rgba(203, 213, 225, 0.8) 0%, rgba(148, 163, 184, 0.6) 25%, rgba(100, 116, 139, 0.7) 50%, rgba(71, 85, 105, 0.8) 75%, rgba(203, 213, 225, 0.8) 100%)'
                           }}></div>
                      {/* Subtle reflection highlight */}
                      <div className="absolute top-0 left-1/4 w-1/2 h-8 rounded-[3rem] bg-gradient-to-b from-white/20 to-transparent"></div>
                      <div className="absolute bottom-0 right-1/3 w-1/3 h-6 rounded-[3rem] bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Phone Body with Deep Black Finish */}
                  <div className="w-full h-full rounded-[3rem] p-1 relative overflow-hidden">
                    {/* Deep Black Base with Subtle Texture */}
                    <div className="w-full h-full rounded-[2.9rem] bg-gradient-to-br from-slate-950 via-black to-slate-900 relative shadow-inner">
                      {/* Subtle Texture Overlay */}
                      <div className="absolute inset-0 rounded-[2.9rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-transparent"></div>
                      
                      {/* Edge Highlight for Depth */}
                      <div className="absolute inset-0 rounded-[2.9rem] bg-[conic-gradient(from_45deg_at_50%_50%,_transparent_0deg,_rgba(255,255,255,0.03)_90deg,_transparent_180deg,_rgba(255,255,255,0.03)_270deg,_transparent_360deg)]"></div>
                      
                      {/* Realistic Notch with Camera */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-30 border-x-2 border-b-2 border-slate-800/80">
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-slate-700 rounded-full"></div>
                        <div className="absolute top-2.5 right-6 w-2.5 h-2.5 bg-slate-800 rounded-full border border-slate-600"></div>
                        <div className="absolute top-3 right-6 w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                      </div>
                      
                      {/* Enhanced Dark Status Bar */}
                      <div className="h-12 bg-gradient-to-r from-black/90 via-slate-950/90 to-black/90 backdrop-blur-xl flex items-center justify-between px-6 pt-3 relative z-20 border-b border-slate-800/20">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-slate-300">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-0.5">
                            <div className="w-1 h-2.5 bg-slate-400 rounded-sm"></div>
                            <div className="w-1 h-3.5 bg-slate-300 rounded-sm"></div>
                            <div className="w-1 h-3 bg-slate-400 rounded-sm"></div>
                            <div className="w-1 h-2 bg-slate-500 rounded-sm"></div>
                          </div>
                          <div className="w-6 h-3 border border-slate-600 rounded-sm relative">
                            <div className="w-4 h-2 bg-slate-700 rounded-sm m-0.5 relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      {/* Enhanced App Interface */}
                      <div className="p-4 h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
                        {/* App Header with Dynamic Gradient */}
                        <div className="text-center mb-6 pt-2">
                          <div className={`w-20 h-20 bg-gradient-to-br ${phoneInterfaces[activePhoneIndex].gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl border border-white/10 relative overflow-hidden`}>
                            {/* Icon Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${phoneInterfaces[activePhoneIndex].gradient} opacity-30 blur-xl`}></div>
                            {React.createElement(phoneInterfaces[activePhoneIndex].icon, { className: "w-10 h-10 text-white relative z-10 filter drop-shadow-lg" })}
                          </div>
                          <h3 className="text-xl font-bold text-slate-100 mb-1">{phoneInterfaces[activePhoneIndex].interface.header}</h3>
                          <p className="text-xs text-slate-500 opacity-70">{phoneInterfaces[activePhoneIndex].description}</p>
                        </div>

                        {/* Enhanced Dynamic Interface Content */}
                        <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
                          {phoneInterfaces[activePhoneIndex].interface.content.map((item, index) => (
                            <div 
                              key={index} 
                              className={`rounded-2xl p-4 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer relative overflow-hidden group ${
                                item.isNew ? 'bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-blue-600/10 shadow-lg shadow-blue-600/5' :
                                item.isSuggestion ? 'bg-gradient-to-r from-purple-950/30 to-pink-950/30 border border-purple-600/10 shadow-lg shadow-purple-600/5' :
                                'bg-gradient-to-r from-slate-900/40 to-slate-800/40 border border-slate-700/15 hover:border-slate-600/25'
                              }`}
                            >
                              {/* Background Shimmer Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 animate-shimmer`}></div>
                              </div>
                              
                              <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                  <div className="text-2xl filter drop-shadow-lg">{item.icon}</div>
                                  <div>
                                    <p className={`text-sm font-semibold ${
                                      item.isNew ? 'text-blue-400' :
                                      item.isSuggestion ? 'text-purple-400' :
                                      'text-slate-300'
                                    }`}>{item.name}</p>
                                    {item.time && (
                                      <div className="flex items-center gap-2 mt-1">
                                        <p className="text-xs text-slate-600">{item.time}</p>
                                        {item.status && (
                                          <span className="text-xs bg-slate-800/40 text-slate-400 px-2 py-1 rounded-full border border-slate-600/20">
                                            {item.status}
                                          </span>
                                        )}
                                      </div>
                                    )}
                                    {item.preview && <p className="text-xs text-slate-600 mt-1">{item.preview}</p>}
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                  {item.status && !item.time && (
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                      item.status.includes('°C') ? 'bg-slate-800/40 text-orange-500 border border-orange-600/20' :
                                      'bg-slate-800/40 text-slate-400 border border-slate-600/20'
                                    }`}>{item.status}</span>
                                  )}
                                  {item.value && (
                                    <span className="text-sm font-bold text-slate-300 bg-slate-800/50 px-2 py-1 rounded-lg border border-slate-700/20">
                                      {item.value}
                                    </span>
                                  )}
                                  {item.isNew && (
                                    <div className="flex items-center gap-1">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                      <span className="text-xs text-blue-400 font-semibold">Новое</span>
                                    </div>
                                  )}
                                  {item.isSuggestion && (
                                    <div className="flex items-center gap-1">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                      <span className="text-xs text-purple-400 font-semibold">Ева</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Bottom Action Bar */}
                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/70 backdrop-blur-xl rounded-2xl p-3 border border-slate-700/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-slate-400">Ева активна</span>
                            </div>
                            <div className="text-xs text-slate-500">
                              {phoneInterfaces[activePhoneIndex].interface.content.length} элементов
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={prevPhone}
                className="w-12 h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {phoneInterfaces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhoneIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activePhoneIndex 
                        ? 'bg-gradient-to-r from-accent-blue to-accent-cyan' 
                        : 'bg-glass-border/30 hover:bg-glass-border/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPhone}
                className="w-12 h-12 rounded-full glass-strong border border-glass-border/30 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 md:p-16 max-w-5xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8">
              Будущее <span className="text-gradient">Персональных</span> Ассистентов
            </h3>
            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed mb-8">
              Ева объединяет управление умным домом с персональной продуктивностью,
              создавая единую экосистему для всех аспектов вашей жизни
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-accent-blue" />
                <span className="text-foreground">iOS & Android</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent-cyan" />
                <span className="text-foreground">Облачная синхронизация</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAssistantSection;
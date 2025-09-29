import { Shield, Cloud, Cpu, Globe, CheckCircle } from "lucide-react";

const Technology = () => {
  return (
    <section id="technology" className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Technology Deep Dive */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {/* Security */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 relative rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 overflow-hidden group">
                {/* Multiple layered glass effects for liquid appearance */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-white/10 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-cyan opacity-15 group-hover:opacity-25 transition-all duration-500 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent-blue to-accent-cyan opacity-10 group-hover:opacity-20 transition-all duration-500 rounded-2xl" />
                
                {/* Glass reflection effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-2xl" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-white/15 to-transparent rounded-br-2xl" />
                
                {/* Shadow and backdrop blur */}
                <div className="absolute inset-0 backdrop-blur-xl rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/30 transition-all duration-300" />
                
                <Shield className="w-full h-full text-white relative z-20 filter drop-shadow-lg" />
              </div>
              
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">
                  <span className="text-gradient">Безопасность Ваших</span><br />Данных
                </h3>
                <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed mb-6 sm:mb-8">
                  Безопасность вашего умного дома обеспечивается многоуровневой системой защиты. 
                  Мы применяем надежные методы шифрования и строгие протоколы безопасности для обеспечения 
                  полной конфиденциальности ваших данных и защиты домашней инфраструктуры.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Профессиональное Шифрование</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Применение стандарта AES-256 обеспечивает максимальную защиту всех данных вашего умного дома</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Локальная Обработка Данных</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Конфиденциальная информация обрабатывается исключительно в пределах вашего дома, исключая внешние утечки</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Система Нулевого Доверия</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Каждое подключение к вашей домашней сети проходит строгую проверку подлинности перед получением доступа</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden mt-8 lg:mt-0">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full blur-2xl sm:blur-3xl animate-pulse" />
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
              </div>
              
              <div className="relative z-10 text-center">
                <Shield className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-primary mx-auto mb-6 sm:mb-8" />
                <h4 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Центр Безопасности</h4>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-light text-gradient mb-1">256-бит</div>
                    <div className="text-xs text-foreground-muted">Шифрование</div>
                  </div>
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-light text-gradient mb-1">0</div>
                    <div className="text-xs text-foreground-muted">Утечек</div>
                  </div>
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-light text-gradient mb-1">96%</div>
                    <div className="text-xs text-foreground-muted">Аптайм</div>
                  </div>
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-light text-gradient mb-1">24/7</div>
                    <div className="text-xs text-foreground-muted">Мониторинг</div>
                  </div>
                </div>
                
                <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm">Мониторинг Угроз</span>
                    <span className="text-xs text-accent-blue">Активно</span>
                  </div>
                  <div className="w-full bg-glass-bg rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent-blue to-accent-cyan h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Processing */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center lg:grid-flow-col-dense">
            <div className="lg:col-start-2 space-y-6 sm:space-y-8">
              <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-white rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 overflow-hidden group flex items-center justify-center">
                <Cpu className="w-full h-full text-black relative z-20 filter drop-shadow-lg" />
              </div>
              
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">
                  <span className="text-gradient">Гибридная ИИ</span><br />Обработка
                </h3>
                <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed mb-6 sm:mb-8">
                  Умная система распределения вычислений. ИИ мгновенно реагирует на ежедневные потребности дома через локальную обработку, а сложные аналитические задачи решает с помощью облачных технологий.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Локальная Обработка</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Критические или повторяющиеся решения принимаются менее чем за 50 мс</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Облачный Интеллект</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Сложные алгоритмы обучения выполняются на мощной облачной инфраструктуре</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <div className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Офлайн Устойчивость</div>
                    <div className="text-sm sm:text-base text-foreground-muted">Основные функции работают даже при отсутствии интернета</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-start-1 glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden mt-8 lg:mt-0">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500" />
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1500" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-full mx-auto mb-6 sm:mb-8 animate-glow-pulse">
                  <Cpu className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-black" />
                </div>
                <h4 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6">Производительность ИИ</h4>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-left">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm">Скорость Локальной Обработки</span>
                      <span className="text-accent-purple text-xs sm:text-sm">47мс средн.</span>
                    </div>
                    <div className="w-full bg-glass-bg rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-purple to-accent-cyan h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 text-left">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm">Облачная Синхронизация</span>
                      <span className="text-accent-cyan text-xs sm:text-sm">В реальном времени</span>
                    </div>
                    <div className="w-full bg-glass-bg rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-cyan to-accent-purple h-2 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-light text-gradient">8K+</div>
                      <div className="text-xs text-foreground-muted">Решений/сек</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-light text-gradient">94%</div>
                      <div className="text-xs text-foreground-muted">Точность</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
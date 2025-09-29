import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const CallToAction = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const benefits = [
    "30-дневная бесплатная пробная версия",
    "Профессиональная установка включена", 
    "Поддержка клиентов 24/7"
  ];

  return (
    <section id="smart-home" className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Ваш <span className="text-gradient">Умный</span> Дом
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Присоединяйтесь к более чем 50,000 умных систем, уже испытывающих будущее домашней автоматизации и персональных ассистентов на базе ИИ.
          </p>
          
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left: Benefits */}
              <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8">Что вы получаете:</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 relative flex items-center justify-center overflow-hidden group flex-shrink-0">
                      {/* Liquid Glass Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-white/10 rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-cyan opacity-15 group-hover:opacity-25 transition-all duration-500 rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-accent-blue to-accent-cyan opacity-10 group-hover:opacity-20 transition-all duration-500 rounded-full" />
                      
                      {/* Glass reflection effect */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-full" />
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-white/15 to-transparent rounded-br-full" />
                      
                      {/* Backdrop blur */}
                      <div className="absolute inset-0 backdrop-blur-xl rounded-full" />
                      <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/30 transition-all duration-300" />
                      
                      <CheckCircle className="w-full h-full text-white relative z-10 filter drop-shadow-lg" />
                    </div>
                    <span className="text-base sm:text-lg text-foreground-muted">{benefit}</span>
                  </div>
                ))}
                
                <div className="pt-4 sm:pt-6">
                  <div className="text-sm sm:text-base text-foreground-muted">
                    Подберите подходящего для вас ИИ ассистента для себя, и для умного дома. Оставьте контакты и наши операторы свяжутся с вами в течении 10 минут. 
                  </div>
                </div>
              </div>
              
              {/* Right: Action */}
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="w-full group text-base sm:text-lg h-14 sm:h-16"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Связаться с нами
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              
                

              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8 sm:gap-12 md:gap-16">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-gradient mb-1 sm:mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-foreground-muted">Довольных Домов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-gradient mb-1 sm:mb-2">96%</div>
                  <div className="text-xs sm:text-sm text-foreground-muted">Аптайм</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-gradient mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-foreground-muted">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};

export default CallToAction;
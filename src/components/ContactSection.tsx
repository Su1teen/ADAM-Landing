import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
            Посетите Нас в <span className="text-gradient">Астане</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto">
            Познакомьтесь с будущим умного дома в нашем Шоуруме. 
          </p>
        </div>

        {/* Contact Info and Map Grid */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            
            {/* Office Info */}
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-background-secondary rounded-full flex items-center justify-center border border-glass-border/30">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-foreground">Головной Офис</h3>
                  <p className="text-foreground-muted">Showroom компании ADAM х Smart Group Kazakhstan.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-medium text-foreground mb-1">Адрес</div>
                    <div className="text-foreground-muted">
                      The Smart Group Kazakhstan<br />
                      Туран 57/3, Астана<br />
                      Kazakhstan, Astana, Turan 57/3
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-medium text-foreground mb-1">Телефон</div>
                    <div className="text-foreground-muted">+7 771 384 1361</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-medium text-foreground mb-1">Email</div>
                    <div className="text-foreground-muted">contact@adamnext.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-medium text-foreground mb-1">Часы работы</div>
                    <div className="text-foreground-muted">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб: 10:00 - 16:00<br />
                      Вс: По предварительной записи
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:p-4 h-[400px] sm:h-[500px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.123456789!2d71.3929877!3d51.1049604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458500432f00c1%3A0x430f92def45fbe40!2z0KLRg9GA0LDQvSA1Ny8z!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem", filter: "saturate(0.6) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl sm:rounded-2xl"
                title="The Smart Group Kazakhstan - Turan 57/3, Astana, Kazakhstan"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="glass rounded-2xl p-8 sm:p-10 md:p-12 max-w-4xl mx-auto">
            <h4 className="text-2xl sm:text-3xl font-light mb-6 text-foreground">
              Добро пожаловать в будущее умного дома
            </h4>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Наш демонстрационный центр в Астане - это живая выставка возможностей ADAM. 
              Попробуйте голосовое управление, посмотрите автоматизацию сценариев в действии 
              и узнайте, как ADAM может трансформировать ваш дом в интеллектуальную среду, 
              которая изучает и адаптируется под ваш образ жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
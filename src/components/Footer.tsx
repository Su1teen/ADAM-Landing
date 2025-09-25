import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "О нас",
      links: [
        { label: "Возможности", href: "#features" },
        { label: "Технологии", href: "#technology" },
        { label: "Демо", href: "#demo" },
      ]
    },
    {
      title: "Связаться с нами",
      socialLinks: [
        { label: "Instagram", href: "https://www.instagram.com/adamglobaltech/", icon: Instagram },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/adamglobaltech/about/", icon: Linkedin },
        { label: "WhatsApp", href: "https://wa.me/+77713841361", icon: FaWhatsapp },
        { label: "Telegram", href: "https://t.me/adamnextbot", icon: FaTelegramPlane },
      ],
      links: [
        { label: "Техническая Поддержка", href: "#support" },
        { label: "FAQ", href: "#faq" },
      ]
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-glass-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/media/LOGO_WHITE_NO_SLOGAN.svg" alt="ADAM" className="w-12 sm:w-16 h-12 sm:h-16" />
            </div>
            
            <p className="text-sm sm:text-base text-foreground-muted max-w-md leading-relaxed">
              AI-Driven Assistant for Modernity. Transforming homes into intelligent, 
              adaptive environments that understand and serve their occupants.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground-muted">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span>contact@adamnext.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground-muted">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span>+7 771 384 1361</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground-muted">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span>Туран 57/3, Астана</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections - New Structure */}
          {footerSections.map((section, index) => (
            <div key={index} className={`space-y-4 sm:space-y-6 ${index === 0 ? 'ml-6 sm:ml-8 md:ml-12' : ''}`}>
              <h3 className="text-base sm:text-lg font-medium text-foreground">{section.title}</h3>
              
              {/* Social Links for "Связаться с нами" section */}
              {section.socialLinks && (
                <div className="flex items-center gap-4 mb-4">
                  {section.socialLinks.map((social, socialIndex) => (
                    <a 
                      key={socialIndex}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-primary transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              )}
              
              {/* Regular Links */}
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm sm:text-base text-foreground-muted hover:text-primary transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter - Responsive layout */}
        <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl sm:text-2xl font-light mb-2">Будь в Курсе Новинок</h3>
              <p className="text-sm sm:text-base text-foreground-muted">
                Будьте в курсе новых функции и новинок в сфере личного асисстента и умного дома. Инновации в ИИ начинаются здесь. 
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:ml-8">
              <input 
                type="email" 
                placeholder="Ваши контакты"
                className="glass border border-glass-border/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-sm sm:text-base text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 flex-1 min-w-0"
              />
              <button className="bg-gradient-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-glow transition-all duration-300 whitespace-nowrap text-sm sm:text-base">
                Отправить
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Responsive */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-glass-border/20 space-y-4 md:space-y-0">
          <div className="text-sm sm:text-base text-foreground-muted text-center md:text-left">
            © 2025 A.D.A.M. 
          </div>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
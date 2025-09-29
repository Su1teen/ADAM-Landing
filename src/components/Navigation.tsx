import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        // Scrolling down
        setShowNav(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY > 40) {
        // Scrolling up
        setShowNav(false);
      } else if (currentScrollY <= 40) {
        // Near top, always show
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Возможности", href: "#features" },
    { label: "Технологии", href: "#technology" },
    { label: "Контакты", href: "#contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border/20 bg-background/90 transition-all duration-300 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/media/LOGO_WHITE_NO_SLOGAN.svg" alt="ADAM" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-24" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Only "Связаться с нами" */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="gradient" 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 text-sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#smart-home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Связаться с нами
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 glass rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              ) : (
                <Menu className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Responsive */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 sm:pb-6 transition-opacity duration-300 opacity-100">
            <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium py-2 border-b border-glass-border/10 last:border-b-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4">
                <Button 
                  variant="gradient" 
                  size="sm" 
                  className="w-full text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.querySelector('#smart-home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
  </nav>
    </>
  );
};

export default Navigation;
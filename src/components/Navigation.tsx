import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Возможности", href: "#features" },
    { label: "Технологии", href: "#technology" },
    { label: "Цены", href: "#pricing" },
    { label: "Поддержка", href: "#support" }
  ];

  return (
    <>
      {/* Invisible hover trigger area - Responsive height */}
      <div className="fixed top-0 left-0 right-0 h-12 sm:h-16 z-40" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border/20 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-background/90 group">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/media/LOGO_WHITE_NO_SLOGAN.svg" alt="ADAM" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-24" />
          </div>

          {/* Desktop Navigation - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button variant="ghost" size="sm" className="text-sm">
              Войти
            </Button>
            <Button variant="gradient" size="sm" className="bg-white text-black hover:bg-white/90 text-sm">
              Начать
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button and CTA */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Mobile CTA - Only "Начать" button */}
            <Button variant="gradient" size="sm" className="bg-white text-black hover:bg-white/90 text-xs sm:text-sm px-3 sm:px-4">
              Начать
            </Button>
            
            {/* Mobile Menu Button */}
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
          <div className="lg:hidden pb-4 sm:pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm font-medium py-2 border-b border-glass-border/10 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4">
                <Button variant="ghost" size="sm" className="w-full text-sm">
                  Войти
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
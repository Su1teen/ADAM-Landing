import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Send, User, MessageCircle } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '73bec794-1d2e-40c2-947d-2051f3d86367',
          name: formData.name,
          contact: formData.contact,
          subject: 'Новая заявка с сайта ADAM',
          from_name: 'ADAM Landing Page',
          to_email: 'cnnctedu@gmail.com'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ name: '', contact: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className="relative w-full max-w-md transform transition-all duration-300 animate-in fade-in-0 zoom-in-95">
        {/* Liquid Glass Container */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Multiple layered glass effects for liquid appearance */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/15 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 opacity-30 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tl from-accent-purple/15 to-accent-blue/15 opacity-25 rounded-3xl" />
          
          {/* Glass reflection effects */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
          <div className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-gradient-to-tl from-white/25 to-transparent rounded-br-3xl" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-xl" />
          
          {/* Backdrop blur and border */}
          <div className="absolute inset-0 backdrop-blur-2xl rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl border border-white/30" />
          
          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    {/* Icon container with liquid glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-accent-blue/30 to-accent-cyan/20 rounded-2xl" />
                    <div className="absolute inset-0 backdrop-blur-xl rounded-2xl border border-white/20" />
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl" />
                    
                    <MessageCircle className="w-8 h-8 text-black/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-2">
                    Связаться с нами
                  </h3>
                  <p className="text-white/80 text-sm">
                    Мы свяжемся с вами в течение 10 минут
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20" />
                    <div className="relative flex items-center">
                      <User className="w-5 h-5 text-black/40 absolute left-4 z-10" />
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full h-14 pl-12 pr-4 bg-transparent text-white placeholder-white/60 border-0 outline-none relative z-10"
                      />
                    </div>
                  </div>

                  {/* Contact Input */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20" />
                    <div className="relative flex items-center">
                      <MessageCircle className="w-5 h-5 text-black/40 absolute left-4 z-10" />
                      <input
                        type="text"
                        placeholder="Телефон, Email или Telegram"
                        value={formData.contact}
                        onChange={(e) => handleInputChange('contact', e.target.value)}
                        required
                        className="w-full h-14 pl-12 pr-4 bg-transparent text-white placeholder-white/60 border-0 outline-none relative z-10"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.contact}
                      className="w-full h-14 relative overflow-hidden rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Button glass background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 to-accent-cyan/30 rounded-xl group-hover:from-accent-blue/40 group-hover:to-accent-cyan/40 transition-all duration-300" />
                      <div className="absolute inset-0 backdrop-blur-sm rounded-xl border border-white/30" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 text-black font-medium">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            Отправляем...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            Отправить заявку
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </form>

                {/* Privacy Notice */}

              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-full animate-pulse" />
                  <div className="absolute inset-0 backdrop-blur-xl rounded-full border border-green-400/30" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full" />
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-400 animate-bounce">
                    ✓
                  </div>
                </div>
                
                <h3 className="text-2xl font-light text-white mb-3">
                  Заявка отправлена!
                </h3>
                <p className="text-white/80 text-sm">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
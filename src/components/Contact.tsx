import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (newState) {
      setTimeout(() => {
        window.scrollBy({ top: 300, behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <footer id="footer" className="bg-[#FAF9F6] border-t border-stone-200 z-10 relative pt-12 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Dark Card Section */}
        <div className="bg-[#1E1D1C] w-full rounded-[2rem] md:rounded-[3rem] py-24 md:py-32 px-6 flex flex-col items-center gap-10">
          <p className="font-serif italic text-stone-300 text-xl md:text-2xl">
            Beraber çalışmak dileğiyle...
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-bold tracking-widest text-stone-500">OFF</span>
            
            <div 
              className={`w-32 h-14 rounded-full p-1.5 cursor-pointer transition-colors duration-500 relative flex items-center ${isOn ? 'bg-[#5C4535]' : 'bg-[#312E2C]'}`}
              onClick={handleToggle}
            >
              <motion.div 
                className="w-11 h-11 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] relative flex items-center justify-center z-10"
                animate={{ 
                  x: isOn ? 72 : 0,
                  rotate: isOn ? 0 : -180
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Cup Handle */}
                <div className="absolute top-1/2 -mt-[7px] -right-[7px] w-[10px] h-[14px] border-t-2 border-r-2 border-b-2 border-white rounded-r-full"></div>
                {/* Coffee Liquid */}
                <div className="w-8 h-8 bg-[#3D2B1F] rounded-full relative z-10"></div>
              </motion.div>
            </div>

            <span className="text-[11px] font-bold tracking-widest text-stone-500">ON</span>
          </div>

          <div className="text-center mt-4 min-h-[100px] flex flex-col justify-center px-4">
            {isOn ? (
              <h3 className="text-2xl md:text-4xl font-serif text-[#C4A484] leading-snug max-w-3xl">
                We are ready when you are.<br/>Let's brew something great.
              </h3>
            ) : (
              <h3 className="text-2xl md:text-4xl font-serif text-white leading-snug max-w-3xl">
                Ready to turn ON the perfect<br/>coffee experience at your next event?
              </h3>
            )}
          </div>
        </div>

        {/* Expandable Footer Section */}
        <AnimatePresence>
          {isOn && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-20 pb-10 flex flex-col items-center text-center gap-10">
                
                <div className="text-[11px] text-stone-500 space-y-4">
                  <p className="uppercase font-bold text-[var(--color-brand-text)] tracking-[0.2em] mb-6">Connect With Us</p>
                  <p className="flex items-center justify-center gap-2 hover:text-[var(--color-brand-accent)] transition-colors cursor-pointer text-sm">
                    <Mail className="w-4 h-4" /> hello@coffeefair.com
                  </p>
                  <p className="flex items-center justify-center gap-2 hover:text-[var(--color-brand-accent)] transition-colors cursor-pointer text-sm">
                    <Phone className="w-4 h-4" /> +90 (555) 123 45 67
                  </p>
                  <p className="flex items-center justify-center gap-2 hover:text-[var(--color-brand-accent)] transition-colors cursor-pointer text-sm">
                    <MapPin className="w-4 h-4" /> Istanbul, Turkey
                  </p>
                </div>

                <div className="flex justify-center gap-8 text-stone-400 text-xs font-medium tracking-widest">
                  <span className="hover:text-[var(--color-brand-text)] transition-colors cursor-pointer flex items-center gap-2">
                    <Instagram className="w-4 h-4"/> INSTAGRAM
                  </span>
                  <span className="hover:text-[var(--color-brand-text)] transition-colors cursor-pointer flex items-center gap-2">
                    <Linkedin className="w-4 h-4"/> LINKEDIN
                  </span>
                  <span className="hover:text-[var(--color-brand-text)] transition-colors cursor-pointer flex items-center gap-2">
                    {/* Minimal custom X logo instead of bird */}
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    X
                  </span>
                </div>

                <div className="mt-8 text-stone-300 text-[10px] uppercase tracking-widest pt-8 border-t border-stone-200 w-full max-w-md">
                  &copy; {new Date().getFullYear()} Coffee Fair and more. All rights reserved.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </footer>
  );
}

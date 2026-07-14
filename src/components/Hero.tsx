import { motion } from "motion/react";
import { ArrowUpRight, Coffee } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-200/50 pt-24 pb-12 px-4 md:px-6 lg:px-8">
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[75vh] min-h-[600px]">
        
        {/* Main Big Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 md:row-span-2 bg-[var(--color-brand-bg)] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden shadow-sm"
        >
          <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
            <Coffee className="w-64 h-64 text-[var(--color-brand-accent)]" />
          </div>
          <div className="max-w-2xl relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-brand-text)] tracking-tight leading-[1.05] mb-6 font-bold">
              Elevating <br />
              <span className="italic font-light text-[var(--color-brand-accent)]">Corporate</span> Coffee
            </h1>
            <p className="text-lg text-stone-600 font-light tracking-wide max-w-md">
              Custom roasting, premium equipment, and masterful barista catering designed for unforgettable events.
            </p>
          </div>
          <div className="mt-8 relative z-10">
             <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-text)] text-white font-bold tracking-widest text-xs uppercase hover:bg-[var(--color-brand-accent)] transition-all duration-300 rounded-full shadow-lg hover:-translate-y-1"
            >
              Book Your Event <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Tall Image Box */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm min-h-[300px]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/portfolio-latte-art.png`}
            alt="Latte Art"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Wide Image Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm min-h-[200px]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hero-coffee.png`}
            alt="Coffee Pouring"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Small Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:col-span-1 md:row-span-1 bg-[var(--color-brand-accent)] rounded-3xl p-6 flex flex-col justify-center items-center text-center text-white shadow-sm min-h-[200px]"
        >
          <span className="text-5xl font-serif mb-1">100%</span>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-90">Premium Roast</span>
        </motion.div>

        {/* Another Small Image Box */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm min-h-[200px]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/portfolio-setup.png`}
            alt="Coffee Setup"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}

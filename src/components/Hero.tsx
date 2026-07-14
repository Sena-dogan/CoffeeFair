import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-200">
      {/* Background Image with Parallax effect feeling */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-coffee.png`}
          alt="Elegant coffee catering setup"
          className="w-full h-full object-cover object-center grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6 font-light"
        >
          Elevating Corporate <br className="hidden md:block" /> <span className="italic">Coffee Experiences</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-200 max-w-2xl font-light mb-10 tracking-wide"
        >
          Custom roasting, premium equipment, and professional catering designed to make your events unforgettable.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-10 py-4 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] font-medium tracking-widest text-xs uppercase hover:bg-[var(--color-brand-accent)] transition-colors duration-300 rounded-none"
        >
          Book Your Event
        </motion.a>
      </div>
    </section>
  );
}

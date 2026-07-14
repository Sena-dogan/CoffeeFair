import { motion } from "motion/react";

const logos = [
  "Microsoft", "Google", "Amazon", "Tesla", "Netflix", "Spotify"
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-white border-t border-stone-200 watermark-bg relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
           <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-brand-text)] mb-6">Partners & <span className="italic">Events</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto tracking-wide text-sm font-light leading-relaxed">
            Trusted by industry leaders to deliver exceptional coffee experiences at their most important events.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto overflow-hidden bg-stone-200 rounded-sm"
          >
             <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1200" alt="Corporate Event" className="w-full h-full object-cover hover:scale-105 grayscale-[0.2] hover:grayscale-0 transition-transform duration-700" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="aspect-square overflow-hidden bg-stone-200 rounded-sm"
          >
             <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600" alt="Coffee Setup" className="w-full h-full object-cover hover:scale-105 grayscale-[0.2] hover:grayscale-0 transition-transform duration-700" />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: false }}
             transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square overflow-hidden bg-stone-200 rounded-sm"
          >
             <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600" alt="Latte Art" className="w-full h-full object-cover hover:scale-105 grayscale-[0.2] hover:grayscale-0 transition-transform duration-700" />
          </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: false }}
             transition={{ duration: 0.5, delay: 0.3 }}
            className="aspect-[2/1] md:aspect-auto md:col-span-2 overflow-hidden bg-stone-200 rounded-sm"
          >
             <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200" alt="Coffee Stand" className="w-full h-full object-cover hover:scale-105 grayscale-[0.2] hover:grayscale-0 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Partners */}
        <div className="border-t border-stone-200 pt-16">
          <p className="text-center text-[10px] tracking-[0.3em] font-bold text-stone-400 uppercase mb-12">Our Partners</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            {logos.map(logo => (
              <span key={logo} className="text-xl md:text-2xl font-serif tracking-widest text-[var(--color-brand-text)]">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const cupSizes = [
  {
    oz: "4oz",
    ml: "120ml",
    drinks: "Espresso · Cortado · Turkish",
    height: "h-12",
  },
  {
    oz: "7oz",
    ml: "210ml",
    drinks: "Cappuccino · Flat White",
    height: "h-16",
  },
  {
    oz: "8oz",
    ml: "240ml",
    drinks: "Latte · Filter · AeroPress",
    height: "h-20",
  },
  {
    oz: "14oz",
    ml: "415ml",
    drinks: "Cold Brew · Iced Drinks",
    height: "h-24",
  }
];

export function CupSizes() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[var(--color-brand-bg)] border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 block">Portions</span>
          <h2 className="text-4xl font-serif font-light text-[var(--color-brand-text)] mb-6">Standard <span className="italic">Servings</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {cupSizes.map((cup, index) => (
            <motion.div
              key={cup.oz}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#3D3531] border border-[#524943] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between text-[#FAF9F6] h-[220px] sm:h-[280px] md:h-[320px]"
            >
              <div className="flex-1 flex items-center justify-center w-full scale-[0.65] sm:scale-80 md:scale-100 origin-bottom">
                {/* Minimalist Cup representation */}
                <div className="relative flex flex-col items-center justify-end">
                  {/* Cup rim */}
                  <div className="w-16 h-2 rounded-[50%] border-2 border-[#8B7E74]/60 absolute top-[-4px] z-10" />
                  {/* Cup body */}
                  <div className={`w-14 ${cup.height} bg-gradient-to-b from-[#5C4535] to-[#36271D] rounded-b-xl border border-t-0 border-[#8B7E74]/60 relative z-0 shadow-inner`} />
                </div>
              </div>
              
              <div className="text-center mt-auto w-full flex flex-col items-center justify-end">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-0.5 sm:mb-1 font-medium">{cup.oz}</h3>
                <p className="text-[10px] sm:text-xs text-stone-400 mb-2 sm:mb-3">{cup.ml}</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider md:tracking-widest text-stone-300 font-light max-w-[150px] leading-relaxed">
                  {cup.drinks}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

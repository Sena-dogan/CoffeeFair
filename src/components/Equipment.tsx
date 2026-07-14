import { motion } from "motion/react";

const equipmentList = [
  {
    category: "Espresso Machines",
    items: ["VBM Lollo", "La Marzocco", "Magister"],
    image: `${import.meta.env.BASE_URL}images/equipment-espresso.png`,
  },
  {
    category: "Filter Coffee & Automatic",
    items: ["KEF", "Myco", "Jura X3", "Jura X8c"],
    image: `${import.meta.env.BASE_URL}images/equipment-auto.png`,
  },
  {
    category: "Grinders",
    items: ["Cunill", "Mahlkönig"],
    image: `${import.meta.env.BASE_URL}images/equipment-grinder.png`,
  }
];

export function Equipment() {
  return (
    <section id="equipment" className="py-32 px-6 md:px-12 bg-[#FAF9F6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Premium Hardware</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-brand-text)] mb-6">Our <span className="italic">Equipment</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto tracking-wide text-sm font-light leading-relaxed">
            We use only the finest, industry-leading machinery to guarantee the perfect extraction and brewing process for every single cup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {equipmentList.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden aspect-[4/5] mb-8 bg-stone-200 rounded-sm">
                <img 
                  src={group.image} 
                  alt={group.category} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-brand-text)] mb-4">{group.category}</h3>
              <ul className="flex flex-col gap-2">
                {group.items.map(item => (
                  <li key={item} className="text-stone-500 font-light text-xs tracking-wide flex items-center justify-between border-b border-stone-200/60 pb-1">
                    <span>{item}</span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-brand-accent)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

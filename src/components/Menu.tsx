import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    id: "coffee",
    title: "Espresso & Coffee",
    color: "bg-stone-200",
    flavorNotes: "Rich, bold, and full-bodied with notes of dark chocolate and caramel.",
    customizations: "Available hot or iced. Milk options: Whole, Oat, Almond, Soy.",
    items: [
      "Espresso", "Ristretto", "Lungo", "Doppio", "Americano", 
      "Cappuccino", "Caffè Latte", "Latte Macchiato", "Filter Coffee", "Turkish Coffee", "Cold Brew"
    ]
  },
  {
    id: "cold",
    title: "Cold Beverages",
    color: "bg-stone-300",
    flavorNotes: "Refreshing and crisp, made with natural fruit extracts and botanicals.",
    customizations: "Sugar-free syrups available. Can be served with sparkling or still water.",
    items: [
      "Lemonade", "Basil Syrup", "Black Mulberry", "Detox Water", "Fresh Juices", "Sparkling Water", "Mineral Water"
    ]
  },
  {
    id: "tea",
    title: "Artisanal Tea",
    color: "bg-[#8B7E74]/10",
    borderColor: "border-[#8B7E74]/20",
    flavorNotes: "Delicate and aromatic loose leaf teas sourced from organic gardens.",
    customizations: "Served hot or over ice. Sweeten with honey or raw sugar.",
    items: [
      "Traditional Turkish Tea", "Herbal Teas", "Green Tea"
    ]
  }
];

export function Menu() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="menu" className="py-32 px-6 md:px-12 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">The Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-brand-text)] mb-6">Our Products & <span className="italic">Services</span></h2>
          <p className="text-stone-500 max-w-2xl tracking-wide text-sm font-light leading-relaxed">
            A curated selection of premium beverages to satisfy every palate at your corporate event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-start">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Color Block Header */}
              <div 
                className={`w-full min-h-[8rem] flex flex-col items-center justify-center p-6 mb-8 ${cat.color} ${cat.borderColor ? `border ${cat.borderColor}` : ''} rounded-sm cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300`}
                onClick={() => toggleCategory(cat.id)}
              >
                <div className="flex items-center justify-between w-full">
                   <div className="w-4 h-4"></div> {/* Spacer for centering */}
                   <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-brand-text)] text-center">{cat.title}</h3>
                   {expandedId === cat.id ? <Minus className="w-4 h-4 text-stone-500" /> : <Plus className="w-4 h-4 text-stone-500" />}
                </div>
                
                <AnimatePresence>
                  {expandedId === cat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden text-center"
                    >
                      <div className="w-8 h-px bg-stone-400/30 mx-auto mb-4"></div>
                      <p className="text-xs text-stone-600 font-light italic mb-3 leading-relaxed">
                        {cat.flavorNotes}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-brand-accent)] font-medium">
                        {cat.customizations}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Menu Items */}
              <ul className="flex flex-col gap-2 w-full px-4 text-xs">
                {cat.items.map(item => (
                  <li key={item} className="flex justify-between border-b border-stone-100 pb-2 text-stone-600 font-light">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cups Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-[var(--color-brand-bg)] border border-stone-200 rounded-sm p-12 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="lg:w-1/2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Custom Branding</h4>
            <h3 className="text-3xl font-serif text-[var(--color-brand-text)] mb-4">Custom Presentation</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
              We offer various cup sizes (4 oz, 7 oz, 8 oz, 14 oz) including printed and unprinted cardboard cups, as well as clear cups for cold beverages.
            </p>
            <p className="text-[11px] tracking-widest text-[var(--color-brand-accent)] uppercase border-l border-[var(--color-brand-accent)] pl-4">
              * Custom company logo printed cups must be ordered at least 3 weeks in advance.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center gap-6">
            <div className="bg-stone-200 rounded-sm p-2 w-48 aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=600" 
                alt="Custom coffee cups" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="bg-stone-200 rounded-sm p-2 w-48 aspect-square hidden md:flex items-center justify-center overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600" 
                alt="Cold beverage cups" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

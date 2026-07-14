import { motion } from "motion/react";

const services = [
  {
    title: "Custom Coffee Roasting",
    description: "We carefully select green coffee beans from various regions around the world and roast them with precision to create flavors tailored specifically for you.",
    image: `${import.meta.env.BASE_URL}images/services-roasting.png`,
    reverse: false,
  },
  {
    title: "Fair & Corporate Event Catering",
    description: "Bring the cafe experience to your events. Our professional baristas serve exceptional espresso-based drinks, filter coffee, and more, ensuring a memorable experience for your guests.",
    image: `${import.meta.env.BASE_URL}images/services-catering.png`,
    reverse: true,
  },
  {
    title: "Custom Stand Design",
    description: "We design and decorate coffee stands that align perfectly with your brand identity, providing a cohesive and premium look for your corporate presence.",
    image: `${import.meta.env.BASE_URL}images/services-stand.png`,
    reverse: false,
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[var(--color-brand-bg)] watermark-bg relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-brand-text)] mb-6">Who We Are & <span className="italic">What We Do</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto tracking-wide text-sm font-light leading-relaxed">
            Special flavors, special tastes. We deliver an end-to-end premium coffee catering service.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl relative group shadow-sm"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Text Container */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col items-start lg:px-8"
              >
                <span className="text-[12px] tracking-[0.2em] text-[var(--color-brand-accent)] uppercase font-bold mb-4">0{index + 1}</span>
                <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-text)] mb-6">{service.title}</h3>
                <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>
                <div className="w-12 h-px bg-[var(--color-brand-accent)]" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white border-t border-stone-200">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4 block">Inquiry</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-brand-text)] mb-6">Contact <span className="italic">Us</span></h2>
          <p className="text-stone-500 max-w-xl mx-auto tracking-wide text-sm font-light leading-relaxed">
            Ready to elevate your next corporate event? Provide your details below and our team will get in touch to design a custom coffee experience.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 bg-[var(--color-brand-bg)] p-8 md:p-12 rounded-sm border border-stone-200"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Name</label>
              <input type="text" id="name" className="border-b border-stone-300 bg-transparent py-2 px-0 text-sm font-light focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-stone-300" placeholder="Your Name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Company</label>
              <input type="text" id="company" className="border-b border-stone-300 bg-transparent py-2 px-0 text-sm font-light focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-stone-300" placeholder="Your Company" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="startDate" className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Event Start Date</label>
              <input type="date" id="startDate" className="border-b border-stone-300 bg-transparent py-2 px-0 text-sm font-light focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors text-stone-500" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="endDate" className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Event End Date (Optional)</label>
              <input type="date" id="endDate" className="border-b border-stone-300 bg-transparent py-2 px-0 text-sm font-light focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors text-stone-500" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">Message</label>
            <textarea id="message" rows={4} className="border-b border-stone-300 bg-transparent py-2 px-0 text-sm font-light focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-stone-300 resize-none" placeholder="Tell us about your event requirements..." />
          </div>
          
          <div className="flex justify-center mt-4">
            <button type="submit" className="flex items-center gap-3 px-10 py-4 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] text-xs uppercase tracking-widest hover:bg-[var(--color-brand-accent)] transition-colors cursor-pointer group">
              Send Inquiry <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

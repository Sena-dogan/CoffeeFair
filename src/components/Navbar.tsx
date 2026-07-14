import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const links = [
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Equipment", href: "#equipment" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-sm border-b border-stone-200/60 transition-all duration-300">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-brand-accent)] origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-accent)] flex items-center justify-center">
            <div className="w-1.5 h-4 bg-[var(--color-brand-accent)] rotate-12 transition-transform group-hover:rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic text-lg tracking-tight">Coffee Fair <span className="font-sans not-italic text-sm font-light uppercase tracking-widest opacity-60 ml-1">and more</span></span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-[var(--color-brand-text)] hover:text-[var(--color-brand-accent)] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[var(--color-brand-accent)] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-[var(--color-brand-text)]" /> : <Menu className="w-6 h-6 text-[var(--color-brand-text)]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-brand-bg)] border-b border-stone-200/60 py-6 px-6 flex flex-col gap-6 shadow-xl"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="flex flex-col gap-6"
            >
              {links.map((link) => (
                <motion.a
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-brand-text)] hover:text-[var(--color-brand-accent)]"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

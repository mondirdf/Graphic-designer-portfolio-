import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
    >
      <GlassCard className="px-5 py-9 text-center sm:px-6 md:px-12 md:py-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted md:text-xs">Contact</p>
        <h3 className="mt-3 text-3xl tracking-tight md:text-5xl">Let’s build something timeless.</h3>
        <a
          href="mailto:hello@ariavoss.design"
          className="mt-6 inline-block text-lg text-text transition-all duration-300 hover:scale-105 hover:opacity-70 md:text-xl"
        >
          hello@ariavoss.design
        </a>
        <div className="mt-8 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.24em] text-muted md:gap-6 md:text-xs">
          <a href="#" className="transition-all duration-300 hover:scale-105 hover:text-text">
            Behance
          </a>
          <a href="#" className="transition-all duration-300 hover:scale-105 hover:text-text">
            Dribbble
          </a>
          <a href="#" className="transition-all duration-300 hover:scale-105 hover:text-text">
            Instagram
          </a>
        </div>
      </GlassCard>
    </motion.section>
  );
}

export default Contact;

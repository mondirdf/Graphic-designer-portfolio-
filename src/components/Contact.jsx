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
      <GlassCard className="px-6 py-10 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Contact</p>
        <h3 className="mt-3 text-3xl tracking-tight">Let’s build something timeless.</h3>
        <a
          href="mailto:hello@ariavoss.design"
          className="mt-6 inline-block text-lg text-text transition-opacity duration-300 hover:opacity-70"
        >
          hello@ariavoss.design
        </a>
        <div className="mt-7 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted">
          <a href="#" className="transition-colors duration-300 hover:text-text">
            Behance
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-text">
            Dribbble
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-text">
            Instagram
          </a>
        </div>
      </GlassCard>
    </motion.section>
  );
}

export default Contact;

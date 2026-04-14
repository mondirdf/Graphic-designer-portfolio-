import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
    >
      <GlassCard className="grid gap-7 p-5 sm:p-6 md:grid-cols-[220px_1fr] md:gap-10 md:p-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80&sat=-100"
            alt="Portrait of Aria Voss"
            className="h-full w-full object-cover grayscale opacity-80 transition-transform duration-500 ease-premium hover:scale-105"
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted md:text-xs">About</p>
          <h3 className="mt-3 text-2xl tracking-tight md:text-4xl">Precision-led creative direction.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            I build visual systems that merge editorial elegance with modern digital interfaces. My
            process balances strategic clarity and emotive design, delivering work that feels calm,
            intentional, and instantly recognizable.
          </p>
        </div>
      </GlassCard>
    </motion.section>
  );
}

export default About;

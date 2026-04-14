import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      className="flex min-h-[72vh] flex-col items-center justify-center text-center md:min-h-[78vh]"
      id="top"
    >
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted md:text-xs"
      >
        Graphic Designer · Visual Systems
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl text-[clamp(2.6rem,9vw,7.7rem)] font-semibold leading-[0.87] tracking-tight"
      >
        Aria Voss Crafting Monochrome Digital Experiences
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base"
      >
        Premium visual identities, art direction, and product storytelling shaped through precision,
        restraint, and depth.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        href="#work"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-xs uppercase tracking-[0.24em] text-text shadow-[0_18px_35px_rgba(0,0,0,0.45)] transition-all duration-500 ease-premium hover:scale-[1.03] hover:shadow-glow"
      >
        View Work
        <span className="transition-transform duration-500 ease-premium group-hover:translate-x-1">→</span>
      </motion.a>
    </section>
  );
}

export default Hero;

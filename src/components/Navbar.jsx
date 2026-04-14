import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const links = ['Work', 'About', 'Contact'];

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-4 z-40 md:top-5"
    >
      <GlassCard className="mx-auto flex w-full items-center justify-between px-4 py-3 md:px-7 md:py-4">
        <p className="text-[11px] uppercase tracking-[0.32em] text-text md:text-sm">Noir Studio</p>
        <nav className="flex items-center gap-3 md:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.24em] text-muted transition-all duration-300 hover:scale-105 hover:text-text md:text-xs"
            >
              {link}
            </a>
          ))}
        </nav>
      </GlassCard>
    </motion.header>
  );
}

export default Navbar;

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const links = ['Work', 'About', 'Contact'];

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-5 z-40"
    >
      <GlassCard className="mx-auto flex w-full items-center justify-between px-5 py-4 md:px-7">
        <p className="text-sm uppercase tracking-[0.28em] text-text">Noir Studio</p>
        <nav className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-text"
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

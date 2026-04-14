import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

function WorkCard({ item, className = '' }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <GlassCard className="group h-full">
        <div className="relative h-full min-h-[240px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover grayscale transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-white/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.category}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-text">{item.title}</h3>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

export default WorkCard;

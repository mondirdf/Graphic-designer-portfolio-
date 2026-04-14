import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

function WorkCard({ item, className = '' }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <GlassCard className="group h-full hover:shadow-[0_0_40px_rgba(255,255,255,0.08),0_26px_60px_rgba(0,0,0,0.62)]">
        <div className="relative h-full min-h-[240px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover grayscale opacity-75 transition-all duration-500 ease-premium group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-white/5 opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted md:text-xs">{item.category}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-text md:text-xl">{item.title}</h3>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

export default WorkCard;

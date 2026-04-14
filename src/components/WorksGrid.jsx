import { motion } from 'framer-motion';
import WorkCard from './WorkCard';

const works = [
  {
    title: 'Obsidian Brand System',
    category: 'Identity',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80&sat=-100',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Editorial Noir',
    category: 'Editorial',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Monolith Packaging',
    category: 'Packaging',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Lumen Interface',
    category: 'UI Direction',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'md:col-span-2 md:row-span-1',
  },
];

const container = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function WorksGrid() {
  return (
    <section id="work" className="scroll-mt-28">
      <div className="mb-9 flex items-end justify-between">
        <h2 className="text-3xl tracking-tight md:text-5xl">Selected Works</h2>
        <p className="hidden text-sm uppercase tracking-[0.28em] text-muted md:block">2026</p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:auto-rows-[250px] md:grid-cols-3 md:gap-6"
      >
        {works.map((project) => (
          <motion.div key={project.title} variants={item} className={project.span}>
            <WorkCard item={project} className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorksGrid;

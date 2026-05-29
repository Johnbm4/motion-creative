import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectGrid() {
  return (
    <section className="py-32 px-10 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="text-[10px] tracking-[0.2em] text-gray-700 uppercase mb-16"
      >
        Selected Work
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              ease: 'easeInOut',
            }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden border border-gray-900 mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0"
              />
            </div>

            <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase block mb-3">
              {project.category}
            </span>

            <h3 className="text-2xl font-light tracking-tight group-hover:text-gray-300 transition-colors duration-500">
              {project.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

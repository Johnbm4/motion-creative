import { motion } from 'framer-motion';

const branches = [
  { name: 'Production', desc: 'Cinematic Storytelling' },
  { name: 'Events', desc: 'Immersive Experiences' },
  { name: 'Marketing', desc: 'Strategic Communication' },
  { name: 'Technology', desc: 'Future-focused Innovation' }
];

export default function Ecosystem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-32 px-10 max-w-7xl mx-auto">
      {branches.map((branch, index) => (
        <motion.div 
          key={branch.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
          className="border-t border-gray-900 pt-8 group cursor-pointer"
        >
          {/* Consistent typography and spacing for all branches */}
          <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase block mb-4">
            0{index + 1}
          </span>
          <h2 className="text-4xl font-light tracking-tight group-hover:text-gray-300 transition-colors duration-500">
            {branch.name}
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed max-w-sm">
            {branch.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
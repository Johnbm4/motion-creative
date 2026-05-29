import Layout from './components/layout';
import Ecosystem from './components/Ecosystem';
import ProjectGrid from './components/ProjectGrid';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <Layout>
      <section className="h-[80vh] flex flex-col justify-center items-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-8xl tracking-tighter">MOTION</motion.h1>
      </section>
      <Ecosystem />
      <ProjectGrid />
    </Layout>
  );
}
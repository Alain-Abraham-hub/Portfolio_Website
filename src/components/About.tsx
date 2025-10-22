import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Zap, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Architecting robust data pipelines and infrastructure"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and computational paradigms"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent systems and predictive models"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow-cyan">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mb-12 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Hi, I’m Alain — a curious mind exploring the intersection of data engineering, artificial intelligence, and quantum computing.

I’m passionate about building systems that merge classical logic with the emerging power of quantum information. From data pipelines to intelligent algorithms, my work focuses on transforming complexity into clarity through technology.

I enjoy creating projects that bridge innovation and practicality — whether it’s designing data architectures, experimenting with quantum algorithms
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              When I’m not coding, you’ll find me learning about how quantum principles can inspire smarter, more secure digital systems — or just tinkering with futuristic design ideas.

My goal is simple: to craft solutions that aren’t just efficient today, but ready for the next era of computation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="group glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-violet-600/10 hover:to-cyan-600/10 transition-all duration-300 border border-transparent hover:border-violet-500/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-violet-600/20 to-cyan-600/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-glow-cyan transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

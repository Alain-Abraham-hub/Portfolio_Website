import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Molecule Ground State Finder",
      description: "Using the Qiskit module in python to create a enhanced VQE algorithm to find the Ground state of molecule",
      tags: ["Python", "Qiskit", "Quantum Computing","GroundStateFinder"],
      github: "https://github.com/Kukyos/GroundStateFinder.git"
    },
    {
      title: "QKernels4Molecules",
      description: "Exploring quantum-inspired feature maps and graph kernels for molecular machine learning.",
      tags: ["Python","Qiskit", "Dwave", "QML"],
      github: "https://github.com/Alain-Abraham-hub/QKernels4Molecules.git"
    },
    {
      title: "Air-pollution-forecast",
      description: "Short term forecast of gaseous air pollutants (ground-level O3 and NO2) using satellite and reanalysis data",
      tags: ["Jupyter notebook", "Python", "Numpy", "Scipy", "HybridMLmodels"],
      github: "https://github.com/Alain-Abraham-hub/Air-pollution-forecast.git"
    },
    {
      title: "AgriRiskShield",
      description: "A AIML prediction programme to protect oilseed farmers from fluctuating markets by predicting market patterns and simulating sales to teach and securing buy and sell using blockchain",
      tags: ["Python", "Pytorch", "Machine learning", "Blockchain"],
      github: "https://github.com/Alain-Abraham-hub/AgriRiskShield.git"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-violet-600/10 hover:to-cyan-600/10 transition-all duration-300 border border-transparent hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-violet-600/20 to-cyan-600/20 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-cyan-400" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow-cyan transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30 group-hover:bg-violet-600/30 group-hover:border-violet-500/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-violet-600/50 to-cyan-600/50 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-violet-600 hover:to-cyan-600">
                 
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

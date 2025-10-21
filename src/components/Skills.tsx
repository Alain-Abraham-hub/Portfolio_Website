import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Java"]
    },
    {
      category: "Data Engineering",
      skills: ["Apache Spark", "Airflow", "Kafka", "Snowflake", "dbt", "ETL Pipelines"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
    },
    {
      category: "Quantum Computing",
      skills: ["Qiskit", "Quantum Algorithms", "Quantum ML", "D-Wave", "Cirq"]
    },
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "MLOps"]
    },
    {
      category: "Web & Frameworks",
      skills: ["React", "Node.js", "FastAPI", "Streamlit", "Next.js", "Flask"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow-cyan">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-violet-600/5 hover:to-cyan-600/5 transition-all duration-300 border border-transparent hover:border-violet-500/30"
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      className="group px-4 py-2 rounded-lg glass-effect text-sm font-medium text-gray-300 hover:text-white border border-violet-500/20 hover:border-cyan-500/50 hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-cyan-600/20 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 glass-effect rounded-xl p-8 text-center"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Continuously learning and expanding my skill set at the intersection of
              <span className="text-violet-400 font-semibold"> quantum computing</span>,
              <span className="text-cyan-400 font-semibold"> data engineering</span>, and
              <span className="text-violet-400 font-semibold"> artificial intelligence</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

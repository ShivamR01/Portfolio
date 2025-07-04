import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 50, color: 'from-blue-600 to-indigo-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-pink-500 to-red-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-cyan-500' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Python-flask', level: 70, color: 'from-yellow-500 to-orange-500' },
        { name: 'Express.js', level: 90, color: 'from-red-600 to-orange-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-lime-600' },
        { name: 'MySQL', level: 70, color: 'from-indigo-700 to-blue-700' },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80, color: 'from-zinc-500 to-zinc-700' },
        { name: 'GitHub', level: 70, color: 'from-blue-400 to-blue-700' },
        { name: 'AWS', level: 40, color: 'from-orange-400 to-yellow-400' },
        { name: 'AI Tools', level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Postman', level: 82, color: 'from-gray-600 to-black' },
      ]
    },
     {
      category: 'Programming languages',
      skills: [
        { name: 'JAVA', level: 80, color: 'from-zinc-500 to-zinc-700' },
        { name: 'Python', level: 70, color: 'from-blue-400 to-blue-700' },
        { name: 'C', level: 70, color: 'from-orange-400 to-yellow-400' },
        { name: 'C++', level: 55, color: 'from-purple-500 to-pink-500' },
      ]
    }
  ];

  return (
    <section id="technologies" ref={sectionRef} className="py-24 bg-[#0d1117] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies & <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of the technologies I work with and my proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((category, categoryIndex) => (
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={false}
              scale={1.05}
              key={category.category}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.3, duration: 0.7 }}
                className="bg-[#1f242a] rounded-2xl p-8 shadow-xl border border-[#2d3748] backdrop-blur-md"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shimmer`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                          transition={{
                            delay: (categoryIndex * 0.3) + (skillIndex * 0.1),
                            duration: 1
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[
              'React', 'Node.js', 'Express.js','Python','Flask', 'JavaScript', 'TypeScript',
              'MongoDB', 'MySql', 'AWS', 'Github', 'Git','RESTAPI'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-5 py-2 bg-[#161b22] text-sm font-medium text-gray-300 border border-gray-700 rounded-full shadow hover:shadow-lg hover:text-white hover:bg-[#1f2937] transition-all duration-300"
                whileHover={{ scale: 1.15 }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Technologies;

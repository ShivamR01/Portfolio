import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'PLANETCODE -Edtech Platform ',
      description: 'An interactive EdTech platform built with modern web technologies. PlanetCode offers coding tutorials, quizzes, and progress tracking for learners. Features include user authentication, course modules, leaderboard, and responsive UI.',
      image: '/assests/Planetcode.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'RESTful API', 'JWT','Websocket','Tailwindcss','Razorpay'],
      githubUrl: 'https://github.com/ShivamR01/PlanetCode-Edtech-project',
      liveUrl: 'https://planetcode.vercel.app/',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'REALCODER - Blogging',
      description: 'A full-featured blogging application built for developers. RealCoder allows users to create, edit, and share technical blogs. Features include user authentication, rich text editor, post categories, comments, and a responsive design.',
      image: '/assests/Realcoder.png',
      technologies: ['Python', 'Flask', 'Bootstrap', 'API', 'SQLite'],
      githubUrl: 'https://github.com/ShivamR01/realcoder',
      liveUrl: 'https://therealcoders.pythonanywhere.com/',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'WEBKRAFTERY',
      description: 'A creative portfolio and web services platform showcasing modern web design and development projects. WebKraftery features smooth animations, project showcases, contact form integration, and a responsive, visually engaging UI.',
      image: '/assests/Webkraftery.png',
      technologies: ['React', 'Node.js', 'Express.js', 'Websocket', 'Vanta.js','tailwindcss'],
      githubUrl: 'https://github.com/WebKraftry/WebKraftry',
      liveUrl: 'https://webkraftery.vercel.app/',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Live Cricket Score Tracker',
      description: 'A real-time cricket score tracking application that provides live match updates, player stats, and scorecards. Features include match filtering, team details, responsive UI, and live data integration for an engaging user experience.',
      image: '/assests/LiveCricket.png',
      technologies: ['React', 'Node.Js', 'Typescript', 'Cric API','tailwindcss'],
      githubUrl: 'https://github.com/ShivamR01/cricket-score-ticker-react',
      liveUrl: '#',
      gradient: 'from-cyan-500 to-blue-600'
    },
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#161b22]">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
                      {/* Image */}
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl transform rotate-2 group-hover:rotate-6 transition-transform duration-300`} />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="relative w-full h-80 object-fit rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-300"
                        />
                      </div>

                      {/* Info */}
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium shadow-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 font-medium"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            Code
                          </a>
                          <a
                            href={project.liveUrl}
                            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-md hover:shadow-xl hover:scale-110 transition"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-md hover:shadow-xl hover:scale-110 transition"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProject(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentProject
                    ? `bg-gradient-to-r ${projects[currentProject].gradient}`
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-400 font-medium">
              {currentProject + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

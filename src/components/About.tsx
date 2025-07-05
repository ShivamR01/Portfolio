import React, { useState, useEffect, useRef } from 'react';
import { Code, BookOpen, Trophy, Users, Code2Icon, CodeIcon, CodeSquare, ShieldClose, ShieldAlert, TornadoIcon } from 'lucide-react';
import LeetCodeProfileCard from './core/LeetCodeProfileCard';
import HackerRankProfileCard from './core/HackerRankProfileCard';

const About = () => {
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: BookOpen, label: 'Technologies Learned', value: '10+' },
    { icon: Trophy, label: 'Hackathons/Coding Competions', value: '5+' },
    { icon: Users, label: 'Team Projects', value: '5+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{' '}
              <span className="text-cyan-500">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             Computer Science student with a deep interest in algorithms, software development, and creating practical, innovative applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-[#161b22] p-8 shadow-2xl">
                  <img
                    src="/assests/photo.jpg"
                    alt="Shivam Kumar"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-600 rounded-xl opacity-60" />
              </div>
            </div>

            {/* About Content */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  I'm currently in my final year of Computer Science, where I've developed a deep passion for 
                  software development and emerging technologies. My journey began with curiosity about how 
                  things work behind the screen, and it has evolved into a commitment to creating meaningful 
                  digital experiences.
                </p>
                <p>
                  Throughout my academic career, I've worked on various projects ranging from web applications 
                  to machine learning models. I believe in the power of technology to solve real-world problems 
                  and am always eager to learn new skills and take on challenging projects.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest tech trends, participating in 
                  hackathons, or collaborating with fellow developers on open-source projects.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-[#1f2937] border border-[#2d3748] hover:border-cyan-400 
                  rounded-xl transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* LeetCode Card */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {/* <LeetCodeProfileCard/>
            <HackerRankProfileCard/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

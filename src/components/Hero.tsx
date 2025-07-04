import React from 'react';
import VantaBackground from './VantaBackground';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <VantaBackground>
      <section id="home" className="flex items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm{' '}
            <span className="text-blue-400 tracking-wide">
              Shivam Kumar
            </span>
            <br />
            <span className="text-xl md:text-2xl font-light text-gray-400 mt-2 block">
              <span className="text-white font-medium">Building</span> experiences through{' '}
              <span className="text-purple-300 font-semibold">code</span> & design.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            A final-year <span className="text-white font-medium">Computer Science</span> student driven by a
            passion for <span className="text-white font-medium">innovation</span>. Exploring the realms of{' '}
            <span className="text-purple-300 font-semibold">web development</span>,{' '}
            <span className="text-blue-300 font-semibold">Software development</span>, and scalable digital solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com/shivamr01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/shivamR01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:shivamkumarmain2@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-white/30 text-white hover:text-purple-300 hover:border-purple-500 transition-all duration-300 rounded-full shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/40" />
          </div>
        </div>
      </section>
    </VantaBackground>
  );
};

export default Hero;


import React from 'react';
import { Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Android Engineer</span>
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Building the Future
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Hi, I'm <span className="font-semibold text-gray-900">Moataz Badawy</span> — 
              I craft impactful mobile applications with focus on delivering high-quality, 
              maintainable, and testable code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="https://drive.google.com/file/d/174zeTt-uw-K9WKzBCtvnZR0zhdjqzocn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/MoatazBadawy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                <Github size={24} />
              </div>
              <span className="font-medium">GitHub Portfolio</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://www.linkedin.com/in/moataz-badawy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                <Linkedin size={24} />
              </div>
              <span className="font-medium">Let's Connect</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities, collaborations, 
              or just connecting with fellow developers.
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="mailto:moataz.egy101@gmail.com" 
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a 
                href="https://github.com/MoatazBadawy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-white hover:text-white transition-colors"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="https://github.com/MoatazBadawy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/moataz-badawy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:moataz.egy101@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Moataz Badawy
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Moataz Badawy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
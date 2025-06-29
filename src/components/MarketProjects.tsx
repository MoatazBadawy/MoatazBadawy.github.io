import React from 'react';
import { Download, Users, Star } from 'lucide-react';

const MarketProjects = () => {
  const projects = [
    {
      title: "Sunset Hadith",
      description: "Islamic app providing immersive experiences through videos, book access, background exploration, and wallpaper settings. It also aims to learn about the biography of the Prophet Muhammad through articles. With 100,000 downloads and a 4.8-star rating, it ranked among the most popular lifestyle apps in Egypt in February 2024.",
      stats: "100K+ Installs",
      badge: "Top app in Egypt",
      technologies: ["Kotlin", "MVVM", "Room Database", "Retrofit"],
      gradient: "from-orange-500 to-pink-500",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.moataz.afternoonhadeeth&hl=en_US"
    },
    {
      title: "Radio Quran",
      description: "The world's first all-in-one Quran app — stream, listen, and watch anytime, anywhere. Built with modern Android architecture and will be published on the first of next Nov.",
      stats: "Coming Soon",
      badge: "November 2025",
      technologies: ["Kotlin", "Retrofit", "OKHttp", "Coroutines", "Flow", "Dagger-Hilt", "Room Database", "Work-manager", "Media3-ExoPlayer", "MVVM", "Clean Architecture", "Modularization"],
      gradient: "from-green-500 to-blue-500",
      playStoreLink: null
    }
  ];

  return (
    <section id="market-projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Things I've Built
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I have built some impactful apps, with focus on delivering high-quality, 
            maintainable, and testable code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-blue-600 font-semibold">
                      <Users size={16} />
                      {project.stats}
                    </span>
                    <span className="flex items-center gap-1 text-orange-600 font-semibold">
                      <Star size={16} />
                      {project.badge}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.playStoreLink ? (
                    <a 
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Download size={16} />
                      Google Play
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                      <Download size={16} />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketProjects;
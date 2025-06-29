import React from 'react';
import { Github, Star, GitFork, Code, Database, Smartphone } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      title: "Kotrin-KMP",
      description: "A simple wallpaper app built with Kotlin Multiplatform to target iOS and Android, selected by JetBrains as one of the top apps in the KotlinConf 2025 contest for recent graduates.",
      technologies: ["Kotlin Multiplatform (KMP)", "Ktor", "Koin", "Jetpack Compose", "MVVM"],
      icon: Smartphone,
      color: "blue",
      stars: 27,
      forks: 2,
      githubLink: "https://github.com/MoatazBadawy/Kotrin-KMP"
    },
    {
      title: "Mawaqeet", 
      description: "Your Ultimate To-Do and Habits Companion! Get ready to immerse yourself in a sleek and intuitive user interface, where functionality meets style, built with the latest technologies and architectural paradigms.",
      technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Coroutines", "Flow", "Dagger-Hilt", "MVVM", "Clean Architecture"],
      icon: Smartphone,
      color: "teal",
      stars: 34,
      forks: 4,
      githubLink: "https://github.com/MoatazBadawy/Mawaqeet-Todo_and_Habits"
    },
    {
      title: "Meow-Media",
      description: "A social media application for cat lovers, featuring image sharing and real-time chat connected with FCM to provide a comprehensive social networking experience.",
      technologies: ["Kotlin", "Retrofit", "OkHttp", "Jetpack Compose", "ML-Kit", "FCM", "Room Database", "Coroutines", "Flow", "Dagger-Hilt", "MVVM", "Clean Architecture"],
      icon: Smartphone,
      color: "orange",
      stars: 5,
      forks: 3,
      githubLink: "https://github.com/meow-family/Meow-Media"
    },
    {
      title: "Phood",
      description: "Recipes app contains many features like a screen with different recipe types, a Favourites Screen, a Search For Recipes, a Recipe Details Screen that handles a save state button, and Offline Caching to display data without the internet. This application was a task assigned to me by a multinational company based in Egypt.",
      technologies: ["Kotlin", "Retrofit", "OkHttp", "Media3-ExoPlayer", "JUnit5", "Room Database", "Coroutines", "Flow", "Dagger-Hilt", "MVVM", "Clean Architecture"],
      icon: Smartphone,
      color: "purple",
      stars: 4,
      forks: 1,
      githubLink: "https://github.com/MoatazBadawy/Phood"
    }
  ];

  const contributing = {
    title: "TravelApp-KMP",
    description: "An interactive exploration kotlin Multiplatform app spotlighting global countries and landmarks, Currently this app has Android, iOS, Web, and Desktop parts and is 100% Compose UI.",
    technologies: ["Kotlin Multiplatform (KMP)", "Jetpack Compose", "Ktor"],
    stars: 615,
    forks: 91,
    githubLink: "https://github.com/SEAbdulbasit/TravelApp-KMP"
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      teal: "from-teal-500 to-teal-600 bg-teal-50 text-teal-600 border-teal-200", 
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="open-source" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Open Source
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I enjoy building open source projects alongside my own applications to share my knowledge 
            with the developer community and showcase my coding skills to potential employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white mb-4`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <GitFork size={14} />
                    <span className="text-sm font-medium">{project.forks}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contributing Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contributing</h3>
            <p className="text-gray-600">
              In addition to developing personal projects, I actively collaborate with other developers 
              to enhance my skills and gain insights from their expertise.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl">
                <Code size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{contributing.title}</h4>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-medium">{contributing.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <GitFork size={14} />
                    <span className="text-sm font-medium">{contributing.forks}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{contributing.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {contributing.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={contributing.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
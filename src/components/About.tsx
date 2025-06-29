import React from 'react';
import { Code, Smartphone, Database, Users, Award, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Kotlin", level: 95 },
    { name: "Android Development", level: 90 },
    { name: "Jetpack Compose", level: 85 },
    { name: "Clean Architecture", level: 90 },
    { name: "MVVM Pattern", level: 88 },
    { name: "Room Database", level: 82 },
    { name: "Retrofit & OkHttp", level: 85 },
    { name: "Coroutines & Flow", level: 87 }
  ];

  const highlights = [
    {
      icon: Users,
      title: "100K+ Users",
      description: "Reached over 100,000 users with Sunset Hadith app",
      color: "blue"
    },
    {
      icon: Award,
      title: "Top App in Egypt",
      description: "Achieved top ranking in lifestyle category on Google Play",
      color: "green"
    },
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Focus on maintainable, testable, and high-quality code",
      color: "purple"
    },
    {
      icon: Target,
      title: "Modern Architecture",
      description: "Expert in MVVM, Clean Architecture, and modularization",
      color: "orange"
    }
  ];

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Android Engineer dedicated to creating impactful mobile experiences 
            with modern technologies and architectural best practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Professional Story */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As an Android Engineer, I specialize in building robust, scalable mobile applications 
                  that serve real user needs. My approach combines clean architecture principles with 
                  modern Android development practices to deliver maintainable and testable code.
                </p>
                <p>
                  I've successfully launched applications that have reached hundreds of thousands of users, 
                  including Sunset Hadith which became one of the top lifestyle apps in Egypt with over 
                  100K installs and a 4.8-star rating. My focus is always on creating solutions that not only work well but 
                  also provide exceptional user experiences.
                </p>
                <p>
                  Beyond building my own applications, I actively contribute to open source projects 
                  and share knowledge with the developer community. I believe in continuous learning 
                  and staying current with the latest technologies and best practices in Android development.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${getIconBgColor(highlight.color)} mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Technical Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Technical Philosophy</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-3 bg-white rounded-xl inline-flex mb-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Clean Code</h4>
                <p className="text-gray-600 text-sm">
                  Writing maintainable, readable code that follows SOLID principles and best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-white rounded-xl inline-flex mb-4">
                  <Smartphone size={24} className="text-teal-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">User-Centric</h4>
                <p className="text-gray-600 text-sm">
                  Building applications that prioritize user experience and solve real-world problems.
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-white rounded-xl inline-flex mb-4">
                  <Database size={24} className="text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Scalable Architecture</h4>
                <p className="text-gray-600 text-sm">
                  Implementing robust architectures that can grow and adapt with changing requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
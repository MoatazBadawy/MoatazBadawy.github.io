import React from 'react';
import { BookOpen } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "How WhatsApp scaled to 1 billion users with only 50 engineers",
      description: "An insightful deep dive into WhatsApp's engineering principles and architectural decisions that enabled massive scale with minimal team size.",
      category: "Scaling",
      readTime: "8 min read",
      color: "green",
      link: "https://blog.quastor.org/p/whatsapp-scaled-1-billion-users-50-engineers"
    },
    {
      title: "The Engineering behind Instagram's Recommendation Algorithm", 
      description: "Exploring the technical infrastructure and machine learning systems that power Instagram's content discovery and recommendation engine.",
      category: "Machine Learning",
      readTime: "12 min read", 
      color: "purple",
      link: "https://blog.quastor.org/p/engineering-behind-instagrams-recommendation-algorithm"
    },
    {
      title: "How OpenAI trained ChatGPT",
      description: "Understanding the training methodology, infrastructure, and engineering challenges behind one of the most advanced language models.",
      category: "AI/ML",
      readTime: "15 min read",
      color: "blue",
      link: "https://blog.quastor.org/p/openai-trained-chatgpt"
    },
    {
      title: "The Big Difference Between Flows and Channels in Kotlin",
      description: "A comprehensive comparison of Kotlin's Flow and Channel APIs, helping developers choose the right reactive programming approach.",
      category: "Kotlin",
      readTime: "6 min read",
      color: "orange",
      link: "https://medium.com/better-programming/stop-calling-kotlin-flows-hot-and-cold-48e87708d863"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200", 
      orange: "bg-orange-100 text-orange-700 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tech Articles I Loved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated insights from the tech industry that have shaped my understanding 
            of engineering excellence and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(article.color)}`}>
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center">
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <BookOpen size={16} />
                    <span>Read Article</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            These articles represent the kind of engineering thinking and technical depth 
            that inspires my work and continuous learning journey.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Reading List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
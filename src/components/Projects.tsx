
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ekalavya App",
      description: "Mobile application built with C#, .NET, and MongoDB for educational purposes",
      tech: ["C#", ".NET", "MongoDB"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Mini Cab Booking Portal",
      description: "Full-stack cab booking system with Java backend and SQL database with GUI interface",
      tech: ["Java", "SQL", "GUI"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Human Activity Recognition",
      description: "Deep learning solution using neural networks for human activity pattern recognition",
      tech: ["Deep Learning", "Neural Networks", "Python"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Breast Cancer Analysis",
      description: "Medical image analysis using segmentation and classification algorithms",
      tech: ["Image Processing", "Classification", "Python"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Database Optimization",
      description: "Performance optimization project using Python and SQL for large-scale data processing",
      tech: ["Python", "SQL", "Optimization"],
      gradient: "from-pink-600 to-red-600"
    },
    {
      title: "Anomaly Detection System",
      description: "Online proctoring privacy solution with advanced anomaly detection capabilities",
      tech: ["Machine Learning", "Privacy", "Detection"],
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "AI Medical Record Analyzer",
      description: "Large Language Model powered system for analyzing and processing medical records",
      tech: ["LLM", "AI", "Healthcare"],
      gradient: "from-orange-600 to-yellow-600"
    },
    {
      title: "RockyBot",
      description: "Intelligent news research tool leveraging Large Language Models for content analysis",
      tech: ["LLM", "NLP", "Research"],
      gradient: "from-yellow-600 to-green-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work across web development, AI, and backend engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full">
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} p-6 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-2xl text-white">💻</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <p className="text-lg font-semibold mb-2">Want to see more?</p>
            <p className="text-purple-100 mb-4">Check out my GitHub for additional projects and contributions</p>
            <a
              href="https://github.com/GNiharika78"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

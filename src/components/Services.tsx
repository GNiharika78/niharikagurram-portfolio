
import { Globe, Server, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive, intuitive interfaces with Angular and Bootstrap",
      features: ["Responsive Design", "Modern UI/UX", "Cross-browser Compatibility", "Performance Optimization"],
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Server,
      title: "Backend Engineering", 
      description: "Robust server-side solutions and API development",
      features: ["REST API Design", "Database Optimization", "Microservices Architecture", "Spring Boot Development"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Real-time Systems",
      description: "Building scalable data pipelines and real-time applications",
      features: ["Kafka Integration", "Event-driven Architecture", "Real-time Processing", "Message Queuing"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Secure deployment and continuous integration solutions",
      features: ["JWT Security", "CI/CD Automation", "Unit Testing", "Cloud Deployment"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions for your web development and backend engineering needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-xl`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with modern, scalable solutions
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

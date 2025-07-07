
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Engineer",
      company: "L&T Construction, India",
      period: "July 2022 – Dec 2023",
      type: "Full-time",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Intern",
      company: "Indian Servers, India", 
      period: "April 2021 – July 2021",
      type: "Internship",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through various roles and organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-4 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <span className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Briefcase size={16} />
                      <span>Professional Development & Technical Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

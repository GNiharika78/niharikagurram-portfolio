
import { Code, Database, Settings, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "from-purple-600 to-blue-600",
      skills: ["Java", "C++", "C", "SQL", "TypeScript", "ShellScript", "Python", "HTML/CSS", "JSP", "XML", "JPQL", "JSON"]
    },
    {
      title: "Frameworks & Models", 
      icon: Settings,
      color: "from-blue-600 to-indigo-600",
      skills: ["Spring Boot", "JPA", "Angular", "Bootstrap", "Microservices", "MicroFrontend", "OOP", "REST", "GraphQL"]
    },
    {
      title: "Tools & Tech",
      icon: Database,
      color: "from-indigo-600 to-purple-600", 
      skills: ["MongoDB", "MySQL", "Kafka", "Redis", "Jenkins", "GIT", "Postman", "JIRA", "Linux", "SSMS", "Confluence"]
    },
    {
      title: "Methodologies",
      icon: Target,
      color: "from-purple-600 to-pink-600",
      skills: ["Agile", "CI/CD", "Distributed Systems", "DSA"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Animation */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <p className="text-lg font-semibold mb-2">Always Learning</p>
            <p className="text-purple-100">Continuously expanding my toolkit with emerging technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

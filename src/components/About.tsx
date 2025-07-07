
import { GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, passion, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Story</h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                I have a strong passion for building scalable, user-focused web applications. I thrive on solving complex problems through clean code and modern frameworks.
              </p>
              <p>
                What drives me professionally is the constant evolution of technology and the opportunity to create solutions that improve everyday user experiences.
              </p>
              <p>
                My ability to work across the stack—frontend and backend—allows me to contribute holistically to projects, from designing intuitive interfaces to optimizing backend performance.
              </p>
              <p>
                I'm always eager to learn, adapt, and take on new challenges that push the boundaries of innovation.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {/* Master's Degree */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Master of Science in Computer Science
                  </h4>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    GPA: 4.0
                  </span>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  Missouri University of Science and Technology
                </p>
                <p className="text-gray-600 dark:text-gray-400">2024 – 2025</p>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Bachelor's in Information Technology
                  </h4>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    GPA: 3.8
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  JNTUK - UCEV
                </p>
                <p className="text-gray-600 dark:text-gray-400">2018 – 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

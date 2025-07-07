
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Niharika Gurram
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & Backend Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:niharikagurram78@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/niharikagurram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/GNiharika78"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'About', 'Experience', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Niharika Gurram. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart size={16} className="text-red-500" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

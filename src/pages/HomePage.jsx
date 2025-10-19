import React from 'react';
import { FaCode, FaRocket, FaUsers, FaAward, FaLaptopCode, FaChartLine, FaGithub, FaLinkedin, FaTwitter, FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CVDownload from '../components/CVDownload';

// Advanced Animation styles
const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(79, 70, 229, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(79, 70, 229, 0.8);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-slide-in-up {
    animation: slideInUp 0.6s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .animate-pulse-custom {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-bounce-custom {
    animation: bounce 2s ease-in-out infinite;
  }
  
  .animate-rotate {
    animation: rotate360 3s linear infinite;
  }
  
  .group:hover .animate-rotate {
    animation: rotate360 1s linear infinite;
  }
`;

const HomePage = () => {
  const stats = [
    { icon: <FaCode size={40} />, number: '50+', label: 'Projects Completed' },
    { icon: <FaUsers size={40} />, number: '30+', label: 'Happy Clients' },
    { icon: <FaAward size={40} />, number: '5+', label: 'Years Experience' },
    { icon: <FaChartLine size={40} />, number: '100%', label: 'Success Rate' },
  ];

  const highlights = [
    {
      icon: <FaLaptopCode size={48} />,
      title: 'Full Stack Development',
      description: 'Build complete web applications from frontend to backend using modern technologies and best practices.',
    },
    {
      icon: <FaRocket size={48} />,
      title: 'Performance Optimization',
      description: 'Create lightning-fast applications with optimized code, lazy loading, and efficient architecture.',
    },
    {
      icon: <FaCode size={48} />,
      title: 'Clean Code',
      description: 'Write maintainable, scalable code following industry standards and design patterns.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 overflow-hidden">
        <style>{animationStyles}</style>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center text-white animate-slide-in-up hover:scale-110 transition-transform duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 text-indigo-200 transform group-hover:scale-125 group-hover:animate-rotate transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 group-hover:text-indigo-200 transition-colors animate-pulse-custom">{stat.number}</h3>
                <p className="text-indigo-100 group-hover:animate-float">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Download My Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Get my complete CV with all my experience and qualifications</p>
          <CVDownload />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center animate-slide-in-up">What I Offer</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>Specialized services tailored to your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-up group animate-glow"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center transform group-hover:scale-125 group-hover:rotate-12 group-hover:animate-rotate transition-all duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors animate-pulse-custom">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed group-hover:animate-float">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to work on new projects and help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center animate-slide-in-up">Why Choose Me?</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>Proven expertise and commitment to excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { emoji: '🎯', title: 'Focused Solutions', desc: 'I understand your business goals and create solutions that directly address your needs and deliver measurable results.' },
              { emoji: '⚡', title: 'Fast Delivery', desc: 'Efficient development process ensures your project is completed on time without compromising on quality.' },
              { emoji: '🔒', title: 'Reliable Support', desc: 'Continuous support and maintenance ensure your application runs smoothly long after launch.' },
              { emoji: '💡', title: 'Innovation', desc: 'Stay ahead with cutting-edge technologies and innovative approaches to solve complex problems.' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up group animate-glow"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce-custom inline-block">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors animate-pulse-custom">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:animate-float">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center animate-slide-in-up">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO, Tech Startup',
                feedback: 'Khushvant delivered an exceptional web application that exceeded our expectations. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Sarah Johnson',
                role: 'Product Manager',
                feedback: 'Professional, responsive, and incredibly talented. The project was completed ahead of schedule.',
                rating: 5,
              },
              {
                name: 'Mike Davis',
                role: 'Business Owner',
                feedback: 'Great communication and technical expertise. Our application is now running perfectly.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up group animate-glow"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-4 group-hover:scale-110 group-hover:animate-rotate transition-transform duration-300">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl animate-pulse-custom">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic group-hover:text-gray-900 dark:group-hover:text-white transition-colors group-hover:animate-float">"{testimonial.feedback}"</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors animate-pulse-custom">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center">Connect With Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Follow me on social media for updates and insights</p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/khushavnt-cognitiona"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/khushvantjadhao01/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/engineer_khushvant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="Instagram"
            >
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">My Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
                <FaTrophy size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Awards & Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recognized for excellence in software development and innovative solutions
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
                <FaBriefcase size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                5+ years of hands-on experience in full-stack development and project management
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                <FaGraduationCap size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Always updating skills with latest technologies and industry best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Great Together</h2>
          <p className="text-indigo-100 mb-6">Contact me today to discuss your project</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

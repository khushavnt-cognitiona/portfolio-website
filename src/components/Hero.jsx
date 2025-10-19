import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-4 py-20 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Welcome to My <span className="text-indigo-600 dark:text-indigo-400">World</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Hi, I'm <strong>Khushvant Jadhao</strong>, a passionate and dedicated <em>Software Engineer</em>. I love building modern, user-friendly, and efficient applications using the latest technologies. My goal is to create impactful solutions that not only solve real-world problems but also deliver smooth and engaging user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Contact Me <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center animate-slide-up">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Circular Image Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-indigo-600 dark:border-indigo-400">
              <img
                src="/img/Snapchat-752709285.jpg"
                alt="Khushvant Jadhao"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
            
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-400 dark:border-indigo-300 opacity-30 animate-pulse"></div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-indigo-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

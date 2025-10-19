import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive solution for healthcare facilities to manage patient records, appointments, and billing. Features include patient registration, appointment scheduling, medical history tracking, and billing management.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    image: '/img/Hospital-Information-Management-System-scaled.jpg',
    github: '#',
    live: '#',
  },
  {
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing financial data with real-time updates. Includes charts, graphs, portfolio tracking, and financial analytics with responsive design.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    image: '/img/business-finance-financial-graph-investment-planning-stock-datum-chart-diagram-growth_1274051-3852.jpg',
    github: '#',
    live: '#',
  },
  {
    title: 'API Gateway Service',
    description: 'Microservice architecture gateway for routing, authentication, and load balancing. Implements request validation, rate limiting, and centralized logging for distributed systems.',
    technologies: ['Spring Boot', 'Docker', 'AWS'],
    image: '/img/spring-boot-1_5zDxm9B.jpg',
    github: '#',
    live: '#',
  },
  {
    title: 'ARC EMI Management',
    description: 'Advanced EMI tracking and management system with real-time calculations, payment scheduling, and financial analytics for better financial planning.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/img/ARC emi 1.jpg',
    github: '#',
    live: '#',
  },
  {
    title: 'Professional Banner Design',
    description: 'Corporate-themed banner design project showcasing modern UI/UX principles with responsive layouts and professional aesthetics.',
    technologies: ['UI/UX', 'Design', 'Responsive'],
    image: '/img/professional-corporate-themed-banner-design-your-project_893755-2205.jpg',
    github: '#',
    live: '#',
  },
];

const ProjectCard = ({ title, description, technologies, image, github, live, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className={`p-6 transition-all duration-300 ${isActive ? 'max-h-96' : 'max-h-32 overflow-hidden'}`}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">{description}</p>

        {isActive && (
          <div className="animate-fade-in">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-semibold"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        )}

        {!isActive && (
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 2).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 2 && (
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded">
                +{technologies.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center">Featured Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Click on a project to view more details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, technologies, image, github, live }, index) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            technologies={technologies}
            image={image}
            github={github}
            live={live}
            isActive={activeIndex === index}
            onClick={() => toggleActive(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

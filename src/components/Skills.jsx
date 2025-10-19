import React, { useState } from 'react';
import { FaReact, FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiJavascript, SiNodedotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiGit, SiHtml5, SiCss3, SiRedis, SiBootstrap, SiSocketdotio, SiGraphql, SiRabbitmq, SiKubernetes, SiJenkins } from 'react-icons/si';

// Animation styles
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
  
  @keyframes fillBar {
    from {
      width: 0%;
    }
    to {
      width: var(--skill-level);
    }
  }
  
  .animate-slide-in-up {
    animation: slideInUp 0.6s ease-out forwards;
  }
  
  .skill-bar {
    animation: fillBar 1.5s ease-out forwards;
  }
`;

const skills = [
  // Frontend
  { name: 'React', icon: <FaReact size={56} color="#61dafb" />, level: 90, category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: <SiJavascript size={56} color="#f7df1e" />, level: 90, category: 'Frontend', color: 'from-yellow-400 to-yellow-600' },
  { name: 'HTML5', icon: <SiHtml5 size={56} color="#e34c26" />, level: 95, category: 'Frontend', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', icon: <SiCss3 size={56} color="#1572b6" />, level: 90, category: 'Frontend', color: 'from-blue-500 to-blue-700' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={56} color="#06b6d4" />, level: 88, category: 'Frontend', color: 'from-cyan-500 to-cyan-700' },
  { name: 'Bootstrap', icon: <SiBootstrap size={56} color="#7952b3" />, level: 85, category: 'Frontend', color: 'from-purple-500 to-purple-700' },
  
  // Backend
  { name: 'Java', icon: <FaJava size={56} color="#007396" />, level: 85, category: 'Backend', color: 'from-orange-500 to-red-500' },
  { name: 'Spring Boot', icon: <SiSpringboot size={56} color="#6db33f" />, level: 82, category: 'Backend', color: 'from-green-500 to-emerald-500' },
  { name: 'Node.js', icon: <SiNodedotjs size={56} color="#339933" />, level: 80, category: 'Backend', color: 'from-green-600 to-green-800' },
  { name: 'GraphQL', icon: <SiGraphql size={56} color="#e10098" />, level: 75, category: 'Backend', color: 'from-pink-500 to-rose-500' },
  
  // Real-time & Messaging
  { name: 'Socket.IO', icon: <SiSocketdotio size={56} color="#010101" />, level: 78, category: 'Real-time', color: 'from-gray-700 to-gray-900' },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={56} color="#ff6600" />, level: 72, category: 'Real-time', color: 'from-orange-500 to-orange-700' },
  
  // Database
  { name: 'MySQL', icon: <SiMysql size={56} color="#4479a1" />, level: 85, category: 'Database', color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', icon: <SiMongodb size={56} color="#13aa52" />, level: 78, category: 'Database', color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={56} color="#336791" />, level: 75, category: 'Database', color: 'from-blue-700 to-blue-900' },
  { name: 'Redis', icon: <SiRedis size={56} color="#dc382d" />, level: 70, category: 'Database', color: 'from-red-500 to-red-700' },
  
  // DevOps & Cloud
  { name: 'Docker', icon: <SiDocker size={56} color="#2496ed" />, level: 72, category: 'DevOps', color: 'from-blue-400 to-blue-600' },
  { name: 'Kubernetes', icon: <SiKubernetes size={56} color="#326ce5" />, level: 68, category: 'DevOps', color: 'from-blue-500 to-blue-700' },
  { name: 'Jenkins', icon: <SiJenkins size={56} color="#d24939" />, level: 70, category: 'DevOps', color: 'from-red-500 to-red-700' },
  { name: 'AWS', icon: <FaAws size={56} color="#ff9900" />, level: 75, category: 'DevOps', color: 'from-orange-500 to-orange-700' },
  
  // Tools
  { name: 'Git', icon: <SiGit size={56} color="#f1502f" />, level: 88, category: 'Tools', color: 'from-red-500 to-orange-500' },
];

const SkillCard = ({ name, icon, level, category, color, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-gradient-to-br ${color} p-0.5 rounded-xl animate-slide-in-up group hover:shadow-2xl transition-all duration-300`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center h-full hover:scale-105 transition-all duration-300">
        {/* Icon */}
        <div className={`mb-6 p-4 rounded-lg transition-all duration-300 ${hovered ? 'scale-125 rotate-12' : 'scale-100'}`}>
          {icon}
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {name}
        </h3>

        {/* Category Badge */}
        <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
          <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300">{category}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden mb-3">
          <div
            className={`bg-gradient-to-r ${color} h-3 rounded-full transition-all duration-1000 ease-out skill-bar`}
            style={{ width: hovered ? `${level}%` : '0%', '--skill-level': `${level}%` }}
          ></div>
        </div>

        {/* Level Text */}
        <span className={`text-lg font-bold transition-all duration-300 ${hovered ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>
          {hovered ? `${level}%` : ''}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Real-time', 'Database', 'DevOps', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <section id="skills" className="container mx-auto px-4 py-16 mt-20 skills-section">
      <style>{animationStyles}</style>

      {/* Header */}
      <div className="text-center mb-16 animate-slide-in-up">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">💻 Technical Skills</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Proficient in modern technologies and frameworks</p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === null
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          🎯 All Skills
        </button>
        {categories.map((category, idx) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            {category === 'Frontend' && '🎨'} {category === 'Backend' && '⚙️'} {category === 'Real-time' && '⚡'} {category === 'Database' && '🗄️'} {category === 'DevOps' && '🚀'} {category === 'Tools' && '🛠️'} {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredSkills.map(({ name, icon, level, category, color }, index) => (
          <SkillCard 
            key={name} 
            name={name} 
            icon={icon} 
            level={level} 
            category={category} 
            color={color}
            index={index}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">23+</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Technologies</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Avg Proficiency</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">6</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Categories</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Real-time</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Enabled</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

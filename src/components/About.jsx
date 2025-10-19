import React from 'react';
import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .animate-pulse-custom {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-rotate {
    animation: rotate360 3s linear infinite;
  }
  
  .group:hover .animate-rotate {
    animation: rotate360 1s linear infinite;
  }
`;

const About = () => {
  const education = [
    {
      degree: 'B.VOC Software Development',
      school: 'Sant Gadge Baba University, Amravati',
      cgpa: '8.5 CGPA',
      status: 'Completed',
      icon: <FaGraduationCap />,
      color: 'from-blue-600 to-blue-400',
    },
    {
      degree: 'Master of Computer Applications (MCA)',
      specialization: 'AI & Machine Learning',
      school: 'Chandigarh University, Chandigarh',
      status: 'Pursuing',
      icon: <FaGraduationCap />,
      color: 'from-purple-600 to-purple-400',
    },
  ];

  const experience = [
    {
      role: 'Backend Intern (AI/ML)',
      company: 'Cognition Technology, Pune',
      duration: 'Dec 2022 - Aug 2023',
      icon: <FaBriefcase />,
      color: 'from-green-600 to-green-400',
    },
    {
      role: 'Full Stack Engineer',
      company: 'ARC Technology, Nagpur',
      duration: 'Present',
      icon: <FaCode />,
      color: 'from-indigo-600 to-indigo-400',
    },
  ];

  const skills = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
    { icon: <FaLaptopCode />, title: 'Full Stack', desc: 'Frontend to backend expertise' },
    { icon: <FaRocket />, title: 'Innovation', desc: 'Cutting-edge solutions' },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16 mt-20">
      <style>{animationStyles}</style>
      
      {/* Header */}
      <div className="text-center mb-16 animate-slide-in-up">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">Get to know more about my journey and expertise</p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* About Intro */}
      <div className="max-w-4xl mx-auto mb-16 animate-slide-in-up">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          I'm a passionate Full Stack Engineer with a strong foundation in software development and AI/ML. I specialize in building modern, scalable applications using cutting-edge technologies. My journey combines academic excellence with practical industry experience.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">🎓 Education</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${edu.color} p-0.5 rounded-xl animate-slide-in-up group hover:shadow-2xl transition-all duration-300`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl text-gray-900 dark:text-white group-hover:animate-rotate">
                    {edu.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full ${edu.status === 'Pursuing' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-green-100 dark:bg-green-900'}`}>
                    <p className={`text-xs font-bold ${edu.status === 'Pursuing' ? 'text-purple-700 dark:text-purple-300' : 'text-green-700 dark:text-green-300'}`}>
                      {edu.status}
                    </p>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h4>
                {edu.specialization && (
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                      📚 Specialization: <span className="text-gray-900 dark:text-white">{edu.specialization}</span>
                    </p>
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaMapMarkerAlt className="mr-3 text-red-500 text-lg" />
                    <span className="font-medium">{edu.school}</span>
                  </div>
                  {edu.cgpa && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaStar className="mr-3 text-yellow-500 text-lg" />
                      <span className="font-bold text-lg">{edu.cgpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">💼 Professional Experience</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${exp.color} p-0.5 rounded-xl animate-slide-in-up group hover:shadow-2xl transition-all duration-300`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl text-gray-900 dark:text-white group-hover:animate-rotate flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                        <p className="text-xs font-bold text-green-700 dark:text-green-300">{index === 1 ? 'Current' : 'Past'}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <FaBriefcase className="mr-3 text-green-600 dark:text-green-400 text-lg" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <FaCalendarAlt className="mr-3 text-blue-600 dark:text-blue-400 text-lg" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Highlights */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">⚡ Core Competencies</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-glow group animate-slide-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-6xl mx-auto mb-4 text-indigo-600 dark:text-indigo-400 group-hover:animate-rotate">
                {skill.icon}
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors mb-3">
                {skill.title}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">🏆 Key Achievements</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🎓', title: 'Academic Excellence', desc: 'Maintained 8.5 CGPA in B.VOC Software Development with consistent performance' },
            { icon: '🤖', title: 'AI/ML Specialization', desc: 'Pursuing MCA with specialization in Artificial Intelligence & Machine Learning at Chandigarh University' },
            { icon: '💻', title: 'Backend Development', desc: 'Completed internship in AI/ML backend development at Cognition Technology, Pune' },
            { icon: '🚀', title: 'Full Stack Engineer', desc: 'Currently working as Full Stack Engineer at ARC Technology, Nagpur with focus on modern web technologies' },
          ].map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-up group border-t-4 border-yellow-500 hover:scale-105"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce-custom">{achievement.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:animate-float leading-relaxed">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-12 mb-16 border border-indigo-200 dark:border-indigo-900">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-slide-in-up">🌟 My Core Values</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: '💡 Innovation', desc: 'Always exploring new technologies and approaches to solve problems creatively' },
            { title: '🎯 Quality', desc: 'Committed to delivering high-quality code and exceptional user experiences' },
            { title: '🤝 Collaboration', desc: 'Believing in the power of teamwork and effective communication' },
            { title: '📈 Growth', desc: 'Continuously learning and improving my skills to stay ahead in tech' },
          ].map((value, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-up group border-l-4 border-indigo-600"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 group-hover:animate-float leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center animate-slide-in-up">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Collaborate?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Let's create something amazing together</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

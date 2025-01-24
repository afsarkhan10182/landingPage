import React from 'react';

const Expertise = () => {
  const expertiseAreas = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      ),
      technologies: ['React.js', 'Vue.js', 'Angular', 'Next.js']
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
        </svg>
      ),
      technologies: ['Node.js', 'Python', 'Java', '.NET']
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
        </svg>
      ),
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      title: 'DevOps',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver robust and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={area.title}
              className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: index > 0 ? `${index * 0.2}s` : undefined }}
            >
              <div className="text-blue-500 mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.technologies.map(tech => (
                  <li key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <p className="text-xl text-gray-400 mb-8">
            We stay up-to-date with the latest technologies to provide you with the best solutions
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with integrated payment systems',
      icon: (
        <svg className="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Fitness App',
      description: 'Mobile application for workout tracking and nutrition planning',
      icon: (
        <svg className="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      title: 'Cloud Management Dashboard',
      description: 'Enterprise resource monitoring and management platform',
      icon: (
        <svg className="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      technologies: ['Vue.js', 'Python', 'AWS']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="group relative overflow-hidden rounded-xl shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: index > 0 ? `${index * 0.2}s` : undefined }}
            >
              <div className="bg-neutral-100 h-64 p-6 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-xs bg-blue-500/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
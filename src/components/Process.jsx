import React from 'react';

const Process = () => {
  const processsteps = [
    {
      number: '1',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your requirements, objectives, and business goals to create a comprehensive project plan.',
      alignment: 'right'
    },
    {
      number: '2',
      title: 'Design & Architecture',
      description: 'Our team creates detailed designs and technical architecture to ensure a solid foundation for development.',
      alignment: 'left'
    },
    {
      number: '3',
      title: 'Development',
      description: 'Using agile methodologies, we develop your solution with regular updates and continuous integration.',
      alignment: 'right'
    },
    {
      number: '4',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution meets quality standards and performs optimally.',
      alignment: 'left'
    },
    {
      number: '5',
      title: 'Deployment & Support',
      description: 'We handle deployment and provide ongoing maintenance and support to ensure smooth operation.',
      alignment: 'right'
    }
  ];

  return (
    <section id="process" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a structured approach to deliver high-quality solutions that meet your business needs
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600"></div>

          <div className="space-y-16">
            {processsteps.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative flex md:justify-between items-center md:items-start flex-col md:flex-row animate__animated ${step.alignment === 'right' ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}
              >
                {step.alignment === 'right' ? (
                  <>
                    <div className="md:w-5/12 text-right md:pr-8">
                      <div className="bg-neutral-800 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-3 text-blue-500">{step.number}. {step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 transform -translate-x-1/2 bg-blue-600 rounded-full border-4 border-neutral-900"></div>
                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12"></div>
                    <div className="hidden md:block absolute left-1/2 w-8 h-8 transform -translate-x-1/2 bg-blue-600 rounded-full border-4 border-neutral-900"></div>
                    <div className="md:w-5/12 md:pl-8">
                      <div className="bg-neutral-800 p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-3 text-blue-500">{step.number}. {step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Start Your Project Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
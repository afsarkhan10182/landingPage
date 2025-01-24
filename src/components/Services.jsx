import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ icon, title, description, features, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Web Development",
      description: "Custom web applications, responsive websites, and e-commerce solutions built with cutting-edge technologies.",
      features: [
        "Frontend Development",
        "Backend Development", 
        "E-commerce Solutions"
      ],
      delay: 0
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "iOS Development",
        "Android Development", 
        "Cross-platform Solutions"
      ],
      delay: 0.2
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      title: "Cloud Services",
      description: "Cloud infrastructure setup, maintenance, and scalable solutions for your business.",
      features: [
        "Cloud Architecture",
        "DevOps Services", 
        "24/7 Monitoring"
      ],
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software development solutions to help your business succeed in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
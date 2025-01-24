import React, { useState } from 'react';
// import { Linkedin, Twitter, Github } from 'lucide-react';
const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900 text-white min-h-[70vh] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transforming Ideas into 
              <span className="text-blue-500"> Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              We craft cutting-edge digital solutions that help businesses thrive in the modern world. Our expert team delivers innovative software development services tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="#portfolio" 
                className="border border-white hover:border-blue-500 hover:text-blue-500 px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
            <div className="flex items-center gap-8 pt-8">
              {[
                { value: "100+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "95%", label: "Success Rate" }
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <h3 className="text-3xl font-bold text-blue-500">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-neutral-800 p-8 rounded-lg">
              {/* Grid of services */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    ), 
                    title: "Custom Development" 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    ), 
                    title: "Web Solutions" 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    ), 
                    title: "Mobile Apps" 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    ), 
                    title: "Fast Delivery" 
                  }
                ].map(service => (
                  <div key={service.title} className="bg-neutral-700 p-4 rounded-lg">
                    <div className="text-blue-500 mb-2">{service.icon}</div>
                    <h3 className="font-bold">{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
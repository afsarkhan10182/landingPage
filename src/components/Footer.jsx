import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.scrollY  > 300);
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleNewsletterSubmit = (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      alert(`Thank you for subscribing with: ${email}`);
      e.target.reset();
    };
  
    return (
      <footer className="bg-neutral-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">DevCraft</h3>
              <p className="text-gray-400">Transforming ideas into digital excellence through innovative software solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: "#hero", label: "Home" },
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#team", label: "Team" },
                  { href: "#contact", label: "Contact" }
                ].map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Development",
                  "Cloud Solutions",
                  "UI/UX Design",
                  "Consulting"
                ].map(service => (
                  <li key={service} className="text-gray-400">{service}</li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                  required 
                />
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 DevCraft. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy"
                ].map(policy => (
                  <a 
                    key={policy} 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {policy}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Scroll to Top Button */}
        {isVisible && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        )}
      </footer>
    );
  };

  export default Footer;
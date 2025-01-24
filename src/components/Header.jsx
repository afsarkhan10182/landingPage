import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth' 
      });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#expertise", label: "Expertise" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#process", label: "Process" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 animate__animated animate__fadeIn">
            <span className="text-xl font-bold">Digital Fuzed</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={scrollToSection}
                  className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={scrollToSection}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path 
                  className="mobile-menu-icon" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={scrollToSection}
                className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={scrollToSection}
              className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
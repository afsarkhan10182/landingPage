import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideCount = 3;

  const updateSlider = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / slideCount;
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  };

  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [currentSlide]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'CEO, TechStart',
      quote: '"Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. Their technical expertise and professionalism are outstanding."',
      initial: 'A'
    },
    {
      name: 'Sarah Davies',
      company: 'CTO, InnovateCo',
      quote: '"The team\'s attention to detail and commitment to quality is remarkable. They understood our requirements perfectly and delivered a solution that transformed our business."',
      initial: 'S'
    },
    {
      name: 'Mark Anderson',
      company: 'Founder, Digital Solutions',
      quote: '"Outstanding service! The team\'s technical knowledge and project management skills made our complex project seem effortless. Highly recommended!"',
      initial: 'M'
    }
  ];

  const renderStars = () => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Read what our satisfied clients have to say about their experience working with us</p>
        </div>

        <div className="relative">
          <div className="testimonials-slider overflow-hidden">
            <div 
              ref={sliderRef} 
              className="flex transition-transform duration-500"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-neutral-800 p-8 rounded-xl h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold">{testimonial.initial}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      {renderStars()}
                    </div>
                    <p className="text-gray-300">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none prev-button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none next-button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
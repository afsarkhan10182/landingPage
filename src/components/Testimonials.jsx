import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideCount = 3;

  const updateSlider = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / slideCount;
      sliderRef.current.style.transform = `translateX(-${
        currentSlide * slideWidth
      }px)`;
    }
  };

  useEffect(() => {
    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
  }, [currentSlide]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Principal, Delhi Public School",
      quote:
        '"We were drowning in paperwork. Now parents get SMS alerts for everything, fees are collected on time, and our teachers save 3 hours daily. The system paid for itself in 2 months."',
      initial: "P",
      industry: "Education",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      company: "Owner, Kumar Nursing Home",
      quote:
        '"Patient wait time reduced from 3 hours to 45 minutes. Insurance claims that took 2 weeks now take 2 days. Our revenue increased by 40% in 6 months."',
      initial: "R",
      industry: "Healthcare",
      rating: 5,
    },
    {
      name: "Amit Singh",
      company: "Contractor, Singh Builders",
      quote:
        '"We used to lose 20% of our budget on material wastage. Now we track everything in real-time. Last project was completed 2 weeks early and 15% under budget."',
      initial: "A",
      industry: "Construction",
      rating: 5,
    },
  ];

  const renderStars = () => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Success Stories Across Industries
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how Digital Fuzed has transformed operations and delivered
            exceptional results across different sectors
          </p>
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
                  <div className="group bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-2xl h-full border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.company}
                        </p>
                        <div className="inline-flex items-center px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mt-1">
                          {testimonial.industry}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">{renderStars()}</div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none prev-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none next-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

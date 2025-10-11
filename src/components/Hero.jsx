import { useState, useEffect } from "react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "School ERP",
    "Hospital Management",
    "Construction Management",
    "E-commerce",
    "CRM Systems",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 pt-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Digital Solutions That Transform Businesses
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Stop Losing Money
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                on Manual Processes
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                We Fix That
              </span>
            </h1>

            <div className="text-lg md:text-xl text-gray-300 space-y-1">
              <p>
                Your school still using{" "}
                <span className="text-red-400 font-semibold">
                  paper attendance sheets
                </span>
                ?
              </p>
              <p>
                Hospital{" "}
                <span className="text-red-400 font-semibold">
                  billing taking forever
                </span>
                ?
              </p>
              <p>
                Construction projects{" "}
                <span className="text-red-400 font-semibold">
                  going over budget
                </span>
                ?
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl">
              We&apos;ve helped 200+ businesses save 15+ hours per week and
              reduce costs by 30%. No more Excel spreadsheets, no more lost
              paperwork, no more manual headaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Get Your Solution</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </a>
              <a
                href="#services"
                className="group border-2 border-white/20 hover:border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Explore Solutions
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                {
                  value: "200+",
                  label: "Businesses Automated",
                  color: "text-blue-400",
                },
                {
                  value: "15hrs",
                  label: "Saved Per Week",
                  color: "text-purple-400",
                },
                {
                  value: "30%",
                  label: "Cost Reduction",
                  color: "text-cyan-400",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <h3
                    className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">
                  Our Solutions Include:
                </h3>
                <div className="h-10 flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                    {words[currentWord]}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    ),
                    title: "School ERP",
                    desc: "Complete Management",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    ),
                    title: "Hospital",
                    desc: "Management System",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    ),
                    title: "Construction",
                    desc: "Project Management",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                    title: "Fast Delivery",
                    desc: "Quick Solutions",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-blue-500/20 hover:to-purple-500/20 p-3 rounded-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 mb-2 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {service.desc}
                    </p>
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

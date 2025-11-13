import { Check } from "lucide-react";
import PropTypes from "prop-types";

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  delay = 0,
  gradient = "from-blue-500 to-cyan-500",
  link,
}) => {
  return (
    <div
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeInUp border border-gray-100 hover:border-transparent overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Icon with Gradient */}
      <div
        className={`relative mb-6 p-4 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
          >
            <div
              className={`w-5 h-5 mr-3 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0`}
            >
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Visit Link Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          View Live Demo
        </a>
      )}

      {/* Hover Effect Border */}
      <div
        className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500`}
      ></div>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
  gradient: PropTypes.string,
  link: PropTypes.string,
};

const Services = () => {
  const servicesData = [
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "School Management System",
      description:
        "Stop chasing parents for fees. Our system sends automatic SMS reminders, tracks attendance in real-time, and generates report cards instantly. No more Excel chaos.",
      features: [
        "Auto SMS to parents for fees & attendance",
        "Digital report cards (no printing needed)",
        "Online parent portal with live updates",
        "Staff payroll & leave management",
      ],
      delay: 0,
      gradient: "from-blue-500 to-cyan-500",
      link: "https://school.digitalfuzed.com",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "Hospital Management System",
      description:
        "Tired of patients waiting 2+ hours? Our system reduces wait times by 60%, automates insurance claims, and tracks medicine inventory. Your staff will thank you.",
      features: [
        "Patient queue management (no more chaos)",
        "Insurance claim automation",
        "Medicine stock alerts",
        "Doctor schedule optimization",
      ],
      delay: 0.2,
      gradient: "from-purple-500 to-pink-500",
      link: "https://hospital.digitalfuzed.com",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "Construction Project Manager",
      description:
        "Projects going over budget? Our system tracks every rupee spent, monitors worker attendance, and sends alerts when materials are running low. Keep projects on time and under budget.",
      features: [
        "Real-time budget tracking",
        "Worker attendance with GPS",
        "Material stock alerts",
        "Daily progress photos & reports",
      ],
      delay: 0.4,
      gradient: "from-orange-500 to-red-500",
      link: "https://realestate.digitalfuzed.com",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Digital Solutions for Every Industry
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Stop Wasting Time & Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;ve seen businesses lose lakhs due to manual processes. Our
            systems automate everything so you can focus on growing your
            business, not managing paperwork.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
              gradient={service.gradient}
              link={service.link}
            />
          ))}
        </div>

        {/* Additional Services Preview */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">We Also Handle...</h3>
            <p className="text-gray-300 text-lg">
              Whatever your business needs, we&apos;ve got you covered:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Restaurant POS & Billing", icon: "🍽️" },
              { name: "Gym Member Management", icon: "💪" },
              { name: "Shop Inventory Tracking", icon: "🏪" },
              { name: "Taxi Booking System", icon: "🚗" },
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {service.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="group relative inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Get Your Custom Solution</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

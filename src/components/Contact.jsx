import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to a backend service
    setStatus("Thanks — we will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      project: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-10 sm:py-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Get in touch
          </div>
          <h2 className="mb-1 text-3xl font-bold text-gray-900">
            Tell us what you need
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Share a short note about the work. We reply with a next step, not a
            pitch deck.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                Send a message
              </h3>
              <p className="text-gray-600">
                Name, email, and a few lines on the problem are enough.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">What&apos;s your business type?</option>
                  <option value="school">School/College Management</option>
                  <option value="hospital">Hospital/Clinic Management</option>
                  <option value="construction">Construction/Real Estate</option>
                  <option value="restaurant">Restaurant/Food Business</option>
                  <option value="salon">Salon / Spa</option>
                  <option value="crm">CRM</option>
                  <option value="erp">ERP</option>
                  <option value="qr">QR pages / short links</option>
                  <option value="gym">Gym/Fitness Center</option>
                  <option value="shop">Shop/Retail Store</option>
                  <option value="other">Other Business</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-4 font-semibold text-white transition hover:from-blue-700 hover:to-teal-700"
              >
                Get My Free Analysis
              </button>
              {status && (
                <p className="text-center text-sm font-medium text-emerald-700" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate__animated animate__fadeInRight">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Visit Our Office
                    </h4>
                    <p className="text-gray-400">
                      Mumbai, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <a
                      href="mailto:info@digitalfuzed.com"
                      className="text-gray-400 hover:text-blue-400"
                    >
                      info@digitalfuzed.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <a
                      href="tel:+918459148396"
                      className="text-gray-400 hover:text-blue-400"
                    >
                      +91 8459148396
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Digital Fuzed?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-lg">
                    No upfront payment. Pay after results.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-lg">Free training for your staff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-lg">
                    Six months of support included
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-lg">
                    Works on phone, tablet, and computer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

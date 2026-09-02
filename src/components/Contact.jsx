import { useState } from "react";
import { liveProducts } from "../data/liveProducts";

const Contact = () => {
  const phoneNumber = "918459148396";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    software: "",
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

    if (
      !formData.name ||
      !formData.phone ||
      !formData.businessType ||
      !formData.software
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const message = encodeURIComponent(
      `New DigitalFuzed demo request:
Name: ${formData.name}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Software Interested In: ${formData.software}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setStatus("Thanks. Your demo request is ready to send on WhatsApp.");
    setFormData({
      name: "",
      phone: "",
      businessType: "",
      software: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Request Free Demo
          </div>
          <h2 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">
            Book a free software demo
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
            Share the basics. Demo access is free; pricing depends on software, setup, and customization.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">
                Request Free Demo
              </h3>
              <p className="text-gray-600">
                Name, phone, business type, and software interest are enough to share demo access.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 md:gap-6">
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Business Type
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="software"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Software Interested In
                </label>
                <select
                  id="software"
                  name="software"
                  value={formData.software}
                  onChange={handleChange}
                  required
                  className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select software</option>
                  {liveProducts.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full min-h-12 rounded-lg bg-[#38BDF8] px-6 py-3 font-extrabold text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white"
              >
                Request Demo
              </button>
              {status && (
                <p className="text-center text-sm font-medium text-emerald-700" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 text-white shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-[#38BDF8] sm:text-2xl">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#0369A1] rounded-lg flex items-center justify-center mr-4">
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
                    <h4 className="mb-1 text-base font-semibold sm:text-lg">
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
                  <div className="w-12 h-12 bg-[#0369A1] rounded-lg flex items-center justify-center mr-4">
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
                    <h4 className="mb-1 text-base font-semibold sm:text-lg">Email Us</h4>
                    <a
                      href="mailto:sales@digitalfuzed.com"
                      className="break-all text-gray-400 hover:text-[#38BDF8]"
                    >
                      sales@digitalfuzed.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#0369A1] rounded-lg flex items-center justify-center mr-4">
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
                    <h4 className="mb-1 text-base font-semibold sm:text-lg">Call Us</h4>
                    <a
                      href="tel:+918459148396"
                      className="break-all text-gray-400 hover:text-[#38BDF8]"
                    >
                      +91 8459148396
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#0F172A] p-5 text-white shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">
                Why Choose DigitalFuzed?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-base sm:text-lg">
                    Cloud based and secure hosting
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-base sm:text-lg">Setup and staff training included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-base sm:text-lg">
                    Maintenance and updates available
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-base sm:text-lg">
                    WhatsApp support for quick help
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

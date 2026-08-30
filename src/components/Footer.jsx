import { Linkedin, Twitter, Github } from "lucide-react";
import { liveProducts } from "../data/liveProducts";
const Footer = () => {
  return (
    <footer className="bg-neutral-900 pb-24 pt-16 text-white sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DF</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Digital Fuzed
              </h3>
            </div>
            <p className="text-gray-400">
              Ready-to-use business software with setup, training, and support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-0.5">
              {[
                { href: "#hero", label: "Home" },
                { href: "#services", label: "Solutions" },
                { href: "#portfolio", label: "Live Demos" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#contact", label: "Book Free Demo" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-3 text-lg font-bold">Live Products</h4>
            <ul className="space-y-0.5">
              {liveProducts.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-0.5 text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Book a Demo</h4>
            <p className="text-gray-400 mb-4">
              See the software working before paying.
            </p>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Request Free Demo
            </a>
            <a
              href="mailto:sales@digitalfuzed.com"
              className="mt-4 block text-gray-400 transition-colors hover:text-blue-400"
            >
              sales@digitalfuzed.com
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Digital Fuzed. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <a
                    key={policy}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {policy}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

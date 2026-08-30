import { Facebook, Instagram } from "lucide-react";
import { liveProducts } from "../data/liveProducts";
import LogoMark from "./LogoMark";
const Footer = () => {
  return (
    <footer className="bg-neutral-900 pb-24 pt-16 text-white sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LogoMark />
              <h3 className="text-2xl font-extrabold text-white">
                Digital<span className="text-[#38BDF8]">Fuzed</span>
              </h3>
            </div>
            <p className="text-gray-400">
              Ready-to-use business software with setup, training, and support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/digitalfuzed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalFuzed on Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593977212318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalFuzed on Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
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
                { href: "#contact", label: "Request Free Demo" },
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
                    className="inline-block py-0.5 text-gray-400 transition-colors hover:text-[#38BDF8]"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Request Free Demo</h4>
            <p className="text-gray-400 mb-4">
              See the software working before paying.
            </p>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-md bg-[#38BDF8] px-5 py-3 font-extrabold text-[#0F172A] transition hover:bg-white"
            >
              Request Free Demo
            </a>
            <a
              href="mailto:sales@digitalfuzed.com"
              className="mt-4 block text-gray-400 transition-colors hover:text-[#38BDF8]"
            >
              sales@digitalfuzed.com
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 DigitalFuzed. All rights reserved.
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

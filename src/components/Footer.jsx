import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, X } from "lucide-react";
import { liveProducts } from "../data/liveProducts";
import LogoMark from "./LogoMark";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/digitalfuzed/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/digitalfuzed", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@DigitalFuzed", Icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/digitalfuzed", Icon: Linkedin },
  { label: "X", href: "https://x.com/digitalfuzed", Icon: Twitter },
];

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "DigitalFuzed collects the details you submit through this website, such as name, phone number, business type, and software interest, to respond to demo requests and support enquiries.",
      "We do not sell personal information. We may contact you by phone, WhatsApp, or email about your enquiry. To request correction or deletion of your details, email sales@digitalfuzed.com.",
    ],
  },
  terms: {
    title: "Terms & Notice",
    body: [
      "DigitalFuzed is a software service brand. The demos on this website are provided for evaluation. Final pricing, setup scope, customization, support, delivery timelines, and payment terms are confirmed separately before any paid work starts.",
      "We are not displaying GST or company registration details because they are not being represented on this website. Such details will be added if and when legally applicable.",
    ],
  },
};

const Footer = () => {
  const [activeLegal, setActiveLegal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeLegal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLegal]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setActiveLegal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const legal = activeLegal ? legalContent[activeLegal] : null;

  return (
    <>
      <footer className="bg-neutral-900 pb-24 pt-16 text-white sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 border-b border-neutral-800 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <LogoMark />
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                  Digital<span className="text-[#38BDF8]">Fuzed</span>
                </h3>
              </div>
              <p className="text-gray-400">
                Ready-to-use business software with setup, training, and support.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"DigitalFuzed on " + label}
                    className="text-gray-400 transition-colors hover:text-[#38BDF8]"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

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
                    <a href={link.href} className="inline-block py-0.5 text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

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
              <h4 className="mb-4 text-lg font-bold">Request Free Demo</h4>
              <p className="mb-4 text-gray-400">See the software working before paying.</p>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#38BDF8] px-5 py-3 text-center font-extrabold text-[#0F172A] transition hover:bg-white"
              >
                Request Free Demo
              </a>
              <a href="mailto:sales@digitalfuzed.com" className="mt-4 block text-gray-400 transition-colors hover:text-[#38BDF8]">
                sales@digitalfuzed.com
              </a>
            </div>
          </div>

          <div className="pt-8">
            <div className="grid items-center gap-4 md:grid-cols-2">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 DigitalFuzed. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
                {[
                  { key: "privacy", label: "Privacy Policy" },
                  { key: "terms", label: "Terms & Notice" },
                ].map((link) => (
                  <button
                    key={link.key}
                    type="button"
                    onClick={() => setActiveLegal(link.key)}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {legal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-title"
          onClick={() => setActiveLegal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-4 shadow-lg sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="legal-title" className="text-xl font-bold text-slate-950 sm:text-2xl">
                {legal.title}
              </h2>
              <button
                type="button"
                onClick={() => setActiveLegal(null)}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {legal.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

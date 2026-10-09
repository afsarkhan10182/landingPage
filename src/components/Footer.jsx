import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  X,
} from "lucide-react";
import { liveProducts } from "../data/liveProducts";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/digitalfuzed/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/digitalfuzed",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DigitalFuzed",
    Icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/digitalfuzed",
    Icon: Linkedin,
  },
  { label: "X", href: "https://x.com/digitalfuzed", Icon: Twitter },
];
const legalContent = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "DigitalFuzed collects the details you submit through this website, such as name, phone number, business type, and software interest, to respond to product enquiries and support requests.",
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

export default function Footer() {
  const dialog = useRef(null);
  const [activeLegal, setActiveLegal] = useState("privacy");
  const legal = legalContent[activeLegal];
  const showLegal = (key) => {
    setActiveLegal(key);
    dialog.current.showModal();
  };
  return (
    <>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#hero" className="brand" aria-label="DigitalFuzed home">
                <img src="/favicon.svg" width="35" height="35" alt="" aria-hidden="true" />
                <span>DigitalFuzed.</span>
              </a>
              <p>
                Software for your working day.
                <br />
                People for everything after.
              </p>
              <div className="social-links">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"DigitalFuzed on " + label}
                    title={label}
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
            <nav aria-label="Footer navigation">
              <h3>Explore</h3>
              {[
                ["#portfolio", "Explore software"],
                ["#services", "Why DigitalFuzed"],
                ["#how-it-works", "How it works"],
                ["#contact", "Get in touch"],
              ].map(([href, label]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>
            <nav className="footer-products" aria-label="Live products">
              <h3>Try our software</h3>
              <div>
                {liveProducts.map((product) => (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} DigitalFuzed</p>
            <div>
              <button onClick={() => showLegal("privacy")}>
                Privacy policy
              </button>
              <button onClick={() => showLegal("terms")}>Terms & notice</button>
              <a href="#hero">
                Back to top <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="legal-dialog"
        aria-labelledby="legal-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="legal-content">
          <div className="legal-heading">
            <h2 id="legal-title">{legal.title}</h2>
            <button
              className="icon-button"
              aria-label="Close legal notice"
              onClick={() => dialog.current.close()}
            >
              <X size={23} />
            </button>
          </div>
          {legal.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </dialog>
    </>
  );
}

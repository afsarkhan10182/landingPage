import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";

const links = [
  ["#portfolio", "Explore software"],
  ["#services", "Why DigitalFuzed"],
  ["#how-it-works", "How it works"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          href="#hero"
          className="brand"
          aria-label="DigitalFuzed home"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#portfolio" className="button button-dark header-cta">
          Open live demos <ArrowRight size={17} />
        </a>
        <button
          ref={toggle}
          className="icon-button menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a
            href="#portfolio"
            className="mobile-nav-cta"
            onClick={() => setOpen(false)}
          >
            Open live demos
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="mobile-nav-contact"
            onClick={() => setOpen(false)}
          >
            Get in touch
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

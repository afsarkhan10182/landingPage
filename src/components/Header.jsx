import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import LogoMark from "./LogoMark";

const links = [
  ["#portfolio", "Explore software"],
  ["#services", "Why DigitalFuzed"],
  ["#how-it-works", "How it works"],
];

const THEME_STORAGE_KEY = "digitalfuzed-theme";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const toggle = useRef(null);
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b1522" : "#f9faf7");
  }, [theme]);
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
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? (
              <Sun size={19} aria-hidden="true" />
            ) : (
              <Moon size={19} aria-hidden="true" />
            )}
          </button>
          <a href="#portfolio" className="button button-dark header-cta">
            Open live demos <ArrowRight size={17} />
          </a>
        </div>
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

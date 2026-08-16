import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Live Products" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("#hero");

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      setActiveId(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const ids = [...navLinks.map((link) => link.href.slice(1)), "contact"];

    const updateActive = () => {
      const offset = 88;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(`#${current}`);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const linkClass = (href, extra = "") =>
    `rounded-md px-3 py-2.5 text-sm font-medium transition ${extra} ${
      activeId === href
        ? "bg-white/15 text-white"
        : "text-white/80 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/95 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={scrollToSection}
            className="flex items-center space-x-2"
            aria-label="Digital Fuzed home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-teal-500">
              <span className="text-sm font-bold text-white">DF</span>
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-xl font-bold text-transparent">
              Digital Fuzed
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={scrollToSection}
                aria-current={activeId === link.href ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={scrollToSection}
              aria-current={activeId === "#contact" ? "page" : undefined}
              className={`ml-2 rounded-md px-4 py-2.5 text-sm font-medium ${
                activeId === "#contact"
                  ? "bg-blue-500 ring-2 ring-white/30"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-slate-950 lg:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={scrollToSection}
                className={linkClass(link.href, "block text-base")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={scrollToSection}
              className={`mt-2 block rounded-md px-4 py-3 text-center text-base font-medium ${
                activeId === "#contact"
                  ? "bg-blue-500 ring-2 ring-white/30"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

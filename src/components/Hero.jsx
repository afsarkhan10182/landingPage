import { useState, useEffect } from "react";
import {
  liveProducts,
  productGroups,
  productsByGroup,
} from "../data/liveProducts";
import LogoMark from "./LogoMark";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = liveProducts.map((product) => product.name);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0F172A] pb-14 pt-24 text-white sm:pb-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex max-w-full items-center rounded-full border border-blue-500/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Ready-to-use software for growing businesses
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <LogoMark size="lg" />
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
                Digital<span className="text-[#38BDF8]">Fuzed</span>
              </h1>
            </div>

            <p className="max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Ready-to-use business software with live demos.
            </p>

            <p className="max-w-2xl text-base font-semibold leading-relaxed text-slate-300 sm:text-xl">
              Salon • Restaurant • ERP • School • CRM • Real Estate
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Ready-to-use software with cloud setup, customization, and
              support.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#38BDF8] px-6 py-3 text-center font-extrabold text-[#0F172A] transition hover:bg-white sm:px-8"
              >
                Request Free Demo
              </a>
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-center font-semibold backdrop-blur-sm transition hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 sm:px-8"
              >
                Try Live Demo
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {[
                {
                  value: "Setup",
                  label: "Configuration included",
                  color: "text-[#38BDF8]",
                },
                {
                  value: "Training",
                  label: "For your staff",
                  color: "text-white",
                },
                {
                  value: "Support",
                  label: "WhatsApp available",
                  color: "text-[#38BDF8]",
                },
              ].map((stat) => (
                <div key={stat.label} className="group text-center">
                  <p
                    className={`text-xl font-extrabold ${stat.color} sm:text-3xl`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium leading-snug text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl sm:p-6">
              <div className="mb-5 text-center">
                <h3 className="mb-2 text-xl font-bold">Live demos</h3>
                <div className="flex h-10 items-center justify-center">
                  <span
                    key={words[currentWord]}
                    className="animate-fade-in text-xl font-extrabold text-[#38BDF8] sm:text-2xl"
                  >
                    {words[currentWord]}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {productGroups.map((group) => (
                  <div key={group.id}>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {group.title}
                    </p>
                    <div className="space-y-2">
                      {productsByGroup(group.id).map((product) => (
                        <a
                          key={product.id}
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 transition hover:border-teal-400/50 hover:bg-teal-500/10"
                        >
                          <span className="min-w-0 text-sm font-semibold text-white">
                            {product.name}
                          </span>
                          <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
                            {product.host}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

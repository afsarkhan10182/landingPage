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
      className="relative overflow-hidden bg-[#0F172A] py-20 pt-24 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute right-[16%] top-24 h-24 w-24 rounded-3xl border-2 border-[#0369A1]/40"></div>
        <div className="absolute right-[9%] top-44 h-16 w-16 rounded-2xl border-2 border-[#0369A1]/40"></div>
        <div className="absolute bottom-28 right-[24%] h-20 w-20 rounded-2xl border-2 border-[#0369A1]/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-teal-500/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Ready-to-use software for growing businesses
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <LogoMark size="lg" />
              <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                Digital<span className="text-[#38BDF8]">Fuzed</span>
              </h1>
            </div>

            <p className="max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
              Business software that works for your business.
            </p>

            <p className="max-w-2xl text-xl font-semibold leading-relaxed text-slate-300">
              Salon • Restaurant • ERP • School • CRM • Real Estate
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Ready-to-use software with cloud setup, customization, and
              support.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group relative transform rounded-xl bg-[#38BDF8] px-8 py-4 text-center text-lg font-extrabold text-[#0F172A] transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Request Free Demo
              </a>
              <a
                href="#portfolio"
                className="rounded-xl border-2 border-white/20 px-8 py-4 text-center text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8] hover:bg-[#38BDF8]/10"
              >
                Try Live Demo
              </a>
            </div>

            <div className="inline-flex rounded-xl bg-[#38BDF8] px-6 py-3 text-xl font-extrabold text-[#0F172A]">
              digitalfuzed.com
            </div>

            <div className="grid grid-cols-3 gap-6">
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
                    className={`text-3xl font-extrabold ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 text-center">
                <h3 className="mb-2 text-xl font-bold">Live demos</h3>
                <div className="flex h-10 items-center justify-center">
                  <span
                    key={words[currentWord]}
                    className="animate-fade-in text-2xl font-extrabold text-[#38BDF8]"
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
                          className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 transition hover:border-teal-400/50 hover:bg-teal-500/10"
                        >
                          <span className="text-sm font-semibold text-white">
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

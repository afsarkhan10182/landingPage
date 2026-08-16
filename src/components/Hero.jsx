import { useState, useEffect } from "react";
import {
  liveProducts,
  productGroups,
  productsByGroup,
} from "../data/liveProducts";

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
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 pt-24 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-600/15 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-emerald-500/15 blur-3xl delay-1000"></div>
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-teal-500/10 blur-2xl delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-teal-500/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              {liveProducts.length} live products you can open now
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Stop Losing Money
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                on Manual Processes
              </span>
              <br />
              <span className="text-3xl text-gray-300 md:text-4xl">
                We Fix That
              </span>
            </h1>

            <div className="space-y-1 text-lg text-gray-300 md:text-xl">
              <p>
                Your school still using{" "}
                <span className="font-semibold text-red-400">
                  paper attendance sheets
                </span>
                ?
              </p>
              <p>
                Hospital{" "}
                <span className="font-semibold text-red-400">
                  billing taking forever
                </span>
                ?
              </p>
              <p>
                Construction projects{" "}
                <span className="font-semibold text-red-400">
                  going over budget
                </span>
                ?
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group relative transform rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-teal-700 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Get Your Solution</span>
              </a>
              <a
                href="#portfolio"
                className="group rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10"
              >
                See live products
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  value: "200+",
                  label: "Businesses Automated",
                  color: "text-blue-400",
                },
                {
                  value: "15hrs",
                  label: "Saved Per Week",
                  color: "text-teal-400",
                },
                {
                  value: "30%",
                  label: "Cost Reduction",
                  color: "text-cyan-400",
                },
              ].map((stat) => (
                <div key={stat.label} className="group text-center">
                  <h3
                    className={`text-3xl font-bold ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 animate-pulse rounded-2xl bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 opacity-20 blur-2xl"></div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 text-center">
                <h3 className="mb-2 text-xl font-bold">Live products</h3>
                <div className="flex h-10 items-center justify-center">
                  <span className="animate-fade-in bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-2xl font-bold text-transparent">
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

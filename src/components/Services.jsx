import { Check } from "lucide-react";
import { productGroups, productsByGroup } from "../data/liveProducts";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pb-6 pt-10 sm:pb-8 sm:pt-12"
    >
      <div className="absolute inset-0">
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Software Solutions
          </div>
          <h2 className="mb-1 text-3xl font-bold text-gray-900">
            Choose the software your business needs
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Start with a live demo, then we help with setup, configuration, and
            training.
          </p>
        </div>

        <div className="mb-6 grid items-stretch gap-5 lg:grid-cols-3">
          {productGroups.map((group) => {
            const items = productsByGroup(group.id);
            return (
              <div
                key={group.id}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-lg"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {items.length} live demos
                </p>
                <h3 className="mb-3 text-2xl font-bold text-gray-800">
                  {group.title}
                </h3>
                <p className="mb-6 text-gray-600">{group.description}</p>

                <ul className="mb-6 flex-grow space-y-3">
                  {items.map((product) => (
                    <li key={product.id}>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start rounded-xl border border-gray-100 px-3 py-3 transition hover:border-blue-200 hover:bg-blue-50/60"
                      >
                        <div className="mt-0.5 mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>
                          <span className="block font-semibold text-gray-800">
                            {product.name}
                          </span>
                          <span className="block font-mono text-xs text-gray-500">
                            {product.host}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#portfolio"
                  className="mt-auto inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Explore Live Demos
                </a>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 px-5 py-6 text-center text-white sm:px-8">
          <h3 className="text-2xl font-bold">Why DigitalFuzed</h3>
          <p className="mt-1 text-sm text-gray-300">
            Software is only useful when your team can actually run it.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Cloud based", icon: "☁️" },
              { name: "Setup & configuration", icon: "⚙️" },
              { name: "Staff training", icon: "🎓" },
              { name: "Maintenance & updates", icon: "✓" },
              { name: "Secure hosting", icon: "🔒" },
              { name: "Customization available", icon: "🛠️" },
              { name: "WhatsApp support", icon: "💬" },
              { name: "Live demo before paying", icon: "▶" },
            ].map((service) => (
              <div key={service.name} className="flex items-center justify-center gap-2 md:flex-col">
                <span className="text-2xl">{service.icon}</span>
                <h4 className="text-sm font-semibold text-blue-400">{service.name}</h4>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-7 py-3 font-semibold text-white transition hover:from-blue-700 hover:to-teal-700"
          >
            Request Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

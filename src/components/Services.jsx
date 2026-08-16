import { Check } from "lucide-react";
import { productGroups, productsByGroup } from "../data/liveProducts";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16"
    >
      <div className="absolute inset-0">
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-2 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Digital Solutions for Every Industry
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            One family of live products
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Start with the group that matches your business. Each name below is
            a working demo, not a mockup.
          </p>
        </div>

        <div className="mb-12 grid items-stretch gap-8 lg:grid-cols-3">
          {productGroups.map((group) => {
            const items = productsByGroup(group.id);
            return (
              <div
                key={group.id}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {items.length} live products
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
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Compare these demos
                </a>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold">We Also Handle...</h3>
            <p className="text-lg text-gray-300">
              Whatever your business needs, we&apos;ve got you covered:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: "Gym Member Management", icon: "💪" },
              { name: "Shop Inventory Tracking", icon: "🏪" },
              { name: "Taxi Booking System", icon: "🚗" },
              { name: "Custom Solutions", icon: "⚙️" },
            ].map((service) => (
              <div key={service.name} className="group text-center">
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                  {service.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-teal-700 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Get Your Custom Solution</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Check, Cloud, Headphones, Settings, ShieldCheck } from "lucide-react";

const services = [
  {
    name: "Cloud setup",
    description: "Hosting, domain, SSL, and first configuration handled.",
    icon: Cloud,
  },
  {
    name: "Staff training",
    description: "Your team learns the daily flow before going live.",
    icon: Settings,
  },
  {
    name: "Support",
    description: "WhatsApp help for fixes, questions, and small changes.",
    icon: Headphones,
  },
  {
    name: "Secure updates",
    description: "Maintenance and updates available after launch.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Cloud based",
  "Setup & configuration",
  "Staff training",
  "Maintenance & updates",
  "Secure hosting",
  "Customization available",
  "WhatsApp support",
  "Live demo before paying",
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 pb-6 pt-10 sm:pb-8 sm:pt-12"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            Setup & support
          </div>
          <h2 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">
            We help you run the software, not just open it
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Start with a live demo, then we help with setup, configuration, and
            training.
          </p>
        </div>

        <div className="mb-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-[#38BDF8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl bg-slate-900 px-5 py-6 text-center text-white sm:px-8">
          <h3 className="text-xl font-bold sm:text-2xl">Why DigitalFuzed</h3>
          <p className="mt-1 text-sm text-gray-300">
            Software is only useful when your team can actually run it.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {benefits.map((service) => (
              <div key={service} className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 flex-shrink-0 text-[#38BDF8]" aria-hidden="true" />
                <h4 className="text-sm font-semibold text-[#38BDF8]">{service}</h4>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#38BDF8] px-6 py-3 text-center font-extrabold text-[#0F172A] transition hover:bg-white sm:px-7"
          >
            Request Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

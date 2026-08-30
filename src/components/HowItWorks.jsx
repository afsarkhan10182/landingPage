const steps = [
  {
    title: "Choose software",
    description:
      "Pick Salon Management, Restaurant POS, ERP, School ERP, CRM, or Real Estate CRM.",
  },
  {
    title: "See live demo",
    description: "Check the working software before paying or committing.",
  },
  {
    title: "We set it up",
    description:
      "We handle configuration, training, secure hosting, updates, and support.",
  },
];

const HowItWorks = () => (
  <section
    id="how-it-works"
    className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 text-white sm:py-12"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <div className="mb-2 inline-flex items-center rounded-full border border-teal-400/30 bg-white/10 px-3 py-1.5 text-sm font-medium">
          <span className="mr-2 h-2 w-2 rounded-full bg-teal-400"></span>
          How it works
        </div>
        <h2 className="text-3xl font-bold">
          From demo to running software
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

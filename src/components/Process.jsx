const processSteps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We map your requirements and agree on a clear project plan.",
    alignment: "right",
  },
  {
    number: "2",
    title: "Design & Architecture",
    description:
      "You see screens and architecture before we write code.",
    alignment: "left",
  },
  {
    number: "3",
    title: "Development",
    description:
      "Short cycles, with updates you can actually check.",
    alignment: "right",
  },
  {
    number: "4",
    title: "Testing & QA",
    description: "We test it first so your staff do not have to.",
    alignment: "left",
  },
  {
    number: "5",
    title: "Deployment & Support",
    description: "We go live, hand over, and stay on for support.",
    alignment: "right",
  },
];

const StepCard = ({ step }) => (
  <div className="rounded-xl bg-neutral-800 px-4 py-3">
    <h3 className="text-base font-bold text-blue-500">
      {step.number}. {step.title}
    </h3>
    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="bg-neutral-900 py-10 text-white sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-3xl font-bold">Our Development Process</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            A structured approach to delivering software your team can use.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 bg-blue-600 md:block"></div>

          <div className="space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center md:flex-row md:justify-between md:items-start"
              >
                {step.alignment === "right" ? (
                  <>
                    <div className="md:w-5/12 md:pr-6 md:text-right">
                      <StepCard step={step} />
                    </div>
                    <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-neutral-900 bg-blue-600 md:block"></div>
                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12"></div>
                    <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-neutral-900 bg-blue-600 md:block"></div>
                    <div className="md:w-5/12 md:pl-6">
                      <StepCard step={step} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

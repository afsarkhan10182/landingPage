import { ArrowDownRight } from "lucide-react";

const steps = [
  [
    "Choose your software.",
    "Pick the product that matches how your business works.",
  ],
  [
    "Open the demo.",
    "Use the provided demo access to explore the workflow at your own pace.",
  ],
  [
    "Set up with confidence.",
    "Agree on scope and pricing, then we configure the software and train your team.",
  ],
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="process section-space">
      <div className="shell process-inner">
        <div className="reveal">
          <p className="eyebrow">03 / GET STARTED</p>
          <h2>
            A clear way
            <br />
            <em>to start.</em>
          </h2>
          <ArrowDownRight className="process-arrow" size={76} strokeWidth={1} />
        </div>
        <ol className="process-list">
          {steps.map(([title, description], index) => (
            <li key={title} className="reveal">
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

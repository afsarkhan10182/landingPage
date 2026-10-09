import {
  ArrowUpRight,
  Cloud,
  Headphones,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "We get you set up.",
    description:
      "Hosting, domain, configuration. We handle the technical details so you can get to work.",
  },
  {
    icon: Users,
    title: "Your team gets confident.",
    description:
      "Practical training around the tasks your people do every day, before you go live.",
  },
  {
    icon: SlidersHorizontal,
    title: "It fits the way you work.",
    description:
      "Need a different workflow? We work through the changes your business actually needs.",
  },
  {
    icon: Headphones,
    title: "People you can reach.",
    description:
      "A question, a fix, a next step. Get help from our team on WhatsApp after launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services section-space">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">02 / THE DIGITALFUZED DIFFERENCE</p>
            <h2>
              Good software.
              <br />
              <em>Even better company.</em>
            </h2>
          </div>
          <p>
            Choosing software is one thing.
            <br />
            Getting it working for your people is where we come in.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article className="service-item reveal" key={title}>
              <div className="service-top">
                <Icon size={26} strokeWidth={1.5} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="custom-line">
          <p>
            Something a little different in mind?{" "}
            <span>We build custom solutions, too.</span>
          </p>
          <a href="#contact" className="text-link">
            Tell us about it <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

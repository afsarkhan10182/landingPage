import { ArrowUpRight, Check } from "lucide-react";
import heroImage from "../assets/team-workspace-crm-hero.webp";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <img
          className="hero-photo"
          src={heroImage}
          alt="Business team reviewing a DigitalFuzed CRM dashboard"
          loading="eager"
        />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> DIGITALFUZED / SOFTWARE & SUPPORT
          </p>
          <h1>
            Business software.
            <br />
            <em>A personal touch.</em>
          </h1>
          <p className="hero-description">
            Less time managing the everyday.
            <br />
            More time for the business you believe in.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#portfolio">
              Explore free demos <ArrowUpRight size={20} />
            </a>
            <a className="hero-text-link" href="#contact">
              Talk to our team <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="hero-foot">
            <p>
              <Check size={16} /> Real products. Setup, training & a team to
              call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

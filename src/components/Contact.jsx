import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { liveProducts } from "../data/liveProducts";

export default function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `New DigitalFuzed enquiry:\nName: ${data.get("name").trim()}\nPhone: ${data.get("phone").trim()}\nBusiness type: ${data.get("businessType").trim()}\nSoftware: ${data.get("software")}`;
    window.open(
      `https://wa.me/918600349491?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus(
      "Your request is ready in WhatsApp. Tap Send there to share it with us. If WhatsApp didn't open, use the email link.",
    );
  };
  return (
    <section id="contact" className="contact section-space">
      <div className="shell contact-inner">
        <div className="contact-copy reveal">
          <p className="eyebrow">04 / LET&apos;S TALK</p>
          <h2>
            Let&apos;s get you
            <br />
            <em>set up.</em>
          </h2>
          <p>
            Tell us a little about your business.
            <br />
            We&apos;ll point you to the right starting point.
          </p>
          <div className="contact-links">
            <a href="mailto:sales@digitalfuzed.com">
              <Mail size={19} />
              sales@digitalfuzed.com
            </a>
            <a href="tel:+918600349491">
              <Phone size={19} />
              +91 86003 49491
            </a>
          </div>
          <span className="contact-location">
            Based in Mumbai. Built for your business.
          </span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Tell us what you need.</h3>
          <div className="form-row">
            <label htmlFor="name">
              Your name
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                required
                maxLength={100}
                pattern={".*\\S.*"}
              />
            </label>
            <label htmlFor="phone">
              Phone number
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Your contact number"
                required
                maxLength={25}
                pattern={"[+0-9\\(\\) .\\-]{7,25}"}
              />
            </label>
          </div>
          <label htmlFor="businessType">
            Your business
            <input
              id="businessType"
              name="businessType"
              placeholder="e.g. a salon, a school, a growing team"
              required
              maxLength={150}
              pattern={".*\\S.*"}
            />
          </label>
          <label htmlFor="software">
            What are you interested in?
            <select id="software" name="software" required defaultValue="">
              <option value="" disabled>
                Select a product
              </option>
              {liveProducts.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
              <option value="Custom solution">A custom solution</option>
              <option value="Help me choose">Help me choose</option>
            </select>
          </label>
          <button className="button button-dark" type="submit">
            Talk to our team <ArrowUpRight size={20} />
          </button>
          <p className="form-note">Opens WhatsApp with your details.</p>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

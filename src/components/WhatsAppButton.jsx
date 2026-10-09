import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/918600349491?text=Hello%20DigitalFuzed%2C%20I%27d%20like%20to%20discuss%20software%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Let&apos;s talk</span>
    </a>
  );
}

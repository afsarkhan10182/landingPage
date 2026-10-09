import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  QrCode,
  Scissors,
  Users,
  UtensilsCrossed,
  KeyRound,
} from "lucide-react";
import { liveProducts, productGroups } from "../data/liveProducts";

const icons = {
  Building2,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  QrCode,
  Scissors,
  Users,
  UtensilsCrossed,
};
const filterNames = {
  "education-health": "Education & health",
  "property-hospitality": "Property & hospitality",
  "business-platforms": "Business tools",
};
const productOrder = [
  "salon",
  "school",
  "realestate",
  "crm",
  "erp",
  "restaurant",
  "hospital",
  "qrb",
];
const products = productOrder.map((id) =>
  liveProducts.find((product) => product.id === id),
);

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [previewId, setPreviewId] = useState(productOrder[0]);
  const previewButtonRefs = useRef({});
  const visible = products.filter(
    (product) => filter === "all" || product.group === filter,
  );
  const preview = products.find((product) => product.id === previewId);
  const selectPreview = (id) => {
    previewButtonRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
    setPreviewId(id);
  };
  const movePreview = (direction) => {
    const currentIndex = products.findIndex((product) => product.id === previewId);
    const nextIndex =
      (currentIndex + direction + products.length) % products.length;
    selectPreview(products[nextIndex].id);
  };
  return (
    <section id="portfolio" className="portfolio section-space">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">01 / THE SOFTWARE COLLECTION</p>
            <h2>
              Your business.
              <br />
              <em>Your kind of software.</em>
            </h2>
          </div>
          <p>
            From the first appointment to the last invoice.
            <br className="desktop-break" /> Find a better way to run your day.
          </p>
        </div>
        <p className="demo-note">
          <KeyRound size={20} aria-hidden="true" />
          <span>
            <strong>Ready to explore?</strong> Working demo access is available
            for every product. Open one and try it yourself.
          </span>
        </p>
        <div className="filter-bar">
          <div
            className="product-filters"
            role="group"
            aria-label="Filter software by industry"
          >
            <button
              type="button"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All software <span>{products.length}</span>
            </button>
            {productGroups.map((group) => (
              <button
                type="button"
                key={group.id}
                aria-pressed={filter === group.id}
                onClick={() => setFilter(group.id)}
              >
                {filterNames[group.id]}
              </button>
            ))}
          </div>
          <span className="results-count" role="status">
            {visible.length} products
          </span>
        </div>
        <div className="product-directory">
          {visible.map((product) => {
            const Icon = icons[product.icon];
            return (
              <a
                key={product.id}
                href={product.url}
                className={`product-entry product-${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="product-icon">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <div>
                  <span className="product-category">
                    {product.id === "qrb"
                      ? "Digital presence"
                      : product.id === "crm" || product.id === "erp"
                        ? "Business essentials"
                        : "Industry software"}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-demo">
                    Open live demo <ArrowUpRight size={14} />
                  </span>
                </div>
                <ArrowUpRight className="product-arrow" size={22} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="product-spotlight">
        <div className="shell spotlight-inner">
          <div className="spotlight-copy reveal">
            <p className="eyebrow">A LOOK INSIDE</p>
            <h2>
              Less guessing.
              <br />
              <em>More clarity.</em>
            </h2>
            <p>{preview.description}</p>
            <div
              className="preview-switch"
              role="group"
              aria-label="Choose product preview"
            >
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  ref={(element) => {
                    previewButtonRefs.current[product.id] = element;
                  }}
                  aria-pressed={previewId === product.id}
                  onClick={() => selectPreview(product.id)}
                >
                  {product.name}
                </button>
              ))}
            </div>
            <a
              className="text-link"
              href={preview.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore {preview.name} <ArrowUpRight size={18} />
            </a>
          </div>
          <figure className="product-screenshot reveal">
            <div className="screenshot-label">
              <span>
                <span className="status-dot" /> {preview.name}
              </span>
              <div className="preview-navigation">
                <button
                  type="button"
                  className="preview-arrow"
                  aria-label="Previous product preview"
                  title="Previous product preview"
                  onClick={() => movePreview(-1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="preview-arrow"
                  aria-label="Next product preview"
                  title="Next product preview"
                  onClick={() => movePreview(1)}
                >
                  <ChevronRight size={18} />
                </button>
                <a
                  href={preview.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enlarge ${preview.name} screenshot`}
                >
                  View full size <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <img
              key={preview.id}
              src={preview.image}
              alt={preview.imageAlt}
              loading="lazy"
            />
            <figcaption>Actual product screen. Sample data shown.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

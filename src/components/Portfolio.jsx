import {
  Building2,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  QrCode,
  Scissors,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import PropTypes from "prop-types";
import { productGroups, productsByGroup } from "../data/liveProducts";

const ICONS = {
  GraduationCap,
  HeartPulse,
  Building2,
  UtensilsCrossed,
  Scissors,
  Users,
  LayoutDashboard,
  QrCode,
};

const ProductCard = ({ product }) => {
  const Icon = ICONS[product.icon];

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
          className={`group flex h-full flex-col rounded-2xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${product.surface}`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${product.iconWrap}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ${product.accent}`}
        >
          Live
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
        {product.name}
      </h3>
      <p className="mt-1 font-mono text-xs text-gray-500">{product.host}</p>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">
        {product.description}
      </p>

      <span className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-3 text-sm font-semibold text-white group-hover:from-blue-700 group-hover:to-teal-700">
        Open live demo
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    iconWrap: PropTypes.string.isRequired,
    surface: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-100 pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Already running a business?
          </div>
          <h2 className="mb-1 text-3xl font-bold md:text-4xl">
            See the software working before paying
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Open a live demo or talk to us on WhatsApp for the right setup.
          </p>
        </div>

        <div className="space-y-8">
          {productGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-3 flex flex-col gap-0.5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {group.title}
                  </h3>
                  <p className="text-sm text-gray-500">{group.description}</p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {productsByGroup(group.id).length} products
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {productsByGroup(group.id).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Request Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

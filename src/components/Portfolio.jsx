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

const ProductPreview = ({ product, Icon }) => {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name + " screenshot"}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-slate-900 p-6 text-center text-white">
      <div>
        <Icon className="mx-auto mb-3 h-10 w-10 text-[#38BDF8]" aria-hidden="true" />
        <p className="text-lg font-extrabold">{product.name}</p>
        <p className="mt-1 break-all font-mono text-xs text-slate-400">{product.host}</p>
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.shape({
    host: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  Icon: PropTypes.elementType.isRequired,
};

const ProductCard = ({ product }) => {
  const Icon = ICONS[product.icon];

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={"group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg " + product.surface}
    >
      <div className="aspect-[16/9] border-b border-black/5 bg-white">
        <ProductPreview product={product} Icon={Icon} />
      </div>

      <div className="flex flex-grow flex-col p-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div
            className={"flex h-11 w-11 items-center justify-center rounded-lg " + product.iconWrap}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span
            className={"inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white " + product.accent}
          >
            Live
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
          {product.name}
        </h3>
        <p className="mt-1 break-all font-mono text-xs text-gray-500">{product.host}</p>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>

        <span className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#0F172A] px-3 text-sm font-semibold text-white group-hover:bg-[#0369A1]">
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
      </div>
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
    image: PropTypes.string,
    surface: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-100 pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-green-500/20 bg-emerald-50 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Live work
          </div>
          <h2 className="mb-1 text-2xl font-bold sm:text-3xl md:text-4xl">
            See our products working before paying
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            Open a live demo. If login is required, ask for access on WhatsApp.
          </p>
        </div>

        <div className="space-y-8">
          {productGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-3 flex flex-col gap-0.5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
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
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#38BDF8] px-6 py-3 text-center font-extrabold text-[#0F172A] transition duration-300 hover:bg-[#0F172A] hover:text-white sm:px-8"
          >
            Ask for Demo Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

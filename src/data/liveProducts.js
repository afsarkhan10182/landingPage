import restaurantImage from "../assets/restaurant.png";
import schoolErpImage from "../assets/school-erp.png";
import salonImage from "../assets/salon-preview.webp";
import realestateImage from "../assets/realestate-preview.webp";
import erpImage from "../assets/erp-preview.webp";
import hospitalImage from "../assets/hospital-preview.webp";
import qrPagesImage from "../assets/qrb-preview.webp";
import crmImage from "../assets/crm-preview.webp";

export const liveProducts = [
  {
    id: "school",
    name: "School ERP",
    host: "school.digitalfuzed.com",
    url: "https://school.digitalfuzed.com",
    group: "education-health",
    description: "Attendance, fees, report cards, and a parent portal.",
    image: schoolErpImage,
    imageAlt: "School ERP dashboard with student records and fee collection",
    icon: "GraduationCap",
    accent: "bg-blue-500",
    iconWrap: "bg-blue-100 text-blue-700",
    surface: "border-blue-200 bg-blue-50",
  },
  {
    id: "hospital",
    name: "Hospital Management",
    host: "hospital.digitalfuzed.com",
    url: "https://hospital.digitalfuzed.com",
    group: "education-health",
    description: "Patient queues, appointments, billing, and pharmacy stock.",
    image: hospitalImage,
    imageAlt:
      "Hospital dashboard with billing totals, expenses, and bed occupancy",
    icon: "HeartPulse",
    accent: "bg-rose-500",
    iconWrap: "bg-rose-100 text-rose-700",
    surface: "border-rose-200 bg-rose-50",
  },
  {
    id: "realestate",
    name: "Real Estate CRM",
    host: "realestate.digitalfuzed.com",
    url: "https://realestate.digitalfuzed.com",
    group: "property-hospitality",
    description: "Properties, leads, site progress, and client follow-ups.",
    image: realestateImage,
    imageAlt:
      "Real estate dashboard with projects, sales, and property availability",
    icon: "Building2",
    accent: "bg-amber-500",
    iconWrap: "bg-amber-100 text-amber-800",
    surface: "border-amber-200 bg-amber-50",
  },
  {
    id: "restaurant",
    name: "Restaurant POS",
    host: "restaurant.digitalfuzed.com",
    url: "https://restaurant.digitalfuzed.com/login",
    group: "property-hospitality",
    description: "POS, KOT, tables, inventory, and reports.",
    image: restaurantImage,
    imageAlt:
      "Restaurant POS dashboard with orders, earnings, and sales reports",
    icon: "UtensilsCrossed",
    accent: "bg-emerald-500",
    iconWrap: "bg-emerald-100 text-emerald-800",
    surface: "border-emerald-200 bg-emerald-50",
  },
  {
    id: "salon",
    name: "Salon Management",
    host: "saloon.digitalfuzed.com",
    url: "https://saloon.digitalfuzed.com",
    group: "property-hospitality",
    description: "Appointments, billing, staff, inventory, and CRM.",
    image: salonImage,
    imageAlt:
      "Salon dashboard with appointments, revenue, and upcoming bookings",
    icon: "Scissors",
    accent: "bg-fuchsia-500",
    iconWrap: "bg-fuchsia-100 text-fuchsia-800",
    surface: "border-fuchsia-200 bg-fuchsia-50",
  },
  {
    id: "crm",
    name: "CRM",
    host: "crm.digitalfuzed.com",
    url: "https://crm.digitalfuzed.com/login",
    group: "business-platforms",
    description: "Leads, pipeline, and customer follow-ups for any team.",
    image: crmImage,
    imageAlt:
      "CRM dashboard with lead totals, customers, projects, and sales trends",
    icon: "Users",
    accent: "bg-violet-500",
    iconWrap: "bg-violet-100 text-violet-800",
    surface: "border-violet-200 bg-violet-50",
  },
  {
    id: "erp",
    name: "Business ERP",
    host: "erp.digitalfuzed.com",
    url: "https://erp.digitalfuzed.com",
    group: "business-platforms",
    description: "Purchase, sales, inventory, accounting, and reports.",
    image: erpImage,
    imageAlt:
      "Business ERP dashboard with clients, suppliers, and payment performance",
    icon: "LayoutDashboard",
    accent: "bg-slate-700",
    iconWrap: "bg-white text-slate-700",
    surface: "border-slate-300 bg-slate-200",
  },
  {
    id: "qrb",
    name: "QR Pages",
    host: "qrb.digitalfuzed.com",
    url: "https://qrb.digitalfuzed.com",
    group: "business-platforms",
    description: "Bio pages, page QR codes, short links, and scan analytics.",
    image: qrPagesImage,
    imageAlt:
      "QR Pages dashboard with published pages, QR scans, and short-link activity",
    icon: "QrCode",
    accent: "bg-cyan-500",
    iconWrap: "bg-cyan-100 text-cyan-800",
    surface: "border-cyan-200 bg-cyan-50",
  },
];

export const productGroups = [
  {
    id: "education-health",
    title: "Education & healthcare",
    description:
      "Schools and clinics that still run on paper registers and slow billing.",
  },
  {
    id: "property-hospitality",
    title: "Property & hospitality",
    description:
      "Property teams, restaurants, and salons that need bookings, orders, and follow-ups.",
  },
  {
    id: "business-platforms",
    title: "Business platforms",
    description: "Tools any company can start with: CRM, ERP, and QR pages.",
  },
];

export const productsByGroup = (groupId) =>
  liveProducts.filter((product) => product.group === groupId);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Gianti Logistics",
  description:
    "Marine services, terminal operations, land, rail, ocean, and air freight, project logistics, and consulting. Full-spectrum logistics solutions from Gianti Logistics.",
  openGraph: {
    title: "Our Services - Gianti Logistics",
    description:
      "Comprehensive logistics solutions: marine, terminal, multimodal freight, project cargo, and consulting across the Caucasus and worldwide.",
    images: ["/images/gianti/logo.png"],
  },
};

interface ServiceCard {
  id: string;
  title: string;
  i18nTitle: string;
  description: string;
  i18nDesc: string;
  capabilities: string[];
}

const services: ServiceCard[] = [
  {
    id: "marine",
    title: "Marine Services",
    i18nTitle: "svc-marine-title",
    description:
      "Ship's agency, chartering, and port stevedoring for breakbulk and project cargo. We coordinate marine operations throughout the Caucasus region, managing vessel scheduling, cargo loading plans, and port formalities to keep your supply chain moving through Georgian and regional seaports.",
    i18nDesc: "svc-marine-desc",
    capabilities: [
      "Ship's agency",
      "Chartering",
      "Port stevedoring",
      "Breakbulk handling",
      "Caucasus-wide operations",
    ],
  },
  {
    id: "terminal",
    title: "Gianti Terminal",
    i18nTitle: "svc-terminal-title",
    description:
      "Our terminal in Poti spans 22,280 square meters, purpose-built for high-volume cargo handling. Equipped with reach stackers, forklifts, rail spurs, CCTV surveillance, and trailer parking, the terminal handles truck, railcar, and container operations with full security and efficiency.",
    i18nDesc: "svc-terminal-desc",
    capabilities: [
      "22,280 m\u00B2 facility",
      "Reach stackers & forklifts",
      "Rail spur access",
      "CCTV security",
      "Container & trailer ops",
    ],
  },
  {
    id: "land",
    title: "Land Freight",
    i18nTitle: "svc-land-title",
    description:
      "Our fleet covers the full spectrum of road transport: tilt trailers, containerized trailers, flatbed trailers, low loaders, and multi-axle special hydraulic modular trailers. Whether standard or heavy cargo, we deliver with equipment matched precisely to your load.",
    i18nDesc: "svc-land-desc",
    capabilities: [
      "Tilt trailers",
      "Containerized trailers",
      "Flatbed trailers",
      "Low loaders",
      "Multi-axle hydraulic modular trailers",
    ],
  },
  {
    id: "rail",
    title: "Rail Freight",
    i18nTitle: "svc-rail-title",
    description:
      "Deep expertise in the CIS railway network powers our intermodal transportation solutions. We coordinate rail movements across Georgia, Azerbaijan, Central Asia, and beyond, integrating rail legs seamlessly into door-to-door logistics chains.",
    i18nDesc: "svc-rail-desc",
    capabilities: [
      "CIS railway network",
      "Intermodal solutions",
      "Cross-border coordination",
      "Wagon procurement",
    ],
  },
  {
    id: "ocean",
    title: "Ocean Freight",
    i18nTitle: "svc-ocean-title",
    description:
      "Operating through Georgian seaports in Poti and Batumi, we provide ocean freight services backed by a worldwide agent network. From FCL and LCL to breakbulk and project cargo, we connect the Caucasus to global trade lanes.",
    i18nDesc: "svc-ocean-desc",
    capabilities: [
      "Poti & Batumi seaports",
      "Worldwide agent network",
      "FCL & LCL",
      "Global coverage",
    ],
  },
  {
    id: "air",
    title: "Air Freight",
    i18nTitle: "svc-air-title",
    description:
      "For time-critical shipments, our air freight services leverage an extensive global agent network and airline partnerships. We handle documentation, customs clearance, and last-mile delivery for urgent cargo moving anywhere in the world.",
    i18nDesc: "svc-air-desc",
    capabilities: [
      "Time-critical shipments",
      "Global agent network",
      "Customs clearance",
      "Door-to-door delivery",
    ],
  },
  {
    id: "project",
    title: "Project Logistics",
    i18nTitle: "svc-project-title",
    description:
      "Heavy lift services including jacking and skidding with capacity up to 400 tons, crane services, and route engineering. Our experienced personnel manage the end-to-end movement of oversized, overweight, and complex cargo that demands specialized planning and execution.",
    i18nDesc: "svc-project-desc",
    capabilities: [
      "Heavy lift (up to 400t)",
      "Jacking & skidding",
      "Crane services",
      "Oversized cargo",
      "Experienced project teams",
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    i18nTitle: "svc-consulting-title",
    description:
      "Before a single load moves, our consulting team conducts route access surveys, topographical surveys, site visits, and swept path analysis. We provide expert guidance for complex transport planning so you can make informed decisions before committing resources.",
    i18nDesc: "svc-consulting-desc",
    capabilities: [
      "Route access surveys",
      "Topographical surveys",
      "Site visits",
      "Swept path analysis",
      "Transport planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-28 px-6 md:py-36"
        style={{ backgroundColor: "#1e6b3c" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase tracking-[0.25em] text-sm font-medium mb-4"
            style={{ color: "#34d068" }}
            data-i18n="services-hero-tag"
          >
            Full-Spectrum Logistics
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            data-i18n="services-hero-title"
          >
            Our Services
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
            data-i18n="services-hero-subtitle"
          >
            Comprehensive logistics solutions across the globe &mdash; from
            marine operations to project cargo consulting.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-6 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full border border-gray-200 text-[#1e6b3c] hover:border-[#1DB954] hover:bg-[rgba(29,185,84,0.06)] transition-colors duration-150"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-6 md:py-24" style={{ backgroundColor: "#f7faf8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, idx) => (
              <article
                key={svc.id}
                id={svc.id}
                className="relative p-7 md:p-8 rounded-xl bg-white border border-gray-200 hover:border-[#1DB954] transition-all duration-200 scroll-mt-24 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(29,185,84,0.10)]"
              >
                {/* Number badge */}
                <span
                  className="absolute top-5 right-6 text-5xl font-black leading-none select-none"
                  style={{ color: "rgba(29, 185, 84, 0.07)" }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Card icon area */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(29, 185, 84, 0.1)" }}
                >
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#1DB954" }}
                  />
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ color: "#1e6b3c" }}
                  data-i18n={svc.i18nTitle}
                >
                  {svc.title}
                </h3>

                <p
                  className="text-base text-gray-600 leading-relaxed mb-5"
                  data-i18n={svc.i18nDesc}
                >
                  {svc.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-2">
                  {svc.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: "rgba(29, 185, 84, 0.06)",
                        color: "#1e6b3c",
                        border: "1px solid rgba(29, 185, 84, 0.15)",
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section
        className="py-14 px-6"
        style={{ backgroundColor: "#1e6b3c" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            data-i18n="services-cta-title"
          >
            Need a tailored logistics solution?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
            data-i18n="services-cta-subtitle"
          >
            Our team can scope, plan, and execute complex cargo movements
            anywhere in the world.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full text-base font-semibold transition-colors duration-150 bg-[#1DB954] text-white hover:bg-[#34d068]"
            data-i18n="services-cta-button"
          >
            Talk to us
          </a>
        </div>
      </section>
    </div>
  );
}

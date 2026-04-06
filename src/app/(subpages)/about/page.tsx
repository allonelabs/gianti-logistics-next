import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Gianti Logistics",
  description:
    "Founded in 2005, Gianti Logistics is a leading transport and logistics provider in Georgia specializing in containerized, heavy lift, and project cargo across the Caucasus, CIS, and worldwide.",
  openGraph: {
    title: "About Us - Gianti Logistics",
    description:
      "Leading transport and logistics provider in Georgia since 2005. Containerized, heavy lift, and project cargo specialists.",
    images: ["/images/gianti/logo.png"],
  },
};

const offices = [
  {
    city: "Tbilisi",
    tag: "Headquarters",
    address: "12b Kazbegi Ave, Tbilisi 0160, Georgia",
    i18nCity: "loc-tbilisi",
  },
  {
    city: "Poti",
    tag: "Terminal & Operations",
    address: "Paliashvili Str. 12, Poti 4400",
    i18nCity: "loc-poti",
  },
  {
    city: "Batumi",
    tag: "Representative Office",
    address: "Batumi, Georgia",
    i18nCity: "loc-batumi",
  },
  {
    city: "Baku",
    tag: "Azerbaijan",
    address: "Blue Office Business Center, 8 November Ave., Khatai Dist., AZ 1025",
    i18nCity: "loc-baku",
  },
  {
    city: "Tashkent",
    tag: "Uzbekistan",
    address: "Afrosiab 4, Tashkent",
    i18nCity: "loc-tashkent",
  },
  {
    city: "Almaty",
    tag: "Kazakhstan",
    address: "Seyfullin Avenue 420, Business Centre Cascade, Office 304",
    i18nCity: "loc-almaty",
  },
  {
    city: "Istanbul",
    tag: "Turkey",
    address: "Barbaros Mh. Ahlat Sk. Varyap Meridian E1 Blok No: 1 A/7, Atasehir",
    i18nCity: "loc-istanbul",
  },
];

export default function AboutPage() {
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
            data-i18n="about-hero-tag"
          >
            Est. 2005 &mdash; Tbilisi, Georgia
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            data-i18n="about-hero-title"
          >
            About Gianti Logistics
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
            data-i18n="about-hero-subtitle"
          >
            More than just logistics &mdash; a partner embedded in the
            infrastructure of trade across the Caucasus and beyond.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-6 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="shrink-0">
              <span
                className="block text-7xl md:text-8xl font-black leading-none"
                style={{ color: "#1DB954" }}
              >
                2005
              </span>
              <span
                className="block text-sm uppercase tracking-widest mt-2 font-medium"
                style={{ color: "#1e6b3c" }}
                data-i18n="about-founded-label"
              >
                Year Founded
              </span>
            </div>
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: "#1e6b3c" }}
                data-i18n="about-history-title"
              >
                Two Decades of Moving What Matters
              </h2>
              <p
                className="text-lg leading-relaxed text-gray-700 mb-4"
                data-i18n="about-history-p1"
              >
                Founded in 2005 in Tbilisi, Georgia, Gianti Logistics has grown
                into a leading transport and logistics provider specializing in
                containerized, heavy lift, and project cargos throughout Georgia,
                CIS countries, and worldwide.
              </p>
              <p
                className="text-lg leading-relaxed text-gray-700"
                data-i18n="about-history-p2"
              >
                From a single office to a network spanning six countries, our
                growth is built on operational precision, deep regional
                expertise, and an unwavering commitment to moving complex cargo
                safely and on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — alternating rhythm, denser section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f7faf8" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#1e6b3c" }}
            data-i18n="about-whatwedo-title"
          >
            What We Do
          </h2>
          <div
            className="w-16 h-1 mb-10 rounded-full"
            style={{ backgroundColor: "#1DB954" }}
          />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <p
                className="text-base leading-relaxed text-gray-700"
                data-i18n="about-whatwedo-p1"
              >
                Gianti Logistics specializes in the handling and transportation
                of containerized, in gauge, out of gauge, heavy lift, and
                project cargos. Our services cover the full logistics chain
                &mdash; from initial route survey through final delivery.
              </p>
            </div>
            <div>
              <p
                className="text-base leading-relaxed text-gray-700"
                data-i18n="about-whatwedo-p2"
              >
                Our core capabilities include marine operations, terminal
                handling, multimodal transport across land, rail, ocean, and air,
                project logistics for oversized cargo, and expert consulting for
                complex transport planning.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Marine Operations",
              "Terminal Handling",
              "Land Freight",
              "Rail Freight",
              "Ocean Freight",
              "Air Freight",
              "Project Logistics",
              "Consulting",
            ].map((cap) => (
              <span
                key={cap}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full border"
                style={{
                  borderColor: "#1DB954",
                  color: "#1e6b3c",
                  backgroundColor: "rgba(29, 185, 84, 0.08)",
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section className="py-20 px-6 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#1e6b3c" }}
            data-i18n="about-presence-title"
          >
            Our Presence
          </h2>
          <p
            className="text-base text-gray-500 mb-10 max-w-xl"
            data-i18n="about-presence-subtitle"
          >
            Seven offices across five countries, positioned along key trade
            corridors between Europe, Central Asia, and the Caucasus.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div
                key={office.i18nCity}
                className="group relative p-6 rounded-lg border border-gray-200 hover:border-[#1DB954] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(29,185,84,0.12)]"
              >
                {office.tag && (
                  <span
                    className="text-xs uppercase tracking-wider font-semibold mb-2 block"
                    style={{ color: "#1DB954" }}
                  >
                    {office.tag}
                  </span>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#1e6b3c" }}
                  data-i18n={office.i18nCity}
                >
                  {office.city}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships — compact band */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: "#1e6b3c" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white text-lg font-semibold"
            data-i18n="about-pla"
          >
            Proud member of Project Logistics Alliance
          </p>
          <div
            className="w-px h-6 hidden sm:block"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          />
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
            data-i18n="about-pla-desc"
          >
            A global network of independent project logistics companies
          </p>
        </div>
      </section>
    </div>
  );
}

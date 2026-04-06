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
    tag: "HQ",
    country: "Georgia",
    address: "12b Kazbegi Ave, Tbilisi 0160",
    phone: "+995 322 457 457",
    i18nCity: "loc-tbilisi",
  },
  {
    city: "Poti",
    tag: "Terminal",
    country: "Georgia",
    address: "Paliashvili Str. 12, Poti 4400",
    phone: "+995 322 112 072",
    i18nCity: "loc-poti",
  },
  {
    city: "Batumi",
    tag: "Office",
    country: "Georgia",
    address: "Batumi, Georgia",
    phone: "",
    i18nCity: "loc-batumi",
  },
  {
    city: "Baku",
    tag: "Office",
    country: "Azerbaijan",
    address: "Blue Office Business Center, 6th floor, 8 November Ave.",
    phone: "+994 502 340 842",
    i18nCity: "loc-baku",
  },
  {
    city: "Tashkent",
    tag: "Office",
    country: "Uzbekistan",
    address: "Afrosiab 4",
    phone: "+998 71 200 07 60",
    i18nCity: "loc-tashkent",
  },
  {
    city: "Almaty",
    tag: "Office",
    country: "Kazakhstan",
    address: "Seyfullin Avenue 420, Cascade, Office 304",
    phone: "+7 705 422 42 45",
    i18nCity: "loc-almaty",
  },
  {
    city: "Istanbul",
    tag: "Office",
    country: "Turkey",
    address: "Barbaros Mh., Varyap Meridian E1 Blok, Atasehir",
    phone: "+90 535 200 34 78",
    i18nCity: "loc-istanbul",
  },
];

const capabilities = [
  "Marine Operations",
  "Terminal Handling",
  "Land Freight",
  "Rail Freight",
  "Ocean Freight",
  "Air Freight",
  "Project Logistics",
  "Consulting",
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#1e6b3c", color: "#f2fcf1", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#163d28", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 100,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}
          >
            Est. 2005 &mdash; Tbilisi, Georgia
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
              color: "#ffffff",
            }}
            data-i18n="about-hero-title"
          >
            About Gianti Logistics
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: 1.5,
              maxWidth: 640,
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
            }}
            data-i18n="about-hero-subtitle"
          >
            More than just logistics &mdash; a partner embedded in the
            infrastructure of trade across the Caucasus and beyond.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 2, backgroundColor: "#1DB954" }} />
            <span
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1DB954",
                fontWeight: 600,
              }}
            >
              Our Story
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            <p
              style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}
              data-i18n="about-history-p1"
            >
              Founded in 2005 in Tbilisi, Georgia, Gianti Logistics has grown
              into a leading transport and logistics provider specializing in
              containerized, heavy lift, and project cargos throughout Georgia,
              CIS countries, and worldwide.
            </p>
            <p
              style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}
              data-i18n="about-history-p2"
            >
              From a single office to a network spanning six countries, our
              growth is built on operational precision, deep regional
              expertise, and an unwavering commitment to moving complex cargo
              safely and on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 2, backgroundColor: "#1DB954" }} />
            <span
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1DB954",
                fontWeight: 600,
              }}
            >
              What We Do
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <p
              style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}
              data-i18n="about-whatwedo-p1"
            >
              Gianti Logistics specializes in the handling and transportation
              of containerized, in gauge, out of gauge, heavy lift, and
              project cargos. Our services cover the full logistics chain
              &mdash; from initial route survey through final delivery.
            </p>
            <p
              style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}
              data-i18n="about-whatwedo-p2"
            >
              Our core capabilities include marine operations, terminal
              handling, multimodal transport across land, rail, ocean, and air,
              project logistics for oversized cargo, and expert consulting for
              complex transport planning.
            </p>
          </div>

          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10 }}>
            {capabilities.map((cap) => (
              <span
                key={cap}
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 100,
                  border: "1px solid rgba(29, 185, 84, 0.4)",
                  color: "#1DB954",
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
      <section style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 2, backgroundColor: "#1DB954" }} />
            <span
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1DB954",
                fontWeight: 600,
              }}
            >
              Our Presence
            </span>
          </div>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 40,
              maxWidth: 500,
              lineHeight: 1.6,
            }}
            data-i18n="about-presence-subtitle"
          >
            Seven offices across five countries, positioned along key trade
            corridors between Europe, Central Asia, and the Caucasus.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {offices.map((office) => (
              <div
                key={office.i18nCity}
                style={{
                  padding: "24px",
                  borderRadius: 8,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3
                    style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}
                    data-i18n={office.i18nCity}
                  >
                    {office.city}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: 100,
                      backgroundColor: office.tag === "HQ" ? "#1DB954" : "rgba(255,255,255,0.1)",
                      color: office.tag === "HQ" ? "#163d28" : "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {office.tag}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                  {office.country}
                </p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {office.address}
                </p>
                {office.phone && (
                  <p style={{ fontSize: 14, color: "#1DB954", marginTop: 8 }}>
                    {office.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLA Membership */}
      <section style={{ padding: "48px 24px", backgroundColor: "#163d28" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{ fontSize: 18, fontWeight: 600, color: "#ffffff" }}
            data-i18n="about-pla"
          >
            Proud member of Project Logistics Alliance
          </p>
          <p
            style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}
            data-i18n="about-pla-desc"
          >
            A global network of independent project logistics companies
          </p>
        </div>
      </section>
    </div>
  );
}

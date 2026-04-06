import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Gianti Logistics",
  description:
    "Get in touch with Gianti Logistics. Offices in Tbilisi, Poti, Baku, Tashkent, Almaty, and Istanbul. Phone, email, and regional office details.",
  openGraph: {
    title: "Contact Us - Gianti Logistics",
    description:
      "Reach our team across Georgia, Azerbaijan, Uzbekistan, Kazakhstan, and Turkey.",
    images: ["/images/gianti/logo.png"],
  },
};

const departments = [
  { label: "Road Transport", email: "road@giantilogistics.ge", i18n: "dept-road" },
  { label: "Project Cargo", email: "project@giantilogistics.ge", i18n: "dept-project" },
  { label: "CIS Region", email: "cis@giantilogistics.ge", i18n: "dept-cis" },
  { label: "Sales", email: "sale@giantilogistics.ge", i18n: "dept-sales" },
];

const regionalOffices = [
  {
    city: "Poti",
    country: "Georgia",
    address: "Paliashvili Str. 12, Poti 4400",
    phone: "+995 322 112 072",
    email: "Poti@giantilogistics.ge",
    i18nCity: "loc-poti",
  },
  {
    city: "Baku",
    country: "Azerbaijan",
    address:
      "Blue Office Business Center, 6th floor, 8 November Ave., Khatai Dist., AZ 1025",
    phone: "+994 502 340 842",
    email: "operations@giantilogistics.com",
    i18nCity: "loc-baku",
  },
  {
    city: "Tashkent",
    country: "Uzbekistan",
    address: "Afrosiab 4",
    phone: "+998 71 200 07 60",
    email: "uzbekistan@giantilogistics.com",
    i18nCity: "loc-tashkent",
  },
  {
    city: "Almaty",
    country: "Kazakhstan",
    address:
      "Seyfullin Avenue 420, Business Centre Cascade, Office 304",
    phone: "+7 705 422 42 45",
    email: "gmurgulia@giantilogistics.com",
    i18nCity: "loc-almaty",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    address:
      "Barbaros Mh. Ahlat Sk. Varyap Meridian E1 Blok No: 1 A/7, Atasehir",
    phone: "+90 535 200 34 78",
    email: "turkiye@giantilogistics.com",
    i18nCity: "loc-istanbul",
  },
];

export default function ContactPage() {
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
            data-i18n="contact-hero-tag"
          >
            Reach Our Team
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            data-i18n="contact-hero-title"
          >
            Contact Us
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-2xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
            data-i18n="contact-hero-subtitle"
          >
            Get in touch with our team &mdash; whether you need a quote, have a
            question, or want to discuss a project.
          </p>
        </div>
      </section>

      {/* Central Office */}
      <section className="py-20 px-6 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
            {/* Left: address & hours */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "#1e6b3c" }}
                data-i18n="contact-central-title"
              >
                Central Office
              </h2>
              <span
                className="inline-block text-xs uppercase tracking-wider font-semibold mb-6"
                style={{ color: "#1DB954" }}
                data-i18n="contact-central-tag"
              >
                Tbilisi, Georgia &mdash; Headquarters
              </span>

              <address className="not-italic text-gray-700 text-base leading-relaxed mb-6">
                <p className="mb-1" data-i18n="contact-central-addr">
                  12b Kazbegi Ave, Tbilisi 0160, Georgia
                </p>
                <p className="mb-1">
                  <a
                    href="tel:+995322457457"
                    className="hover:underline"
                    style={{ color: "#1e6b3c" }}
                  >
                    +995 322 457 457
                  </a>
                </p>
              </address>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(29, 185, 84, 0.08)",
                  color: "#1e6b3c",
                  border: "1px solid rgba(29, 185, 84, 0.2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "#1DB954" }}
                />
                <span data-i18n="contact-hours">
                  Monday &ndash; Friday, 09:00 &ndash; 18:00
                </span>
              </div>
            </div>

            {/* Right: department emails */}
            <div>
              <h3
                className="text-lg font-bold mb-5"
                style={{ color: "#1e6b3c" }}
                data-i18n="contact-departments-title"
              >
                Department Contacts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <div
                    key={dept.i18n}
                    className="p-4 rounded-lg border border-gray-100"
                    style={{ backgroundColor: "#fafbfa" }}
                  >
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#1e6b3c" }}
                      data-i18n={dept.i18n}
                    >
                      {dept.label}
                    </p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-sm hover:underline break-all"
                      style={{ color: "#1DB954" }}
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 px-6 md:py-24" style={{ backgroundColor: "#f7faf8" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "#1e6b3c" }}
            data-i18n="contact-regional-title"
          >
            Regional Offices
          </h2>
          <div
            className="w-16 h-1 mb-10 rounded-full"
            style={{ backgroundColor: "#1DB954" }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalOffices.map((office) => (
              <div
                key={office.i18nCity}
                className="p-6 rounded-lg bg-white border border-gray-200 hover:border-[#1DB954] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(29,185,84,0.12)]"
              >
                <span
                  className="text-xs uppercase tracking-wider font-semibold mb-1 block"
                  style={{ color: "#1DB954" }}
                >
                  {office.country}
                </span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#1e6b3c" }}
                  data-i18n={office.i18nCity}
                >
                  {office.city}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {office.address}
                </p>
                <p className="text-sm mb-1">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="hover:underline"
                    style={{ color: "#1e6b3c" }}
                  >
                    {office.phone}
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:underline break-all"
                    style={{ color: "#1DB954" }}
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links — compact band */}
      <section
        className="py-10 px-6"
        style={{ backgroundColor: "#1e6b3c" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          <p className="text-white font-semibold text-lg" data-i18n="contact-social-label">
            Connect with us
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/Giantilogisticsltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium tracking-wide uppercase"
            >
              Facebook
            </a>
            <span
              className="w-px h-4 inline-block"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            />
            <a
              href="https://www.linkedin.com/company/35636568"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium tracking-wide uppercase"
            >
              LinkedIn
            </a>
            <span
              className="w-px h-4 inline-block"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            />
            <a
              href="https://www.youtube.com/channel/UC4ZnF5LMr3bAwMT7HsCEGlw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium tracking-wide uppercase"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

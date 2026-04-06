"use client";

import { useState } from "react";
import Link from "next/link";

interface Office {
  nameKey: string;
  name: string;
  addressKey?: string;
  address?: string;
  phone?: string;
}

interface Country {
  nameKey: string;
  name: string;
  offices: Office[];
}

const services = [
  { key: "svc-marine", label: "Marine Services" },
  { key: "svc-terminal", label: "Gianti Terminal" },
  { key: "svc-project", label: "Project Logistics" },
  { key: "svc-consulting", label: "Consulting" },
  { key: "svc-customs", label: "Customs & Warehousing" },
  { key: "svc-land", label: "Land & Rail" },
  { key: "svc-ocean", label: "Ocean Freight" },
  { key: "svc-air", label: "Air Freight" },
];

const locations: Country[] = [
  {
    nameKey: "loc-georgia",
    name: "Georgia",
    offices: [
      {
        nameKey: "loc-tbilisi",
        name: "Tbilisi",
        addressKey: "addr-tbilisi",
        address: "12b Kazbegi Ave",
        phone: "+995 322 457 457",
      },
      {
        nameKey: "loc-poti",
        name: "Poti",
        addressKey: "addr-poti",
        address: "Paliashvili Str. 12",
        phone: "+995 322 112 072",
      },
      {
        nameKey: "loc-batumi",
        name: "Batumi",
      },
    ],
  },
  {
    nameKey: "loc-azerbaijan",
    name: "Azerbaijan",
    offices: [
      {
        nameKey: "loc-baku",
        name: "Baku",
        addressKey: "addr-baku",
        address: "Blue Office Business Center, 6th floor",
        phone: "+994 502 340 842",
      },
    ],
  },
  {
    nameKey: "loc-uzbekistan",
    name: "Uzbekistan",
    offices: [
      {
        nameKey: "loc-tashkent",
        name: "Tashkent",
        addressKey: "addr-tashkent",
        address: "Afrosiab 4",
        phone: "+998 71 200 07 60",
      },
    ],
  },
  {
    nameKey: "loc-kazakhstan",
    name: "Kazakhstan",
    offices: [
      {
        nameKey: "loc-almaty",
        name: "Almaty",
        addressKey: "addr-almaty",
        address: "Seyfullin Avenue 420, Cascade Office 304",
        phone: "+7 705 422 42 45",
      },
    ],
  },
  {
    nameKey: "loc-turkey",
    name: "Turkey",
    offices: [
      {
        nameKey: "loc-istanbul",
        name: "Istanbul",
        addressKey: "addr-istanbul",
        address: "Barbaros Mh., Varyap Meridian",
        phone: "+90 535 200 34 78",
      },
    ],
  },
];

export default function Footer() {
  const [openCountries, setOpenCountries] = useState<Record<string, boolean>>(
    {}
  );

  const toggleCountry = (nameKey: string) => {
    setOpenCountries((prev) => ({
      ...prev,
      [nameKey]: !prev[nameKey],
    }));
  };

  return (
    <footer className="footer" id="contact">
      <div className="container container--footer container--medium">
        {/* Logo */}
        <Link href="/" className="brand w-inline-block">
          <img
            src="/images/gianti/logo.png"
            width={160}
            height={40}
            alt="Gianti Logistics Home"
            className="brand__img"
          />
        </Link>

        {/* Navigation */}
        <nav className="footer__navigation">
          {/* Services column */}
          <div className="footer__menu">
            <p className="title-2">
              <span data-i18n="services-title">Our Services</span>
            </p>
            <div role="list" className="footer__list w-dyn-items">
              {services.map((svc) => (
                <Link
                  key={svc.key}
                  href="/services"
                  role="listitem"
                  className="footer__link title-3 w-dyn-item"
                >
                  <span data-i18n={svc.key}>{svc.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Pages column */}
          <div className="footer__menu">
            <Link
              href="/about"
              className="footer__link footer__link--main title-2"
            >
              <span data-i18n="nav-about-foot">About us</span>
            </Link>
            <a href="#" className="footer__link footer__link--main title-2">
              <span data-i18n="nav-news">News &amp; events</span>
            </a>
            <a href="#" className="footer__link footer__link--main title-2">
              <span data-i18n="nav-careers">Careers</span>
            </a>
            <Link
              href="/contact"
              className="footer__link footer__link--main title-2"
            >
              <span data-i18n="nav-contact">Contact</span>
            </Link>
          </div>

          {/* Locations column */}
          <div className="footer__menu">
            <p className="title-2">
              <span data-i18n="locations-label">Locations</span>
            </p>
            <Link href="/#locations" className="footer__link title-3">
              <span data-i18n="locations-all">All offices</span>
            </Link>

            {locations.map((country) => (
              <div key={country.nameKey}>
                <button
                  type="button"
                  className="footer__link title-3"
                  onClick={() => toggleCountry(country.nameKey)}
                  aria-expanded={!!openCountries[country.nameKey]}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: "inherit",
                    font: "inherit",
                    textAlign: "left",
                  }}
                >
                  <span data-i18n={country.nameKey}>{country.name}</span>
                  {openCountries[country.nameKey] ? " \u25B4" : " \u25BE"}
                </button>

                {openCountries[country.nameKey] && (
                  <div style={{ paddingLeft: "12px", marginTop: "8px" }}>
                    {country.offices.map((office) => (
                      <div
                        key={office.nameKey}
                        style={{ marginBottom: "12px" }}
                      >
                        <p className="body-2">
                          <strong>
                            <span data-i18n={office.nameKey}>
                              {office.name}
                            </span>
                          </strong>
                        </p>
                        {office.address && (
                          <p className="body-2">
                            <span data-i18n={office.addressKey}>
                              {office.address}
                            </span>
                          </p>
                        )}
                        {office.phone && (
                          <p className="body-2">{office.phone}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <a
            href="https://www.facebook.com/Giantilogisticsltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link title-3"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/35636568"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link title-3"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/channel/UC4ZnF5LMr3bAwMT7HsCEGlw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link title-3"
          >
            YouTube
          </a>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: "24px" }}>
          <p className="body-2">
            <strong data-i18n="nav-contact">Contact</strong>
          </p>
          <p className="body-2">+995 322 457 457</p>
          <p className="body-2">
            <a
              href="mailto:sale@giantilogistics.ge"
              className="text-link text-link--inverse"
            >
              sale@giantilogistics.ge
            </a>
          </p>
          <p className="body-2">
            <a
              href="mailto:road@giantilogistics.ge"
              className="text-link text-link--inverse"
            >
              road@giantilogistics.ge
            </a>
          </p>
          <p className="body-2">
            <a
              href="mailto:project@giantilogistics.ge"
              className="text-link text-link--inverse"
            >
              project@giantilogistics.ge
            </a>
          </p>
          <p className="body-2" data-i18n="contact-hours">
            Monday - Friday, 09:00 - 18:00
          </p>
        </div>

        {/* PLA Membership */}
        <div style={{ marginBottom: "16px" }}>
          <p className="body-2" data-i18n="footer-pla">
            Member of Project Logistics Alliance
          </p>
        </div>

        {/* Bottom bar */}
        <div className="footer__navbar">
          <p className="body-2">
            <span data-i18n="footer-copy">
              2026 &copy; Copyrights to Gianti Logistics.
            </span>{" "}
            <a href="#" className="text-link text-link--inverse">
              <span data-i18n="footer-terms">Terms &amp; Conditions</span>
            </a>{" "}
            |{" "}
            <a href="#" className="text-link text-link--inverse">
              <span data-i18n="footer-privacy">Privacy Policy</span>
            </a>{" "}
            |{" "}
            <span data-i18n="footer-certs">Certifications</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

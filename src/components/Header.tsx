"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

declare global {
  interface Window {
    setLang?: (lang: string) => void;
  }
}

const services = [
  { label: "Marine Services", i18n: "svc-marine" },
  { label: "Gianti Terminal", i18n: "svc-terminal" },
  { label: "Project Logistics", i18n: "svc-project" },
  { label: "Transportation", i18n: "svc-transport" },
  { label: "Consulting", i18n: "svc-consulting" },
  { label: "Customs & Warehousing", i18n: "svc-customs" },
  { label: "Air Freight", i18n: "svc-air" },
];

const locations = [
  {
    country: "Georgia",
    i18n: "loc-georgia",
    cities: [
      { name: "Tbilisi", i18n: "loc-tbilisi" },
      { name: "Poti", i18n: "loc-poti" },
    ],
  },
  {
    country: "Azerbaijan",
    i18n: "loc-azerbaijan",
    cities: [{ name: "Baku", i18n: "loc-baku" }],
  },
  {
    country: "Uzbekistan",
    i18n: "loc-uzbekistan",
    cities: [{ name: "Tashkent", i18n: "loc-tashkent" }],
  },
  {
    country: "Kazakhstan",
    i18n: "loc-kazakhstan",
    cities: [{ name: "Almaty", i18n: "loc-almaty" }],
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(e.target as Node)
    ) {
      setServicesOpen(false);
    }
    if (
      locationsRef.current &&
      !locationsRef.current.contains(e.target as Node)
    ) {
      setLocationsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  const handleLang = (lang: string) => {
    if (typeof window !== "undefined" && window.setLang) {
      window.setLang(lang);
    }
  };

  return (
    <header className="header header--not-move">
      <div className="navbar w-nav" role="banner">
        <div className="container container--navbar">
          {/* Logo */}
          <Link href="/" className="brand brand--navbar w-nav-brand">
            <img
              src="/images/gianti/logo.png"
              width={160}
              height={40}
              alt="Gianti Logistics Home"
              className="brand__img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`nav-menu w-nav-menu${mobileOpen ? " w--open" : ""}`}
          >
            <div className="nav-menu__content">
              <div className="nav-menu__links">
                {/* Services Dropdown */}
                <div
                  ref={servicesRef}
                  className={`nav-dropdown w-dropdown${servicesOpen ? " w--open" : ""}`}
                >
                  <button
                    type="button"
                    className="nav-dropdown__toggle w-dropdown-toggle"
                    onClick={() => {
                      setServicesOpen((prev) => !prev);
                      setLocationsOpen(false);
                    }}
                    aria-expanded={servicesOpen}
                  >
                    <span data-i18n="nav-our">Our</span>{" "}
                    <span data-i18n="nav-services-label">Services</span>
                  </button>

                  <div className="nav-dropdown__content w-dropdown-list">
                    <div className="nav-dropdown__list w-dyn-items">
                      {services.map((svc) => (
                        <div
                          key={svc.i18n}
                          className="nav-dropdown__item w-dyn-item"
                        >
                          <Link
                            href="/services"
                            className="nav-dropdown__link"
                            data-i18n={svc.i18n}
                            onClick={() => setServicesOpen(false)}
                          >
                            {svc.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Locations Dropdown */}
                <div
                  ref={locationsRef}
                  className={`nav-dropdown w-dropdown${locationsOpen ? " w--open" : ""}`}
                >
                  <button
                    type="button"
                    className="nav-dropdown__toggle w-dropdown-toggle"
                    onClick={() => {
                      setLocationsOpen((prev) => !prev);
                      setServicesOpen(false);
                    }}
                    aria-expanded={locationsOpen}
                    data-i18n="locations-label"
                  >
                    Locations
                  </button>

                  <div className="nav-dropdown__content w-dropdown-list">
                    <div className="nav-dropdown__list w-dyn-items">
                      {/* All offices */}
                      <div className="nav-dropdown__item w-dyn-item">
                        <Link
                          href="/#locations"
                          className="nav-dropdown__link"
                          data-i18n="locations-all"
                          onClick={() => setLocationsOpen(false)}
                        >
                          All offices
                        </Link>
                      </div>

                      {/* Grouped by country */}
                      {locations.map((group) =>
                        group.cities.map((city) => (
                          <div
                            key={city.i18n}
                            className="nav-dropdown__item w-dyn-item"
                          >
                            <Link
                              href="/#locations"
                              className="nav-dropdown__link"
                              data-i18n={city.i18n}
                              onClick={() => setLocationsOpen(false)}
                            >
                              {group.country} &mdash; {city.name}
                            </Link>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Direct nav links */}
                <Link href="/about" className="nav-link" data-i18n="nav-about">
                  About us
                </Link>
                <a href="#" className="nav-link" data-i18n="nav-news">
                  News &amp; events
                </a>
                <a href="#" className="nav-link" data-i18n="nav-careers">
                  Careers
                </a>
              </div>

              {/* Right side actions */}
              <div className="nav-menu__buttons">
                <a href="#" className="nav-link" data-i18n="nav-login">
                  Login
                </a>
                <a
                  href="https://wm1.giantilogistics.ge"
                  className="nav-link"
                  data-i18n="nav-client-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Portal
                </a>
                <a
                  href="https://tms.giantilogistics.ge/"
                  className="nav-link"
                  data-i18n="nav-tracking-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tracking Portal
                </a>
                <Link
                  href="/contact"
                  className="button button--accent"
                  data-i18n="cta-talk"
                >
                  Talk to us
                </Link>

                {/* Language Toggle */}
                <div className="lang-toggle">
                  <button
                    type="button"
                    id="btn-en"
                    className="lang-toggle__btn"
                    onClick={() => handleLang("en")}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    id="btn-ka"
                    className="lang-toggle__btn"
                    onClick={() => handleLang("ka")}
                  >
                    KA
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`menu-button w-nav-button${mobileOpen ? " w--open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <div className="menu-icon">
              <div className="menu-icon__line-top" />
              <div className="menu-icon__line-mid" />
              <div className="menu-icon__line-bottom" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

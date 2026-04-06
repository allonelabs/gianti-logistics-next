"use client";

import { useEffect } from "react";
import "../webflow.css";
import "../overrides.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TranslationInit from "../../components/TranslationInit";

export default function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document
      .querySelectorAll(
        'button,a,[role="button"],[class*="element"],[class*="card"]'
      )
      .forEach((el) => {
        (el as HTMLElement).style.pointerEvents = "auto";
        if (el.tagName === "A" || el.tagName === "BUTTON")
          (el as HTMLElement).style.cursor = "pointer";
      });
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <TranslationInit />
    </>
  );
}

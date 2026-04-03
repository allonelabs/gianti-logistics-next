"use client";

import { useEffect } from "react";
import "./webflow.css";
import "./overrides.css";
import bodyHtml from "./body-html";
import { initScrollAnimation } from "./scroll-animation";
import { initTranslations } from "./translations";

export default function Home() {
  useEffect(() => {
    // Fix pointer events
    document
      .querySelectorAll(
        'button,a,[role="button"],[class*="element"],[class*="card"]'
      )
      .forEach((el) => {
        (el as HTMLElement).style.pointerEvents = "auto";
        if (el.tagName === "A" || el.tagName === "BUTTON")
          (el as HTMLElement).style.cursor = "pointer";
      });

    // Load Lottie from CDN, then init scroll animation
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.onload = () => {
      initScrollAnimation();
    };
    document.head.appendChild(script);

    // Init translations
    initTranslations();

    return () => {
      script.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}

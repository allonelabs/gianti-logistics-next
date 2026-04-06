"use client";

import { useEffect } from "react";
import { initTranslations } from "../app/translations";

export default function TranslationInit() {
  useEffect(() => {
    initTranslations();
  }, []);

  return null;
}

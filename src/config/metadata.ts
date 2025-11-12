import type { Metadata } from "next";

export const siteConfig = {
  name: "espace",
  description:
    "ファッションを学び、「個性」「自己表現」をもっと楽しむための空間。",
};

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: "espace｜apprendre la mode",
    description: siteConfig.description,
  },
  about: {
    title: `ABOUT – ${siteConfig.name}`,
  },
  lexicon: {
    title: `LEXICON – ${siteConfig.name}`,
  },
  brands: {
    title: `BRANDS – ${siteConfig.name}`,
  },
  deepen: {
    title: `DEEPEN – ${siteConfig.name}`,
  },
};

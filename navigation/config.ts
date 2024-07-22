import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "ar"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

//   "/pathnames": {
//     en: "/pathnames",
//     ar: "/pfadnamen",
//   },

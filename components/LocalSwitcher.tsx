import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./ui/locale-switcher";
import { locales } from "@/navigation/config";

export default function LocaleSwitcher() {
  //   const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  console.log(locale, "switcher", locales);
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={`t("label")`}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {/* {t("locale", { locale: cur })} */}

          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}

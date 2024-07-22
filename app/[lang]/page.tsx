import Select from "@/components/Select";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import ClientComp from "@/components/ClientComp";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/navigation/config";

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home({ params: { locale } }: Props) {
  const cookieStore = cookies();
  const t = useTranslations("HomePage");
  //   unstable_setRequestLocale(locale);
  return (
    <main className="space-y-16  flex min-h-screen flex-col items-center  p-24">
      <Button className="   "> Click me </Button>
      <Button className="    bg-destructive hover:bg-destructive/80 w-full">
        {t("title")}
      </Button>

      <Select />

      <ClientComp />

      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))}
    </main>
  );
}

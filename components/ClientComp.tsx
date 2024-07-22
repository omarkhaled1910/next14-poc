"use client";

import { useTranslations } from "next-intl";
import React from "react";

const ClientComp = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="text-center">
      <h2 className=" text-5xl">this is a client comp</h2>
      {t("title")}
    </div>
  );
};

export default ClientComp;

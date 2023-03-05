import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <header className="px-40 py-16 flex  items-center justify-between">
      <div className="font-bold text-2xl">Logo</div>
      <div className="flex gap-x-2">
        <button onClick={() => changeLang("tr")}>TR</button>
        <button onClick={() => changeLang("en")}>EN</button>
      </div>
    </header>
  );
};

export default Header;

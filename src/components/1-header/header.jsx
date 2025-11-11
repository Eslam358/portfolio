import { useState } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Header = ({ dark, setdark, visible }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    console.log(lang)

    i18n.changeLanguage(lang);
    // document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  };
  const [menu, setmenu] = useState(false);

  return (
    <header
      style={{ top: !visible ? "-100px" : "0px" }}
      className="header flex between "
    >
      {/* <header style={{visibility:visibil?"visible":"hidden"}} className="header flex between "> */}
      <div className="Tablets-none" />
      <div className="icon Tablets">
        <button onClick={() => setmenu(true)}>
          <span className="svg   icon-menu" />
        </button>
      </div>
      <nav className="Tablets-none">
        <ul className="flex gap-2">
        <a href="#">
              <li>{t("home")}</li>
            </a>
            <a href="#hero">
              <li>{t("about")}</li>
            </a>
            <a href="#Projects">
              <li>{t("projects")}</li>
            </a>
            <a href="#skills">
              <li>{t("skills")}</li>
            </a>
            <a href="#Contact">
              <li>{t("contact_nav")}</li>
            </a>
        </ul>
      </nav>
      <div style={{display:"flex" , gap:"10px"}} >
        <div className="icon">
        <button
          onClick={() => {
            changeLanguage(i18n.language == "en" ? "ar" : "en");
          }}
        >
          {i18n.language == "ar" ? (
            <span className="svg ">AR</span>
          ) : (
            <span className="svg ">EN</span>
          )}
        </button>
        </div>
        <div  className="icon">
        <button
          onClick={() => {
            setdark(!dark);
            localStorage.setItem("dark", !dark ? "true" : "false");
          }}
        >
          {dark ? (
            <span className="svg   icon-moon-o" />
          ) : (
            <span className="svg   icon-sun" />
          )}
        </button>
        </div>
      </div>
     

      <div className={menu ? "overflow Tablets active" : " overflow Tablets "}>
        <div className={menu ? "Tablets menu  active" : " Tablets menu  "}>
          <ul className="flex  column">
            <a href="#">
              <li>{t("home")}</li>
            </a>
            <a href="#hero">
              <li>{t("about")}</li>
            </a>
            <a href="#Projects">
              <li>{t("projects")}</li>
            </a>
            <a href="#skills">
              <li>{t("skills")}</li>
            </a>
            <a href="#Contact">
              <li>{t("contact_nav")}</li>
            </a>
          </ul>
          <div className="icon ">
            <button onClick={() => setmenu(false)}>
              <span className="svg    icon-close" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import "./footer.scss"
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className="flex center between gap-15">
      <div className="left">
        <ul  className="flex gap-15 center">
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
      </div>
      <div className="right">
        <h4>{t("footer.description")}</h4>
      </div>
    </footer>
  );
};

export default Footer;

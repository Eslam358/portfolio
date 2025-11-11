// @ts-nocheck
import Hero from "./components/2-hero/hero";
import Header from "./components/1-header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/main/scroll_top_button";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "./components/project/Slider";
import Skills from "./components/skills/skills";
import { useTranslation } from "react-i18next";
// *******************

  // const { i18n } = useTranslation();


// *******************

function App() {
  const { i18n } = useTranslation();
  const [scroll_y, setscroll_y] = useState(0);
  const prevCountRef = useRef(scroll_y);

  const [dark, setdark] = useState(
    localStorage.getItem("dark") !== "false" ? true : false
  );

  // Dark mode
  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.className = "dark";
    } else {
      body.className = "light";
    }
  }, [dark]);

  useEffect(() => {
 document.querySelector("body");
  window.addEventListener("scroll", () => {
      setscroll_y(window.scrollY);
      prevCountRef.current = scroll_y;
    });
    return () => { 
      window.removeEventListener("scroll", () => {})}

  
  }, [scroll_y]);
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    
  }, [i18n.language]);

  // i18n.on('languageChanged', () => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div  className={dark ? "dark App" : "App light"}>
      <Header
        visible={scroll_y - prevCountRef.current <= 0}
        dark={dark}
        setdark={setdark}
      />
 
      <div className="hr-between" />

      <Hero />
      <hr className="hr-between" />
        <Slider />
      
      <hr className="hr-between" />
      <Skills />
      <hr className="hr-between" />
      <Contact />
      <hr className="hr-between" />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;

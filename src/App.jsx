import Hero from "./components/2-hero/hero";
import Header from "./components/1-header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import { useEffect, useState } from "react";
import { useRef } from "react";

function App() {
  const [dark, setdark] = useState(
    localStorage.getItem("dark") !== "false" ? true : false
  );

  // if (localStorage.getItem("dark") !== null) {
  //   setdark(localStorage.getItem("dark") === "true" )
  //   console.log(localStorage.getItem("dark") === "true");
  // }
  // const [dark, setdark] = useState(localStorage.getItem("dark") === "true" ?? true);

  console.log(localStorage.getItem("dark"));

  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.className = "dark";
    } else {
      body.className = "light";
      // localStorage.setItem("dark", "false" );
    }
  }, [dark]);
  const button_top = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollY);
      if (scrollY > 750) {
        button_top.current.classList.add("active");
      } else {
        button_top.current.classList.remove("active");
      }
      console.log(button_top);
    });
  }, []);
  return (
    <div className={dark ? "dark App" : "App light"}>
      <Header dark={dark} setdark={setdark} />
      <div className="hr-between" />
      <Hero />
      <hr className="hr-between" />
      <Main />
      <hr className="hr-between" />
      <Contact />
      <hr className="hr-between" />
      <Footer />

      <a
        ref={button_top}
        href="#"
        className="button float icon-chevron-up flex center "
      />
    </div>
  );
}

export default App;

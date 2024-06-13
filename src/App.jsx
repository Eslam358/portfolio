import Hero from "./components/2-hero/hero";
import Header from "./components/1-header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import { useEffect, useState } from "react";
import { useRef } from "react";


const Token_headers =""
function App() {
  const [lang, setlang] = useState({});
  const [repo, setrepo] = useState([]);
  const [netlify, setnetlify] = useState([]);
  const [files, setfiles] = useState([]);
  const [scroll_y, setscroll_y] = useState(0);
  const prevCountRef = useRef(scroll_y);
  const button_top = useRef(null);
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

  // view and hading button and head
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 750) {
        button_top.current.classList.add("active");
      } else {
        button_top.current.classList.remove("active");
      }
      setscroll_y(scrollY);
    });

    prevCountRef.current = scroll_y;
  }, [scroll_y]);

  // ****************** fetch data project from github and netlify and handel this data  *********************************************

  useEffect(() => {
    fetch("https://api.github.com/users/Eslam358/repos", Token_headers)
      .then((a) => a.json())
      .then((data) => {
        setrepo(data);
    

        data.forEach((repo) => {
          fetch(repo.languages_url, Token_headers)
            .then((a) => a.json())
            .then((lang) => {
              setlang((prevlanguages) => ({
                ...prevlanguages,
                [repo.name]: lang,
              }));

            })
            .catch((er) => {
              console.log(`fetch repo name ${repo.name}`, er);
            });

          fetch(`https://api.github.com/repos/Eslam358/${repo.name}/contents`, Token_headers)
            .then((a) => a.json())
            .then((fileD) => {
              setfiles((prevfile) => ({
                ...prevfile,
                [repo.name]: fileD.map((fi) => fi.name),
              }));

              //               setfiledata((prevfile) => ({
              //                 ...prevfile,
              //                 [repo.name]: ( fileD.map((fi) =>{
              // if (fi.name.endsWith(".js") || fi.name.endsWith(".jsx") || fi.name.endsWith(".tsx")) {

              //   fetch(fileD.download_url, {
              //     headers: { Authorization: `token ${Token}` },
              //   }).then(a=> a.text()).then(f=>{
              //   if (f.includes("import React") || f.includes("useState") || f.includes("  useEffect")) {
              //     console.log(f);
              //   }
              //   })
              // }

              // return "jj"
              //                 } )),
              //               }));
            })
            .catch((er) => {});
        });
      })
      .catch((er) => {
        console.log("main fetch", er);
      });
    fetch(
      "https://api.netlify.com/api/v1/sites?access_token=wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8"
    )
      .then((a) => a.json())
      .then((data) => {
        setnetlify(data);
        return data;
      })
      .catch((er) => {
        console.log("netlify fetch", er);
      });
  }, []);

  // ****************************************************************


  return (
    <div className={dark ? "dark App" : "App light"}>
      <Header
        visible={scroll_y - prevCountRef.current <= 0}
        dark={dark}
        setdark={setdark}
      />
      <div className="hr-between" />
   
      <Hero />
      <hr className="hr-between" />
      <Main repo={repo} lang={lang} files={files} netlify={netlify} />
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

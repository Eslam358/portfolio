// @ts-nocheck
import { useEffect, useRef, useState,useMemo,memo } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/main/main";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const GITHUB_USERNAME = "Eslam358";
const GITHUB_TOKEN = import.meta.env.VITE_API_TOKEN;
const NETLIFY_TOKEN = "wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8";

const Token_headers = {
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
};

const MemoizedHeader = memo(Header);
//   **************************************************
const HandleScroll  = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const scrollTopButtonRef = useRef(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") !== "false"
  );
  const prevScrollRef = useRef(0);


  useEffect(() => {
      const handleScroll = () => {
        const y = window.scrollY;

        setScrollY(y);
        prevScrollRef.current = y < scrollY
      
        if (scrollTopButtonRef.current) {
          if (y > 750) {
            scrollTopButtonRef.current.classList.add("active");
          } else {
            scrollTopButtonRef.current.classList.remove("active");
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);
    useEffect(() => {
      const body = document.querySelector("body");
      body.className = darkMode ? "dark" : "light";
      localStorage.setItem("dark", darkMode.toString());
    }, [darkMode]);

  return (
    
    <div className={darkMode ? "dark App" : "App light"}>
          <MemoizedHeader
      visible={prevScrollRef.current}
      dark={darkMode}
      setdark={setDarkMode}
    />
      {children} 
      <a
      ref={scrollTopButtonRef}
      href="#"
      className="button float icon-chevron-up flex center"
    />
    </div>
  );
};
//   **************************************************


function App() {

  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [netlifySites, setNetlifySites] = useState([]);






  useEffect(() => {
    const fetchData = async () => {
      try {
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          Token_headers
        );
        const reposData = await reposResponse.json();
        setRepos(reposData); //***************************************

        for (const repo of reposData) {
          // Fetch Languages
          try {
            const langRes = await fetch(repo.languages_url, Token_headers);
            const langData = await langRes.json();
            setLanguages((prev) => ({
              ...prev,
              [repo.name]: langData,
            }));
          } catch (err) {
            console.error(`Error fetching languages for ${repo.name}`, err);
          }

       
        }
      } catch (err) {
        console.error("Error fetching repos", err);
      }
    };

    fetchData();
  }, []);

  // 🌍 Fetch Netlify Sites
  useEffect(() => {
    const fetchNetlify = async () => {
      try {
        const res = await fetch(
          `https://api.netlify.com/api/v1/sites?access_token=${NETLIFY_TOKEN}`
        );
        const data = await res.json();
        setNetlifySites(data);
      } catch (err) {
        console.error("Error fetching Netlify sites", err);
      }
    };

    fetchNetlify();
  }, []);

  // 🧱 Render
  return (
    <>
        <HandleScroll>
  
      <div className="hr-between" />
      <Hero />
      <hr className="hr-between" />
      <Main
        repo={repos}
        lang={languages}
     
        netlify={netlifySites}
      />
      <hr className="hr-between" />
      <Skills />
      <hr className="hr-between" />
      <Contact />
      <hr className="hr-between" />
      <Footer />
      </HandleScroll>
    </>
  );
}

export default App;

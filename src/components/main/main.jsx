import React, { useEffect, useState } from "react";
import "./main.scss";
import { motion, useScroll } from "framer-motion";
import { myProjects } from "../../data";
const React_Arr = ["my-portfolio","portfolio", "react-project"]

const Main = ({ repo, lang, files, netlify }) => {

  const [active, setactive] = useState("All");
  const [Arr, setArr] = useState(repo);
  useEffect(()=>{
    setArr(repo)
  },[repo])
  const select_language = (language) => {
    setactive(language);
    if (language === "All" ) {
      setArr(repo);
      }else if( language === "react"){
        setArr(repo.filter((a) => React_Arr.includes(a.name)));
        
      }
      else {
       setArr(repo.filter((a) => Object.keys(lang[a.name]).includes(language)));
    }
  };
  return (
    <main className="main flex " id="Projects">
      <section className="left ">
        <ul className="flex column center ">
          <li
            className={active === "All" ? "active" : null}
            onClick={() => select_language("All")}
          >
            <button>All Projects</button>
          </li>
          <li
            className={active === "CSS" ? "active" : null}
            onClick={() => select_language("CSS")}
          >
            <button>HTML & CSS</button>
          </li>
          <li
            className={active === "JavaScript" ? "active" : null}
            onClick={() => select_language("JavaScript")}
          >
            <button>JavaScript</button>
          </li>
          <li
            className={active === "react" ? "active" : null}
            onClick={() => select_language("react")}
          >
            <button>React & MUI</button>
          </li>
          <li
            className={active === "Vue" ? "active" : null}
            onClick={() => select_language("Vue")}
          >
            <button>vue & vuex</button>
          </li>
          <li
            className={active === "node" ? "active" : null}
            onClick={() => select_language("node")}
          >
            <button>Node & Express</button>
          </li>
        </ul>
      </section>
      <section className="right  flex gap-1 center">
        {Arr.map((a, ind) => (
          <motion.article
            // layout
            initial={
              ind % 2 === 0
                ? { transform: `scale(0.4) translateX(300px)` }
                : { transform: `scale(0.4) translateX(-300px)` }
            }
            // animate={{ transform: "scale(1)" }}
            whileInView={{ transform: "scale(1) translateX(0px)" }}
            transition={{ type: "spring", damping: 6, stiffness: 33, delay: 0 }}
            key={ind}
            style={{
              order: netlify.filter(
                (da) => da.build_settings.repo_path === a.full_name
              )[0]
                ? 1
                : 2,
            }}
          >
            <div className="img">
              {/* <img src={netlify[1].screenshot_url} alt="" /> */}
              <img
                src={
                  netlify.filter(
                    (da) => da.build_settings.repo_path === a.full_name
                  )[0]
                    ? netlify.filter(
                        (da) => da.build_settings.repo_path === a.full_name
                      )[0].screenshot_url
                    : 
                    // `./images/${Math.floor(Math.random() * 10)}.jpg`
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"
                  }
                alt=""
              />
            </div>
            <div className="info">
              <h3>{a.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
            </div>
            <div className="action flex between">
              <div className="icon flex gap-1">
                <a
                  href={
                    netlify.filter(
                      (da) => da.build_settings.repo_path === a.full_name
                    )[0]
                      ? netlify.filter(
                          (da) => da.build_settings.repo_path === a.full_name
                        )[0].deploy_url
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span className=" icon-link" />
                </a>
                <a href={a.git_url} target="_blank" rel="noopener noreferrer">
                  <span className=" icon-github-square" />
                </a>
              </div>
              <div className="flex more center ">
                <span>more</span>
                <span className="  icon-arrow-right" />
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
};

export default Main;

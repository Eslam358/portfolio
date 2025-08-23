/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./main.scss";
import { motion, useScroll } from "framer-motion";
import myProjects  from "../../projects/projects"
console.log("",myProjects)
const React_Arr = ["my-portfolio", "portfolio", "react-project"];
const Next_Arr2 = ["add_Todo_List", "app_Articles", "app_next"];
const express_node = ["express_node", "socket_IO"];

const Main = ({ repo, lang, netlify }) => {
  console.log("lang",lang);
  console.log("repo",repo)
  console.log("netlify",netlify)
repo = myProjects

  //******************** */

  const fullProjects = repo.map((project) => {
    const matchingNetlify = netlify.find(
      (n) => n.build_settings.repo_path === project.full_name
    );
  
    return {
      name: project.name,
      full_name: project.full_name,
      github: project.clone_url,
      languages: project.language,
      netlify: matchingNetlify ? matchingNetlify.deploy_url : null,
      screenshot: matchingNetlify
        ? matchingNetlify.screenshot_url
        : "https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"
    };
  });
  // console.log("fullProjects-----",fullProjects)
  //******************** */

  const [active, setactive] = useState("All");
  const [Arr, setArr] = useState(repo);
  // useEffect(() => {
  //   setArr(repo);
  //   // console.log(".........", repo); //................................................................................................
  // }, [repo]);
  const select_language = (language) => {
  
    setactive(language);
    if (language === "All") {
      setArr(repo);
    } else if (language === "react") {
      setArr(repo.filter((a) => React_Arr.includes(a.name)));
    } else if (language === "next") {
      setArr(repo.filter((a) => Next_Arr2.includes(a.name)));
    } else if (language === "node") {
      setArr(repo.filter((a) => express_node.includes(a.name)));
    } else {
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
            className={active === "next" ? "active" : null}
            onClick={() => select_language("next")}
          >
            <button>Next</button>
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
              order:
                a.full_name == "Eslam358/app_Articles"
                  ? 1
                  : netlify.filter(
                      (da) => da.build_settings.repo_path === a.full_name
                    )[0]
                  ? 2
                  : 3,
                  display:
                a.full_name == "Eslam358/app_Articles"
                  ? "block"
                  : netlify.filter(
                      (da) => da.build_settings.repo_path === a.full_name
                    )[0]
                  ? "block"
                  : active !== "All"  ? "block" : "none",
                
            }}
          >
            <div className="img">
              <img
                src={
                  netlify.filter(
                    (da) => da.build_settings.repo_path === a.full_name
                  )[0]
                    ? netlify.filter(
                        (da) => da.build_settings.repo_path === a.full_name
                      )[0].screenshot_url
                    : a.full_name == "Eslam358/app_Articles"
                    ? "https://app-articles.vercel.app/_next/image?url=%2Fcloud-hosting.png&w=640&q=75"
                    : "https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"
                }
                alt=""
              />
            </div>
            <div className="info">
              <h3>{a.name}</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p> */}
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
                      : a.full_name == "Eslam358/app_Articles"
                      ? "https://app-articles.vercel.app/articles"
                      : "#"
                  }
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span className=" icon-link" />
                </a>
                <a href={a.clone_url} target="_blank" rel="noopener noreferrer">
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

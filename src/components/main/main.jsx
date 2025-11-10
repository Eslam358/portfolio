/* eslint-disable react/prop-types */
import { useEffect, useState , useMemo,useRef} from "react";
import "./main.scss";
import { motion } from "framer-motion";
import SkeletonCard from "./loading/SkeletonCard"
import myProjects from "../../projects/projects";

const React_Arr = ["my-portfolio", "portfolio", "react-project"];
const Next_Arr2 = ["add_Todo_List", "app_Articles", "app_next"];
const express_node = ["express_node", "socket_IO"];

const Main = ({ repo, lang, netlify }) => {
  // repo = myProjects

  //******************** */
  const fullProjects_ = useMemo(() => {
    const fullProject = 

    repo.map((project) => {
      const matchingNetlify = netlify.find(
        (n) => n.build_settings.repo_path === project.full_name
      );
      let languages = lang[project.name] && Object.keys(lang[project.name]);
      let order = matchingNetlify ? 4 : 5;
      // ********
      if (React_Arr.includes(project.name)) {
        languages?.push("react");
        order = 2;
      } else if (Next_Arr2.includes(project.name)) {
        languages?.push("next");
        order = 1;
      } else if (express_node.includes(project.name)) {
        order = 3;
        languages?.push("node");
      }
      // ********
      const netlify_ = matchingNetlify
        ? matchingNetlify.deploy_url
        : project.full_name == "Eslam358/app_Articles"
        ? "https://app-articles.vercel.app/articles"
        : "#";
  
      const screenshot = matchingNetlify
        ? matchingNetlify.screenshot_url
        : project.full_name == "Eslam358/app_Articles"
        ? "https://app-articles.vercel.app/_next/image?url=%2Fcloud-hosting.png&w=640&q=75"
        : "https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg";
  
      return {
        name: project.name,
        full_name: project.full_name,
        github: project.clone_url,
        languages,
        netlify: netlify_,
        screenshot,
        order,
      };
    });
    
    return fullProject
  }, [lang, netlify, repo]);

  const fullProjects = fullProjects_.length > 0 ?fullProjects_:myProjects;
  

  useEffect(() => {
    setArr(fullProjects)
  }, [fullProjects]);



  //******************** */

  const [active, setactive] = useState("All");
  const [Arr, setArr] = useState([]);

  const select_language = (language) => {
    setactive(language);
    if (language === "All") {
      setArr(fullProjects);
    } else {
      setArr(fullProjects.filter((a) => a.languages.includes(language)));
    }
  };

  return (
    <main className="main flex ">
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
     { Arr.length > 0 ? <section className="right  flex gap-1 center">
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
                a.order,
            }}
          >
            <div className="img">
              <img
                src={a.screenshot}
                alt={a.name}
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
                    a.netlify
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span className=" icon-link" />
                </a>
                <a href={a.github} target="_blank" rel="noopener noreferrer">
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
      :
      (
        <section className="right  flex gap-1 center">


        {[1,2,3,4].map((a) => (
          <motion.article
            // layout
            initial={
              a % 2 === 0
                ? { transform: `scale(0.4) translateX(300px)` }
                : { transform: `scale(0.4) translateX(-300px)` }
            }
            // animate={{ transform: "scale(1)" }}
            whileInView={{ transform: "scale(1) translateX(0px)" }}
            transition={{ type: "spring", damping: 6, stiffness: 33, delay: 0 }}
            key={a}
         
          >

        <SkeletonCard/>
          </motion.article>
        ))}
        
        </section>
      )
    
    
    
    }

   
 
    </main>
  );
};

export default Main;

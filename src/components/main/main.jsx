import React, { useState } from "react";
import "./main.scss";
import { motion, useScroll } from "framer-motion";
import { myProjects } from "../../data";
const Main = () => {
  const [active, setactive] = useState("All");
  const [Arr, setArr] = useState(myProjects);
  const AA = (n) => {
    setactive(n);
    if (n !== "All") {
      setArr(myProjects.filter((a) => a.category.includes(n)));
    } else {
      setArr(myProjects);
    }
  };
  return (
    <main className="main flex ">
      <section className="left ">
        <ul className="flex column center ">
          <li
            className={active === "All" ? "active" : null}
            onClick={() => AA("All")}
          >
            <button>All Projects</button>
          </li>
          <li
            className={active === "css" ? "active" : null}
            onClick={() => AA("css")}
          >
            <button>HTML & CSS</button>
          </li>
          <li
            className={active === "js" ? "active" : null}
            onClick={() => AA("js")}
          >
            <button>JavaScript</button>
          </li>
          <li
            className={active === "react" ? "active" : null}
            onClick={() => AA("react")}
          >
            <button>React & MUI</button>
          </li>
          <li
            className={active === "vue" ? "active" : null}
            onClick={() => AA("vue")}
          >
            <button>vue & vuex</button>
          </li>
          <li
            className={active === "node" ? "active" : null}
            onClick={() => AA("node")}
          >
            <button>Node & Express</button>
          </li>
        </ul>
      </section>
      <section className="right  flex gap-1 center">
        {Arr.map((a, ind) => (
          <motion.article
            // layout
            initial={ind % 2 === 0?{ transform: `scale(0.4) translateX(300px)` }:{ transform: `scale(0.4) translateX(-300px)` }}
            // animate={{ transform: "scale(1)" }}
            whileInView={{ transform: "scale(1) translateX(0px)" }}
            transition={{ type: "spring", damping: 6, stiffness: 33, delay: 0 }}
            key={ind}
          >
            <div className="img">
              <img src={a.imgPath} alt="" />
            </div>
            <div className="info">
              <h3>{a.projectTitle}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
            </div>
            <div className="action flex between">
              <div className="icon flex gap-1">
                <span className=" icon-link" />
                <span className=" icon-github-square" />
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

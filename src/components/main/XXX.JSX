/* eslint-disable react/prop-types */
import { useState } from "react";
import "./main.scss";
import { motion } from "framer-motion";

import myProjects from "../../projects/projects";

const React_Arr = ["my-portfolio", "portfolio", "react-project"];
const Next_Arr2 = ["add_Todo_List", "app_Articles", "app_next"];
const express_node = ["express_node", "socket_IO"];

const Main = ({ repo, lang, netlify }) => {
  // repo = myProjects

  //******************** */

  const fullProjects = repo.map((project) => {
    const matchingNetlify = netlify.find(
      (n) => n.build_settings.repo_path === project.full_name
    );
    let languages = lang[project.name] && }.keys(lang[project.name]);

    // ********
    if (React_Arr.includes(project.name)) {
      languages.push("react");
    } else if (Next_Arr2.includes(project.name)) {
      languages.push("next");
    } else if (express_node.includes(project.name)) {
      languages.push("node");
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
    };
  });

  console.log("fullProjects-----", fullProjects);
  //******************** */

  const [active, setactive] = useState("All");
  const [Arr, setArr] = useState(repo);

  // const select_language = (language) => {
  //   setactive(language);
  //   if (language === "All") {
  //     setArr(repo);
  //   } else if (language === "react") {
  //     setArr(repo.filter((a) => React_Arr.includes(a.name)));
  //   } else if (language === "next") {
  //     setArr(repo.filter((a) => Next_Arr2.includes(a.name)));
  //   } else if (language === "node") {
  //     setArr(repo.filter((a) => express_node.includes(a.name)));
  //   } else {
  //     setArr(repo.filter((a) => }.keys(lang[a.name]).includes(language)));
  //   }
  // };
  const select_language = (language) => {
    setactive(language);
    if (language === "All") {
      setArr(repo);
    } else {
      setArr(repo.filter((a) => }.keys(lang[a.name]).includes(language)));
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
                  : active !== "All"
                  ? "block"
                  : "none",
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
/*
[
{
full_name: "Eslam358/Add-task",
github
: 
"https://github.com/Eslam358/Add-task.git",
languages
: 
(2) ['HTML', 'JavaScript'],
name
: 
"Add-task",
netlify
: 
"http://main--celebrated-trifle-f4c1b1.netlify.app",
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/649d9927d77a80195522867b/screenshot_2023-06-29-14-46-17-0000.png"

},
{
 
full_name
: 
"Eslam358/add_Todo_List",
github
: 
"https://github.com/Eslam358/add_Todo_List.git",
languages
: 
(4) ['TypeScript', 'CSS', 'JavaScript', 'next']
name
: 
"add_Todo_List"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
2
: 
full_name
: 
"Eslam358/animation"
github
: 
"https://github.com/Eslam358/animation.git"
languages
: 
(2) ['CSS', 'HTML']
name
: 
"animation"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
3
: 
full_name
: 
"Eslam358/app_Articles"
github
: 
"https://github.com/Eslam358/app_Articles.git"
languages
: 
(4) ['TypeScript', 'JavaScript', 'CSS', 'next']
name
: 
"app_Articles"
netlify
: 
"https://app-articles.vercel.app/articles"
screenshot
: 
"https://app-articles.vercel.app/_next/image?url=%2Fcloud-hosting.png&w=640&q=75"

: 
}
4
: 
full_name
: 
"Eslam358/app_commerce"
github
: 
"https://github.com/Eslam358/app_commerce.git"
languages
: 
(4) ['JavaScript', 'CSS', 'HTML', 'SCSS']
name
: 
"app_commerce"
netlify
: 
"http://main--commerceshopping.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/674b37557bf2b40008490af0/screenshot_2024-11-30-16-04-16-0000.webp"

: 
}
5
: 
full_name
: 
"Eslam358/app_next"
github
: 
"https://github.com/Eslam358/app_next.git"
languages
: 
(4) ['JavaScript', 'TypeScript', 'CSS', 'next']
name
: 
"app_next"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
6
: 
full_name
: 
"Eslam358/Calculator"
github
: 
"https://github.com/Eslam358/Calculator.git"
languages
: 
(3) ['JavaScript', 'HTML', 'CSS']
name
: 
"Calculator"
netlify
: 
"http://main--stunning-sorbet-a3b803.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/646c51487c62c60008a2ae9c/screenshot_2023-05-23-05-38-27-0000.png"

: 
}
7
: 
full_name
: 
"Eslam358/Electrobox-Electronics-Store"
github
: 
"https://github.com/Eslam358/Electrobox-Electronics-Store.git"
languages
: 
(5) ['Vue', 'JavaScript', 'HTML', 'SCSS', 'CSS']
name
: 
"Electrobox-Electronics-Store"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
8
: 
full_name
: 
"Eslam358/Ellamart-eCommerce"
github
: 
"https://github.com/Eslam358/Ellamart-eCommerce.git"
languages
: 
(3) ['Vue', 'JavaScript', 'TypeScript']
name
: 
"Ellamart-eCommerce"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
9
: 
full_name
: 
"Eslam358/Eslam358"
github
: 
"https://github.com/Eslam358/Eslam358.git"
languages
: 
[]
name
: 
"Eslam358"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
10
: 
full_name
: 
"Eslam358/Exchange-rate"
github
: 
"https://github.com/Eslam358/Exchange-rate.git"
languages
: 
(3) ['JavaScript', 'HTML', 'CSS']
name
: 
"Exchange-rate"
netlify
: 
"http://main--iridescent-biscuit-d0d9e0.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/64930ed653b0df00082dd31d/screenshot_2023-06-21-14-53-34-0000.png"

: 
}
11
: 
full_name
: 
"Eslam358/express_node"
github
: 
"https://github.com/Eslam358/express_node.git"
languages
: 
(2) ['JavaScript', 'node']
name
: 
"express_node"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
12
: 
full_name
: 
"Eslam358/Game"
github
: 
"https://github.com/Eslam358/Game.git"
languages
: 
(3) ['HTML', 'JavaScript', 'CSS']
name
: 
"Game"
netlify
: 
"http://main--amazing-malasada-e11808.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/648d603244734c5cb44f139e/screenshot_2023-06-17-07-26-51-0000.png"

: 
}
13
: 
full_name
: 
"Eslam358/Get-repos"
github
: 
"https://github.com/Eslam358/Get-repos.git"
languages
: 
(3) ['CSS', 'JavaScript', 'HTML']
name
: 
"Get-repos"
netlify
: 
"http://main--moonlit-kringle-afbcc8.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/648ea1df73a33f7d82c9e64f/screenshot_2023-06-18-06-19-20-0000.png"

: 
}
14
: 
full_name
: 
"Eslam358/Hangman-Game"
github
: 
"https://github.com/Eslam358/Hangman-Game.git"
languages
: 
(3) ['CSS', 'JavaScript', 'HTML']
name
: 
"Hangman-Game"
netlify
: 
"http://main--calm-semifreddo-3147d0.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/6492e7c7dc366b00081246fd/screenshot_2023-06-21-12-06-46-0000.png"

: 
}
15
: 
full_name
: 
"Eslam358/Login"
github
: 
"https://github.com/Eslam358/Login.git"
languages
: 
(3) ['CSS', 'JavaScript', 'HTML']
name
: 
"Login"
netlify
: 
"http://main--aesthetic-bunny-d08206.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/648960cbb8866800090fb05d/screenshot_2023-06-14-06-40-22-0000.png"

: 
}
16
: 
full_name
: 
"Eslam358/Memory-carde"
github
: 
"https://github.com/Eslam358/Memory-carde.git"
languages
: 
(3) ['JavaScript', 'CSS', 'HTML']
name
: 
"Memory-carde"
netlify
: 
"http://main--remarkable-kelpie-c6c58b.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/6486ddd9afe67c0008e5a7ed/screenshot_2023-06-12-08-57-15-0000.png"

: 
}
17
: 
full_name
: 
"Eslam358/my-portfolio"
github
: 
"https://github.com/Eslam358/my-portfolio.git"
languages
: 
(4) ['JavaScript', 'SCSS', 'HTML', 'react']
name
: 
"my-portfolio"
netlify
: 
"http://master--islam-my-portfolio.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/6653b8df53eea5000878f471/screenshot_2024-05-26-22-34-48-0000.webp"

: 
}
18
: 
full_name
: 
"Eslam358/My-Repo"
github
: 
"https://github.com/Eslam358/My-Repo.git"
languages
: 
(3) ['JavaScript', 'CSS', 'HTML']
name
: 
"My-Repo"
netlify
: 
"http://main--graceful-semifreddo-0a3f37.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/64908ace6e192d0008db451a/screenshot_2023-06-19-17-05-27-0000.png"

: 
}
19
: 
full_name
: 
"Eslam358/portfolio"
github
: 
"https://github.com/Eslam358/portfolio.git"
languages
: 
(5) ['JavaScript', 'HTML', 'SCSS', 'CSS', 'react']
name
: 
"portfolio"
netlify
: 
"http://main--portfolio-eslam.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/68a97358e35762000866c39e/screenshot_2025-08-23-07-54-15-0000.webp"

: 
}
20
: 
full_name
: 
"Eslam358/Quran-Api"
github
: 
"https://github.com/Eslam358/Quran-Api.git"
languages
: 
[]
name
: 
"Quran-Api"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
21
: 
full_name
: 
"Eslam358/react-project"
github
: 
"https://github.com/Eslam358/react-project.git"
languages
: 
(4) ['HTML', 'JavaScript', 'CSS', 'react']
name
: 
"react-project"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
22
: 
full_name
: 
"Eslam358/restaurant"
github
: 
"https://github.com/Eslam358/restaurant.git"
languages
: 
(3) ['Vue', 'JavaScript', 'HTML']
name
: 
"restaurant"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
23
: 
full_name
: 
"Eslam358/show_img"
github
: 
"https://github.com/Eslam358/show_img.git"
languages
: 
(3) ['CSS', 'JavaScript', 'HTML']
name
: 
"show_img"
netlify
: 
"http://main--tranquil-gelato-042117.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/648c031c53fb4d0007cdf27c/screenshot_2023-06-16-06-37-25-0000.png"

: 
}
24
: 
full_name
: 
"Eslam358/socket_IO"
github
: 
"https://github.com/Eslam358/socket_IO.git"
languages
: 
(3) ['HTML', 'JavaScript', 'node']
name
: 
"socket_IO"
netlify
: 
"#"
screenshot
: 
"https://cdn.neowin.com/news/images/uploaded/2021/04/1619644762_github-desktop_story.jpg"

: 
}
25
: 
full_name
: 
"Eslam358/Tests"
github
: 
"https://github.com/Eslam358/Tests.git"
languages
: 
(3) ['JavaScript', 'CSS', 'HTML']
name
: 
"Tests"
netlify
: 
"http://main--symphonious-entremet-c5edb6.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/6491ef8ff1c81d0007fd2e1c/screenshot_2023-06-20-18-27-36-0000.png"

: 
}
26
: 
full_name
: 
"Eslam358/the-App-shope"
github
: 
"https://github.com/Eslam358/the-App-shope.git"
languages
: 
(5) ['Vue', 'JavaScript', 'TypeScript', 'HTML', 'SCSS']
name
: 
"the-App-shope"
netlify
: 
"http://main--profound-palmier-b3107e.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/65655332d77d4c00082e960f/screenshot_2023-11-28-02-41-29-0000.png"

: 
}
27
: 
full_name
: 
"Eslam358/Typing-Speed"
github
: 
"https://github.com/Eslam358/Typing-Speed.git"
languages
: 
(3) ['JavaScript', 'CSS', 'HTML']
name
: 
"Typing-Speed"
netlify
: 
"http://main--roaring-brioche-fe83aa.netlify.app"
screenshot
: 
"https://d33wubrfki0l68.cloudfront.net/649555a40286f407ca662034/screenshot_2023-06-23-08-19-59-0000.png"

: 
}
]
*/
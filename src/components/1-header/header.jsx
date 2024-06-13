import { useState } from "react";
import "./header.scss";

// eslint-disable-next-line react/prop-types
const Header = ({ dark, setdark, visible }) => {
  const [menu, setmenu] = useState(false);

  return (
    <header style={{top:!visible?"-100px":"0px"}} className="header flex between ">
    {/* <header style={{visibility:visibil?"visible":"hidden"}} className="header flex between "> */}
      <div className="Tablets-none" />
      <div className="icon Tablets">
        <button onClick={() => setmenu(true)}>
          <span className="svg   icon-menu" />
        </button>
      </div>
      <nav className="Tablets-none">
        <ul className="flex gap-2">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#hero">about</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="icon">
        <button
          onClick={() => {
            setdark(!dark);
            localStorage.setItem("dark", !dark ? "true" : "false");
          }}
        >
          {dark ? (
            <span className="svg   icon-moon-o" />
          ) : (
            <span className="svg   icon-sun" />
          )}
        </button>
      </div>

      <div className={menu ? "overflow Tablets active" : " overflow Tablets "}>
        <div className={menu ? "Tablets menu  active" : " Tablets menu  "}>
          <ul className="flex  column">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#hero">about</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          </ul>
          <div className="icon ">
            <button onClick={() => setmenu(false)}>
              <span className="svg    icon-close" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

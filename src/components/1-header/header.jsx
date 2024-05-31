import { useState } from "react";
import "./header.scss";

// eslint-disable-next-line react/prop-types
const Header = ({ dark, setdark }) => {
  const [menu, setmenu] = useState(false);

  return (
    <header className="header flex between ">
      <div className="Tablets-none" />
      <div className="icon Tablets">
        <button onClick={() => setmenu(true)}>
          <span className="svg   icon-menu" />
        </button>
      </div>
      <nav className="Tablets-none">
        <ul className="flex gap-2">
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
              <a href="#"> About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Contact</a>
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

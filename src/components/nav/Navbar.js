import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">
            <Link className="Nav__link" to="/Home">
              Home
            </Link>
          </li>
          <li className="items">
            <Link className="Nav__link" to="/Cv">
              Mon CV
            </Link>
          </li>
          <li className="items">
            <Link className="Nav__link" to="/Contact">
              Me contacter
            </Link>
          </li>
        </ul>
      )}

      <button onClick={toggleNavSmallScreen} className="btn">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

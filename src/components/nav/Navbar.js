import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <li className="items">home</li>
          <li className="items">mon CV</li>
          <li className="items">me contacter</li>
        </ul>
      )}

      <button onClick={toggleNavSmallScreen} className="btn">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

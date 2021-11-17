import React, { useState, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  // const [toggleMenu, setToggleMenu]
  return (
    <nav>
      <ul className="liste">
        <li className="items">home</li>
        <li className="items">mon CV</li>
        <li className="items">me contacter</li>
      </ul>
      <button className="btn">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

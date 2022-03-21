import React, { useState } from "react";
import "./Header.css";
import { Link as Scroll } from 'react-scroll';

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Scroll href="#" className="nav__brand"  >
        <b>Doung Kolbondith</b>
      </Scroll>
      <ul className={active}>
        <li className="nav__item">
          <Scroll to="About" smooth={true} href="" className="nav__link">
            About
          </Scroll>
        </li>
        <li className="nav__item">
          <Scroll to="Services" smooth={true} href="" className="nav__link">
            Service
          </Scroll>
        </li>
        <li className="nav__item">
          <Scroll to="Project" smooth={true} href="" className="nav__link">
            Porfolios
          </Scroll>
        </li>
        <li className="nav__item">
          <Scroll to="Contact" smooth={true} href="" className="nav__link">
            Contact
          </Scroll>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
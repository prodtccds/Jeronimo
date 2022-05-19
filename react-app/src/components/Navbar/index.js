import React, { useState } from "react";
import "./style/navbar.css";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icone Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">

      <a href="/" className="nav__brand">
        <b>  Jerônimo </b>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/seguranca" className="nav__link">
            <b> Segurança </b>
          </a>
        </li>
        <li className="nav__item">
          <a href="vulnerabilidades" className="nav__link">
            <b>Vulnerabilidades </b>
          </a>
        </li>
        <li className="nav__item">
          <a href="/testes" className="nav__link">
            <b> Testes </b>
          </a>
        </li>
        <li className="nav__item">
          <a href="sobre" className="nav__link">
           <b>  Sobre </b>
          </a>
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

export default Navbar;
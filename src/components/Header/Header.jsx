import React, { useState } from 'react'
import "./Header.css"

const Header = () => {

/*=============== Toggle Menu ===============*/
  const[Toggle,showMenu]= useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Shubham <span>.</span>Kr
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav__icon active-link"></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#project" className="nav_link">
                <i className="uil uil-scenery nav__icon"></i>
                Project
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          {/* nav close icon */}
          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          {/* nav open icon */}
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header
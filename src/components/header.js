import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import gsap from "gsap";
import { Tween, Timeline } from "react-gsap";
//additional data
import * as Animations from "./animations.js";

//styles
import headerStyles from "../css/header.module.css";

const Header = props => {
  let navRef = useRef(null);

  useEffect(() => {
    //reference the navlinks to animate
    let navLinks = navRef.current.childNodes[1].childNodes[0].childNodes;
    gsap.to(navRef.current, Animations.navbarSwitch);

    for (let i = 0; i <= navLinks.length; i++) {
      gsap.to(navLinks[i], Animations.navLinkScroll);
    }
  }, []);

  const handleHover = el => {
    gsap.to(el.target, Animations.navLinkHover);

    //underline animation
    gsap.to(el.target.childNodes[1], Animations.navUnderlineHover);
  };

  const handleUnHover = el => {
    //extract background color value to decide nav link's target color on mouse leave
    let rgb = navRef.current.style.backgroundColor.slice(4, -1);
    let res = rgb.split(", ");

    if (Number(res[0]) <= 128) {
      gsap.to(el.target, Animations.navLinkUnhover);
    } else {
      gsap.to(el.target, Animations.navLinkUnhover2);
    }
    //underline animation
    gsap.to(el.target.childNodes[1], Animations.navUnderlineUnhover);
  };

  return (
    <Navbar
      variant="dark"
      className={headerStyles.navStyle}
      expand="lg"
      fixed="top"
      ref={navRef}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Tween from={Animations.navLink}>
            <Nav.Link
              className={headerStyles.navText}
              id={headerStyles.aboutNav}
              onMouseEnter={el => handleHover(el)}
              onMouseLeave={el => handleUnHover(el)}
              href="#about"
            >
              About me
              <span className={headerStyles.navUnderline}></span>
            </Nav.Link>

            <Nav.Link
              className={headerStyles.navText}
              id={headerStyles.skillsNav}
              onMouseEnter={el => handleHover(el)}
              onMouseLeave={el => handleUnHover(el)}
              href="#skills"
            >
              Skills
              <span className={headerStyles.navUnderline}></span>
            </Nav.Link>
            <Nav.Link
              className={headerStyles.navText}
              id={headerStyles.projectsNav}
              onMouseEnter={el => handleHover(el)}
              onMouseLeave={el => handleUnHover(el)}
              href="#projects"
            >
              Projects
              <span className={headerStyles.navUnderline}></span>
            </Nav.Link>
            <Nav.Link
              className={headerStyles.navText}
              id={headerStyles.contactNav}
              onMouseEnter={el => handleHover(el)}
              onMouseLeave={el => handleUnHover(el)}
              href="#contact"
            >
              Contact
              <span className={headerStyles.navUnderline}></span>
            </Nav.Link>
          </Tween>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

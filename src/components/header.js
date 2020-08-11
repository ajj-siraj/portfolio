import React, { useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//additional data
import * as Animations from "./animations.js";

//styles
import headerStyles from "../css/header.module.css";

gsap.registerPlugin(ScrollTrigger);

const Header = props => {
  let navRef = useRef(null);

  

  useEffect(() => {
    //reference the navlinks to animate
    if (document && navRef) {
      let navLinks = navRef.current.childNodes[1].childNodes[0].childNodes;
      gsap.to(navRef.current, Animations.navbarSwitch);

      for (let i = 0; i <= navLinks.length; i++) {
        gsap.to(navLinks[i], Animations.navLinkScroll);
      }
      gsap.from(navLinks, Animations.navLink);
    }
  }, []);

  //handlers

  //workaround to the gatsby anchor link scroll bug - probably a bad idea but using Refs requires re-configuring every component to forward refs.
  const scrollToRef = source => {
    let alt = source.target.getAttribute("alt");
    let target = document.getElementById(alt);
    window.scrollTo(0, target.offsetTop - 100);
  };

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
      collapseOnSelect
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          
          <Nav.Link
            className={headerStyles.navText}
            id={headerStyles.aboutNav}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="about"
            onClick={el => scrollToRef(el)}
          >
            About me
            <span className={headerStyles.navUnderline}></span>
          </Nav.Link>

          <Nav.Link
            className={headerStyles.navText}
            id={headerStyles.skillsNav}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="skills"
            onClick={el => scrollToRef(el)}
          >
            Skills
            <span className={headerStyles.navUnderline}></span>
          </Nav.Link>
          <Nav.Link
            className={headerStyles.navText}
            id={headerStyles.projectsNav}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="projects"
            onClick={el => scrollToRef(el)}
          >
            Projects
            <span className={headerStyles.navUnderline}></span>
          </Nav.Link>
          <Nav.Link
            className={headerStyles.navText}
            id={headerStyles.contactNav}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="contact"
            onClick={el => scrollToRef(el)}
          >
            Contact
            <span className={headerStyles.navUnderline}></span>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React, { useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//additional data
import * as Animations from "components/animations.js";

//utility
import {scrollToRef} from "~/Utility.js";

//styles


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
      className={`navStyle`}
      expand="lg"
      fixed="top"
      ref={navRef}
      collapseOnSelect
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          
          <Nav.Link
            className={`navText`}
            id={`aboutNav`}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="about"
            onClick={el => scrollToRef(el)}
          >
            About me
            <span className={`navUnderline`}></span>
          </Nav.Link>

          <Nav.Link
            className={`navText`}
            id={`servicesNav`}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="services"
            onClick={el => scrollToRef(el)}
          >
            Services
            <span className={`navUnderline`}></span>
          </Nav.Link>

          <Nav.Link
            className={`navText`}
            id={`skillsNav`}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="skills"
            onClick={el => scrollToRef(el)}
          >
            Skills
            <span className={`navUnderline`}></span>
          </Nav.Link>
          <Nav.Link
            className={`navText`}
            id={`projectsNav`}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="projects"
            onClick={el => scrollToRef(el)}
          >
            Projects
            <span className={`navUnderline`}></span>
          </Nav.Link>
          <Nav.Link
            className={`navText`}
            id={`contactNav`}
            onMouseEnter={el => handleHover(el)}
            onMouseLeave={el => handleUnHover(el)}
            alt="contact"
            onClick={el => scrollToRef(el)}
          >
            Contact
            <span className={`navUnderline`}></span>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

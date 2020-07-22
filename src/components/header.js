import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import gsap from "gsap"
import { Tween } from "react-gsap"

//additional data
import * as Animations from "./animations.js"

//styles
import headerStyles from "../css/header.module.css"

const Header = ({ siteTitle }) => {

  const handleHover = (el) => {
    console.log("It has been hovered upon", el.target);
    gsap.to(el.target, {y: "-5px", duration: "0.1", ease: "linear", backgroundColor: "#584684", color:"#154868"})
  }

  const handleUnHover = (el) => {
    gsap.to(el.target, {y:"0px", duration: "0.1", ease: "linear"})
  }

  return (
    <Navbar className={headerStyles.navStyle} expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Tween from={Animations.navLink}>
            <Nav.Link
              className={headerStyles.navText}
              onMouseEnter={el => handleHover(el)}
              onMouseLeave={el => handleUnHover(el)}
            >
              About me
            </Nav.Link>
            <Nav.Link className={headerStyles.navText} href="#link">
              Skills
            </Nav.Link>
            <Nav.Link className={headerStyles.navText} href="#link">
              Contact
            </Nav.Link>
            <Nav.Link className={headerStyles.navText} href="#home">
              Projects
            </Nav.Link>
          </Tween>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

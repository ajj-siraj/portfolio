
//navbar animations
export const navLink = {
  y: "-50px",
  opacity: "0",
  ease: "bounce.out",
  rotationX: "180",
  stagger: "0.1",
  duration: "0.5",
}


export const navBrand = {
  rotationY: "180",
  opacity: "0",
}

export const navLinkHover = {
  y: "-5px",
  duration: "0.1",
  ease: "linear",
  color: "#ffbb00",
}

export const navUnderlineHover = {
  width: "100%",
  ease: "power1.in",
  backgroundColor: "ffbb00",
  duration: "0.3"
  
}
export const navUnderlineUnhover = {
  width: "0%",
  ease: "power1.out",
  backgroundColor: "ffbb00",
  duration: "0.3"
  
}
export const navLinkUnhover = {
  y: "0px",
  duration: "0.1",
  ease: "linear",
  color: "#ffffff",
}

export const navLinkUnhover2 = {
  y: "0px",
  duration: "0.1",
  ease: "linear",
  color: "#000000",
}

export const navLinkScroll = {
  color: "#000000",
  scrollTrigger: {
    scrub: true,
    start: "30%",
    end: "31%"
  },
}

export const navbarSwitch = {
  backgroundColor: "#ffffff",
  scrollTrigger: {
    scrub: true,
    start: "30%",
    end: "32%"
  },
}

//about section animations
export const svg = {
  alpha: 0,
  scale: 0,
  ease: "bounce",
  duration: 1,
  scrollTrigger: { start: "30%" },
}

//projects section animations
export const tabButtonClick = {
  backgroundColor: "#f59b15",
  duration: 2,
}

export const projectsHeading = {
  y: -50,
  opacity: 0,
  ease: "power1.in",
  duration: 0.3,
  scrollTrigger: { start: "50%" },
}

export const projectsBody = {
  delay: 0.4,
  stagger: 3,
  y: -50,
  opacity: 0,
  ease: "power2.in",
  duration: 0.3,
  scrollTrigger: { start: "50%" },
}


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
  alpha: 1,
  duration: "0.3",
}
export const navUnderlineUnhover = {
  width: "0%",
  ease: "power1.out",
  alpha: 0,
  duration: "0.3",
}
export const navLinkUnhover = {
  y: "0px",
  duration: "0.1",
  ease: "linear",
  color: "#ddd",
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
    trigger: "#about",
    scrub: true,
    
    start: "top 10%",
    end: "top top",
  },
}

export const navbarSwitch = {
  backgroundColor: "#ffffff",
  scrollTrigger: {
    trigger: "#about",
    scrub: true,
    
    start: "top 10%",
    end: "top top",
    // end: "34%",
  },
}

//about section animations
export const svg = {
  alpha: 0,
  scale: 0,
  ease: "bounce",
  zIndex: -1,
  duration: 1,
  scrollTrigger: { start: "30%" },
}

export const headingFlip = {
  rotationX: 180,
  opacity: 1,
  scale: 1,
  ease: "linear",
  duration: 1,
  // scrollTrigger: {trigger: "#about", start: "top 50%"}
}

export const fadeIn = (trigger) => {
  return {
    
    opacity: 1,
    duration: 0.5,
    // scrollTrigger: {trigger: trigger, start: "top 50%"}
  }
}
//skills section animations

export const lineEnterRight = {
  alpha: 0,
  right: "-100%",
  width: "0%",
  duration: 1,
  scrollTrigger: {trigger: "#skills", start: "top 60%"}
}

export const lineEnterLeft = {
  alpha: 0,
  left: "-100%",
  width: "0%",
  duration: 1,
  scrollTrigger: {trigger: "#skills", start: "top 60%"}
}
export const lineHover = {
  width: "80%",
  ease: "power2.in",
  duration: "0.1",
}
export const lineUnhover = {
  width: "100%",
  ease: "power2.out",
  duration: "0.5",
}

export const skillHeading = {
  alpha: 0,
  duration: "3",
  ease: "expo",
  scrollTrigger: {trigger: "#skills", start: "top 60%"}
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

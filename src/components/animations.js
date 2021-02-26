//navbar animations
export const navLink = {
  y: "-50px",
  opacity: "0",
  ease: "bounce.out",
  rotationX: "180",
  stagger: "0.1",
  duration: "0.5",
};

export const navBrand = {
  rotationY: "180",
  opacity: "0",
};

export const navLinkHover = {
  y: "-5px",
  duration: "0.1",
  ease: "linear",
  color: "#00d627",
};

export const navUnderlineHover = {
  width: "100%",
  ease: "power1.in",
  alpha: 1,
  duration: "0.3",
};
export const navUnderlineUnhover = {
  width: "0%",
  ease: "power1.out",
  alpha: 0,
  duration: "0.3",
};
export const navLinkUnhover = {
  y: "0px",
  duration: "0.1",
  ease: "linear",
  color: "#ddd",
};

export const navLinkUnhover2 = {
  y: "0px",
  duration: "0.1",
  ease: "linear",
  color: "#000000",
};

export const navLinkScroll = {
  color: "#ddd",
  scrollTrigger: {
    trigger: "#about",
    scrub: true,

    start: "top 10%",
    end: "top top",
  },
};

export const navbarSwitch = {
  backgroundColor: "#020204",
  scrollTrigger: {
    trigger: "#about",
    scrub: true,

    start: "top 10%",
    end: "top top",
    // end: "34%",
  },
};

//about section animations
export const svg = (trigger) => {
return{
  alpha: 0,
  scale: 0,
  ease: "bounce",
  zIndex: -1,
  duration: 1,
  scrollTrigger: {trigger: trigger, start: "30%" },
}
};

export const headingFade = trigger => {
  return {
    y: -50,
    opacity: 0,
    ease: "expo",
    duration: 1,
    scrollTrigger: { trigger: trigger, start: "top 60%" },
  };
};

export const fadeIn = trigger => {
  return {
    delay: 0.3,
    stagger: 0.3,
    opacity: 0,
    duration: 1,
    scrollTrigger: { trigger: trigger, start: "top 60%" },
  };
};
//skills section animations

export const lineEnterRight = (trigger) => {
return{
  alpha: 0,
  right: "-100%",
  width: "0%",
  duration: 1,
  scrollTrigger: { trigger: trigger, start: "top 50%" },
}
};

export const lineEnterLeft = (trigger) => {
  return{
    alpha: 0,
  left: "-100%",
  width: "0%",
  duration: 1,
  scrollTrigger: { trigger: trigger, start: "top 50%" },
  }
};
export const lineHover = {
  width: "80%",
  ease: "power2.in",
  duration: "0.1",
};
export const lineUnhover = {
  width: "100%",
  ease: "power2.out",
  duration: "0.5",
};

// export const skillHeading = trigger => {
//   return {
//     alpha: 0,
//     duration: "3",
//     ease: "expo",
//     scrollTrigger: { trigger: trigger, start: "top 60%" },
//   };
// };

//projects section animations
export const tabButtonClick = {
  backgroundColor: "#f59b15",
  duration: 2,
};

export const projectsHeading = trigger => {
  return {
    y: -50,
    opacity: 0,
    ease: "power1.in",
    duration: 0.3,
    scrollTrigger: { trigger: trigger, start: "50%" },
  };
};

export const projectsBody = trigger => {
  return {
    delay: 0.4,
    stagger: 3,
    y: -50,
    opacity: 0,
    ease: "power2.in",
    duration: 0.3,
    scrollTrigger: { trigger: trigger, start: "50%" },
  };
};

//contact

export const svgEnter = (trigger, idx) => {
  if (!idx) idx = 0;
  return {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: idx * 0.3,
    scrollTrigger: { trigger: trigger, start: "30%" },
  };
};

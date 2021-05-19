"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  landingAnimation();
  scrollMindful();
  scrollNumbers();
  scrollYoga();
}

function landingAnimation() {
  const timeline = gsap.timeline({ repeat: 0 });
  timeline.from(".landing_intro", { opacity: 0.2, duration: 4 });
  timeline.from(".landing_images", { delay: 0.5, y: -20, opacity: 0.5, duration: 4 }, "-=5");
}

function scrollMindful() {
  gsap.from(".mindful_community", {
    scrollTrigger: {
      trigger: ".mindful_community",
      toggleActions: "restart pause resume reset",
    },
    x: 20,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".mindful_image", {
    scrollTrigger: {
      trigger: ".mindful_community",
      toggleActions: "restart pause resume reset",
    },
    delay: 2,
    x: -20,
    opacity: 0,
    duration: 1,
  });
}

function scrollNumbers() {
  gsap.from(".number_box", {
    scrollTrigger: {
      trigger: ".number_box p",
      toggleActions: "restart pause resume reset",
    },
    stagger: 0.2,
    delay: 3,
    y: -20,
    opacity: 0,
    duration: 1,
  });
}

function scrollYoga() {
  gsap.from(".yoga_intro", {
    scrollTrigger: {
      trigger: ".yoga_intro h1",
      toggleActions: "restart pause resume reset",
    },
    x: -20,
    opacity: 0.5,
    duration: 1,
  });

  gsap.from(".yoga_images", {
    scrollTrigger: {
      trigger: ".yoga_intro h1",
      toggleActions: "restart pause resume reset",
    },
    delay: 2,
    x: 20,
    opacity: 0.5,
    duration: 4,
  });
}

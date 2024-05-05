"use strict";

const navLinks = document.querySelectorAll("li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");

    const targetSection = document.getElementById(sectionId);
    targetSection
      ? targetSection.scrollIntoView({ behavior: "smooth" })
      : alert(`${sectionId} is under development`);
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

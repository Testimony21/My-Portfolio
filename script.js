document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const reveals = document.querySelectorAll(".reveal");
  const projects = document.querySelectorAll(".project-card");
  const skills = document.querySelectorAll(".skill-card");

  // Smooth Scroll
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Active Nav on Scroll
  function updateActiveNav() {
    let scrollPos = window.scrollY + 150;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Reveal Animation
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 150) {
        el.classList.add("active");
      } else { el.classList.remove("active"); }
    });

    // Project Cards
    projects.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 150) card.classList.add("active");
    });

    // Skills Count Up
    const skills = document.querySelectorAll(".skill-card");

    window.addEventListener("scroll", () => {
      skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120 && !skill.classList.contains("active")) {
          skill.classList.add("active");
          skill.querySelector(".skill-progress").style.width = "100%";
        }
      });
    });

  }
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const reveals = document.querySelectorAll(".reveal");
  const projects = document.querySelectorAll(".project-card");
  const skills = document.querySelectorAll(".skill-card");

  /* =========================
     Smooth Scroll
  ========================== */
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* =========================
     Active Nav on Scroll
  ========================== */
  function updateActiveNav() {
    let scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
      if (
        scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(
          `.nav-link[href="#${sec.id}"]`
        );
        if (active) active.classList.add("active");
      }
    });
  }

  /* =========================
     Reveal + Skills Animation
  ========================== */
  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    // General reveals
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });

    // Project cards (left & right)
    projects.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        card.classList.add("active");
      }
    });
  }

  // Run immediately on load
  window.addEventListener("load", revealOnScroll);
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();
});

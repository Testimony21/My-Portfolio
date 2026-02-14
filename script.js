document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const reveals = document.querySelectorAll(".reveal");
  const project = document.querySelectorAll(".project-card");
  const skills = document.querySelectorAll(".skill-card");
  const roleText = "Front-End & MERN Stack Developer";
  const roleElement = document.getElementById("typing-role");

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
    const scrollPos = window.scrollY + 150;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }

  /* =========================
     Reveal Animations
  ========================== */
  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    // General reveals (sections, text, etc.)
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) el.classList.add("active");
    });

    // Project cards with stagger
    projects.forEach((card, index) => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100 && !card.classList.contains("active")) {
        setTimeout(() => card.classList.add("active"), index * 150);
      }
    });

    // Skill cards with stagger
    skills.forEach((card, index) => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100 && !card.classList.contains("active")) {
        setTimeout(() => card.classList.add("active"), index * 120);
      }
    });
  }

  /* =========================
     Typing Effect
  ========================== */
  let i = 0;
  let deleting = false;

  function typeRole() {
    if (!roleElement) return;

    if (!deleting && i <= roleText.length) {
      roleElement.textContent = roleText.substring(0, i);
      i++;
      setTimeout(typeRole, 60);
    } else if (deleting && i >= 0) {
      roleElement.textContent = roleText.substring(0, i);
      i--;
      setTimeout(typeRole, 35);
    } else {
      deleting = !deleting;
      setTimeout(typeRole, 1200);
    }
  }

  /* =========================
     Event Listeners
  ========================== */
  window.addEventListener("load", revealOnScroll);
  window.addEventListener("scroll", () => {
    revealOnScroll();
    updateActiveNav();
  });

  // Initialize
  updateActiveNav();
  typeRole();
});
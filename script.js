document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const reveals = document.querySelectorAll(".reveal");
  const projects = document.querySelectorAll(".project-card");
  const skills = document.querySelectorAll(".skill-card");
  // const contacts = document.querySelectorAll(".contact-grid");
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

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 120) {
        if (!el.classList.contains("active")) {
          el.classList.add("active");
        }
      }
    });

    projects.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        card.classList.add("active");
      }
    });

    skills.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        card.classList.add("active");
      }
    });

  }

  //   function revealOnScroll() {
  //   const triggerBottom = window.innerHeight * 0.85;

  //   skills.forEach(card => {
  //     const cardTop = card.getBoundingClientRect().top;

  //     if (cardTop < triggerBottom) {
  //       card.classList.add("active");
  //     } else {
  //       card.classList.remove("active");
  //     }
  //   });

  //   projects.forEach(card => {
  //     const cardTop = card.getBoundingClientRect().top;

  //     if (cardTop < triggerBottom) {
  //       card.classList.add("active");
  //     } else {
  //       card.classList.remove("active");
  //     }
  //   });
  // }

  let i = 0;
  let deleting = false;
  function typeRole() {
    if (!roleElement) return;

    if (!deleting && i <= roleText.length) {
      roleElement.textContent = roleText.substring(0, i);
      i++;
      setTimeout(typeRole, 60);
    }
    else if (deleting && i >= 0) {
      roleElement.textContent = roleText.substring(0, i);
      i--;
      setTimeout(typeRole, 35);
    }
    else {
      deleting = !deleting;
      setTimeout(typeRole, 1200);
    }
  }

  // Run immediately on load
  window.addEventListener("load", revealOnScroll);
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();
  typeRole();
});

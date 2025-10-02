// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Animação dos cartões de membros ao aparecer
const members = document.querySelectorAll(".member-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);
members.forEach((member) => observer.observe(member));

// FAQ toggle (acordeão)
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Fecha outros (modo acordeão)
    faqQuestions.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
        otherBtn.nextElementSibling.classList.remove("open");
      }
    });

    // Toggle atual
    btn.classList.toggle("active");
    answer.classList.toggle("open");
  });
});

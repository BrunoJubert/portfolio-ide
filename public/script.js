// MENU DROPDOWN FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const explorer = document.querySelector(".explorer-menu");
  const nav = document.querySelector(".nav-menu");
  const navLinks = nav.querySelectorAll("a");
  const ideContainer = document.querySelector(".ide-container");

  const isMobile = () => window.innerWidth < 768;

  const closeMenu = () => {
    if (isMobile()) {
      nav.classList.remove("active");
      explorer.classList.remove("active");
    }
  };

  explorer.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    explorer.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (isMobile() && !nav.contains(e.target) && !explorer.contains(e.target)) {
      closeMenu();
    }
  });

  ideContainer.addEventListener("scroll", closeMenu);

  // DATE DYNAMICALLY GENERATED IN FOOTER
  const currentYearSpan = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;
});





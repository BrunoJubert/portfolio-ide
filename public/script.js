import CookieManager from "./cookieManager.js";

const cookieManager = new CookieManager();
  cookieManager.init();

  
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

  const handleClickOutsideMenu = (e) => {
    if (isMobile() && !nav.contains(e.target) && !explorer.contains(e.target)) {
      closeMenu();
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

  document.addEventListener("click", handleClickOutsideMenu);

  ideContainer.addEventListener("scroll", closeMenu, { passive: true });

  const currentYearSpan = document.getElementById("current-year");
  currentYearSpan.textContent = new Date().getFullYear();

  document.addEventListener("touchstart", () => {}, { passive: true });
  document.addEventListener("touchmove", () => {}, { passive: true });
  document.addEventListener("wheel", () => {}, { passive: true });

  const themeSwitch = document.getElementById("themeSwitch");

  if (themeSwitch) {
    themeSwitch.addEventListener("change", () => {
      console.log("Switch changed");
      if (themeSwitch.checked) {
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
      }
    });

    const savedTheme = localStorage.getItem("theme");
    console.log("Saved theme:", savedTheme);
    if (savedTheme === "dark") {
      themeSwitch.checked = false;
      document.body.classList.remove("light-theme");
    } else {
      themeSwitch.checked = true;
      document.body.classList.add("light-theme");
    }
  } else {
    console.error("Theme switch element not found");
  }
});

document
  .querySelector(".projects-dropdown")
  .addEventListener("click", function () {
    requestAnimationFrame(() => {
      this.classList.toggle("active");
      document.querySelector(".projects-submenu").classList.toggle("active");
    });
  });

document.querySelector(".vs-code-icon").addEventListener("click", function () {
  const meowSound = document.getElementById("meowSound");
  meowSound.volume = 0.2;
  meowSound.play();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      requestAnimationFrame(() => {
        const addClass = entry.isIntersecting
          ? "animate-slide-in"
          : "reset-animation";
        const removeClass = entry.isIntersecting
          ? "reset-animation"
          : "animate-slide-in";
        target.classList.remove(removeClass);
        target.classList.add(addClass);
      });
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".animate-slide-in").forEach((el) => {
  observer.observe(el);
});
const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const highlightMenu = () => {
  const el = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const about = document.querySelector("#about-page");
  const services = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 700) {
    homeMenu.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1500) {
    about.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    services.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    services.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  }

  if ((el && window.innerWidth < 960 && scrollPos < 600) || el) {
    el.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const hideMobileMenu = () => {
  const menu = document.querySelector(".is-active");
  if (window.innerWidth <= 933 && menu) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

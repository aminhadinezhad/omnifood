const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");

navList.addEventListener("click", function (e) {
  //   e.preventDefault();

  const clicked = e.target.closest(".nav-link");
  if (!clicked) return;

  //   const id = clicked.getAttribute("href");
  //   const currentSection = document.querySelector(id);
  //   if (currentSection) {
  //     currentSection.scrollIntoView({ behavior: "smooth" });
  //   }

  navLink.forEach((link) => link.classList.remove("active-link"));
  clicked.classList.add("active-link");
  menu.classList.add("close-nav");
  btnCloseMenu.style.display = "none";
  btnOpenMenu.style.display = "block";
});

const body = document.querySelector("html");
body.addEventListener("click", function (e) {
  if (!e.target.closest(".nav-link"))
    navLink.forEach((link) => link.classList.remove("active-link"));
});

// ---------------------

const sectionHero = document.querySelector(".section-hero");
const initialCoords = sectionHero.getBoundingClientRect();
const header = document.querySelector(".header");
const navHeight = header.getBoundingClientRect().height;

const obsCallBack = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
};
const obsOptions = {
  root: null, // viewport ملاک ناظر ورود عنصر به پنجره
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(sectionHero);

// ---------------------

const btnOpenMenu = document.querySelector('ion-icon[name="menu-outline"]');
const btnCloseMenu = document.querySelector('ion-icon[name="close-outline"]');
const menu = document.querySelector(".header-nav");
const overlay = document.querySelector(".overlay");

btnOpenMenu.addEventListener("click", function (e) {
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
  menu.classList.add("open-nav");
  menu.classList.remove("close-nav");
});

btnCloseMenu.addEventListener("click", function (e) {
  btnOpenMenu.style.display = "block";
  btnCloseMenu.style.display = "none";
  menu.classList.add("close-nav");
  menu.classList.remove("open-nav");
});

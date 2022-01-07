window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

const menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
menu.addEventListener("click", () => {
  container.classList.toggle("change");
});

const scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

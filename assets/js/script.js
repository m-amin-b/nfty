let bar = document.querySelector(".bars");
let navbar = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");

bar.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    navbar.classList.add("active");
    overlay.classList.add("active");
  }
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

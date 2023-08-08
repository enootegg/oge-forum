// Smooth scrolling when clicking an anchor link

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Disable scroll when burger menu is open

let checkbox = document.querySelector('input[name="burger"]');

checkbox.addEventListener("change", function () {
  document.querySelector("body").style.overflow = this.checked
    ? "hidden"
    : "inherit";
});

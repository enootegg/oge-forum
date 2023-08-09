// Disable scroll when burger menu is open

let checkbox = document.querySelector('input[name="burger"]');

checkbox.addEventListener("change", function () {
  console.log("aaa");
  document.querySelector("body").style.overflow = this.checked
    ? "hidden"
    : "inherit";
});

// Header scroll

let className = "dark";
let scrollTrigger = 100;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("mainHeader").classList.add(className);
  } else {
    document.getElementById("mainHeader").classList.remove(className);
  }
};

// Close menu when we click on the link

document.querySelectorAll(".menu-ul a").forEach((el) => {
  el.addEventListener("click", () => {
    checkbox.checked = false;
    document.querySelector("body").style.overflow = "inherit";
  });
});

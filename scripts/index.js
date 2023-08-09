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

//Open order popup

document.getElementById("orderHryvnia").addEventListener("click", () => {
  document.getElementById("modalHryvnia").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
});

document.getElementById("orderEuro").addEventListener("click", () => {
  document.getElementById("modalEuro").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
});

//Close order popup

document.querySelectorAll(".modalClose").forEach((e) => {
  e.addEventListener("click", () => closeModal());
});

document.querySelectorAll(".modal").forEach((el) => {
  el.addEventListener("click", () => closeModal());
});

// when we click on .modalContainer, popup doesn`t close
document
  .querySelector(".modalContainer")
  .addEventListener("click", (e) => e.stopPropagation());

document
  .querySelector(".euroContainer")
  .addEventListener("click", (e) => e.stopPropagation());

// Close modal function

const closeModal = () => {
  document.querySelectorAll(".modal").forEach((el) => {
    el.style.display = "none";
    document.querySelector("body").style.overflow = "inherit";
  });
};

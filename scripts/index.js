// Disable scroll when burger menu is open

let checkbox = document.querySelector('input[name="burger"]');

checkbox.addEventListener("change", () => {
  document.querySelector("body").style.overflow = this.checked
    ? "hidden"
    : "inherit";
});

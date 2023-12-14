const toggle = document.getElementById("toggle");
const Changer = document.querySelectorAll(".changer");

toggle.addEventListener("click", () => {
  Changer.forEach((el) => {
    el.classList.toggle("change");
  });
});

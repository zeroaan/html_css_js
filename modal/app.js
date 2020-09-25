const modal = document.querySelector(".img__hover");
const modalbox = document.querySelector(".modal__box");
const box = document.querySelector(".modal");
const exitbt = document.querySelector(".exitbt");

modal.addEventListener("click", () => {
  modalbox.style.display = "block";
  box.style.display = "block";
});

exitbt.addEventListener("click", () => {
  modalbox.style.display = "none";
  box.style.display = "none";
});

modalbox.addEventListener("click", () => {
  modalbox.style.display = "none";
  box.style.display = "none";
});

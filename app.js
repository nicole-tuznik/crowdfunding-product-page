// Show nav in mobile

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("show-menu");
  document.body.classList.toggle("show-menu");
  if (nav.classList.contains("show-menu")) {
    hamburger.src = "images/icon-close-menu.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
});

// Modals - pledge modal

let rewardBtns = document.querySelectorAll(".reward__btn");
const closeBtn = document.querySelector(".selection-modal__close");
const selectionModal = document.querySelector(".selection-modal");

rewardBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    selectionModal.classList.toggle("closed");
  });
});

closeBtn.addEventListener("click", function () {
  selectionModal.classList.add("closed");
});

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

// Modals - show and hide pledge modal

let rewardBtns = document.querySelectorAll(".reward__btn");
const closeBtn = document.querySelector(".selection-modal__close");
const selectionModal = document.querySelector(".selection-modal");

rewardBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    selectionModal.classList.toggle("closed");
  });
});

closeBtn.addEventListener("click", function () {
  selectionModal.classList.toggle("closed");
});

// Create cyan outline on selected option
const radioInputs = document.querySelectorAll(".radio__input input");

radioInputs.forEach(function (input) {
  input.addEventListener("click", function (e) {
    for (i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) {
        radioInputs[i].closest(".modal-option").style.border =
          "2px solid hsl(176, 50%, 47%)";

        if (i !== 0) {
          radioInputs[i].closest(".modal-option").children[3].style.display =
            "flex";
        }
      } else {
        radioInputs[i].closest(".modal-option").style.border =
          "1px solid black";

        if (i !== 0) {
          radioInputs[i].closest(".modal-option").children[3].style.display =
            "none";
        }
      }
    }
  });
});

// Modals - show/hide success modal
const continueBtns = document.querySelectorAll(".selected-pledge__btn");
const successModal = document.querySelector(".success-modal");
const successModalClose = document.querySelector(".success-modal__btn");

continueBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    selectionModal.classList.toggle("closed");
    successModal.style.display = "flex";
  });
});

successModalClose.addEventListener("click", function () {
  successModal.style.display = "none";
});

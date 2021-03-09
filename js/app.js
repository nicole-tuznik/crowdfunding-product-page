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

let openModal = document.querySelectorAll(".reward__btn");
const closeBtn = document.querySelector(".selection-modal__close");
const selectionModal = document.querySelector(".selection-modal");

openModal.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    selectionModal.classList.toggle("closed");
  });
});

closeBtn.addEventListener("click", function () {
  selectionModal.classList.toggle("closed");
});

// Create cyan outline on selected option
const radioInputs = document.querySelectorAll(".radio__input input");

let selectedPledge = document.querySelectorAll(".selected-pledge");

// for (let i = 0; i < radioInputs.length; i++) {
//   radioInputs[i].addEventListener("click", function () {
//     let curClass = radioInputs[i].classList;
//     if (radioInputs[i].checked) {
//       radioInputs[i].closest(".modal-option").style.border =
//         "2px solid hsl(176, 50%, 47%)";
//       document.querySelector(`.selected-pledge.${curClass}`).style.display =
//         "flex";
//     } else {
//       radioInputs[i].closest(".modal-option").style.border = "1px solid black";
//       document.querySelector(`.selected-pledge.${curClass}`).style.display =
//         "none";
//     }
//   });
// }

// radioInputs.forEach(function (input) {
//   input.addEventListener("click", function (e) {
//     // for button i = 1..5

//     let curClass = input.classList;

//     for (let i = 0; i < radioInputs.length; i++) {
//       console.log(radioInputs[i]);

//       if (input.checked) {
//         input.closest(".modal-option").classList.add("selected");

//         input.closest(".modal-option").style.border =
//           "2px solid hsl(176, 50%, 47%)";

//         document.querySelector(`.selected-pledge.${curClass}`).style.display =
//           "flex";
//       } else if (!input.checked) {
//         input.closest(".modal-option").style.border = "1px solid black";
//         document.querySelector(`.selected-pledge.${curClass}`).style.display =
//           "none";

//         input.closest(".selected-pledge").style.display = "none";
//       }
//     }
//   });
// });

radioInputs.forEach(function (input) {
  input.addEventListener("click", function (e) {
    for (let i = 0; i < radioInputs.length; i++) {
      let curClass = radioInputs[i].classList;

      if (radioInputs[i].checked) {
        radioInputs[i].closest(".modal-option").style.border =
          "2px solid hsl(176, 50%, 47%)";

        document.querySelector(`.selected-pledge.${curClass}`).style.display =
          "flex";
      } else if (!radioInputs[i].checked) {
        radioInputs[i].closest(".modal-option").style.border =
          "1px solid black";
        document.querySelector(`.selected-pledge.${curClass}`).style.display =
          "none";
      }
    }
  });
});

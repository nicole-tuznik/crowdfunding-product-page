let amtRaised = document.querySelector(".backed__amt-raised span");
let totalBackers = document.querySelector(".backed__total-backers span");
let progressBar = document.querySelector(".backed__progress-completed");

let newPledgeInput = document.querySelectorAll(".selected-pledge__amt");

// Modals - show/hide success modal
const continueBtns = document.querySelectorAll(".selected-pledge__btn");
const successModal = document.querySelector(".success-modal");
const successModalClose = document.querySelector(".success-modal__btn");

let currentAmtRaised = 89914;
let currentBackers = 5007;
let progress;

continueBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    selectionModal.classList.toggle("closed");
    successModal.style.display = "flex";
  });
});

successModalClose.addEventListener("click", function () {
  successModal.style.display = "none";

  currentAmtRaised = currentAmtRaised + parseInt(newPledgeInput.value);
  amtRaised.innerHTML = `$${currentAmtRaised.toLocaleString()}`;

  currentBackers++;
  totalBackers.innerHTML = currentBackers.toLocaleString();

  progress = Math.floor((currentAmtRaised / 100000) * 100);
  progressBar.style.width = `${progress}%`;

  newPledgeInput = "";
});

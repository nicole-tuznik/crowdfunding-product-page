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

// Bookmark button
const bookmarkBtn = document.querySelector(".hero__bookmark-btn");
const bookmarkText = document.querySelector(".hero__bookmark-txt");

bookmarkBtn.addEventListener("click", function () {
  // Toggle Bookmark/Bookmarked text
  bookmarkBtn.classList.toggle("bookmarked");

  if (bookmarkText.innerHTML === "Bookmark") {
    bookmarkText.innerHTML = "Bookmarked";
  } else {
    bookmarkText.innerHTML = "Bookmark";
  }
});

// Modals - show and hide pledge modal

let openModal = document.querySelectorAll(".reward__btn");
const closeBtn = document.querySelector(".selection-modal__close");
const selectionModal = document.querySelector(".selection-modal");

openModal.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let curData = e.target.dataset.pledge;

    for (i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].classList.contains(curData)) {
        radioInputs[i].checked = true;
        createCyanBackground();
      }
    }

    selectionModal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", function () {
  selectionModal.style.display = "none";
});

// Create cyan outline on selected option
const radioInputs = document.querySelectorAll(".radio__input input");

radioInputs.forEach(function (input) {
  input.addEventListener("click", function (i) {
    createCyanBackground(i);
  });
});

function createCyanBackground(i) {
  for (let i = 0; i < radioInputs.length; i++) {
    let curClass = radioInputs[i].classList;
    if (radioInputs[i].checked) {
      radioInputs[i].closest(".modal-option").style.border =
        "2px solid hsl(176, 50%, 47%)";

      document.querySelector(`.selected-pledge.${curClass}`).style.display =
        "flex";
    } else if (!radioInputs[i].checked) {
      radioInputs[i].closest(".modal-option").style.border = "1px solid black";
      document.querySelector(`.selected-pledge.${curClass}`).style.display =
        "none";
    }
  }
}

// Modals - show/hide success modal
let amtRaised = document.querySelector(".backed__amt-raised span");
let totalBackers = document.querySelector(".backed__total-backers span");
let progressBar = document.querySelector(".backed__progress-completed");

let newPledgeInput = document.querySelectorAll(".selected-pledge__amt");

const continueBtns = document.querySelectorAll(".selected-pledge__btn");
const successModal = document.querySelector(".success-modal");
const successModalClose = document.querySelector(".success-modal__btn");

let rewardsRemaining = document.querySelectorAll(
  ".modal-option__remaining span"
);
let rewardsLeft = document.querySelectorAll(".reward__left span");

let currentAmtRaised = 89914;
let currentBackers = 5007;
let progress;

continueBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Close selection modal and option success modal
    selectionModal.style.display = "none";
    successModal.style.display = "flex";

    // Increase total backers
    currentBackers++;
    totalBackers.innerHTML = currentBackers.toLocaleString();

    // Uncheck radio buttons and clear checked styling
    clearRadios();
    createCyanBackground();

    // Only change amt backed and rewards left if a reward was selected
    if (btn.dataset.pledge !== "no-reward") {
      // Increase total $ backed
      let currentInput =
        parseInt(e.target.previousElementSibling.value) ||
        parseInt(e.target.previousElementSibling.min);

      currentAmtRaised = currentAmtRaised + currentInput;
      amtRaised.innerHTML = `$${currentAmtRaised.toLocaleString()}`;

      // Increase progress bar
      progress = Math.floor((currentAmtRaised / 100000) * 100);
      progressBar.style.width = `${progress}%`;

      // If rewards remaining, subtract 1 from remaining (both main page & modal)
      let curData = e.target.dataset.pledge;
      for (i = 0; i < rewardsRemaining.length; i++) {
        if (rewardsRemaining[i].dataset.pledge === curData) {
          let curRewardsRemaining = rewardsRemaining[i].innerHTML;
          curRewardsRemaining = parseInt(curRewardsRemaining);
          curRewardsRemaining--;
          rewardsRemaining[i].innerHTML = curRewardsRemaining;
          rewardsLeft[i].innerHTML = curRewardsRemaining;
        }
      }
    }
  });
});

successModalClose.addEventListener("click", function () {
  successModal.style.display = "none";
});

function clearRadios() {
  for (i = 0; i < radioInputs.length; i++) {
    radioInputs[i].checked = false;
  }
}

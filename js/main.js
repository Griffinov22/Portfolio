import * as helper from "./helpers/helpers.js";

const [caroLeft, caroRight] = document.querySelectorAll(".caro-btn");
const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = document.querySelectorAll(".caro-item");

const knowledgeItems = document.querySelectorAll(".flex-item");
const knowledgeSection = document.querySelector(".knowledge-section");

const contactForm = document.querySelector("#contact-form");
const [nameInput, emailInput, bodyInput] =
  contactForm.querySelectorAll("input, textarea");
const [nameValidation, emailValidation, bodyValidation] =
  contactForm.querySelectorAll(".validation");
let reCaptcha;

const hamburgerMenu = document.querySelector("#hamburger-menu");
const [burgTop, burgMid, burgBottom] =
  hamburgerMenu.querySelectorAll(".hamburger-row");
const navListOutside = document.querySelector("#nav-list-outside");
const outSideNavItems = navListOutside.querySelectorAll("li");

//hamburger menu is iniated when window width <= 700
hamburgerMenu.addEventListener("click", function (e) {
  //makes burger animation
  burgTop.classList.toggle("topRotate");
  burgMid.classList.toggle("midRotate");
  burgBottom.classList.toggle("bottomRotate");
  //toggles showing the dropdown navigator
  navListOutside.style.top =
    navListOutside.style.top === "" || navListOutside.style.top === "0px"
      ? "var(--nav-height)"
      : "0px";
});
outSideNavItems.forEach((el) => {
  el.addEventListener("click", function (e) {
    //if a dropdown element is clicked then, reset dropdown nav and hamburger menu
    el.parentElement.style.top = "0px";
    burgTop.classList.remove("topRotate");
    burgMid.classList.remove("midRotate");
    burgBottom.classList.remove("bottomRotate");
  });
});

let screenWidth;
let maxIndex;
let index = 0;

setMaxForCarousel();
window.addEventListener("resize", () => {
  setMaxForCarousel();
  index = helper.resetCarousel(index);
});
window.addEventListener("load", function () {
  reCaptcha = document.querySelector("#g-recaptcha-response");
  reCaptcha.setAttribute("required", "required");
});

function setMaxForCarousel() {
  screenWidth = window.innerWidth;
  if (screenWidth <= 850) {
    maxIndex = carouselItems.length - 1;
  } else if (screenWidth <= 1275) {
    maxIndex = carouselItems.length - 2;
  } else {
    maxIndex = carouselItems.length - 3;
  }
}

caroRight.addEventListener("click", function () {
  if (index < maxIndex) {
    index++;
    helper.setCaroArrowColor("left", "blue");
    helper.moveCarousel(index);

    if (index === maxIndex) {
      helper.setCaroArrowColor("right", "grey");
    }
  }
});
caroLeft.addEventListener("click", function () {
  if (index > 0) {
    index--;
    helper.setCaroArrowColor("right", "blue");
    helper.moveCarousel(index);

    if (index === 0) {
      helper.setCaroArrowColor("left", "grey");
    }
  } else if (index === 0) {
    helper.setCaroArrowColor("left", "grey");
  }
});

// knowledge section
knowledgeItems.forEach((el) => {
  el.addEventListener("click", function (e) {
    const dropbox = this.querySelector(".dropbox");
    dropbox.classList.toggle("open");

    if (dropbox.classList.contains("open")) {
      dropbox.style.maxHeight = `calc(${dropbox.scrollHeight}px + 1rem)`;
    } else {
      dropbox.style.maxHeight = `0px`;
    }
    //add margin to bottom of section based on which boxes are open
    if (window.innerWidth <= 1075) {
      const openBoxes = document.querySelectorAll(".open");
      if (openBoxes.length > 0) {
        let getAddedHeights = [];
        openBoxes.forEach((el) => {
          getAddedHeights.push(el.scrollHeight);
        });
        getAddedHeights = getAddedHeights.reduce((acc, curr) => (acc += curr));
        knowledgeSection.style.marginBottom = getAddedHeights + "px";
      } else {
        knowledgeSection.style.marginBottom = `0px`;
      }
    }
  });
});

//contact form
//emailJS provider

//ADD RECAPTCHA ONCE SITE IS LIVE ONLINE!!!!
(function () {
  emailjs.init("IDEku8iKh9-zHT9_l");
})();
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let errorFlag = false;

  if (nameInput.value.trim() == "") {
    nameValidation.textContent = "Name is required";
    errorFlag = true;
  } else {
    nameValidation.textContent = "";
  }

  const emailVal = emailInput.value.trim();
  if (
    !emailVal.match(
      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    )
  ) {
    emailValidation.textContent = "email is required";
    errorFlag = true;
  } else {
    emailValidation.textContent = "";
  }

  if (bodyInput.value.trim() == "") {
    bodyValidation.textContent = "body is required";
    errorFlag = true;
  } else {
    bodyValidation.textContent = "";
  }

  if (reCaptcha.val() === "") {
    reCaptcha.style.borderColor = "red";
    errorFlag = true;
  } else {
    reCaptcha.style.borderColor = "grey";
  }

  if (!errorFlag) {
    emailjs.sendForm("22service_id22", "22contact_form22", this);
    helper.resetAllForm();
    Popup(nameInput.value, true);
  }
});

function Popup(name) {
  //this popup currently is created on a successsful contact form submission
  let popup = document.createElement("div");
  popup.classList = "popup-style";
  popup.innerHTML = `<span style="font-weight: 700; display: block">
  Successful submission.
  </span> Thank you, ${name} for your response!`;

  document.body.appendChild(popup);
  //2500ms for the animation time
  setTimeout(() => {
    document.querySelector(".popup-style").remove();
  }, 2500);
}

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

const hamburgerMenu = document.querySelector("#hamburger-menu");
const [burgTop, burgMid, burgBottom] =
  hamburgerMenu.querySelectorAll(".hamburger-row");
const navListOutside = document.querySelector("#nav-list-outside");
const outSideNavItems = navListOutside.querySelectorAll("li");

export function moveCarousel(index) {
  carouselItems.forEach((el) => {
    el.style.transform = `translateX(-${375.5 * index}px)`;
  });
}

export function resetCarousel(index) {
  //resets carousel on resize to prevent cycling button breaking
  index = 0;
  carouselItems.forEach((el) => {
    el.style.transform = `translateX(-${375.5 * index}px)`;
  });
  setCaroArrowColor("left", "blue");
  setCaroArrowColor("right", "blue");
  return index;
}

export function setCaroArrowColor(arrowStr, colorStr) {
  //sets carousel border and arrow to color specified
  let arrow;
  let color;
  switch (arrowStr) {
    case "left":
      arrow = caroLeft;
      break;
    case "right":
      arrow = caroRight;
      break;
    default:
      console.log("Incorrect arrow declaration");
  }
  switch (colorStr) {
    case "grey":
      color = "darkgrey";
      break;
    case "blue":
      color = "var(--secondary)";
      break;
    default:
      console.log("Incorrect color declaration");
  }
  arrow.style.borderColor = color;
  arrow.children[0].style.fill = color;
}

export const resetAllForm = () => {
  nameValidation.textContent = "";
  emailValidation.textContent = "";
  bodyValidation.textContent = "";
  contactForm.reset();
};

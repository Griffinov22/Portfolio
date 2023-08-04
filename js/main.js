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

let screenWidth;
let maxIndex;
//resets the max viewable items in carosel
setMinMaxForCarousel();
window.addEventListener("resize", () => {
  setMinMaxForCarousel();
});

let index = 0;

caroRight.addEventListener("click", function () {
  if (index < maxIndex) {
    index++;
    caroLeft.style.borderColor = "var(--secondary)";
    caroLeft.children[0].style.fill = "var(--secondary)";

    carouselItems.forEach((el) => {
      el.style.transform = `translateX(-${375.5 * index}px)`;
    });
    if (index === maxIndex) {
      caroRight.style.borderColor = "darkgrey";
      caroRight.children[0].style.fill = "darkgrey";
    }
  }
});
caroLeft.addEventListener("click", function () {
  if (index > 0) {
    index--;
    caroRight.style.borderColor = "var(--secondary)";
    caroRight.children[0].style.fill = "var(--secondary)";

    carouselItems.forEach((el) => {
      el.style.transform = `translateX(-${375.5 * index}px)`;
    });
    if (index === 0) {
      caroLeft.style.borderColor = "darkgrey";
      caroLeft.children[0].style.fill = "darkgrey";
    }
  }
});

function setMinMaxForCarousel() {
  screenWidth = window.innerWidth;
  if (screenWidth <= 850) {
    maxIndex = carouselItems.length - 1;
  } else if (screenWidth <= 1275) {
    maxIndex = carouselItems.length - 2;
  } else {
    maxIndex = carouselItems.length - 3;
  }
}

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
        console.log(getAddedHeights);
        getAddedHeights = getAddedHeights.reduce((acc, curr) => (acc += curr));
        console.log(getAddedHeights);
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
    emailValidation.textContent = "Proper email format is required";
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

  if (!errorFlag) {
    emailjs.sendForm("22service_id22", "22contact_form22", this);
    alert("message was successfully sent");
    resetAllForm();
  } else {
    alert("the message was denied");
  }
});

const resetAllForm = () => {
  nameValidation.textContent = "";
  emailValidation.textContent = "";
  bodyValidation.textContent = "";
  contactForm.reset();
};

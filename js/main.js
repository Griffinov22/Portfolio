const [caroLeft, caroRight] = document.querySelectorAll(".caro-btn");
const carouselContainer = document.querySelector(".carousel-container");
const carouselItems = document.querySelectorAll(".caro-item");

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

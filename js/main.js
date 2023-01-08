import "../assets/css/style.scss";
import slider from "./module/slider.js";
import discount from "./module/discount.js";

const sliderInput = document.getElementById("slider");
const price = document.querySelectorAll(".priceN");
const switchF = document.getElementById("switch");

slider(sliderInput, price);

sliderInput.addEventListener("change", (e) => {
  slider(sliderInput, price);
});

switchF.addEventListener("click", () => {
  const inputSwicth = document.getElementById("inputS");
  switchF.classList.toggle("circle__active");
  if (inputSwicth.value == 1) {
    inputSwicth.value = 0;
    discount(sliderInput, price, 0);
  } else {
    inputSwicth.value = 1;
    discount(sliderInput, price, 1);
  }
});

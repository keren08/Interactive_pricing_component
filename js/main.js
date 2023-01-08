import "../assets/css/style.scss";
import slider from "./module/slider.js";

const sliderInput = document.getElementById("slider");
const price = document.querySelectorAll(".priceN");

slider(sliderInput, price);

sliderInput.addEventListener("change", (e) => {
  slider(sliderInput, price);
});

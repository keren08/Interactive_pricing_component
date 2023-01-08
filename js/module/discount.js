function discount(sliderInput, price, value) {
  if (value == 1) {
    let newTotal = sliderInput.value - sliderInput.value * 0.25;
    price.forEach((element) => {
      element.textContent = newTotal.toFixed(2);
    });
  } else {
    let newTotal = sliderInput.value;
    price.forEach((element) => {
      element.textContent = newTotal + ".00";
    });
  }
}

export default discount;

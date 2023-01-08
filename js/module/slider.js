function slider(element, price) {
  let x = element.value;
  let color = `linear-gradient(
        83deg,
        hsl(174, 77%, 80%) ${x}%,
        hsl(224, 65%, 95%) ${x}%
      )`;
  element.style.background = color;

  price.forEach((element) => {
    element.textContent = x + ".00";
  });
}

export default slider;

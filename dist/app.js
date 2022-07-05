const button = document.querySelector("button");

const calc = (originalPrice, hasDiscount) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

button.addEventListener("click", () => {
  const originalPrice = 50;
  const hasDiscount = new URLSearchParams(window.location.search).get(
    "discount"
  );
  console.log(calc(originalPrice, hasDiscount));
});

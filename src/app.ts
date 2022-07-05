const button = document.querySelector("button");

const calc = (originalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

button.addEventListener("click", () => {
  const originalPrice: number = 50;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get("discount") === "true";
  console.log(calc(originalPrice, hasDiscount));
});

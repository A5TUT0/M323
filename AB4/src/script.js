let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}
// Quellen: https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici

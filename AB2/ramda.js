const R = require("ramda");

const OS = ["Ubuntu Linux", "MacOS", "Microsoft"];

const addText = R.curry((greeting, after, name) => {
  return `${greeting} ${name} ${after}`;
});

const bestText = addText("The Best OS is")("What do you think?");
console.log(OS.map(bestText));

let arrayLength = 0;

const arr = [1, 2, 3, 4, 5];
// Impure
function arraylarge(arr) {
  arraylarge = arr.length;
  return arraylarge;
}

console.log(arraylarge(arr));
console.log(arrayLength);

// Pure
function arraylargePure(arr) {
  return arr.length;
}

console.log(arraylargePure(arr));

const R = require("ramda");
const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

const countNumeric = R.compose(
  R.length,
  R.filter((char) => !isNaN(char) && char !== " "),
  R.split
);

console.log(countNumeric("", sentence));
// Quellen https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

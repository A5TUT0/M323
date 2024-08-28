/*
function RandomNumber(MATH) {
  var MATH = Math.random();
  if (MATH > 0.5) {
    return "Grösser als 0.5";
  } else if (MATH > 0.25) {
    return "Grösser als 0.25";
  } else {
    return "Grösser kleiner oder gleich 0.25";
  }
}
console.log(RandomNumber());
*/

function RandomNumber(MATH) {
  var MATH = Math.floor(Math.random() * 5);
  if (MATH === 1) {
    return "Der Wert der Zahl ist exakt 1";
  } else if (MATH === 3) {
    return "Der Wert der Zahl ist exakt 3";
  } else;
  {
    return "Der Wert der Zahl ist weder 1 noch 3";
  }
}
console.log(RandomNumber());

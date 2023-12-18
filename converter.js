// variable to define celsius and fahernite
const celsius = document.querySelector("#Celsius");
const Fahrenhite = document.querySelector("#Fahrenhite");

// console.log(celsius, Fahrenhite);

// focus celsius input felid when page loads
window.addEventListener("load", () => celsius.focus());

// convert celsius to faherenhite when celsius value change
celsius.addEventListener("input", () => {
  Fahrenhite.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
});

// clear faherenhite input when celsiusinput is empty

// convert faherenhite to celsius when celsius value change
Fahrenhite.addEventListener("input", () => {
  celsius.value = (((Fahrenhite.value - 32) * 5) / 9).toFixed(2);
});

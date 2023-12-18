// variable to define celsius and fahernite
const celsius = document.querySelector("#Celsius");
const Fahrenhite = document.querySelector("#Fahrenhite");

// console.log(celsius, Fahrenhite);

// focus celsius input felid when page loads
window.addEventListener("load", () => celsius.focus());

// convert celsius to faherenhite when celsius value change
celsius.addEventListener("input", () => {
  Fahrenhite.value = ((celsius.value * 9) / 5 + 32).toFixed(2);

  // clear faherenhite input when celsiusinput is empty

  if (!celsius.value) Fahrenhite.value = "";
});

// convert faherenhite to celsius when faherenhite value change
Fahrenhite.addEventListener("input", () => {
  celsius.value = (((Fahrenhite.value - 32) * 5) / 9).toFixed(2);

  // clear faherenhite input when celsiusinput is empty

  if (!Fahrenhite.value) celsius.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  const switchIcon = document.getElementById("switchIcon");
  const celsiusInputBox = document.getElementById("celsiusInputBox");
  const fahrenheitInputBox = document.getElementById("fahrenheitInputBox");

  switchIcon.addEventListener("click", function () {
    // Store the innerHTML content before switching
    const tempCelsiusInput = celsiusInputBox.innerHTML;
    const tempFahrenheitInput = fahrenheitInputBox.innerHTML;

    // Switch the content between the divs
    celsiusInputBox.innerHTML = tempFahrenheitInput;
    fahrenheitInputBox.innerHTML = tempCelsiusInput;
  });
});

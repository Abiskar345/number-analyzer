// Starting

const getInput = document.getElementById("number-Input");
const getButton = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

getButton.addEventListener("click", () => {
  //Assigning getInput with .value
  const num = Number(getInput.value);

  if (num === 0) {
    result.textContent = "Number is zero and even";
  } else if (num > 0 && num % 2 === 0) {
    result.textContent = "Number is Postive and Even";
  } else if (num > 0 && num % 2 !== 0) {
    result.textContent = "Number is Positive and Odd";
  } else if (num < 0 && num % 2 === 0) {
    result.textContent = "Number is Negative and Even";
  } else if (num < 0 && num % 2 !== 0) {
    result.textContent = "Number is Negative and Odd";
  }
});

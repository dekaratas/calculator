const oneBtn = document.querySelector("#one");
const textCont = document.querySelector("#text");

// Function declaration for the mathmatical operations
function add(a,b ) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}



oneBtn.addEventListener("click", () => {
  textCont.textContent = "1";
});
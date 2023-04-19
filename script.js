const numBtn = document.querySelectorAll(".numPad");
let textCont = document.querySelector("#text");

numBtn.forEach(button => {
  button.addEventListener("click", event => {
    textCont.textContent += `${button.textContent}`;
    console.log("Button CLICK");
    console.log(`${button.textContent}`);
  });
});


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


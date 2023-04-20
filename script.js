// Global Query Selectors
const numBtn = document.querySelectorAll(".numPad");
let textCont = document.querySelector("#text");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const multBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");
const eqBtn = document.querySelector("#equal");
const canBtn = document.querySelector("#cancel");

let a = 0;
let op = "";
let b = 0;


// Adjust content of display on each button press
// Concatenates button's text content to display text
numBtn.forEach(button => {
  button.addEventListener("click", event => {
    if (button.textContent != "C" && button.textContent != "=") {
    textCont.textContent += `${button.textContent}`;}
  });
});

addBtn.addEventListener("click", () =>  {
  a = parseInt(text.textContent);
  op = "+";
  textCont.textContent = "";
});

eqBtn.addEventListener("click", () => {
  b = parseInt(text.textContent);
  switch(op) {
    case "+":
      textCont.textContent = a+b;
      break;
  }
});



// Function declaration for the mathmatical operations
function add(a,b ) {
  return a+b;
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


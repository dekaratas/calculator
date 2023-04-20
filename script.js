// Global Query Selectors
const numBtn = document.querySelectorAll(".numPad");
const opBtn = document.querySelectorAll(".operatorPad");
let textCont = document.querySelector("#text");
let smTextCont = document.querySelector("#smallerText");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract");
const multBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");
const eqBtn = document.querySelector("#equal");
const canBtn = document.querySelector("#cancel");

let a = 0;
let b = 0;
let op = "";
let displayNum = 0;

// Adjust content of display on each button press
// Concatenates button's text content to display text
// Keeps saving the current Display's value to a variable
numBtn.forEach(button => {
  button.addEventListener("click", event => {
    if (button.textContent != "C" && button.textContent != "=") {
//  if (op != "") {textCont.textContent = "";};
    textCont.textContent += `${button.textContent}`;}
    displayNum = parseInt(textCont.textContent);
  });
});

// Stores current display's number in variable "a"
// Stores chosen operator in variable "op"
opBtn.forEach(button => {
  button.addEventListener("click", event => {
    a = displayNum;
    op = button.textContent;
    // Clear when operator is clicked
    smTextCont.textContent += a + " " + op + " ";
    textCont.textContent = "";
  });
});

eqBtn.addEventListener("click", () => {
  if (op == "/" && displayNum == 0) {
    textCont.textContent = "Redditor moment!";
  } else {
  b = displayNum;
  smTextCont.textContent += b + " ";
  textCont.textContent = operate(a, b, op);

  
  displayNum = parseInt(textCont.textContent);
  smTextCont.textContent += "= " + displayNum + " | ";  
  
  // Result becomes the new a
  a=displayNum;
}
})

canBtn.addEventListener("click", () => {
  a = 0;
  b = 0;
  textCont.textContent = "";
  smTextCont.textContent = "";
  op = "";
})

// Function declaration for the mathmatical operations
function add(a, b) {
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

function operate(a, b, op) {
  switch(op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "X":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "Ya broke it!";
  }

}

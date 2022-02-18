const calcOutput = document.getElementById("output_value");
const numberButtons = document.getElementsByClassName("button__number");
const operatorButtons = document.getElementsByClassName("operator__button");
const clear = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const plusButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const plusMinus = document.getElementById("plus-minus");
const percentageButton = document.getElementById("percentage");
const deleteButton = document.getElementById("delete");

let calcNumber;
let calcOperator;
let displayValue = [];
let num1;
let num2;

// push numbers into an array and turn array into number values on the display
const onNumberButtonClick = (event) => {
  calcNumber = event.target.innerText;
  console.log(`The number is ${calcNumber}`);
  displayValue.push(calcNumber);
  console.log(displayValue);
  calcOutput.value = displayValue.join("");
};

// getting the display output to display the same value as the buttons clicked
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", onNumberButtonClick);
}

console.log(displayValue);

// clear the numbers array with clear button
const onClearClick = (event) => {
  const calcClear = event.target.innerText;
  console.log(`You are trying to Clear ${calcClear}`);
  calcOutput.value = "0";
  displayValue = [];
};

clear.addEventListener("click", onClearClick);

// using operator buttons to combine numbers in the array and convert them into number values
// make the operator show on the display screen

const onPlusButtonClick = (event) => {
  num1 = parseFloat(calcOutput.value);
  displayValue = [];
  calcOperator = "+";
  console.log(num1);
  console.log("PLUS");
  calcOutput.value = "+";
};

plusButton.addEventListener("click", onPlusButtonClick);

const onSubtractButtonClick = (event) => {
  num1 = parseFloat(calcOutput.value);
  displayValue = [];
  calcOperator = "-";
  console.log(num1);
  console.log("SUBTRACT");
  calcOutput.value = "-";
};

subtractButton.addEventListener("click", onSubtractButtonClick);

const onMultiplyButtonClick = (event) => {
  num1 = parseFloat(calcOutput.value);
  displayValue = [];
  calcOperator = "x";
  console.log(num1);
  console.log("MULTIPLY");
  calcOutput.value = "x";
};

multiplyButton.addEventListener("click", onMultiplyButtonClick);

const onDivideButtonClick = (event) => {
  num1 = parseFloat(calcOutput.value);
  displayValue = [];
  calcOperator = "÷";
  console.log(num1);
  console.log("DIVIDE");
  calcOutput.value = "÷";
};

divideButton.addEventListener("click", onDivideButtonClick);

// using equals button to convert the second half of equation/array into a value in order to perform calculation
const onEqualsButtonClick = (event) => {
  console.log("calculating");
  num2 = parseFloat(calcOutput.value);
  console.log(num2);
  console.log(num1);
  console.log(calcOperator);

  //determining what operation to use depending on which operator button is pressed
  if (calcOperator == "+") {
    result = num1 + num2;
  } else if (calcOperator == "-") {
    result = num1 - num2;
  } else if (calcOperator == "x") {
    result = num1 * num2;
  } else if (calcOperator == "÷") {
    result = num1 / num2;
  } else if (calcOperator == "%") {
    result = num1 * num2;
  }
  calcOutput.value = result;
  console.log("the result is " + result);
  displayValue = [];
  console.log(displayValue);
};

equalsButton.addEventListener("click", onEqualsButtonClick);

// using pop() to remove last item from the array and the display screen
const onDeleteButtonClick = (event) => {
  console.log("DELETE");
  displayValue.pop();
  console.log(displayValue);
  calcOutput.value = displayValue.join("");
};

deleteButton.addEventListener("click", onDeleteButtonClick);

// convert a number into a percentage
const onPercentageButtonClick = (event) => {
  console.log("Percentage");
  calcOperator = "%";
  num1 = parseFloat(calcOutput.value) / 100;
  calcOutput.value = num1;
  displayValue = [];
  console.log(num1);
  console.log(displayValue);
};

percentageButton.addEventListener("click", onPercentageButtonClick);

// convert number into a negative or positive value via the plusminus button
const onplusMinusButtonClick = (event) => {
  console.log("Plus Minus!");
  num1 = parseFloat(calcOutput.value) * -1;
  calcOutput.value = num1;
  displayValue = [];
  console.log(num1);
  console.log(displayValue);
};

plusMinus.addEventListener("click", onplusMinusButtonClick);

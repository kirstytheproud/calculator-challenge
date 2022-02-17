const calcOutput = document.getElementById("output_value");
const numberButtons = document.getElementsByClassName("button__number");
const operatorButtons= document.getElementsByClassName("operator__button");
const clear = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const plusButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const plusMinus = document.getElementById("plus-minus");
const percentage = document.getElementById("percentage");

let calcNumber;
let calcOperator;
let displayValue = [];
let num1;
let num2;
let answer;

const onClearClick = (event) => {
    const calcClear = event.target.innerText;
    console.log(`You are trying to Clear ${calcClear}`);
    calcOutput.value = " ";
    displayValue = [];
 
}

clear.addEventListener("click", onClearClick);

const onNumberButtonClick = (event) => {
    calcNumber = event.target.innerText;
    console.log(`The number is ${calcNumber}`);
    //  calcOutput.value = calcNumber;
    displayValue.push(calcNumber);
    console.log(displayValue);
    calcOutput.value = displayValue.join('');
 
}



for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", onNumberButtonClick);
  
}

console.log(displayValue);



const onPlusButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  //displayValue.push(num1);
  // let num2 = num1
  calcOperator = "+"
  console.log(num1);
 
}

plusButton.addEventListener("click", onPlusButtonClick);


const onSubtractButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  //displayValue.push(num1);
  // let num2 = num1
  calcOperator = "-"
  console.log(num1);
 
}

subtractButton.addEventListener("click", onSubtractButtonClick);


const onMultiplyButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  //displayValue.push(num1);
  // let num2 = num1
  calcOperator = "x"
  console.log(num1);
 
}

multiplyButton.addEventListener("click", onMultiplyButtonClick);

const onDivideButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  //displayValue.push(num1);
  // let num2 = num1
  calcOperator = "÷"
  console.log(num1);
 
}

divideButton.addEventListener("click", onDivideButtonClick);



// //this code lets all operators and numbers appear on the same display
// for (let i = 0; i < operatorButtons.length; i++) {
//   // operatorButtons[i].addEventListener("click", onNumberButtonClick)
//   // operatorButtons[i].addEventListener("click", onOperatorButtonClick);
// }




const onEqualsButtonClick = (event) => {
  console.log("calculating")
  num2 = parseFloat(calcOutput.value);
  console.log(num2);
  console.log(num1)
  console.log(calcOperator)
  if (calcOperator == "+") {
    result = num1 + num2;
  }
  else if (calcOperator =='-') {
      result = num1 - num2;
  }
  else if (calcOperator =="x") {
      result = num1 * num2;
  }
  else if (calcOperator =='÷'){
      result = num1 / num2;
}
calcOutput.value = result; 
console.log("the result is " + result)

}

equalsButton.addEventListener("click", onEqualsButtonClick);



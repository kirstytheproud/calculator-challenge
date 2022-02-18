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
const percentageButton = document.getElementById("percentage");
const deleteButton = document.getElementById("delete");

let calcNumber;
let calcOperator;
let displayValue = [];
let num1;
let num2;

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
  calcOperator = "+"
  console.log(num1);
  console.log("PLUS")
  calcOutput.value = "+"
 
}

plusButton.addEventListener("click", onPlusButtonClick);


const onSubtractButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  calcOperator = "-"
  console.log(num1);
  console.log("SUBTRACT")
  calcOutput.value = "-"
 
}

subtractButton.addEventListener("click", onSubtractButtonClick);


const onMultiplyButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  calcOperator = "x"
  console.log(num1);
  console.log("MULTIPLY")
  calcOutput.value = "x"
 
}

multiplyButton.addEventListener("click", onMultiplyButtonClick);

const onDivideButtonClick = (event) => {

  num1 = parseFloat(calcOutput.value);
  displayValue=[];
  calcOperator = "÷"
  console.log(num1);
  console.log("DIVIDE")
  calcOutput.value = "÷"
 
}

divideButton.addEventListener("click", onDivideButtonClick);


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
    else if (calcOperator =='%'){
  
        result = num1* num2;
  }
calcOutput.value = result; 
console.log("the result is " + result)
displayValue = [];
console.log(displayValue);
}

equalsButton.addEventListener("click", onEqualsButtonClick);


const onDeleteButtonClick = (event) => {
  console.log("DELETE");
  displayValue.pop();
  console.log(displayValue);
  calcOutput.value = displayValue.join('');

}

deleteButton.addEventListener("click", onDeleteButtonClick);

const onPercentageButtonClick = (event) => {
  console.log("Percentage")
  calcOperator ="%";
  num1 = parseFloat(calcOutput.value)/100;
  calcOutput.value = num1;
  displayValue=[];
  console.log(num1);
  console.log(displayValue);

}

percentageButton.addEventListener("click", onPercentageButtonClick);

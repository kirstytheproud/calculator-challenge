const calcOutput = document.getElementById("output_value");
const numberButtons = document.getElementsByClassName("button__number");
const operatorButtons= document.getElementsByClassName("operator__button");

// const plusMinus = document.getElementById("plus-minus");
// const percentage = document.getElementById("percentage");

let calcNumber;
let calcOperator;
let displayValue = [];

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
    // newValue= parseInt(displayValue);
    calcOutput.value = displayValue.join('');
    
}



for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", onNumberButtonClick);
  
}

console.log(displayValue);



const onOperatorButtonClick = (event) => {
    calcOperator = event.target.innerText;
   console.log(`The operator is ${calcOperator}`);
   calcOutput.value = `${calcOperator}`;
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", onNumberButtonClick);
}

// const calculator = {
//   displayValue: '0',
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };


function updateDisplay() {
  const display = document.querySelector('.calculator__output');
  const screenOutput = [];



}

updateDisplay();

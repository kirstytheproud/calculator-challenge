const calcOutput = document.getElementById("output_value");
const numberButtons = document.getElementsByClassName("button__number");
const operatorButtons= document.getElementsByClassName("operator__button");

// const plusMinus = document.getElementById("plus-minus");
// const percentage = document.getElementById("percentage");

const onClearClick = (event) => {
    const calcClear = event.target.innerText;
    console.log(`You are trying to Clear ${calcClear}`);
    calcOutput.value = " ";
 
}


clear.addEventListener("click", onClearClick);

let calcNumber;
let calcOperator;

const onNumberButtonClick = (event) => {
    calcNumber = event.target.innerText;
   console.log(`The number is ${calcNumber}`);
   calcOutput.value = calcNumber;
}

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", onNumberButtonClick);
}

const onOperatorButtonClick = (event) => {
    calcOperator = event.target.innerText;
   console.log(`The operator is ${calcOperator}`);
   calcOutput.value = `${calcOperator}`;
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", onNumberButtonClick);
}



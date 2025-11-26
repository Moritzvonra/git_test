// Input Variables //

const numbers = document.querySelectorAll(".number") 
const operators = document.querySelectorAll(".operator")
const equalButton = document.querySelector("#equalButton")
const clearButton = document.querySelector("#clearButton")
const deleteButton = document.querySelector("#deleteButton")
const display = document.querySelector(".currentCalculation")
const displayCalculationLogic = document.querySelector(".calculationLogic")

let numberOne = "";
let numberTwo = "";
let currentOperator = "";
let secondOperator = "";



let currentFirstNumber = "";
let currentSecondNumber = "";
let calculations = [];
let enteringSecondNumber = false;
let enteringSecondOperator = false;


// Input Storing Functions //

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (!enteringSecondNumber && currentFirstNumber === "") {       
        currentFirstNumber += number.textContent;
        display.textContent +=number.textContent;
    }
    else if (enteringSecondNumber === true) {
        currentSecondNumber += number.textContent;
        display.textContent += " " + currentSecondNumber;
    }
    else {
        currentFirstNumber = number.textContent;
        display.textContent = number.textContent;
    };
});
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (currentFirstNumber === "") return;
        if (!enteringSecondNumber) {
             enteringSecondNumber = true;
             currentOperator = operator.textContent;
            enteringSecondOperator = true;
            display.textContent += " " + currentOperator;
             return;}
            // if operator is pushed a second time before an equal is pushed  we want to run the calculation first //
        if (enteringSecondNumber === true && enteringSecondOperator === true && currentSecondNumber !== "") {
                const numberOne= Number(currentFirstNumber);
                const numberTwo = Number(currentSecondNumber);

                calculations.push([numberOne, currentOperator, numberTwo]);     

                console.log (calculations);


                function operate () {
                    const lastOperator = calculations[calculations.length -1][1];

                    if (lastOperator === "+") return add(numberOne, numberTwo);
                    else if (lastOperator === "-") return substract(numberOne, numberTwo);
                    else if (lastOperator === "x") return multiply(numberOne, numberTwo);
                    else if (lastOperator === "/") return divide(numberOne, numberTwo);
                };


            // Calculator Functions //

                    function add (numberOne, numberTwo) {
                        return numberOne + numberTwo;
                    };

                    function substract (numberOne, numberTwo) {
                        return numberOne - numberTwo;
                    };

                    function multiply (numberOne, numberTwo) {
                        return numberOne * numberTwo;
                    };

                    function divide (numberOne, numberTwo) {
                        return numberOne / numberTwo;
                    };

                secondOperator = operator.textContent;
                display.textContent = operate () + " " + secondOperator;
                let textDisplayLogic = calculations[calculations.length - 1][0] + " " + calculations[calculations.length - 1][1] + " " + calculations[calculations.length - 1][2];
                displayCalculationLogic.textContent = textDisplayLogic;
                calculations.push([operate(),secondOperator,]);
                

                currentFirstNumber = operate ();
                console.log(currentFirstNumber);
                currentSecondNumber = ""; 
                currentOperator = "";
                enteringSecondOperator = false;
            }
    })
});

// Equation button push kicks off calculation //

equalButton.addEventListener("click", () => {
    if (currentSecondNumber === "") return;

    // if operator was pushed a second time and now the equal is pushed, we need to adjust the already existing second array //
    if (currentOperator === "" && secondOperator !== "") {
       
        const numberOne = Number(calculations[calculations.length -1][0])
        const numberTwo = Number(currentSecondNumber);

        calculations[calculations.length - 1][2]= numberTwo;

        console.log (calculations);

        function operate () {
            const lastOperator = calculations[calculations.length -1][1];

            if (lastOperator === "+") return add(numberOne, numberTwo);
            else if (lastOperator === "-") return substract(numberOne, numberTwo);
            else if (lastOperator === "x") return multiply(numberOne, numberTwo);
            else if (lastOperator === "/") return divide(numberOne, numberTwo);
        };


            // Calculator Functions //

            function add (numberOne, numberTwo) {
                return numberOne + numberTwo;
            };

            function substract (numberOne, numberTwo) {
                return numberOne - numberTwo;
            };

            function multiply (numberOne, numberTwo) {
                return numberOne * numberTwo;
            };

            function divide (numberOne, numberTwo) {
                return numberOne / numberTwo;
            };


        console.log (operate ());
        display.textContent = operate ();
        let textDisplayLogic = calculations[calculations.length - 1][0] + " " + calculations[calculations.length - 1][1] + " " + calculations[calculations.length - 1][2];
        displayCalculationLogic.textContent = textDisplayLogic;

        currentFirstNumber = operate ();
        currentSecondNumber = ""; 
        currentOperator = "";
        enteringSecondNumber = false;
        enteringSecondOperator = false;

        return;}

    // normal equation push with no 2nd operator pushed //    
    
    else {
        const numberOne= Number(currentFirstNumber);
        const numberTwo = Number(currentSecondNumber);

        calculations.push([numberOne, currentOperator, numberTwo]);     

        console.log (calculations);


        function operate () {
            const lastOperator = calculations[calculations.length -1][1];

            if (lastOperator === "+") return add(numberOne, numberTwo);
            else if (lastOperator === "-") return substract(numberOne, numberTwo);
            else if (lastOperator === "x") return multiply(numberOne, numberTwo);
            else if (lastOperator === "/") return divide(numberOne, numberTwo);
        };


            // Calculator Functions //

            function add (numberOne, numberTwo) {
                return numberOne + numberTwo;
            };

            function substract (numberOne, numberTwo) {
                return numberOne - numberTwo;
            };

            function multiply (numberOne, numberTwo) {
                return numberOne * numberTwo;
            };

            function divide (numberOne, numberTwo) {
                return numberOne / numberTwo;
            };


        console.log (operate ());
        display.textContent = operate ();
        let textDisplayLogic = calculations[calculations.length - 1][0] + " " + calculations[calculations.length - 1][1] + " " + calculations[calculations.length - 1][2];
        displayCalculationLogic.textContent = textDisplayLogic;

        currentFirstNumber = operate ();
        currentSecondNumber = ""; 
        currentOperator = "";
        enteringSecondNumber = false;
        enteringSecondOperator = false;
     }
});

// clear all logic //
clearButton.addEventListener("click", () => {
    calculations.length = 0;
    currentFirstNumber = "";
    currentSecondNumber = ""; 
    currentOperator = "";
    secondOperator = "";
    enteringSecondNumber = false; 
    enteringSecondOperator = false;   
    display.textContent = "";
    displayCalculationLogic.textContent = "";
});
console.log(calculations);


// delete last input logics //
deleteButton.addEventListener("click", () => {
    if (currentFirstNumber === "") return;
    
    if (currentSecondNumber === "" && currentOperator === "" && calculations.length === 0) {
        currentFirstNumber = "";
        display.textContent= "";
    }
    
    if (currentSecondNumber === "" && currentOperator !== "") {
        currentOperator = "";
        enteringSecondNumber = false;
        enteringSecondOperator = false; 
        display.textContent = currentFirstNumber;
    }

    if (currentSecondNumber !== "" && currentOperator !== "") {
        currentSecondNumber = "";
        display.textContent = currentFirstNumber + " " + currentOperator;
    }

    else return;
});


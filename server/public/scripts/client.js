console.log('hello world');


let operator ;
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let multButton = document.querySelector('#multiplication-button');
let divButton = document.querySelector('#division-button');




function getMathFromServer() {
    
    console.log('Start getMathFromServer');
    axios.get('/result').then((response) => {
        console.log(response.data);
        let numbers = response.data;
        console.log("numbers.calculations",numbers.calculations);
        console.log("numbers.calculationResults", numbers.calculationResults);

        let resultArea = document.querySelector('#result');
        let mathHistoryArea = document.querySelector('#math-history');

        resultArea.innerHTML ='';
        resultArea.innerHTML = `
            ${numbers.calculationResults[numbers.calculationResults.length-1]}
        `;


        mathHistoryArea.innerHTML = '';
       
        for (let i = 0; i <= numbers.calculations.length-1; i++) {
            mathHistoryArea.innerHTML +=   `
                <div>${numbers.calculations[i].firstNumber} ${numbers.calculations[i].mathOperator} ${numbers.calculations[i].secondNumber} = ${numbers.calculationResults[i]}</div>
            `;
           
    }
        

    }).catch((error) => {
        console.error(error);
        alert('Something went wrong!');
    });
    console.log('End getMathFromServer');
} 


function sendMathToServer(event) {

    event.preventDefault();
    console.log('Beginning sendMathToServer');


    let firstNumberText = Number(document.querySelector('#first-number').value);
    let secondNumberText = Number(document.querySelector('#second-number').value);
    let answer = 0;

    
    axios.post('/result', { 
        firstNumber: firstNumberText,
        secondNumber: secondNumberText,
        mathOperator: operator
    }).then((response) => {
        console.log('POST succesful!');
        getMathFromServer();
    }).catch((error) => {
        console.error(error);
        alert('Something went wrong!');
    });
    }
    console.log('End sendMathToServer');


function handleOperator(event) {
    event.preventDefault();
    let operators = document.getElementsByClassName("operator");
    for (let index = 0; index < operators.length; index++) {
        operators[index].classList.remove("thick");
    }
    
    operator = event.target.innerHTML;

    let thingyyy = event.target;

    thingyyy.classList.add("thick");
};


let clearButton = document.querySelector('#clear-button');
let firstNumberInput = document.querySelectorAll('#first-number');
let secondNumberInput = document.querySelectorAll('#second-number');
clearButton.addEventListener('click', () => {
    firstNumberInput.forEach(input => input.value = '');
    secondNumberInput.forEach(input => input.value = '');

    let operators = document.getElementsByClassName("operator");
    for (let index = 0; index < operators.length; index++) {
        operators[index].classList.remove("thick");
    }

});

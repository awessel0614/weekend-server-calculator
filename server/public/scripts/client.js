console.log('hello world');


let operator ;



//so basically......

//when the = button is pressed, it needs to capture the two number values and the value of the mathematical operator
//the operator part is the one where im a little like, eh?

getMathFromServer();

function getMathFromServer() {
    
    console.log('Start getMathFromServer');
    axios.get('/result').then((response) => {
        console.log(response.data);
        let numbers = response.data;
        console.log(numbers.calculations);
        console.log(numbers.results);
        let resultArea = document.querySelector('#result');
        let mathHistoryArea = document.querySelector('#math-history');

        resultArea.innerHTML ='';
        resultArea.innerHTML = `
            ${numbers.results}
        `;

        mathHistoryArea.innerHTML = '';
        let i = 0;
        for (let calculation of numbers.calculations) {
            console.log(calculation);
            mathHistoryArea.innerHTML +=   `
                <div>${calculation.firstNumber} ${calculation.mathOperator} ${calculation.secondNumber}</div>
            `;
            i +=1;
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
   // handleOperator(event);
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
    operator = event.target.innerHTML;

}





/** 
function clearNumbersFromBoxes(event) {

    console.log('Beginning clearNumbersFromBoxes');

    let firstNumberText = document.querySelector('#first-number').value;
    let secondNumberText = document.querySelector('#second-number').value;

    console.log(firstNumberText);
    console.log(secondNumberText);

    firstNumberText.innerHTML.value = '';
    secondNumberText.innerHTML.value = '';

    console.log(firstNumberText);
    console.log(secondNumberText);

    console.log('End clearNumbersFromBoxes');
}
*/

let clearButton = document.querySelector('#clear-button');
let firstNumberInput = document.querySelectorAll('#first-number');
let secondNumberInput = document.querySelectorAll('#second-number');
clearButton.addEventListener('click', () => {
    firstNumberInput.forEach(input => input.value = '');
    secondNumberInput.forEach(input => input.value = '');
});




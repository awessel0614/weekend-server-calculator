console.log('hello world');






//so basically......

//when the = button is pressed, it needs to capture the two number values and the value of the mathematical operator
//the operator part is the one where im a little like, eh?



function getMathFromServer() {
    console.log('Start getMathFromServer');
    axios.get('/result').then((response) => {
    
        let numbers = response.data;
        let content = document.querySelector('#result');

        content.innerHTML = '';
        let i = 0;
        for (let number of numbers) {
            content.innerHTML +=   `
                <div>${number.firstNumber} ${number.secondNumber} </div>
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
    //let mathOperatorPushed = 
    let answer = 0;
    
    axios.post('/result', {
        firstNumber: firstNumberText,
        secondNumber: secondNumberText
        //mathOperator: mathOperatorPushed
    }).then((response) => {
        console.log('POST succesful!');
        getMathFromServer();
    }).catch((error) => {
        console.error(error);
        alert('Something went wrong!');
    });
    }
    console.log('End sendMathToServer');



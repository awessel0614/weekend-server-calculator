const express = require('express');

const app = express();
const PORT = 5002;


let numberList = [];
let results = [];


app.use(express.json());
app.use(express.static('server/public'));


app.get('/result', (req, res) => {
    console.log('Results made for /result', numberList, results);
    res.send({
        calculations: numberList,
        calculationResults: results
    });
});

app.post('/result', (req, res) => {
    console.log("post", req.body);
    let calculation = req.body;
    numberList.push(calculation);
    doMath(numberList);
    res.sendStatus(201);
});


let result;
function doMath(array) {
    for (let thingy of array) {
        console.log("thingy", thingy.firstNumber);
        if (thingy.mathOperator === '+') {
            result = thingy.firstNumber + thingy.secondNumber;
        }
        if (thingy.mathOperator === '-') {
            result = thingy.firstNumber - thingy.secondNumber;
        }
        if (thingy.mathOperator === '*') {
            result = thingy.firstNumber * thingy.secondNumber;
        }
        if (thingy.mathOperator === '/') {
            result = thingy.firstNumber / thingy.secondNumber;
        }
    }
    console.log("result", result);
    results.push(result);
    
}



app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
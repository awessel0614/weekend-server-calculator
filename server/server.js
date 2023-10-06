const express = require('express');

const app = express();
const PORT = 5002;


let numberList = [];


app.use(express.json());
app.use(express.static('server/public'));


app.get('/result', (req,res) => {
    console.log('Results made for /result');
    res.send(numberList);
});

app.post('/result', (req,res) => {
    console.log(req.body);
    let numberToAdd = req.body;
    numberList.push(numberToAdd);
    res.sendStatus(201);
});






app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
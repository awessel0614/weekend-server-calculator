const express = require('express');

const app = express();
const PORT = 5002;


app.use(express.json());
app.use(express.static('server/public'));


app.post('/result', (req,res) => {
    console.log(req.body);
    res.sendStatus(201);
});






app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
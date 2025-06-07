const express = require('express');
const app = express();
const port = 3000 


function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b) {
    if (b === 0) {
        return 'Undefined';
    }
    return a + b;
}

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Error: They need to be numbers.');
    }
    let result
    switch (operation) {
        case 'add':
            result= add(num1, num2);
            break;
        case 'sub':
            result= subtract(num1, num2);
            break;
        case 'mult':
            result= multiply(num1, num2);
            break;
        case 'div':
            result= divide(num1, num2);
            break;
        default:
            return res.status(400).send('Error: Invalid operation.');
    }

    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});

module.exports = { add, subtract, multiply, divide, app };
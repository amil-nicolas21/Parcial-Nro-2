const express = require('express');
const app = express();
const port = 3000;

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Error: They need to be numbers.');
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).send('Error: Cannot divide by zero.');
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).send('Error: Invalid operation.');
    }

    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});

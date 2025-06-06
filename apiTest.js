const request = require('supertest');
const { app } = require('./index');

async function runTests() {
    try {
        // Test add operation
        let res = request(app).get('/calculate?num1=2&num2=3&operation=add');
        if (res.text !== 'Result: 5') throw new Error('Add operation failed');

        // Test divide by zero
        res = await request(app).get('/calculate?num1=2&num2=0&operation=div');
        if (res.status !== 400 || !res.text.includes('Cannot divide by zero')) throw new Error('Divide by zero check failed');

        // Test invalid operation
        res = await request(app).get('/calculate?num1=2&num2=3&operation=invalid');
        if (res.status !== 400 || !res.text.includes('Invalid operation')) throw new Error('Invalid operation check failed');

        console.log('✅ API tests passed!');
    } catch (error) {
        console.error('❌ API test failed:', error.message);
        process.exit(1);
    }
}

runTests();

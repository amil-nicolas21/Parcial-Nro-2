const assert = require('assert');
const {add, subtract, multiply, divide} = require('./index.js');

function runTest(name, testFunc) {
    try {
        testFunc();
        console.log(`✅ ${name} works`);
    } catch (e) {
        console.error(`❌ ${name} failed`);
        process.exit(1);
    }
}

runTest('Adding', () => assert.strictEqual(add(1, 2), 3));
runTest('Subtracting', () => assert.strictEqual(subtract(2, 1), 1));
runTest('Multiplying', () => assert.strictEqual(multiply(3, 2), 6));
runTest('Dividing', () => assert.strictEqual(divide(36, 6), 6));
runTest('Dividing by Zero"', () => assert.strictEqual(divide(679, 0), 'Undefined'));
process.exit(0);

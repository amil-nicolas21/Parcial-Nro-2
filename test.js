const assert = require('assert');
const {add, subtract, multiply, divide} = require('/index.js');

try{
    assert.strictEqual(add(1,2),3)
    assert.strictEqual(subtract(2,1),1)
    assert.strictEqual(multiply(2,2),4)


    assert.strictEqual(divide(2,2),1)
    assert.strictEqual(divide(2,0),'Undefined')
    console.log('✅ All math function tests passed!');
} catch(error){
    console.error('❌ Math test failed:', error.message);
    process.exit(1);
}


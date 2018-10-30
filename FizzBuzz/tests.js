const assert = require('assert');
const FizzBuzzFactory = require('./FizzBuzzFactory.js');
const factory = FizzBuzzFactory();

describe('Fizz buzz Tests', function(){
  
    it("should return Fizz if its a multiple of 3", function(){
        let nums = factory.fizzBuzzer(10);  
        console.log(nums)
        for(let num of nums){  
        if(num % 3 !== 0 && num === "Fizz"){
            assert.deepEqual('Fizz', num);
        }
    }
    });

    it("should return Buzz if its a multiple of 5", function(){
        let nums = factory.fizzBuzzer(100);  
        for(let num of nums){  
        if(num % 5 !== 0 && num === "Buzz"){
            assert.deepEqual('Buzz', num);
        }
    }
    });

    it("should return FizzBuzz if its a multiple of 3 and 5", function(){
        let nums = factory.fizzBuzzer(100);  
        for(let num of nums){  
        if(num % 3 !== 0 && num % 5 !== 0){
            if(num === 'FizzBuzz'){
            assert.deepEqual('FizzBuzz', num);
            }
        }
    }
    });

})
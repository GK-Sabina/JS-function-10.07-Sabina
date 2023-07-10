
//Task 1
const userInput = prompt('Enter number', 5);

/**
 * @param {number} userInput
 * @returns {string}
 */
const checkNumberParity = function(userInput){
    if(Number.isNaN(Number(userInput)) || 
    userInput === '' || 
    userInput === null) {
        return 'Try again';
    }
    if(userInput % 2===1){
        return 'Odd';
    }
        return 'Even';
}
console.log(checkNumberParity(userInput));


//Task 2
const argument1 = 7;
const argument2 = 5;

/**
 * @param {*} argument1
 * @param {*} argument2
 * @returns {*}
 */
const checkArguments = function(argument1, argument2){
    if(typeof argument1 !== typeof argument2 || argument1 === argument2){
        return null;
    }
    if(argument1 > argument2){
        return argument1;
    }
        return argument2;
}
console.log(checkArguments(argument1, argument2));
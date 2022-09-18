/*
Power Calculation


Calculate power and also checking Nan Validation.

Problem Description :

1) Read power and base from file ‘input.txt’
2) If power or base value is not a number then throw the error with a message ‘Input is not a number’
3) Otherwise print the output.

Input Format :

Input is power and base.

Output Format :

The output is the catch block received argument.

Sample Input 1 :

2      // power
3      // base

Sample Output 1 :

9

Sample Input 2 :

2      // power
abc  // base

Sample Output 2 :

Input is not a number

Sample Input 3 :

abc      // power
abc     // base

Sample Output 3 :

Input is not a number
*/

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
try {
    if (isNaN(input[0]) == true || isNaN(input[1]) == true) {
        throw "Input is not a number"
    } else {
        console.log(Math.pow(input[1], input[0]));
    }
} catch (error) {
    console.error(error);
}
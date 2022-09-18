/*
Divide By Zero Error


Write a javascript console program to handle the divide by zero error.

Problem Description :

1) Read the input file ‘input.txt’
2) If the result of the division is ‘Infinity’ then throw the error as ‘Divide by zero error’ inside try.
3) Catch the error and print the exception message.
4) If the result of the division is not equal to Infinity then print the number.

Input Format :

Input is two numbers.

Output Format :

The output is the error message.

Sample Input 1 :

5
0   

Sample Output 1 :

Divide by zero error     // If the second number is zero then catch display the error message.

Sample Input 2 :

12
3    

Sample Output 2 :

4         // If the second number is non zero then display the result of the division.
*/
var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
try {
    if (input[1] == 0) {
        throw "Divide by zero error"
    } else {
        console.log(input[0] / input[1])
    }
} catch (error) {
    console.error(error);
}
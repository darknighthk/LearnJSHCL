/*
Promises Async / await - 1


Write a JavaScript console program to implement async/await using promises.

Problem Constraints :

Read the input file named ‘input.txt’.
Input is a value (integer/string).
Create a function named findDigitSum(n) which accepts ‘n’ as an input and returns the promise.
Function findDigitSum(n) will check whether n is a number or not.
If n is a number, then resolve the promise with the sum of digits in a number, else reject the promise with the message ‘Invalid’.
Create an async function named findResult(n) which gets ‘n’ as an input from the file and passes it to the method findDigitSum(n).
Use the keyword await inside the async function to wait until that promise settles and returns its result.
Display the message inside the async function.

Hint :

The async function always returns a promise. The keyword await makes JavaScript wait until that promise settles and returns its result.

Input Format :

Input is a value (integer/string).

Output Format :

The output displays whether the sum of digits in a number or Invalid

Sample Input 1 : 

235678

Sample Output 1 :

31

Sample Input 2 : 

digit

Sample Output 2 :

Invalid
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code
function findDigitSum(n) {
    let promise1 = new Promise((resolve, reject) => {
        if (!isNaN(n)) {
            var sum = 0;
            while (n) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
            resolve(sum);
        } else {
            reject('Invalid');
        }
    })
    promise1.then(
        (resolve) => {
            console.log(resolve);
        },
        (error) => {
            console.log(error);
        }
    )
}

 

async function findResult(n) {
    let response = await findDigitSum(n);
}

 

findResult(input);
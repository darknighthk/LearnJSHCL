/*
String comparison using promises


Write a program to compare 2 strings using the promise function (resolve, reject), if the string is the same, resolve the promise, else reject it. 

Problem Constraints :

Read the input from the input file and compare 2 strings using the promise function(resolve, reject).
If the string is the same, resolve the promise, else reject it.
Case-sensitive string comparison should be done. 
Promises should be consumed by registering functions .then and .catch method.

Input Format :

Input is a string separated by a comma.

Output Format :

The output should display “Two strings are equal” if strings are equal.
Otherwise, display “Two strings are not equal”.

Sample Input 1: (input.txt)

Amphi,Soft

Sample Output 1 :

Two strings are not equal

Sample Input 2 : (input.txt)

Promise,Promise

Sample Output 2 :

Two strings are equal
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code
var array = input.trim().split(",");
let promise = new Promise(function(resolve, reject) {
    if (array[0] === array[1]) {
        resolve("Two strings are equal");
    } else {
        reject("Two strings are not equal");
    }
})

 

promise.then(
    (result) => { 
       console.log(result);
    },
    (error) => { 
       console.log(error);
    }
  );
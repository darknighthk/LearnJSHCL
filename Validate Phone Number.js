/*
Validate Phone Number


Write a javascript console program to read the phone number from the file and do the validation. If not valid, manually throw the error and catch the same.  

Problem Description :

1) Read phone number from file ‘input.txt’
2) Perform the phone number validation.
3) For a valid phone number(10 digit number) print the message ‘Valid PhoneNumber’.
4) If invalid phone number then throw the error with the message as ‘Invalid PhoneNumber’.
5) Catch the error and print the error message.

Input Format :

Input is the phone number.

Output Format :

The output is the catch block received argument. (For invalid mobilenumber), Otherwise, print ‘Valid PhoneNumber’.

Sample Input 1 :

9442571889        

Sample Output 1 :

Valid PhoneNumber

Sample Input 2 :

9442571   

Sample Output 2 :

Invalid PhoneNumber
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code
var phone = input.trim();
try {
    if (phone.length == 10) {
        console.log("Valid PhoneNumber");
    } else {
        throw "Invalid PhoneNumber";
    }
} catch (error) {
    console.log("Invalid PhoneNumber");
}
/*Property Flags


Write a JavaScript console program to create an object ‘student’ with the fields like name, username, password. Implement the method 'getOwnPropertyDescriptor' to retrieve the full information about any of the property from the student object and display the same using the JSON stringify method.

Input Format :

The first line of input is a string separated by a comma. (name, username, password)
The second line of input is a string that corresponds to the property of an object. (can be name or username or password)

Output Format :

The output displays the full information like value, writable, enumerable and configurable for the given property in the second line of input.

Note :

Input should be read from input.txt.
Refer sample input and output for formatting specifications.

Sample Input :

John, john01, john01
username

Sample Output :

{"value":"john01","writable":true,"enumerable":true,"configurable":true}*/
var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
var userArray = input[0].split(",");
var search = input[1];

 

var obj = new Object();
obj.name = userArray[0];
obj.username = userArray[1];
obj.password = userArray[2];

 

var descriptor = Object.getOwnPropertyDescriptor(obj, search);
console.log(JSON.stringify(descriptor));
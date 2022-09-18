/*
Chaining After a catch using Promises


Write a JavaScript console program to implement Chaining after a catch using promises.

Problem Constraints :

Read the input file named ‘input.txt’ and convert the input into JSON format.
If the input is converted into JSON, then resolve it.
Else reject it.
Promises should be consumed by registering functions .then and .catch method.
After .then  and .catch, use .then( ) method to display the content.

Hint :

Promises can be either resolved or rejected. After a catch, if we provide .then() method, it will process the code inside it, even though whatever the conditions are tested before.

Input Format :

Input is a text with key-value pair.

Output Format :

The first line of output displays the JSON string if the input is valid. (use stringify method with whitespace value 2)
Otherwise displays error messages.
The second line output will display the content inside the file.

Sample Input 1 : 

{"name":"John", "emp_id":"01","designation":"Software developer"}

Sample Output 1 :

{
  "name": "John",
  "emp_id": "01",
  "designation": "Software developer"
}
{"name":"John", "emp_id":"01","designation":"Software developer"}

Sample Input 2 : 

"name":"John", "emp_id":"01","designation":"Software developer"

Sample Output 2 :

Invalid JSON in file
"name":"John", "emp_id":"01","designation":"Software developer"
*/

var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code
function testJSON(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}

 

let promise = new Promise((resolve, reject) => {
    if (testJSON(input) == true) {
        resolve(input);
    } else {
        reject('Invalid JSON in file');
    }
})

 

promise.then(
    (result) => { 
       console.log(result);
       console.log(input);
    },
    (error) => { 
       console.log(error);
       console.log(input);
    }
  );
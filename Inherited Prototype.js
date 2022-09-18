/*
Inherited Prototype


Write a JavaScript console program to create an object prototype named products with name, price & country of origin. Inherit the product prototype for items like watches, mobiles, tablets. Display the products based on the given country of origin by using for..in loop to traverse the items.

Problem Constraints :

Create an object prototype name ‘products’.
products should have name, price, and country as its members.
The inherited objects like watches, mobile and tablets should inherit the product's prototype.

Refer to the below hint to define the inherited property.
Hint:
let baseObj = {
...
...
}
let childObj={
__proto__:baseObj
}

Add all the items to an array by reading the input from a file.
Iterate the array using for...in loop to display the products based on the given country.

Input Format :

Input corresponds to the array of products separated by a new line and each product data is separated by a comma.
The last line of input corresponds to the country of origin to be filtered.

Output Format :

The output should display all the product details for a given country.

Note :

Input should be read from products.txt.
Refer sample input and output for formatting specifications.

Sample Input 1: (String, name, price, country) 

String can be Mobile or Watch or Tablets. Based on the string, create instance and assign values to the respective properties and add that instance to the array. 

Mobile,Samsung,21900,India
Watch,iPhone,45200,USA
Mobile,OnePlus,37900,India
Tablets,Dell Tab,22000,China
Tablets,Samsung Tab,15700,India
India

Sample Output 1 :

{ name: 'Samsung', price: '21900', country: 'India' }
{ name: 'OnePlus', price: '37900', country: 'India' }
{ name: 'Samsung Tab', price: '15700', country: 'India' }

Sample Input 2 :

Mobile,Samsung,21900,India
Watch,iPhone,45200,USA
Mobile,OnePlus,37900,India
Tablets,Dell Tab,22000,China
Tablets,Samsung Tab,15700,India
Indonesia

Sample Output 2 :

No products available for given country
*/

var fs = require('fs');
var input=fs.readFileSync('product.txt').toString().trim().split('\n');

 

let count = 0;
var arr;
var o;

 

for(let i=0; i<=4;i++){
    arr =input[i].trim().split(",");
    o = new Object();
    o.name = arr[1];
    o.price = arr[2];
    o.country = arr[3];
    if(o.country==input[5]){
        console.log(o);
        count = count+1;
    }
}
if (count === 0){
    console.log('No products available for given country')
}
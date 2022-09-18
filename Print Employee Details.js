/*
Print Employee Details


Write a javascript console program to print employee details using javascript class.

Problem Description :

1) Read the input file ‘input.txt’
2) Create a class named Employee using the keyword class.
3) Inside the class create constructor with the argument as employee name, dept, and DOJ.
4) Inside the constructor assign every argument.
5) Now create the method as displayEmployee() and inside the method print the employee details.
6) Create an object for the class using the new Classname() and pass the input to the constructor.
7) And call the object method, using object.methodName() to print the employee details.

Input Format :

Input is employee details.

Output Format :

The output is employee details.

Sample Input :

John
HR
23-8-1997

Sample Output :

Name : John
Department : HR
DOJ : 23-8-1997
*/


var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
class Employee {
    constructor(name, dept, DOJ) {
        this.name = name;
        this.dept = dept;
        this.DOJ = DOJ;
    }
    displayEmployee() {
        console.log("Name : " + this.name);
        console.log("Department : " + this.dept);
        console.log("DOJ : " + this.DOJ);
    }
}

 

var obj1 = new Employee(input[0], input[1], input[2]);
obj1.displayEmployee();
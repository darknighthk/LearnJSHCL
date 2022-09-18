/*
Write a javascript console program using inheritance.

Problem Description :

1) Read the input file ‘input.txt’.
2) Create a class named Shape using the keyword class.
3) Inside the class create a constructor with the argument as name, nos(number of side) and color.
4) Inside the constructor assign the name to this.name, nos to this.nos, color to this.color.
5) Create displayShapeColor() method inside the class Shape.
6) Create another three classs named as Circle, Square, Triangle which extends the class Shape.
7) Inside the child classes create method named as displayShapeSides().
8) Create objects for child classes using the inputs given, and access both parent and child class methods.

Input Format :

Input consists of three lines. Each line has a comma-separated value of name, nos, color.

Output Format :

The output is shape with color/ shape with sides (Ex: Circle is in color red/ Square has 4 sides).

Sample Input :

Circle,0,red
Square,4,red
Triangle,3,red

Sample Output :

Circle is in color red        // invokes parent class method
Circle has 0 sides           //invokes child class method
Square is in color red     // invokes parent class method
Square has 4 sides        //invokes child class method
Triangle is in color red   // invokes parent class method
Triangle has 3 sides      //invokes child class method
*/

var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
class Shape {
    constructor(name, nos, color) {
        this.name = name;
        this.nos = nos;
        this.color = color;
    }
    displayShapeColor() {
        console.log(this.name + " is in color " + this.color);
    }
}

 

class Circle extends Shape {
    constructor(name, nos, color) {
        super(name, nos, color);
    }
    displayShapeSides() {
        console.log(this.name + " has " + this.nos + " sides");
    }
}

 

class Square extends Shape {
    constructor(name, nos, color) {
        super(name, nos, color);
    }
    displayShapeSides() {
        console.log(this.name + " has " + this.nos + " sides");
    }
}

 

class Triangle extends Shape {
    constructor(name, nos, color) {
        super(name, nos, color);
    }
    displayShapeSides() {
        console.log(this.name + " has " + this.nos + " sides");
    }
}

 

var circleDesc = input[0];
var circleArray = circleDesc.split(",");
var circleObj = new Circle(circleArray[0], circleArray[1], circleArray[2]);
circleObj.displayShapeColor();
circleObj.displayShapeSides();

 

var squareDesc = input[1];
var squareArray = squareDesc.split(",");
var squareObj = new Circle(squareArray[0], squareArray[1], squareArray[2]);
squareObj.displayShapeColor();
squareObj.displayShapeSides();

 

var triangleDesc = input[2];
var triangleArray = triangleDesc.split(",");
var triangleObj = new Circle(triangleArray[0], triangleArray[1], triangleArray[2]);
triangleObj.displayShapeColor();
triangleObj.displayShapeSides();
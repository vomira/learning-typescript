let apples: number = 5;
let speed: string = 'fast';

let colors: string[] = ['red', 'blue']

class Car {

}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

//Function
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

//When to use annotations
// 1) Function returns 'any' type --> TS has no idea what type will be returned, e.g. when output type depends on input

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
//type annotation fixed coordinates being type 'any' by defining the output type
console.log(coordinates); // {x: 10, y: 20}

coordinates.shitfunction() //because of type 'any', TS cannot do any checking 

// 2) Delayed Initialization: declaring a variable but initializing it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

words.forEach(word => word === 'green' && (foundWord = true))

// 3) Variable type cannot be infered
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; //type of variable depends on outcome of function --> here either number, array of numbers or boolean!

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
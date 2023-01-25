// The rest operator is used to put the rest of some specific user - supplied values into a JavaScript array.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function addition(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

// console.log(addition(2, 4, 1, 4, 6, 6, 5));

//with objects

let obj1 = {
    name: 'ram',
    age: 20,
    hobbies:['a','b']
}

var age = obj1.age;
console.log(age);
var { age, name } = obj1;         //array destructering
console.log(age);
console.log(name);

var { age, ...others } = obj1;          //rest operators to keep remaining elements in an arr names others
console.log(others);

//--------------------------

// spread takes in an iterable (e.g an array) and expands it into individual elements.

let arrNames = ['a','b','c','d']
function names(n1, n2, n3, n4) {
    // console.log(n1,n2,n3,n4);
}

names(...arrNames);
console.log(...arrNames);

// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

//with objects

let obj = {
    name: 'ram',
    age: 20,
    hobbies:['a','b']
}

var obj2 = {
    ...obj,
    age : 23
}

console.log(obj2);
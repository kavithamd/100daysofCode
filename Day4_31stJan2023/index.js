//undefined or not defined in javascript

console.log(a);

if (a === undefined) {
    console.log('undefined');
} else {
    console.log('Not    defined');
}

var a = 'ajay';
console.log(a);
var a = 4;
console.log(a);
// console.log(b); //not defined means, it's not there in memory

//there is no memory allocated to it

(obj !== undefined || obj !== null) ? obj.name : '';
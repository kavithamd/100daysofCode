//var, let n const

//1. scope
/*global scope

function scope

function (){
    var is function scope
}

block scope
{
    let and const are block scope
}
*/

var a = 5       //global scope
// console.log(a);     //5

{
    var a = 5  // var in block scope, doesn't affect var
}
// console.log(a);     //5

{
    let b = 3;      //let in block scope
    const c = 3;      //let in block scope

}
// console.log(b,c);     //referenceError : b is not defined


//2. variable shadowing : while shadowing a var, it shouldn't cross the boundary of the scope

function test() {
    let a = 'hello';            //let defined in function scope, so doesn't matter

    if (true) {
        let a = 'hi';       //let defined again in block scope, re-writes the previous value    
        console.log(a);     //prints 'hi'
    }
    console.log(a);         //prints 'hello'
}

// test();

//hi
//hello

//we can shadow from let var to let but not from let to var

function test2() {
    var a = 'hello';        //
    let b = 'bye';
    if (true) {
        let a = 'hi';       //re-writes a
        // var b = 'goodbye';       //can't re-write, illegal shadowing
        console.log(a);
        console.log(b); //syntaxErr : b has already been declared
    }
    console.log(a);
    console.log(b);
}

// test2()

//3. Declaration

// var a;
// var a; //var can be re-declared as many times as we want

// let a;
// let a;  //syntaxErr : a has already been declared
//let n const cannot be re-declared in the same scope

//4. declaration without initialization
var x;
let y;

// const z; // syntaxErr : Missing initializer in const declaration

//5. re-initialization
const v = 5;
// v =10;      //typeError : assignment to constant var

//6. Hoisting

/* javascript execution phase

let a = 10;
function multiple(x){
    return x*10;
}

let b = multiply(a);
console.log(a);

creation phase                 
1.creates global/window obj
2.Setup a memory heap for storing vars n function references
3. initialized them as undefined

execution phase
1. executes program from top to bottom

during the creation phase, js moves vars n function declaration to top of your scope is called hoisting
*/

console.log(count);
var count = 1;      //undefined due to hoisting

// console.log(count1);
let count1 = 1;     // refErr : cannot access count1 before initialization
var count2 = 1;
//let is hoisted in TDZ - time between the declation n initialization of let n const, vars are in the scope but not yet declared

function abc() {
    console.log(l);
    // const k = 1;
    // let j = 1;
    var l = 2;
}

abc()


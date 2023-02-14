// Coding challenge #1: Print numbers from 1 to 10
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//Coding challenge #2: Print the odd numbers less than 100
// for (let i = 1; i <= 100; i++){
//     if (i % 2) {
//     console.log(i)
//     }
// }

//or

// for (let i = 1; i <= 100; i+=2){
//     console.log(i)
// }

// Coding challenge #3: Print the multiplication table with 7
// for (let i = 1; i <= 10; i++){
//     console.log('7 * ', i , '= ', i*7);
// }

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
// for (let i = 2; i <= 10; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('------------------');
// }

// Coding challenge #5: Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for (let i = 0; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);

// Coding challenge #6: Calculate 10!

let prod = 1;
for (let i = 1; i <= 10; i++){
    prod *= i;
}
console.log(prod)
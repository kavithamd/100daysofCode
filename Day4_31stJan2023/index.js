// //undefined or not defined in javascript

// console.log(a);

// if (a === undefined) {
//     console.log('undefined');
// } else {
//     console.log('Not    defined');
// }

// var a = 'ajay';
// console.log(a);
// var a = 4;
// console.log(a);
// // console.log(b); //not defined means, it's not there in memory

// //there is no memory allocated to it

// (obj !== undefined || obj !== null) ? obj.name : '';

//-----------------------------------------------

//forEach

const companies = [
    {name:'google',    category:'prod',start:'1990'},
    {name:'Amazon',    category:'prod',start:'1991'},
    {name:'Microsoft', category:'service',start:'1992'},
    {name:'Accenture', category:'service',start:'1993'},
]

const ages = [10, 30, 40, 20, 60, 12, 80, 100]

for (let i = 0; i < companies.length; i++){
    // console.log(companies[i]);
}       //traditional for loop


// companies.forEach((company,index) => (console.log(company, 'index is ',index)));

//filter

//normal for loop
for (let i = 0; i <= ages.length; i++){
    if (ages[i] > 40) {
        // console.log(ages[i]);
    }
}


//syntax of filter
let finalAge = ages.filter(function (age) {
    if (age > 40) {
        return true;
    }
})

// console.log(finalAge);

//simplified
let arrAge = ages.filter(age => age > 40);
// console.log(arrAge);        //produces new array satifing the condition
// console.log(ages);          //it won't modify the original array

let ServiceCompanies = companies.filter(company => company.category=='service');

// console.log(ServiceCompanies);

//map

let newAge = ages.map((age) => (age * 2));

// console.log(newAge);

// const dummy = companies.map((company, index) => {
//     return `${company.name} ${company.start}`
// })
//          //append using map n back tick

const dummy = companies.map((company, index) => `${company.name} ${company.start}`)          //use return when u use {}, in case of multiple statements, 
//if there is single stmt, use (), return not needed 

// console.log(dummy);

//sort

const sorted = companies.sort(function (c1, c2) {
    if (c1.start < c2.start) {
        return 1;
    } else {
        return -1;
    }
})

// console.log(sorted);


//simplified Sort
const simpleSort = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1))

// console.log(simpleSort);


const sortAges = ages.sort((a, b) => (a-b))
// console.log(sortAges);

//reduce

let total = 0;

for (let i = 0; i < ages.length; i++){
    total += ages[i];
}

// console.log(total);

let sumAge = ages.reduce(function (total, age) {
    return total += age;
},1)        //define initial value of total

// console.log(sumAge);

let totAge = ages.reduce((tot, age) => tot += age, 2);

// console.log(totAge);


//forEach

// ages.forEach((age,index)=>(console.log(age, index)))

//filter
let ag = ages.filter(age => age > 50);
console.log(ag);

//map
let age1 = ages.map(age => age * 2);
console.log(age1);
//sort
let sortAge = ages.sort((a,b)=> a-b)
console.log(sortAge);
//reduce
let sumage = ages.reduce((total, age) => total += age, 0)
console.log(sumage);

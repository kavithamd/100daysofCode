//neog pulse check : dtd : march 22, 2023

//1. Create an object movie with properties name, director, and rating. Create a function getMovieDetails that takes a movie object as a parameter and returns if the movie has rating more than 4.

const movie ={
    name: 'a',
    director: 'x',
    rating: '4'
}
const getMovieDetails = objMovie => objMovie.rating >= 4 ? 'movie rating is greater than 4' : 'movie rating is less than 4';
// console.log(getMovieDetails(movie));

//2. Create a function changePrice that takes an object book and a number newPrice as parameters, and changes the price property of the book object to the newPrice. Log the book object to the console before and after calling the function.

const book = {
  name: "Sherlock Holmes",
  author: "Arthur Conan Doyle",
  price: 500
}

const changePrice = (objBook, newPrice) => objBook.price = newPrice;

// console.log(book);
// console.log(changePrice(book, 400));
// console.log(book);

//3. bonus : Write a function that takes an object representing employee's information (name, experience, role, company ) and returns a template literal that includes the employee's name, experience, role and company in a sentence.

const employee1 = { name: 'John', experience: 5, role: 'Tester', company:'Redbus' }
const employee2 = { name: 'Jane', experience: 2, role: 'Developer', company:'Chalo' }

const employeeInfo = ({name, experience, role, company}) => `${name} has ${experience} years of experience as a ${role} in ${company}`;

console.log(employeeInfo(employee1)) // Expected output: "John has 5 years of experience as a Tester in Redbus."
console.log(employeeInfo(employee2)) // Expected output: "Jane has 2 years of experience as a Developer in Chalo."
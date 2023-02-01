//Apply, call & Bind in JS

//Problem stmt

let userDetails = {
    name: 'ajay',
    age: 28,
    designation: 'engineer',
    printDetails:function () {
        console.log(this);
    }
}

userDetails.printDetails();

let userDetails2 = {
    name: 'anuj',
    age: 38,
    designation: 'dev',
}
//function borrowing
userDetails.printDetails.call(userDetails2);


//what if the function is outside the obj like below

let userDetails3 = {
    name: 'ajay',
    age: 28,
    designation: 'engineer',
}

                let printDetails = function (obj) {
                    console.log(obj);
                }

                printDetails(userDetails3); //usual way

//using call n this
                let printDetails1 = function () {
                    console.log(this);
                }

                printDetails1.call(userDetails2)

//we can also pass additional parameters to function
//while using call, pass any number of params separated by comma

let printDetails2 = function (state, country) {     //params
    console.log(this.name+" " + state + " " + country);
}

printDetails2.call(userDetails3, 'bangalore', 'india') //arguments

//apply
//we can pass arguments in an array
printDetails2.apply(userDetails3, ['bangalore', 'india'])

//call n apply, function can be called directly
//but in bind, we need to store a copy of that function in a var n use that to invoke function
let newFunc = printDetails2.bind(userDetails3, 'bangalore i', 'india')

newFunc(); //invoking function


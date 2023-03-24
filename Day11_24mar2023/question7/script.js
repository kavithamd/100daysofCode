// Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
        message: "Internal Server Error"
      });
    } else {
        resolve({
          status: 200,
        data: {
            message: "Success"
        }
      });
    } 
  }, 2000);
});
};

// Your Code here
  const newUrl = "https://example.com/api/users";
  const output = document.querySelector('#output');

// fakeFetch(newUrl).then(response=> {
//   output.innerHTML = `<ol>${response.data.message}</ol>`
// }).catch(err => {
//   output.innerHTML ='Oops. Unexpected Error. Please try again.'
//   output.style.color = 'red';
// })

const showErr = async() =>{
  try {
  const response = await fakeFetch(newUrl);
    if(response){
      output.innerHTML = `<ol>${response.data.message}</ol>`
    }
  } catch (error) {
      output.innerHTML ='Oops. Unexpected Error. Please try again.'
      output.style.color = 'red';
  }
}

showErr();

// Output on the DOM should be (in red color): 
// Oops. Unexpected Error. Please try again.
// Use this URL - https://example.com/api/allbooks to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Bad Request! Requested size too large.), as per the status received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request"
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
  const newUrl = "https://example.com/api/allooks";
  const output = document.querySelector('#output');

// fakeFetch(newUrl).then(response => {
//     output.innerHTML = `<ol>${response.data.message}</ol>`
// }).catch(err => {
//     output.innerHTML = 'Bad Request! Requested size too large.';
// })

const showErr = async() =>{
  try {
  const response = await fakeFetch(newUrl);
  output.innerHTML = `<ol>${response.data.message}</ol>`
  } catch (error) {
    output.innerHTML = 'Bad Request! Requested size too large.';
  }
}

showErr()

// Output on the DOM should be: 
// Bad Request! Requested size too large.

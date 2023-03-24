// Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/login") {
          resolve({
            status: 200,
            data: {
              auth: true
            }
          });
        } else {
          reject({
            status: 404,
            message: "Status not found"
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  
  const newUrl = "https://example.com/login";
  const Output = document.querySelector('#output');

  // fakeFetch(newUrl).then(response => {
  //   if(response.status === 200){
  //     Output.innerHTML = `<ol>verified</ol>`
  //   }
  // }).catch(err => Output.innerHTML = `<ol>${err.message}</ol>`);


const getAuth = async() =>{
  try {
    const res = await fakeFetch(newUrl);
   if(res.status === 200){
      Output.innerHTML = `<ol>verified</ol>`
    }
  } catch (error) {
    Output.innerHTML = `<ol>${error.message}</ol>`;
  }
}

getAuth();

  // Output on the DOM should be:
  // Verified
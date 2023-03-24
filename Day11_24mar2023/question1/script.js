//Async JS Practice Question Set 2
// Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/post/comments") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
              {
                email: "hello@outlook.com",
                commentBody: "Good going a lot to learn from you awesome"
              },
              {
                email: "ram99@gmail.com",
                commentBody: "Anyone from Vadodara here"
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "No Commentes found."
          });
        }
      }, 2000);
    });
  };
  
  // your code here

  const Output = document.querySelector('#output');

  const newUrl = "https://example.com/post/comments";

// fakeFetch(newUrl).then(({status,data}) => {
//     if(status === 200){
//         let arr = data.map(el=>console.log(el.email))
//         Output.innerHTML = `<ol> ${data.map(el=>`<li> ${el.email} </li>`).join('')} </ol>`;
//     }
// }).catch(err => {console.log(err)
//     Output.innerHTML=`<h1>${err.message}</h1>`
// })

//async await n try catch
const displayEmail = async() =>{
try {
    const {status,message,data} = await fakeFetch(newUrl);

    if(status ===200){
        Output.innerHTML = `<ol>${data.map(el => `<li>${el.email}</li>`).join('')}</ol>`
    }
} catch (error) {
    Output.innerHTML =`<ol>${error.message}</ol>`
}
}

displayEmail();
  
  // Output on the DOM should be:
  // 1. xyz@gmail.com
  // 2. hello@outlook.com
  // 3. ram99@gmail.com
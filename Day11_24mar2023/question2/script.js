// Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/winner-team") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: ["Jhon", "Raju", "Anjali", "Sakshi"]
            }
          });
        } else {
          reject({
            status: 404,
            message: "No Users found."
          });
        }
      }, 2000);
    });
  };
  
  // your code here

  const newUrl = "https://example.com/winner-team";
  const Output = document.querySelector('#output');

//   fakeFetch(newUrl).then(({data,status}) => {
//     if(status === 200){
//         Output.innerHTML = `<ol>Congratulation to the members of winning team ${data.data}, great work keep it up.</ol>`
//     }
//   }).catch(err => Output.innerHTML = `<ol>${err.message}</ol>`)


//async await n try catch
const wishTeam = async () => {
try {
    const {status,data} = await fakeFetch(newUrl);
        if(status === 200){
        Output.innerHTML = `<ol>Congratulation to the members of winning team ${data.data}, great work keep it up.</ol>`
        }
} catch (error) {
    Output.innerHTML = `<ol>${error.message}</ol>`
}
}

wishTeam();

  // Output on the DOM should be:
  // Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.
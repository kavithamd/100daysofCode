// Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/photo") {
          resolve({
            status: 200,
            data: {
              photo: {
                link: "https://source.unsplash.com/featured/300x201",
                title: "Random Image"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  
  const newUrl = "https://example.com/photo";
  const output = document.querySelector('#output');

//   fakeFetch(newUrl).then(response => {
//     if(response.status === 200){
//         output.innerHTML = `<img src ="${response.data.photo.link}">`
//     }
//   }).catch(err=> output.innerHTML = `<ol>${err.message}</ol>`);

const getImg = async() =>{
    try {
        const response = await fakeFetch(newUrl);
        if(response.status === 200){
            output.innerHTML = `<img src ="${response.data.photo.link}">`
        }
    } catch (error) {
      output.innerHTML = `<ol>${error.message}</ol>`;
    }
}

getImg();

  // Output: an image on the DOM
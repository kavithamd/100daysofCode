// Use this URL - https://example.com/getImage to make a fake fetch call which takes a url and dimensions for the photo to be displayed. Dimensions should be passed in the format [width, height]. Show the image provided in the response on DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// Dimensions can be 200/300/100. For example you can pass [200, 200] or [200, 300], etc.

const fakeFetch = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
        data: {
           image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
            title: "Random Image"
          }
        }
      });
    } else {
        reject({
          status: 404,
        message: "No photo of such dimension found"
      });
    }
  }, 2000);
});
}

// your code here

  const newUrl = "https://example.com/getImage";
  const output = document.querySelector('#output');

  // fakeFetch(newUrl,[400,500]).then(response=>{
  //   if(response.status === 200){
  //     output.innerHTML = `<img src = ${response.data.image.link}>`
  //   }
  // }).catch(error => output.innerHTML = `<ol>${error.message}</ol>`)

const getImg = async() =>{
  try {
    const response = await fakeFetch(newUrl,[400,500])
    output.innerHTML = `<img src = ${response.data.image.link}>`
  } catch (error) {
    output.innerHTML = `<ol>${error.message}</ol>`
  }
}

getImg();

  // Output on the DOM should be an image.
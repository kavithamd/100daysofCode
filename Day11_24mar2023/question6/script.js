// Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

// Your Code here
  
  const newUrl = "https://example.com/api/productlist";
  const output = document.querySelector('#output');

  // fakeFetch(newUrl).then(({data,status}) => {
  //   if(status ===200){
  //     const res = data.reduce((acc,cur)=> acc+cur.price*cur.quantity,0)
  //     output.innerHTML = `<ol>Total: INR ${res}</ol>`
  //   }
  // }).catch(err=>output.innerHTML = `<ol>${err.message}</ol>`);


  const getTotal = async() =>{
    try {
      const response = await fakeFetch(newUrl);
        if(response.status ===200){
          const res = response.data.reduce((acc,cur)=> acc+cur.price*cur.quantity,0)
          output.innerHTML = `<ol>Total: INR ${res}</ol>`
        }
    } catch (error) {
      output.innerHTML = `<ol>${error.message}</ol>`
    }
  }

  getTotal()


// Output on the DOM should be:
// Total: INR 2600
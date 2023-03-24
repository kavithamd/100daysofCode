// Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/order/status/OR00A12") {
          resolve({
            status: 200,
            data: {
              order: {
                orderId: "OR00A12",
                status: "delivery pending",
                userName: "Kajal Kumari"
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

  const newUrl = "https://example.com/order/status/OR00A12";
  const Output = document.querySelector('#output');

// fakeFetch(newUrl).then(({data,status}) => {
//     if(status ===200){
//         Output.innerHTML = `<ol>Hello ${data.order.userName} your order status is ${data.order.status}</ol>`
//     }
// }).catch(err => Output.innerHTML = `<ol>${err.message}</ol>`);

const getStatus = async()=>{
try {
    const result = await fakeFetch(newUrl);
    if(result.status ===200){
    Output.innerHTML = `<ol>Hello ${result.data.order.userName} your order status is ${result.data.order.status}</ol>`
    }
} catch (error) {
    Output.innerHTML = `<ol>${error.message}</ol>`
}
}

getStatus();

  // Output on the DOM should be:
  // Hello Kajal Kumari your order status is delivery pending.
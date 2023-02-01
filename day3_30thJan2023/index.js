//Async JS programming
//callbacks, Promises, Async & Await

const datas = [
    { name: 'Ajay', profession: 'Software Engineer' },
    { name: 'Anuj', profession: 'Software Engineer' }
]

function getDatas() {
    setTimeout(() => {
        let output = '';
        datas.forEach((data, index) => {
         output +=`<li>${index}  ${data.name} </li>`    
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createData(newData) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false ;
            if (!error) {
                res();
            } else {
                rej('something is wrong');
            }
        }, 2000);
    })
}

/*createData({name:'vivek', profession:'software Engineer'}).then(getDatas).catch(err => console.log(err)) */


async function start() {
    await createData({ name: 'vivek', profession: 'software Engineer' });
    getDatas();
}

start();


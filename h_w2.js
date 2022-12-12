const fs = require('fs');
function promi() {
    const my_promise = new Promise((resolve, reject) => {
        fs.readdir(__dirname , (err, files) => {  
            if (err) {
                console.log('reject');
                reject(`ERROR ${err}`)
            }
            else {
                console.log('resolve');
                resolve(`files ${files}`)
            }
    })
   
    });
return my_promise
}
async function promise1() {
    try {
        const resolve = await promi()
        console.log(`files ${resolve}`);
    }
    catch (reject) {
        console.log(`ERROR ${reject}`);
    }
}
promise1()
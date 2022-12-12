var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout
);
function promise1() {
const prom = new Promise((resolve, reject) => {

rl.setPrompt(`what is your age?`)
rl.prompt();

rl.on('line', (age) => {

    if(age <= 99) {
        resolve(age);
    }
    else {
        reject(`ERROR ${age}`)
    }
    console.log(`Age received by the user: ${age}`);
    
});
});
return prom
}

async function promise2() {
    try {
        const proj = await promise1()
        console.log(`${proj}`);
    }
    catch (error) {
        console.log(`ERROR ${error}`);
    }
    rl.close();
}
promise2()
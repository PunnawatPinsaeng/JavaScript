
function promiseTimeout(ms) {

    return new Promise((revole , reject) => {

        setTimeout(revole , ms);
    });

}

async function run() {

    // ! Logic
    console.log("Start");
    
    // ! Try take of await and compare
    await promiseTimeout(2000);
    console.log("Stop");
}

console.log("Before Run");
run();
console.log("After Run");
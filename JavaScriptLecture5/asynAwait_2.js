
function promiseTimeout(ms) {

    return new Promise((revole , reject) => {

        setTimeout(revole , ms);
    });

}

async function longRunningOperation() {

    // ! Logic
    return 42;
}

async function run() {

    // ! Logic
    console.log("Start!!");
    await promiseTimeout(2000);

    // ! Try to take await out and see
    const response = await longRunningOperation();
    console.log(response);

    console.log("Stop");
}

console.log("Before run");
run();
console.log("After run");
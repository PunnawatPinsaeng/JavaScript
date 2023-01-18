
function yayOrNay() {

    return new Promise((resolve , reject) => {

        const val = Math.round(Math.random() * 1); // * 0 or 1, at random
        val ? resolve('Lucky!!') : reject('Nope!!');
    });

};

async function message() {

    try {

        const message = await yayOrNay();
        console.log(message);
    }
    catch (err) {
        
        console.log(err);
    }

}

console.log('Start');
message();
message();
message();
message();
message();
message();
console.log('Stop');

function who() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("ZyPherX");
        } , 200);

    });

}

function what() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("lurks");
        } , 300);
    
    });

}

function where() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("in the shadows");
        } , 500);

    });

}

async function message() {

    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('We are looking for:');
message(); // * ZyPherX lurks in the shadows <-- after 1 second
console.log('Hello');
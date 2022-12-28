
// ! Date function return milliseconds that have elapsed
// ! Since midnight on January 1, 1970 , UTC
// ! This example takes 2 seconds to run

const start = Date.now();
console.log('Starting Timer...');
// ! Expected output : Starting Timer...

setTimeout(() => {

    const millis = Date.now() - start;
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    // ! Expected output : seconds elapse = 2
} , 2000);
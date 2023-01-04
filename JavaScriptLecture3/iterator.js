
let str = "Hello";

// ! Does the same as
// ! for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {

    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // * Outputs character one by one
}

for (let char of "ZyPherX") {

    // ! Triggers 7 times : once for each character
    console.log(char);
}
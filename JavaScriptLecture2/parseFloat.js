
function circumFerence(radius) {

    if (Number.isNaN(Number.parseFloat(radius))) return 0;
    return parseFloat(radius) * 2.0 * Math.PI;
}

console.log(circumFerence("4.567abcdefgh"));
// ! Expected output : 28.695307297889173

console.log(circumFerence("abcdefgh"));
// ! Expected output : 0
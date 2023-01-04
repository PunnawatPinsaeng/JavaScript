
let values1 = ['Apple' , 1 , false];
let values2 = ['Fries' , 2 , true];
let values3 = ['Mars' , 9 , 'Apple'];

function compare(val1 , val2) {

    for (let items of val1) for (let target of val2) if (items === target) return "Common Elements";
    return "No Common Elements";
}

console.log(compare(values1 , values2));
console.log(compare(values1 , values3));
console.log(compare(values2 , values3));
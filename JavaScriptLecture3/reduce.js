
const arrayOfNumber = [1 , 2 , 3 , 4];

const sum = arrayOfNumber.reduce((accumulator , currentValue) => {

    return accumulator + currentValue;
});

console.log(sum);
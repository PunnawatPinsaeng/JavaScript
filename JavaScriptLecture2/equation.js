
const equation = (value) => {

    const operand = value.split("");
    let result = parseInt(operand[0]);

    for (let index = 0 ; index < value.length ; index++) {

        if (operand[index] == "*") result *= parseInt(operand[index + 1]);
        else if (operand[index] == "/") result /= parseInt(operand[index + 1]);
        else if (operand[index] == "+") result += parseInt(operand[index + 1]);
        else if (operand[index] == "-") result -= parseInt(operand[index + 1]);
    }

    return result;
}

console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));
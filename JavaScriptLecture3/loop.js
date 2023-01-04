
const names = ['Justin' , 'Sarah' , 'Chirstopher'];

// ! While Loop

console.log('-- while --');
let index = 0;
while (index < names.length) {

    const name = names[index];
    console.log(name);
    index++;
}

// ! For Loop
console.log('-- for --');
for (let index = 0 ; index < names.length ; index++) {

    const name = names[index];
    console.log(name);
}

// ! For Of
console.log('-- for of --');
for (let name of names) {

    console.log(name);
}

// ! DO While loop **sniplet
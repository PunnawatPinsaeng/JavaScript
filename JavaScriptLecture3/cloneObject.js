
// ! Object clonning
// ! Obj Ref , Obj Clonning assign() , {... x} , JSON
// !

const obj1 = {

    person : "ZyPherX" ,
    weight : 72
}

// ! const obj2 = obj1;
// ! const obj2 = Object.assign({} , obj1);
const obj2 = {... obj1};
obj2.weight = 76;
console.log(obj1);
console.log(obj2);
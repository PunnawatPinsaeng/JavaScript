
const dog = {

    name : "Koko" ,
    age : 9 ,
    whatName() {

        return this.name;
    },

};

console.log(dog.whatName());

// ! Output : Koko
dog.name = "Tal";
console.log(dog.whatName());
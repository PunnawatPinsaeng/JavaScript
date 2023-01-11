
class Dog {

    constructor(name) {

        this._name = name;
    }

    // ! A Object Method
    introduce() {

        console.log('This is ' + this._name + ' !');
    }

    // ! A Static Method
    static bark() {

        console.log('Woof!');
    }

}

const myDog = new Dog('Koko');
myDog.introduce();

// ! Calling the static method
Dog.bark();
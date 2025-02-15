function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model =model;
}

let myCar = new Car("Toyota", "Camry");
//console.log(myCar);


let myNewCar = new Car("Tata", "Safari"); 


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}


let lemonTea = new Tea("lemon tea");
//console.log(lemonTea.describe());

function Animal(species){
    this.species =species
}

Animal.prototype.sound = function(){
    return `${ this.species} make a sound`
}

let dog = new Animal("Dog");
//console.log(dog.sound());

let Cat = new Animal("Cat");
//console.log(Cat.sound());


function drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}


let tea = new drink("tea");
let coffee = drink("Coffee")
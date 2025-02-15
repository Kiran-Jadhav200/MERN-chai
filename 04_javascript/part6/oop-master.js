let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
//console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.kiran = function () {
  return `Custom method ${this}`;
};

let MyArray = [1, 2, 3];
//console.log(MyArray.kiran());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}

let myCar = new Car("Tata", "Punch");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Tata", "Punch");
//console.log(vehOne.make);

//Enapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
//console.log();

//Abstraction

class CoffeMachine {
  start() {
    //call DB
    //filter values

    return `Starting the machine....`;
  }
  brewCoffee() {
    return `Brewing Coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone}  +  ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());

// Polymorphism

class Bird {
  fly() {
    return `Flying.....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly);
// console.log(penguin.fly);

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

//console.log(Calculator.add(1,2));

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", -50000);
console.log(emp.salary);

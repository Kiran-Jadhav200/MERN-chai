const person ={
    name:"Kiran",

    greet(){
        console.log(`Hello, my Name is ${this.name}`);
        
    }
}

person.greet();


const greetFunction = person.greet;
greetFunction();


const boundGreet = person.greet.bind({name:"kiran"});
boundGreet();

//bind, call, apply
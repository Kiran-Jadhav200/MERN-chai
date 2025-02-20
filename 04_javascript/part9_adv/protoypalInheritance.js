function Person(name){
    this.name =name;

}

Person.prototype.greet = function(){
    console.log(`Hello, my Name is ${this.name}`);
    
};

let kiran = new Person("Kiran");
kiran.greet();
[[Prototype]]
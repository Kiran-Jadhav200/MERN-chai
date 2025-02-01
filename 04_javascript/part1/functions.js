/*
1. write a function named `make tea` that takes one parameter, `typeOfTea` and retuns a string like "Making green tea" when called with "green tea" store the result in a variable named `teaOrder`
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("Tulsi tea");
console.log(teaOrder);

/*
2. create a function named 'orderTea` that takes one paramenter, `teaType`. Inside this function create another function named `confirmOrder` that return a message like "Order confirmed for chai".
call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

/*
3. write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. the function should return the total cost by multiplying the `price` and `quantity` the function should return the total cost by multiplying the `price` and `quantity`.
store the result in a variable named `totalCost`
*/

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(100, 100);

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with the argument `"earl grey."`
return the reuslt of calling `makeTea`
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);


/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with "`green tea`"
*/




const pizzaPlace = "Braydon's Pizza";
let numberOfToppings = 10;
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(`Welcome to ${pizzaPlace}, what can I get for you?`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity");
} else {
  console.log("A whole lot of pizza.");
}

console.log("Even numbers from 1 to", numberOfToppings + ":");

for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

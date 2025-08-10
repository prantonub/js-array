/*
Fruit Basket Problem
  - Start with a list of fruits
  - Add two new fruits using push()
  - Remove the last fruit using pop()
  - Show the basket after each step
*/

const fruits = ['Mango', 'Apple', 'Banana'];
console.log("Initial basket:", fruits);

fruits.push('Orange');
fruits.push('Grapes');
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

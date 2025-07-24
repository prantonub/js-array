/*
Food List Problem
  - Start with a list of foods
  - Add two more food items using push()
  - Remove the last food item using pop()
  - Show the list after each step
*/
const foods = ['Burger', 'Pizza', 'Pasta'];
console.log("Initial foods:", foods);

foods.push('Fuchka');
foods.push('Singara');
console.log("After push:", foods);

foods.pop();
console.log("After pop:", foods);

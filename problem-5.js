/*
Food List Problem with shift and unshift
    - Start with an array of food items
    - Remove the first item using shift()
    - Add a new food item at the beginning using unshift()
    - Show the array after each step
*/

const foods = ['Burger', 'Pizza', 'Pasta', 'Singara', 'Fuchka'];
console.log(foods); // Original list

foods.shift(); // Remove the first food
console.log(foods); // After removing 'Burger'

foods.unshift('Biriyani'); // Add new item at the beginning
console.log(foods); // After adding 'Biriyani'

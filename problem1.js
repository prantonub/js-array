// Problem:
// 1. You have an array of fruits: ['Apple', 'Banana', 'Cherry', 'Date']
// 2. Add two more fruits at the end.
// 3. Remove the last fruit and store in a variable called lastFruit.
// 4. Remove the first fruit and store in a variable called firstFruit.
// 5. Print the final array, and also print firstFruit and lastFruit.

const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Add two more fruits at the end
fruits.push('Mango');
fruits.push('Orange');
console.log(fruits);

// Remove the last fruit
const lastFruit = fruits.pop();
console.log(fruits);

// Remove the first fruit
const firstFruit = fruits.shift();
console.log(fruits);

// Print final array, firstFruit, and lastFruit
console.log('Final Fruits Array:', fruits);
console.log('First Fruit Removed:', firstFruit);
console.log('Last Fruit Removed:', lastFruit);

/*
Fruit Array Problem
-------------------
1. Create an array with 5 fruits: 'Mango', 'Banana', 'Apple', 'Orange', 'Pineapple'
2. Print the original array
3. Print the fruit at index 2
4. Store the 4th fruit (index 3) in a variable called 'favoriteFruit' and print it
5. Change the 1st fruit (index 0) to 'Lichi'
6. Change the last fruit (index 4) to 'Watermelon'
7. Print the updated array
*/

const fruits = ['Mango', 'Banana', 'Apple', 'Orange', 'Pineapple'];
console.log(fruits); // Step 2

console.log(fruits[2]); // Step 3

const favoriteFruit = fruits[3]; // Step 4
console.log(favoriteFruit);

fruits[0] = 'Lichi'; // Step 5
fruits[4] = 'Watermelon'; // Step 6

console.log(fruits); // Step 7

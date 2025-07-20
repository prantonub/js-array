/*
Food List Problem
    - Start with a list of food items
    - Add one food to the end
    - Remove the last two items
    - Show final food list and removed items
*/

const foods = ['Biriyani', 'Burger', 'Pizza', 'Pasta', 'Samosa'];
console.log(foods);

foods.push('Fuchka');
console.log(foods);

const removed1 = foods.pop();
const removed2 = foods.pop();
console.log(foods);

console.log(removed1, removed2);
/** output
 * [ 'Biriyani', 'Burger', 'Pizza', 'Pasta', 'Samosa' ]
[ 'Biriyani', 'Burger', 'Pizza', 'Pasta', 'Samosa', 'Fuchka' ]
[ 'Biriyani', 'Burger', 'Pizza', 'Pasta' ]
Fuchka Samosa

 */
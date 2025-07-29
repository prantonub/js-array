/*
Problem: Shopping Cart Manager

1. Start with a cart of 3 items: ['T-shirt', 'Jeans', 'Shoes']
2. Add 'Sunglasses' and 'Watch' to the cart using push()
3. Remove the last item (Watch) using pop()
4. Print:
   - Final list of items in the cart
   - The item that was removed
*/

const cart = ['T-shirt', 'Jeans', 'Shoes'];

cart.push('Sunglasses');
cart.push('Watch');

const removedItem = cart.pop();

console.log("Final cart items:", cart);
console.log("Removed item:", removedItem);

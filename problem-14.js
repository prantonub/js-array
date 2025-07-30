/*
Problem: Travel Packing List

1. Start with a packing list: ['Passport', 'Clothes', 'Toothbrush']
2. Add 'Charger' and 'Sunglasses' using push()
3. Remove the last item (Sunglasses) using pop()
4. Print:
   - Final packing list
   - The item that was removed
*/

const packingList = ['Passport', 'Clothes', 'Toothbrush'];

packingList.push('Charger');
packingList.push('Sunglasses');

const removedItem = packingList.pop();

console.log("Final packing list:", packingList);
console.log("Removed item:", removedItem);

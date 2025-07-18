// Problem:
// 1. You have an array of product prices: [1200, 800, 600, 1500, 700, 400]
// 2. Remove the first and last price from the array.
// 3. Add two new prices: 900 and 1100 at the end of the array.
// 4. Calculate the total sum of all prices in the final array.
// 5. If total sum is more than 4000, print "Big Purchase", else print "Regular Purchase".
// 6. Print the final prices array and total sum.

const prices = [1200, 800, 600, 1500, 700, 400];

// Remove first and last price
prices.shift();
prices.pop();
console.log(prices);

// Add two new prices at the end
prices.push(900);
prices.push(1100);
console.log(prices);

// Calculate total sum
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log('Total Sum:', total);

// Check if big or regular purchase
if (total > 4000) {
    console.log("Big Purchase");
} else {
    console.log("Regular Purchase");
}

// Print final prices array
console.log('Final Prices Array:', prices);

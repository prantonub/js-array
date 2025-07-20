/*
Guest List Problem (With Bengali Names in English)
    - Start with an array of guest names
    - Add a new guest at the end
    - Remove the last two guests
    - Show the array after each step
    - Finally, display the removed guest names
*/

const guests = ['Rahim', 'Karim', 'Jamal', 'Kamal', 'Sumaiya'];
console.log(guests); // Initial guest list

guests.push('Nasima'); // Add a new guest
console.log(guests); // After adding Nasima

const removedGuest1 = guests.pop(); // Remove last guest
console.log(guests); // After removing Nasima

const removedGuest2 = guests.pop(); // Remove another guest
console.log(guests); // After removing Sumaiya

console.log(removedGuest1, removedGuest2); // Removed guests

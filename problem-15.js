// 🚌 Bus Stop Management Problem

// 1. Start with a list of people waiting: ['Alice', 'Bob', 'Charlie']
// 2. Two new people ('David', 'Eva') arrive and stand at the front using unshift()
// 3. The first person in the line boards the bus using shift()
// 4. Finally:
//    - Print the updated line
//    - Print the name of the person who boarded the bus

const busLine = ['Alice', 'Bob', 'Charlie'];
console.log("Initial line:", busLine);

busLine.unshift('David', 'Eva');
console.log("After new arrivals:", busLine);

const boardedPerson = busLine.shift();
console.log("After one person boards:", busLine);

console.log("Updated bus line:", busLine);
console.log("Person who boarded:", boardedPerson);

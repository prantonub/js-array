/*
💻 Programming Language Queue at a Tech Booth

1. Start with a list of languages waiting for a demo: ['Python', 'JavaScript', 'C++']
2. Two trending languages ('Rust', 'Go') arrive and are added to the front of the line using unshift()
3. The first language in the line gets featured and leaves the queue using shift()
4. Finally:
   - Print the updated queue
   - Print the name of the language that was featured
*/

const languageQueue = ['Python', 'JavaScript', 'C++'];
console.log("Initial language queue:", languageQueue);

languageQueue.unshift('Rust', 'Go');
console.log("After trending languages arrive:", languageQueue);

const featuredLanguage = languageQueue.shift();
console.log("After featuring one language:", languageQueue);

console.log("Updated language queue:", languageQueue);
console.log("Featured language:", featuredLanguage);

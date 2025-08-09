/*
Programming Language Queue at a Tech Booth

1. Start with a list of languages waiting for a demo: ['Python', 'JavaScript', 'C++']
2. Two trending languages ('Rust', 'Go') arrive and are added to the front of the line using unshift()
3. The first language in the line gets featured and leaves the queue using shift()
4. Finally:
    Print the updated queue
    Print the name of the language that was featured
*/

const languageQueue = ['Python', 'JavaScript', 'C++'];
console.log("Initial language queue:", languageQueue);
// Output: Initial language queue: [ 'Python', 'JavaScript', 'C++' ]

languageQueue.unshift('Rust', 'Go');
console.log("After trending languages arrive:", languageQueue);
// Output: After trending languages arrive: [ 'Rust', 'Go', 'Python', 'JavaScript', 'C++' ]

const featuredLanguage = languageQueue.shift();
console.log("After featuring one language:", languageQueue);
// Output: After featuring one language: [ 'Go', 'Python', 'JavaScript', 'C++' ]

console.log("Updated language queue:", languageQueue);
// Output: Updated language queue: [ 'Go', 'Python', 'JavaScript', 'C++' ]

console.log("Featured language:", featuredLanguage);
// Output: Featured language: Rust

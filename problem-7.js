/*
Student Roll Number List Problem
  - Start with an array of roll numbers
  - Add three new roll numbers using push()
  - Remove the last roll number using pop()
  - Show the array after each step
*/
const rollNumbers = [101, 102, 103];
console.log("Initial roll numbers:", rollNumbers);

rollNumbers.push(104);
rollNumbers.push(105);
rollNumbers.push(106);
console.log("After push:", rollNumbers);

rollNumbers.pop();
console.log("After pop:", rollNumbers);

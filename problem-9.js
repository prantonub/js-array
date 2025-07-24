/*
Friend List Problem
  - Start with a list of friends
  - Add two new friends using push()
  - Remove the last friend using pop()
  - Show the list after each step
*/
const friends = ['Hasan', 'Naimul', 'Tamim'];
console.log("Initial friends:", friends);

friends.push('Shakil');
friends.push('Fahim');
console.log("After push:", friends);

friends.pop();
console.log("After pop:", friends);

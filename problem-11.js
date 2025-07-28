/*
Country List Problem
  - Start with a list of countries
  - Add two new countries using push()
  - Remove the last country using pop()
  - Show the list after each step
*/
const countries = ['Bangladesh', 'India', 'Nepal'];
console.log("Initial countries:", countries);

countries.push('Japan');
countries.push('Canada');
console.log("After push:", countries);

countries.pop();
console.log("After pop:", countries);

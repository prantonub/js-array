/*
Movie List Management Problem

You are developing a movie watchlist feature.

1. Start with an array containing 5 of your favorite movies.
2. Add 3 more movies to the end of the list using push().
3. Then remove the last 2 movies using pop().
4. Finally:
   - Print the final movie list
   - Print the names of the two removed movies
*/
// Step 1: Initial movie list
const movies = ['Inception', 'Interstellar', 'The Dark Knight', 'Shutter Island', 'Fight Club'];

// Step 2: Add 3 more movies using push()
movies.push('The Prestige', 'Memento', 'Parasite');

// Step 3: Remove the last 2 movies using pop()
const removedMovie1 = movies.pop();
const removedMovie2 = movies.pop();

// Step 4: Print the final movie list
console.log("Final Movie List:", movies);

// Step 5: Print the names of the two removed movies
console.log("Removed Movies:", removedMovie1, "and", removedMovie2);

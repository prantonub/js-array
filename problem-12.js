/*
Undo Action Tracker Problem

You’re building a simple undo system like in a text editor.

1. Start with an empty array called `actions`.
2. The user performs the following 5 actions in order: "type", "paste", "delete", "type", "paste".
   - Add them using push().
3. Then, the user undoes the last two actions.
   - Remove them using pop() and store them in variables.
4. Finally:
   - Print the list of remaining actions.
   - Print the names of the actions that were undone.
*/

const actions = [];

actions.push("type");
actions.push("paste");
actions.push("delete");
actions.push("type");
actions.push("paste");

const undo1 = actions.pop();
const undo2 = actions.pop();

console.log("Remaining actions:", actions);
console.log("Undone actions:", undo2, "and", undo1);

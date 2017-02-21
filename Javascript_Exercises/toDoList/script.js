var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
  } else if (input === "list") {
    console.log(todos);
  }
  input = prompt("What would you like to do?")
}
console.log("Good bye");

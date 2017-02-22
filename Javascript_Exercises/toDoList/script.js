var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "new") {
    addTodo();
  } else if (input === "list") {
    listTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?")
}
console.log("Good bye");

// Functions for Todo app
function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
};
function listTodo() {
  console.log("*************");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("*************");
};
function deleteTodo() {
  var index = prompt("Enter the index of todo to delete");
  todos.splice(index, 1);
  console.log("Todo has been deleted");
};

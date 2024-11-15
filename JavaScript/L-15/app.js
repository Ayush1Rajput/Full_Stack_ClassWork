document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector('input[type="text"]');
  const todoList = document.querySelector("div > section");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== "") {
      addTodo(todoText);
      input.value = "";
    }
  });

  function addTodo(text) {
    const todoItem = document.createElement("div");
    todoItem.style.display = "flex";
    todoItem.style.justifyContent = "space-between";
    todoItem.style.color = "white";
    todoItem.style.margin = "10px";

    todoItem.className = "todo-item";
    todoItem.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
});

const API_URL = "https://dummyjson.com/todos";
let todosList = [];

async function fetchTodos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    todosList = data.todos;
    displayTodos(todosList);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function displayTodos(todos) {
  const container = document.getElementById("todo-container");
  container.innerHTML = "";

  todos.forEach((todo) => {
    const { id, todo: title, completed } = todo;
    const todoEl = document.createElement("div");
    todoEl.classList.add("todo");
    if (completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerHTML = `
      <span><strong>#:</strong> ${id}</span>
      <span>${title}</span>
      <span class="status">${completed ? "✅" : "❌"}</span>
    `;
    container.appendChild(todoEl);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredTodos = todosList.filter((todo) =>
    todo.todo.toLowerCase().includes(searchTerm)
  );
  displayTodos(filteredTodos);
});

fetchTodos();

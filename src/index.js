import { pubsub } from "./pubsub";
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
todoButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();
    
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.textContent = "+";
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.textContent = "-";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
}







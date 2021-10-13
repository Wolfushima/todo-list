import { pubsub } from "./pubsub.js";

export class Todo {
    constructor(title, priority, date, description) {
        this.title = title;
        this.priority = priority;
        this.date = date;
        this.description = description;
    }
}

export const todos = {
    todosList: [],
    init: () => {
        pubsub.subscribe("todoAdded", todos.todoAdded);
    },
    todoAdded: todo => {
        todos.todosList.push(todo)
        // pubsub.publish("todosUpdated", todos.todoList)
        todos.todoCreateElement(todo);
        const checkButton = document.querySelectorAll(".complete-button");
        const trashButton = document.querySelectorAll(".trash-button");

        checkButton.forEach(button => {
            button.addEventListener("click", todos.todoChecked);
        })
        trashButton.forEach(button => {
            button.addEventListener("click", todos.todoTrashed);
        })
    },
    todoChecked: event => {
        console.log("");
    },
    todoTrashed: event => {
        let todoWrapper = event.target.closest(".todo-wrapper");
        todoWrapper.parentElement.removeChild(todoWrapper);
    },
    todoCreateElement: todo => {
        const todoList = document.querySelector(".todo-list");
        const todoWrapper = document.createElement("div");
        todoWrapper.classList.add("todo-wrapper");

        //TODO ELEMENT CONTENT
        //title
        const todoTitleDiv = document.createElement("div");
        todoTitleDiv.classList.add("todo");
        todoTitleDiv.classList.add("todo-element-title");

        const newTodoTitle = document.createElement("h3");
        newTodoTitle.textContent = "Todo Title";
        todoTitleDiv.appendChild(newTodoTitle);

        //date
        const todoDateDiv = document.createElement("div");
        todoDateDiv.classList.add("todo");
        todoDateDiv.classList.add("todo-element-date");

        const newTodoDate = document.createElement("h3");
        newTodoDate.textContent = "Todo Date Due";
        todoDateDiv.appendChild(newTodoDate);

        //description
        const todoDescriptionDiv = document.createElement("div");
        todoDescriptionDiv.classList.add("todo");
        todoDescriptionDiv.classList.add("todo-element-description");

        const newTodoDescription = document.createElement("li");
        newTodoDescription.textContent = todo.description;
        newTodoDescription.classList.add("todo-item");
        todoDescriptionDiv.appendChild(newTodoDescription);

        //CHECK MARK BUTTON
        const completedButton = document.createElement("button");
        completedButton.textContent = "+";
        completedButton.classList.add("complete-button");
        todoDescriptionDiv.appendChild(completedButton);

        //CHECK TRASH BUTTON
        const trashButton = document.createElement("button");
        trashButton.textContent = "-";
        trashButton.classList.add("trash-button");
        todoDescriptionDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoWrapper.appendChild(todoTitleDiv);
        todoWrapper.appendChild(todoDateDiv);
        todoWrapper.appendChild(todoDescriptionDiv);

        todoList.appendChild(todoWrapper);
    }
}
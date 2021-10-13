import { pubsub } from "./pubsub.js";
import { Todo } from "./todos.js";

export const todoForm = {
    //QuerySelectors
    title: document.querySelector(".todo-title"),
    priority: document.getElementById("filter-todo"),
    date: document.getElementById("date"),
    description: document.querySelector(".todo-description"),

    init: () => {
        const todoButton = document.querySelector(".todo-button");
        todoButton.addEventListener("click", todoForm.add);
    },
    add: event => {
        event.preventDefault();
        console.log(todoForm.title.value);
        console.log(todoForm.priority.value);
        console.log(date.value);
        console.log(todoForm.description.value);
        const todo = new Todo(todoForm.title.value, todoForm.priority.value, date.value, todoForm.description.value);
        pubsub.publish("todoAdded", todo);
    }
}
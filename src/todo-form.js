import { pubsub } from "./pubsub.js";
import { Todo } from "./todos.js";

export const todoForm = {
    init: () => {
        const form = document.querySelector("#hero-form");
        form.addEventListener("submit", todoForm.add);
    },
    add: event => {
        event.preventDefault();
        const title = document.querySelector(".todo-title").value;
        let priority = document.getElementById("filter-todo").value;
        const date = document.getElementById("date").value;
        const description = document.querySelector(".todo-description").value;

        if (priority === "") { priority = "normal" };

        const todo = new Todo(title, priority, date, description);
        pubsub.publish("todoAdded", todo);
    }
}
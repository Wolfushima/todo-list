import { pubsub } from "./pubsub.js";

class Todo {
    constructor(title, priority, date, description) {
        this.title = title;
        this.priority = priority;
        this.date = date;
        this.description = description;
    }
}

export const todoForm = {
    form: document.querySelector("#hero-form"),
    init: () => {
        todoForm.form.addEventListener("submit", todoForm.add);
    },
    add: event => {
        event.preventDefault();
        const title = document.querySelector(".todo-title").value;
        let priority = document.getElementById("filter-todo").value;
        const date = document.getElementById("date").value;
        const description = document.querySelector(".todo-description").value;

        if (priority === "") { priority = "normal" };

        const todo = new Todo(title, priority, date, description);
        pubsub.publish("todoForm", todo);
        todoForm.form.reset();
    }
}
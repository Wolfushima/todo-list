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
        todoForm.openForm();
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
        todoForm.handleOpenFormBtn();
        todoForm.handleForm();
    },
    openForm: () => {
        const openFormBtn = document.querySelector(".open-form-btn");
        const formBtn = document.querySelector("form button");
        const formTitle = document.querySelector(".todo-title");
        const formSelect = document.querySelector(".select");
        const formDate = document.querySelector(".date-picker");
        const formDescription = document.querySelector(".todo-description");

        openFormBtn.addEventListener("click", () => {
            openFormBtn.style.display = "none";
            formBtn.style.display = "flex";
            formTitle.style.display = "block";
            formSelect.style.display = "block";
            formDate.style.display = "block";
            formDescription.style.display = "block";
        })
    },
    handleOpenFormBtn: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const openFormBtn = document.querySelector(".open-form-btn");
        if ((mediaQuery.matches) && (openFormBtn.style.display === "none")) {
            openFormBtn.style.display = "block";
        }
    },
    handleForm: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const formBtn = document.querySelector("form button");
        const formTitle = document.querySelector(".todo-title");
        const formSelect = document.querySelector(".select");
        const formDate = document.querySelector(".date-picker");
        const formDescription = document.querySelector(".todo-description");

        if (mediaQuery.matches) {
            formBtn.style.display = "none";
            formTitle.style.display = "none";
            formSelect.style.display = "none";
            formDate.style.display = "none";
            formDescription.style.display = "none";
        }
    }
}
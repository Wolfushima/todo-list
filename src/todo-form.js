import { fil } from "date-fns/locale";
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
        todoForm.handleFilter();
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
        const hideFormBtn = document.querySelector(".hide-form-btn");
        const formTitle = document.querySelector(".todo-title");
        const formSelect = document.querySelector(".select");
        const formDate = document.querySelector(".date-picker");
        const formDescription = document.querySelector(".todo-description");
        const filterIcon = document.querySelector(".filter-icon");
        const mediaQuery = window.matchMedia('(max-width: 900px)');
        const nav = document.querySelector("nav");

        openFormBtn.addEventListener("click", () => {
            filterIcon.style.display = "none";
            openFormBtn.style.display = "none";
            hideFormBtn.style.display = "flex";
            formBtn.style.display = "flex";
            formTitle.style.display = "block";
            formSelect.style.display = "block";
            formDate.style.display = "block";
            formDescription.style.display = "block";
        })

        hideFormBtn.addEventListener("click", () => {
            formBtn.style.display = "none";
            formTitle.style.display = "none";
            formSelect.style.display = "none";
            formDate.style.display = "none";
            formDescription.style.display = "none";
            hideFormBtn.style.display = "none";
            filterIcon.style.display = "block";
            openFormBtn.style.display = "block";
            todoForm.form.reset();
        })

        //Handle Responsiveness
        if (mediaQuery.matches) {
            nav.style.display = "none";
        }
        else {
            openFormBtn.style.display = "none";
        }
        window.addEventListener("resize", () => {
            if (mediaQuery.matches) {
                filterIcon.style.display = "block";
                nav.style.display = "none";
                openFormBtn.style.display = "block";
                formBtn.style.display = "none";
                formTitle.style.display = "none";
                formSelect.style.display = "none";
                formDate.style.display = "none";
                formDescription.style.display = "none";
                hideFormBtn.style.display = "none";
            }
            else {
                nav.style.display = "flex";
                openFormBtn.style.display = "none";
                filterIcon.style.display = "none";
                formBtn.style.display = "flex";
                formTitle.style.display = "block";
                formSelect.style.display = "block";
                formDate.style.display = "block";
                formDescription.style.display = "block";
                hideFormBtn.style.display = "none";
            }
        })
    },
    handleOpenFormBtn: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const openFormBtn = document.querySelector(".open-form-btn");
        const filterIcon = document.querySelector(".filter-icon");
        if ((mediaQuery.matches) && (openFormBtn.style.display === "none")) {
            openFormBtn.style.display = "block";
            filterIcon.style.display = "block";
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
    },
    handleFilter: () => {
        const filterIcon = document.querySelector(".filter-icon");
        const openFormBtn = document.querySelector(".open-form-btn");
        const nav = document.querySelector("nav");
        filterIcon.addEventListener("click", () => {
            if (nav.style.display === "none") {
                nav.style.display = "flex";
                openFormBtn.style.display = "none";
            }
            else {
                nav.style.display = "none";
                openFormBtn.style.display = "block";
            }
        })
    }
}
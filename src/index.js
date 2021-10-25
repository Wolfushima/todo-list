import { pubsub } from "./pubsub.js";
import { todoForm } from "./todo-form.js";
import { todos } from "./todos.js";
import { storage } from "./storage.js";
import { today } from "./today.js";

// FORM
    // each todo is gonna have a title,
    //                           priority(normal, anytime, important),
    //                           date(except anytime),
    //                           description property

// BUTTONS
    //  for each button we are gonna do different things
    // today is gonna filter todos with the current date,
    // upcoming is gonna filter todos with a date between current date and next 7 days.
    // anytime and important is gonna filter todos labeled with that tag

// TODOS
    // each todo is gonna be stored inside an array
// PROJECTS
    // 

document.addEventListener("DOMContentLoaded", () => {
    todos.init();
    todoForm.init();
    storage.init();
    today.init();
})







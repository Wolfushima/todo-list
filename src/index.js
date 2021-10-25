import { pubsub } from "./pubsub.js";
import { todoForm } from "./todo-form.js";
import { todos } from "./todos.js";
import { storage } from "./storage.js";
import { todayTodos } from "./today.js";
import { importantTodos } from "./important.js"
import { anytimeTodos } from "./anytime.js";
import { upcomingTodos } from "./upcoming.js";


document.addEventListener("DOMContentLoaded", () => {
    todos.init();
    todoForm.init();
    storage.init();
    todayTodos.init();
    anytimeTodos.init();
    importantTodos.init();
    upcomingTodos.init();
})







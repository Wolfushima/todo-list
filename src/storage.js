import { pubsub } from "./pubsub.js";

export const storage = {
    init: () => {
        storage.renderTodos();
        pubsub.subscribe("todoAdded", storage.saveLocalTodos);
    },
    saveLocalTodos: todo => {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }

        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    },
    renderTodos: () => {
        let storedTodos;
        if (localStorage.getItem("todos") === null) {
            storedTodos = [];
        }
        else {
            storedTodos = JSON.parse(localStorage.getItem("todos"));
        }

        pubsub.publish("storedTodos", storedTodos);
    }
}

import { pubsub } from "./pubsub.js";

export const storage = {
    init: () => {
        storage.renderTodos();
        pubsub.subscribe("todoAdded", storage.saveLocalTodos);
        pubsub.subscribe("todosUpdated", storage.updateLocalStorage);
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
    },
    updateLocalStorage: toDeleteTodos => {
        let storedTodos;
        if (localStorage.getItem("todos") === null) {
            storedTodos = [];
        }
        else {
            storedTodos = JSON.parse(localStorage.getItem("todos"));
        }

        storedTodos = toDeleteTodos;
        localStorage.setItem("todos", JSON.stringify(storedTodos));
    }
}

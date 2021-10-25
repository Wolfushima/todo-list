import { pubsub } from "./pubsub.js";

export const todos = {
    todosList: [],
    init: () => {
        pubsub.subscribe("todoForm", todos.handleTodo);
        pubsub.subscribe("storedTodos", todos.renderStoredTodos);
    },
    renderStoredTodos: storedTodos => {
        storedTodos.forEach(todo => {
            todos.todoAdded(todo)
        })
    },
    handleTodo: todo => {
        //CHECK IF TODO ALREADY EXIST
        function arrayEquals(a, b) {
            return Array.isArray(a) && Array.isArray(b) &&
                   a.length === b.length &&
                   a.every((val, index) => val === b[index])
        }

        if (todos.todosList.some(element => { return arrayEquals(Object.values(element), Object.values(todo)); })) {
            alert("Todo already exists.");
        }
        else {
            todos.todoAdded(todo);
            pubsub.publish("todoAdded", todo);
        }
    },
    todoAdded: todo => {
        todos.todosList.push(todo)
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
        console.log(todos.todosList)
    },
    todoTrashed: event => {
        let todoWrapper = event.target.closest(".todo-wrapper");
        let todoTitle = todoWrapper.querySelector(".title-content").textContent;
        let todoDate = todoWrapper.querySelector(".date-content").textContent;
        let todoDescription = todoWrapper.querySelector(".description-content").textContent;
        let todoIndex = todos.todosList.findIndex(element => {
            return element.title === todoTitle && element.date === todoDate && element.description === todoDescription;
        })

        todos.todosList.splice(todoIndex, 1);

        todoWrapper.parentElement.removeChild(todoWrapper);

        // PUBSUB PUBLISH
        pubsub.publish("todosUpdated", todos.todosList);
    },
    todoCreateElement: todo => {
        const todoList = document.querySelector(".todo-list");
        const todoWrapper = document.createElement("div");
        todoWrapper.classList.add("todo-wrapper");

        //CHECK PRIORITY
        todos.todoCheckPriority(todo, todoWrapper);

        //TODO ELEMENT CONTENT
        //title
        const todoTitleDiv = document.createElement("div");
        todoTitleDiv.classList.add("todo");
        todoTitleDiv.classList.add("todo-element-title");

        const newTodoTitle = document.createElement("h3");
        newTodoTitle.classList.add("title-content");
        newTodoTitle.textContent = todo.title;
        todoTitleDiv.appendChild(newTodoTitle);

        //date
        const todoDateDiv = document.createElement("div");
        todoDateDiv.classList.add("todo");
        todoDateDiv.classList.add("todo-element-date");

        const newTodoDate = document.createElement("h3");
        newTodoDate.classList.add("date-content");
        newTodoDate.textContent = todo.date;
        todoDateDiv.appendChild(newTodoDate);

        //description
        const todoDescriptionDiv = document.createElement("div");
        todoDescriptionDiv.classList.add("todo");
        todoDescriptionDiv.classList.add("todo-element-description");

        const newTodoDescription = document.createElement("li");
        newTodoDescription.textContent = todo.description;
        newTodoDescription.classList.add("description-content");
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
    },
    todoCheckPriority: (todo, todoWrapper) => {
        if (todo.priority === "important") {
            todoWrapper.style.background = "red";
            todoWrapper.classList.add("important");
        }
    }
}
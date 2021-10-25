/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/important.js":
/*!**************************!*\
  !*** ./src/important.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importantTodos": () => (/* binding */ importantTodos)
/* harmony export */ });
const importantTodos = {
    init: () => {
        const importantBtn = document.querySelector(".important-btn");
        importantBtn.addEventListener("click", importantTodos.render);
    },
    render: () => {
        const todoWrapper = document.querySelectorAll(".todo-wrapper");
        const notImportant = [...todoWrapper].filter(node => 
            !node.classList.contains("important")
        )
        const important = [...todoWrapper].filter(node => 
            node.classList.contains("important")
        )
        notImportant.forEach(element => {
            element.style.display = "none";
        })
        important.forEach(element => {
            element.style.display = "block";
        })
    }
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
//Pubsub facilitates loosely coupled modules
const pubsub = {
    events: {},
    subscribe: function(evName, fn) {
      console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
      //add an event with a name as new or to existing list
      this.events[evName] = this.events[evName] || [];
      this.events[evName].push(fn);
    },
    unsubscribe: function(evName, fn) {
      console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
      //remove an event function by name
      if (this.events[evName]) {
        this.events[evName] = this.events[evName].filter(f => f !== fn);
      }
    },
    publish: function(evName, data) {
      console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
      //emit|publish|announce the event to anyone who is subscribed
      if (this.events[evName]) {
        this.events[evName].forEach(f => {
          f(data);
        });
      }
    }
};

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


const storage = {
    init: () => {
        storage.renderTodos();
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoAdded", storage.saveLocalTodos);
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todosUpdated", storage.updateLocalStorage);
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

        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("storedTodos", storedTodos);
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


/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todayTodos": () => (/* binding */ todayTodos)
/* harmony export */ });
const todayTodos = {
    init: () => {
        const todayBtn = document.querySelector(".today-btn");
        todayBtn.addEventListener("click", todayTodos.render);
    },
    render: () => {
        let todayDate = new Date().toJSON().slice(0,10);
        const dateContent = document.querySelectorAll(".date-content");
        const notToday = [...dateContent].filter(node => 
            node.textContent != todayDate
        )
        const today = [...dateContent].filter(node => 
            node.textContent === todayDate
        )
        notToday.forEach(element => {
            element.closest(".todo-wrapper").style.display = "none";
        })
        today.forEach(element => {
            element.closest(".todo-wrapper").style.display = "block";
        })
    }
}

/***/ }),

/***/ "./src/todo-form.js":
/*!**************************!*\
  !*** ./src/todo-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoForm": () => (/* binding */ todoForm)
/* harmony export */ });
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


class Todo {
    constructor(title, priority, date, description) {
        this.title = title;
        this.priority = priority;
        this.date = date;
        this.description = description;
    }
}

const todoForm = {
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
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoForm", todo);
        todoForm.form.reset();
    }
}

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");


const todos = {
    todosList: [],
    init: () => {
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoForm", todos.handleTodo);
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("storedTodos", todos.renderStoredTodos);
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
            _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoAdded", todo);
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
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todosUpdated", todos.todosList);
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
/* harmony import */ var _todo_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form.js */ "./src/todo-form.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _important_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./important.js */ "./src/important.js");







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
    _todos_js__WEBPACK_IMPORTED_MODULE_2__.todos.init();
    _todo_form_js__WEBPACK_IMPORTED_MODULE_1__.todoForm.init();
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.init();
    _today_js__WEBPACK_IMPORTED_MODULE_4__.todayTodos.init();
    _important_js__WEBPACK_IMPORTED_MODULE_5__.importantTodos.init();
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNLO0FBQ1A7QUFDSTtBQUNDO0FBQ087O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVU7QUFDZCxJQUFJLHdEQUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsSUFBSSxzREFBZTtBQUNuQixJQUFJLDhEQUFtQjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGltcG9ydGFudFRvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbXBvcnRhbnQtYnRuXCIpO1xuICAgICAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGltcG9ydGFudFRvZG9zLnJlbmRlcik7XG4gICAgfSxcbiAgICByZW5kZXI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8td3JhcHBlclwiKTtcbiAgICAgICAgY29uc3Qgbm90SW1wb3J0YW50ID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgICFub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImltcG9ydGFudFwiKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IFsuLi50b2RvV3JhcHBlcl0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImltcG9ydGFudFwiKVxuICAgICAgICApXG4gICAgICAgIG5vdEltcG9ydGFudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGltcG9ydGFudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCIvL1B1YnN1YiBmYWNpbGl0YXRlcyBsb29zZWx5IGNvdXBsZWQgbW9kdWxlc1xuZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKGYgPT4gZiAhPT0gZm4pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2UucmVuZGVyVG9kb3MoKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9BZGRlZFwiLCBzdG9yYWdlLnNhdmVMb2NhbFRvZG9zKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9zVXBkYXRlZFwiLCBzdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSk7XG4gICAgfSxcbiAgICBzYXZlTG9jYWxUb2RvczogdG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvcztcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRvZG9zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfSxcbiAgICByZW5kZXJUb2RvczogKCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkVG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZWRUb2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJzdG9yZWRUb2Rvc1wiLCBzdG9yZWRUb2Rvcyk7XG4gICAgfSxcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2U6IHRvRGVsZXRlVG9kb3MgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkVG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZWRUb2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVkVG9kb3MgPSB0b0RlbGV0ZVRvZG9zO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFRvZG9zKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHRvZGF5VG9kb3MgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktYnRuXCIpO1xuICAgICAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXlUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApO1xuICAgICAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZS1jb250ZW50XCIpO1xuICAgICAgICBjb25zdCBub3RUb2RheSA9IFsuLi5kYXRlQ29udGVudF0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ICE9IHRvZGF5RGF0ZVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPT09IHRvZGF5RGF0ZVxuICAgICAgICApXG4gICAgICAgIG5vdFRvZGF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgdG9kYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2RvRm9ybSA9IHtcbiAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm8tZm9ybVwiKSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHRvZG9Gb3JtLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0b2RvRm9ybS5hZGQpO1xuICAgIH0sXG4gICAgYWRkOiBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci10b2RvXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiXCIpIHsgcHJpb3JpdHkgPSBcIm5vcm1hbFwiIH07XG5cbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcInRvZG9Gb3JtXCIsIHRvZG8pO1xuICAgICAgICB0b2RvRm9ybS5mb3JtLnJlc2V0KCk7XG4gICAgfVxufSIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgY29uc3QgdG9kb3MgPSB7XG4gICAgdG9kb3NMaXN0OiBbXSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2RvRm9ybVwiLCB0b2Rvcy5oYW5kbGVUb2RvKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInN0b3JlZFRvZG9zXCIsIHRvZG9zLnJlbmRlclN0b3JlZFRvZG9zKTtcbiAgICB9LFxuICAgIHJlbmRlclN0b3JlZFRvZG9zOiBzdG9yZWRUb2RvcyA9PiB7XG4gICAgICAgIHN0b3JlZFRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICB0b2Rvcy50b2RvQWRkZWQodG9kbylcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZVRvZG86IHRvZG8gPT4ge1xuICAgICAgICAvL0NIRUNLIElGIFRPRE8gQUxSRUFEWSBFWElTVFxuICAgICAgICBmdW5jdGlvbiBhcnJheUVxdWFscyhhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSAmJiBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgICAgICAgICAgICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b2Rvcy50b2Rvc0xpc3Quc29tZShlbGVtZW50ID0+IHsgcmV0dXJuIGFycmF5RXF1YWxzKE9iamVjdC52YWx1ZXMoZWxlbWVudCksIE9iamVjdC52YWx1ZXModG9kbykpOyB9KSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUb2RvIGFscmVhZHkgZXhpc3RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9zLnRvZG9BZGRlZCh0b2RvKTtcbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidG9kb0FkZGVkXCIsIHRvZG8pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0b2RvQWRkZWQ6IHRvZG8gPT4ge1xuICAgICAgICB0b2Rvcy50b2Rvc0xpc3QucHVzaCh0b2RvKVxuICAgICAgICB0b2Rvcy50b2RvQ3JlYXRlRWxlbWVudCh0b2RvKTtcblxuICAgICAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcGxldGUtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtYnV0dG9uXCIpO1xuXG4gICAgICAgIGNoZWNrQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb3MudG9kb0NoZWNrZWQpO1xuICAgICAgICB9KVxuICAgICAgICB0cmFzaEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9zLnRvZG9UcmFzaGVkKTtcbiAgICAgICAgfSlcblxuICAgIH0sXG4gICAgdG9kb0NoZWNrZWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MudG9kb3NMaXN0KVxuICAgIH0sXG4gICAgdG9kb1RyYXNoZWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHRvZG9XcmFwcGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpO1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0RhdGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGVudFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tY29udGVudFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHRvZG9JbmRleCA9IHRvZG9zLnRvZG9zTGlzdC5maW5kSW5kZXgoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC50aXRsZSA9PT0gdG9kb1RpdGxlICYmIGVsZW1lbnQuZGF0ZSA9PT0gdG9kb0RhdGUgJiYgZWxlbWVudC5kZXNjcmlwdGlvbiA9PT0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9zLnRvZG9zTGlzdC5zcGxpY2UodG9kb0luZGV4LCAxKTtcblxuICAgICAgICB0b2RvV3JhcHBlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRvZG9XcmFwcGVyKTtcblxuICAgICAgICAvLyBQVUJTVUIgUFVCTElTSFxuICAgICAgICBwdWJzdWIucHVibGlzaChcInRvZG9zVXBkYXRlZFwiLCB0b2Rvcy50b2Rvc0xpc3QpO1xuICAgIH0sXG4gICAgdG9kb0NyZWF0ZUVsZW1lbnQ6IHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXdyYXBwZXJcIik7XG5cbiAgICAgICAgLy9DSEVDSyBQUklPUklUWVxuICAgICAgICB0b2Rvcy50b2RvQ2hlY2tQcmlvcml0eSh0b2RvLCB0b2RvV3JhcHBlcik7XG5cbiAgICAgICAgLy9UT0RPIEVMRU1FTlQgQ09OVEVOVFxuICAgICAgICAvL3RpdGxlXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdUb2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvVGl0bGUpO1xuXG4gICAgICAgIC8vZGF0ZVxuICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgICAgICB0b2RvRGF0ZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGF0ZSk7XG5cbiAgICAgICAgLy9kZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1jb250ZW50XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAvL0NIRUNLIE1BUksgQlVUVE9OXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgICAgICAgLy9DSEVDSyBUUkFTSCBCVVRUT05cbiAgICAgICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0cmFzaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLVwiO1xuICAgICAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtYnV0dG9uXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgICAgIC8vQVBQRU5EIFRPIExJU1RcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGVEaXYpO1xuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9XcmFwcGVyKTtcbiAgICB9LFxuICAgIHRvZG9DaGVja1ByaW9yaXR5OiAodG9kbywgdG9kb1dyYXBwZXIpID0+IHtcbiAgICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgICAgICAgIHRvZG9XcmFwcGVyLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImltcG9ydGFudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IHsgdG9kb0Zvcm0gfSBmcm9tIFwiLi90b2RvLWZvcm0uanNcIjtcbmltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyB0b2RheVRvZG9zIH0gZnJvbSBcIi4vdG9kYXkuanNcIjtcbmltcG9ydCB7IGltcG9ydGFudFRvZG9zIH0gZnJvbSBcIi4vaW1wb3J0YW50LmpzXCJcblxuLy8gRk9STVxuICAgIC8vIGVhY2ggdG9kbyBpcyBnb25uYSBoYXZlIGEgdGl0bGUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eShub3JtYWwsIGFueXRpbWUsIGltcG9ydGFudCksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlKGV4Y2VwdCBhbnl0aW1lKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIHByb3BlcnR5XG5cbi8vIEJVVFRPTlNcbiAgICAvLyAgZm9yIGVhY2ggYnV0dG9uIHdlIGFyZSBnb25uYSBkbyBkaWZmZXJlbnQgdGhpbmdzXG4gICAgLy8gdG9kYXkgaXMgZ29ubmEgZmlsdGVyIHRvZG9zIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSxcbiAgICAvLyB1cGNvbWluZyBpcyBnb25uYSBmaWx0ZXIgdG9kb3Mgd2l0aCBhIGRhdGUgYmV0d2VlbiBjdXJyZW50IGRhdGUgYW5kIG5leHQgNyBkYXlzLlxuICAgIC8vIGFueXRpbWUgYW5kIGltcG9ydGFudCBpcyBnb25uYSBmaWx0ZXIgdG9kb3MgbGFiZWxlZCB3aXRoIHRoYXQgdGFnXG5cbi8vIFRPRE9TXG4gICAgLy8gZWFjaCB0b2RvIGlzIGdvbm5hIGJlIHN0b3JlZCBpbnNpZGUgYW4gYXJyYXlcbi8vIFBST0pFQ1RTXG4gICAgLy8gXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB0b2Rvcy5pbml0KCk7XG4gICAgdG9kb0Zvcm0uaW5pdCgpO1xuICAgIHN0b3JhZ2UuaW5pdCgpO1xuICAgIHRvZGF5VG9kb3MuaW5pdCgpO1xuICAgIGltcG9ydGFudFRvZG9zLmluaXQoKTtcbn0pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
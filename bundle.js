/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");



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

        const todo = new _todos_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, priority, date, description);
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoAdded", todo);
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
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "todos": () => (/* binding */ todos)
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

//  Things TO ADD
//  prevent adding a todo when there is already one with the same values

//  Make a storage module
//      - Inside this module make an object literal with the name of storage
//        subscribe to "todoAdded" todos.todoAdded
//      - Make a method that when the page renders it publish an array with all the todos stored in the storage
//        publish to "todoAdded" todos.todoAdded (will probably have to change todoCreateElement method
//        to a spread operator syntax so it can take multiple objects, and for each object create the element)


const todos = {
    todosList: [],
    init: () => {
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoAdded", todos.todoAdded);
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("storedTodos", todos.renderStoredTodos);
    },
    renderStoredTodos: storedTodos => {
        storedTodos.forEach(todo => {
            todos.todoAdded(todo)
        })
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
        // pubsub.publish("todosUpdated", todos.todoList)
    },
    todoChecked: event => {
        console.log(_pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.events)
        console.log(todos.todosList)
    },
    todoTrashed: event => {
        let todoWrapper = event.target.closest(".todo-wrapper");
        let todoTitle = todoWrapper.querySelector(".title-content").textContent;
        let todoDate = todoWrapper.querySelector(".date-content").textContent;
        let todoDescription = todoWrapper.querySelector(".description-content").textContent;

        todos.todosList = todos.todosList.filter(todo => {
            return (todo.title !== todoTitle) && (todo.date !== todoDate) && (todo.description !== todoDescription);
        })

        todoWrapper.parentElement.removeChild(todoWrapper);
    },
    todoCreateElement: todo => {
        const todoList = document.querySelector(".todo-list");
        const todoWrapper = document.createElement("div");
        todoWrapper.classList.add("todo-wrapper");

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
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQLGNBQWM7QUFDZDtBQUNBLG1FQUFtRSxPQUFPO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDREQUE0RCxPQUFPO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdURBQXVELFFBQVEsT0FBTyxLQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJxQzs7QUFFOUI7QUFDUDtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsc0RBQWM7QUFDdEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnFDO0FBQ0g7O0FBRTNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CLHlCQUF5QiwyQ0FBSTtBQUM3QixRQUFRLHNEQUFjO0FBQ3RCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUM7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsd0RBQWdCO0FBQ3hCLFFBQVEsd0RBQWdCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixxREFBYTtBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDdkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDSztBQUNQO0FBQ0k7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVU7QUFDZCxJQUFJLHdEQUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHVic3ViIGZhY2lsaXRhdGVzIGxvb3NlbHkgY291cGxlZCBtb2R1bGVzXG5leHBvcnQgY29uc3QgcHVic3ViID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhbiBicm9hZGNhc3QgYWJvdXQgJHtldk5hbWV9IHdpdGggJHtkYXRhfWApO1xuICAgICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgc3RvcmFnZS5yZW5kZXJUb2RvcygpO1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0FkZGVkXCIsIHN0b3JhZ2Uuc2F2ZUxvY2FsVG9kb3MpO1xuICAgIH0sXG4gICAgc2F2ZUxvY2FsVG9kb3M6IHRvZG8gPT4ge1xuICAgICAgICBsZXQgdG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0b2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH0sXG4gICAgcmVuZGVyVG9kb3M6ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRvZG9zO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic3RvcmVkVG9kb3NcIiwgc3RvcmVkVG9kb3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCB0b2RvRm9ybSA9IHtcbiAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm8tZm9ybVwiKSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHRvZG9Gb3JtLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0b2RvRm9ybS5hZGQpO1xuICAgIH0sXG4gICAgYWRkOiBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci10b2RvXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiXCIpIHsgcHJpb3JpdHkgPSBcIm5vcm1hbFwiIH07XG5cbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcInRvZG9BZGRlZFwiLCB0b2RvKTtcbiAgICAgICAgdG9kb0Zvcm0uZm9ybS5yZXNldCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbi8vICBUaGluZ3MgVE8gQUREXG4vLyAgcHJldmVudCBhZGRpbmcgYSB0b2RvIHdoZW4gdGhlcmUgaXMgYWxyZWFkeSBvbmUgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcblxuLy8gIE1ha2UgYSBzdG9yYWdlIG1vZHVsZVxuLy8gICAgICAtIEluc2lkZSB0aGlzIG1vZHVsZSBtYWtlIGFuIG9iamVjdCBsaXRlcmFsIHdpdGggdGhlIG5hbWUgb2Ygc3RvcmFnZVxuLy8gICAgICAgIHN1YnNjcmliZSB0byBcInRvZG9BZGRlZFwiIHRvZG9zLnRvZG9BZGRlZFxuLy8gICAgICAtIE1ha2UgYSBtZXRob2QgdGhhdCB3aGVuIHRoZSBwYWdlIHJlbmRlcnMgaXQgcHVibGlzaCBhbiBhcnJheSB3aXRoIGFsbCB0aGUgdG9kb3Mgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG4vLyAgICAgICAgcHVibGlzaCB0byBcInRvZG9BZGRlZFwiIHRvZG9zLnRvZG9BZGRlZCAod2lsbCBwcm9iYWJseSBoYXZlIHRvIGNoYW5nZSB0b2RvQ3JlYXRlRWxlbWVudCBtZXRob2Rcbi8vICAgICAgICB0byBhIHNwcmVhZCBvcGVyYXRvciBzeW50YXggc28gaXQgY2FuIHRha2UgbXVsdGlwbGUgb2JqZWN0cywgYW5kIGZvciBlYWNoIG9iamVjdCBjcmVhdGUgdGhlIGVsZW1lbnQpXG5cblxuZXhwb3J0IGNvbnN0IHRvZG9zID0ge1xuICAgIHRvZG9zTGlzdDogW10sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0FkZGVkXCIsIHRvZG9zLnRvZG9BZGRlZCk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJzdG9yZWRUb2Rvc1wiLCB0b2Rvcy5yZW5kZXJTdG9yZWRUb2Rvcyk7XG4gICAgfSxcbiAgICByZW5kZXJTdG9yZWRUb2Rvczogc3RvcmVkVG9kb3MgPT4ge1xuICAgICAgICBzdG9yZWRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgdG9kb3MudG9kb0FkZGVkKHRvZG8pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB0b2RvQWRkZWQ6IHRvZG8gPT4ge1xuICAgICAgICB0b2Rvcy50b2Rvc0xpc3QucHVzaCh0b2RvKVxuICAgICAgICB0b2Rvcy50b2RvQ3JlYXRlRWxlbWVudCh0b2RvKTtcblxuICAgICAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcGxldGUtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtYnV0dG9uXCIpO1xuXG4gICAgICAgIGNoZWNrQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb3MudG9kb0NoZWNrZWQpO1xuICAgICAgICB9KVxuICAgICAgICB0cmFzaEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9zLnRvZG9UcmFzaGVkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcHVic3ViLnB1Ymxpc2goXCJ0b2Rvc1VwZGF0ZWRcIiwgdG9kb3MudG9kb0xpc3QpXG4gICAgfSxcbiAgICB0b2RvQ2hlY2tlZDogZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwdWJzdWIuZXZlbnRzKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy50b2Rvc0xpc3QpXG4gICAgfSxcbiAgICB0b2RvVHJhc2hlZDogZXZlbnQgPT4ge1xuICAgICAgICBsZXQgdG9kb1dyYXBwZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvRGF0ZSA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1jb250ZW50XCIpLnRleHRDb250ZW50O1xuXG4gICAgICAgIHRvZG9zLnRvZG9zTGlzdCA9IHRvZG9zLnRvZG9zTGlzdC5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHRvZG8udGl0bGUgIT09IHRvZG9UaXRsZSkgJiYgKHRvZG8uZGF0ZSAhPT0gdG9kb0RhdGUpICYmICh0b2RvLmRlc2NyaXB0aW9uICE9PSB0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9XcmFwcGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9kb1dyYXBwZXIpO1xuICAgIH0sXG4gICAgdG9kb0NyZWF0ZUVsZW1lbnQ6IHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXdyYXBwZXJcIik7XG5cbiAgICAgICAgLy9UT0RPIEVMRU1FTlQgQ09OVEVOVFxuICAgICAgICAvL3RpdGxlXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdUb2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvVGl0bGUpO1xuXG4gICAgICAgIC8vZGF0ZVxuICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgICAgICB0b2RvRGF0ZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGF0ZSk7XG5cbiAgICAgICAgLy9kZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1jb250ZW50XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAvL0NIRUNLIE1BUksgQlVUVE9OXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgICAgICAgLy9DSEVDSyBUUkFTSCBCVVRUT05cbiAgICAgICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0cmFzaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLVwiO1xuICAgICAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtYnV0dG9uXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgICAgIC8vQVBQRU5EIFRPIExJU1RcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGVEaXYpO1xuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9XcmFwcGVyKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IHRvZG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG4vLyBGT1JNXG4gICAgLy8gZWFjaCB0b2RvIGlzIGdvbm5hIGhhdmUgYSB0aXRsZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5KG5vcm1hbCwgYW55dGltZSwgaW1wb3J0YW50KSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUoZXhjZXB0IGFueXRpbWUpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gcHJvcGVydHlcblxuLy8gQlVUVE9OU1xuICAgIC8vICBmb3IgZWFjaCBidXR0b24gd2UgYXJlIGdvbm5hIGRvIGRpZmZlcmVudCB0aGluZ3NcbiAgICAvLyB0b2RheSBpcyBnb25uYSBmaWx0ZXIgdG9kb3Mgd2l0aCB0aGUgY3VycmVudCBkYXRlLFxuICAgIC8vIHVwY29taW5nIGlzIGdvbm5hIGZpbHRlciB0b2RvcyB3aXRoIGEgZGF0ZSBiZXR3ZWVuIGN1cnJlbnQgZGF0ZSBhbmQgbmV4dCA3IGRheXMuXG4gICAgLy8gYW55dGltZSBhbmQgaW1wb3J0YW50IGlzIGdvbm5hIGZpbHRlciB0b2RvcyBsYWJlbGVkIHdpdGggdGhhdCB0YWdcblxuLy8gVE9ET1NcbiAgICAvLyBlYWNoIHRvZG8gaXMgZ29ubmEgYmUgc3RvcmVkIGluc2lkZSBhbiBhcnJheVxuLy8gUFJPSkVDVFNcbiAgICAvLyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHRvZG9zLmluaXQoKTtcbiAgICB0b2RvRm9ybS5pbml0KCk7XG4gICAgc3RvcmFnZS5pbml0KCk7XG59KVxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
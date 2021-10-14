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


const todos = {
    todosList: [],
    init: () => {
        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoAdded", todos.todoAdded);
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
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQLGNBQWM7QUFDZDtBQUNBLG1FQUFtRSxPQUFPO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDREQUE0RCxPQUFPO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdURBQXVELFFBQVEsT0FBTyxLQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCcUM7QUFDSDs7QUFFM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0IseUJBQXlCLDJDQUFJO0FBQzdCLFFBQVEsc0RBQWM7QUFDdEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQzs7QUFFOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQSxRQUFRLHdEQUFnQjtBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ3pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDSztBQUNQOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsSUFBSSx3REFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9QdWJzdWIgZmFjaWxpdGF0ZXMgbG9vc2VseSBjb3VwbGVkIG1vZHVsZXNcbmV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbiAgICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuXG5leHBvcnQgY29uc3QgdG9kb0Zvcm0gPSB7XG4gICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWZvcm1cIiksXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdG9kb0Zvcm0uYWRkKTtcbiAgICB9LFxuICAgIGFkZDogZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItdG9kb1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSBcIlwiKSB7IHByaW9yaXR5ID0gXCJub3JtYWxcIiB9O1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kbyk7XG4gICAgICAgIHRvZG9Gb3JtLmZvcm0ucmVzZXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG4vLyAgVGhpbmdzIFRPIEFERFxuLy8gIHByZXZlbnQgYWRkaW5nIGEgdG9kbyB3aGVuIHRoZXJlIGlzIGFscmVhZHkgb25lIHdpdGggdGhlIHNhbWUgdmFsdWVzXG5cblxuZXhwb3J0IGNvbnN0IHRvZG9zID0ge1xuICAgIHRvZG9zTGlzdDogW10sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0FkZGVkXCIsIHRvZG9zLnRvZG9BZGRlZCk7XG4gICAgfSxcbiAgICB0b2RvQWRkZWQ6IHRvZG8gPT4ge1xuICAgICAgICB0b2Rvcy50b2Rvc0xpc3QucHVzaCh0b2RvKVxuICAgICAgICB0b2Rvcy50b2RvQ3JlYXRlRWxlbWVudCh0b2RvKTtcblxuICAgICAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcGxldGUtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtYnV0dG9uXCIpO1xuXG4gICAgICAgIGNoZWNrQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb3MudG9kb0NoZWNrZWQpO1xuICAgICAgICB9KVxuICAgICAgICB0cmFzaEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9zLnRvZG9UcmFzaGVkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcHVic3ViLnB1Ymxpc2goXCJ0b2Rvc1VwZGF0ZWRcIiwgdG9kb3MudG9kb0xpc3QpXG4gICAgfSxcbiAgICB0b2RvQ2hlY2tlZDogZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy50b2Rvc0xpc3QpXG4gICAgfSxcbiAgICB0b2RvVHJhc2hlZDogZXZlbnQgPT4ge1xuICAgICAgICBsZXQgdG9kb1dyYXBwZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvRGF0ZSA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1jb250ZW50XCIpLnRleHRDb250ZW50O1xuXG4gICAgICAgIHRvZG9zLnRvZG9zTGlzdCA9IHRvZG9zLnRvZG9zTGlzdC5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHRvZG8udGl0bGUgIT09IHRvZG9UaXRsZSkgJiYgKHRvZG8uZGF0ZSAhPT0gdG9kb0RhdGUpICYmICh0b2RvLmRlc2NyaXB0aW9uICE9PSB0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9XcmFwcGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9kb1dyYXBwZXIpO1xuICAgIH0sXG4gICAgdG9kb0NyZWF0ZUVsZW1lbnQ6IHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXdyYXBwZXJcIik7XG5cbiAgICAgICAgLy9UT0RPIEVMRU1FTlQgQ09OVEVOVFxuICAgICAgICAvL3RpdGxlXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtdGl0bGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdUb2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvVGl0bGUpO1xuXG4gICAgICAgIC8vZGF0ZVxuICAgICAgICBjb25zdCB0b2RvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRlbnRcIik7XG4gICAgICAgIG5ld1RvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgICAgICB0b2RvRGF0ZURpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGF0ZSk7XG5cbiAgICAgICAgLy9kZXNjcmlwdGlvblxuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgbmV3VG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1jb250ZW50XCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAvL0NIRUNLIE1BUksgQlVUVE9OXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgICAgICAgLy9DSEVDSyBUUkFTSCBCVVRUT05cbiAgICAgICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0cmFzaEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLVwiO1xuICAgICAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtYnV0dG9uXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgICAgIC8vQVBQRU5EIFRPIExJU1RcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGVEaXYpO1xuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9XcmFwcGVyKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IHRvZG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XG5cbi8vIEZPUk1cbiAgICAvLyBlYWNoIHRvZG8gaXMgZ29ubmEgaGF2ZSBhIHRpdGxlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkobm9ybWFsLCBhbnl0aW1lLCBpbXBvcnRhbnQpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZShleGNlcHQgYW55dGltZSksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiBwcm9wZXJ0eVxuXG4vLyBCVVRUT05TXG4gICAgLy8gIGZvciBlYWNoIGJ1dHRvbiB3ZSBhcmUgZ29ubmEgZG8gZGlmZmVyZW50IHRoaW5nc1xuICAgIC8vIHRvZGF5IGlzIGdvbm5hIGZpbHRlciB0b2RvcyB3aXRoIHRoZSBjdXJyZW50IGRhdGUsXG4gICAgLy8gdXBjb21pbmcgaXMgZ29ubmEgZmlsdGVyIHRvZG9zIHdpdGggYSBkYXRlIGJldHdlZW4gY3VycmVudCBkYXRlIGFuZCBuZXh0IDcgZGF5cy5cbiAgICAvLyBhbnl0aW1lIGFuZCBpbXBvcnRhbnQgaXMgZ29ubmEgZmlsdGVyIHRvZG9zIGxhYmVsZWQgd2l0aCB0aGF0IHRhZ1xuXG4vLyBUT0RPU1xuICAgIC8vIGVhY2ggdG9kbyBpcyBnb25uYSBiZSBzdG9yZWQgaW5zaWRlIGFuIGFycmF5XG4vLyBQUk9KRUNUU1xuICAgIC8vIFxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdG9kb3MuaW5pdCgpO1xuICAgIHRvZG9Gb3JtLmluaXQoKTtcbn0pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
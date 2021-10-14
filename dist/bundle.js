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
    init: () => {
        const form = document.querySelector("#hero-form");
        form.addEventListener("submit", todoForm.add);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQLGNBQWM7QUFDZDtBQUNBLG1FQUFtRSxPQUFPO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDREQUE0RCxPQUFPO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdURBQXVELFFBQVEsT0FBTyxLQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCcUM7QUFDSDs7QUFFM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0IseUJBQXlCLDJDQUFJO0FBQzdCLFFBQVEsc0RBQWM7QUFDdEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcUM7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUN6R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0s7QUFDUDs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLElBQUksd0RBQWE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUHVic3ViIGZhY2lsaXRhdGVzIGxvb3NlbHkgY291cGxlZCBtb2R1bGVzXG5leHBvcnQgY29uc3QgcHVic3ViID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IE1ha2luZyBhbiBicm9hZGNhc3QgYWJvdXQgJHtldk5hbWV9IHdpdGggJHtkYXRhfWApO1xuICAgICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIGYoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb3MuanNcIjtcblxuZXhwb3J0IGNvbnN0IHRvZG9Gb3JtID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVyby1mb3JtXCIpO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdG9kb0Zvcm0uYWRkKTtcbiAgICB9LFxuICAgIGFkZDogZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItdG9kb1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSBcIlwiKSB7IHByaW9yaXR5ID0gXCJub3JtYWxcIiB9O1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kbyk7XG4gICAgfVxufSIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBkYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuLy8gIFRoaW5ncyBUTyBBRERcbi8vICBwcmV2ZW50IGFkZGluZyBhIHRvZG8gd2hlbiB0aGVyZSBpcyBhbHJlYWR5IG9uZSB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuXG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9IHtcbiAgICB0b2Rvc0xpc3Q6IFtdLFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9BZGRlZFwiLCB0b2Rvcy50b2RvQWRkZWQpO1xuICAgIH0sXG4gICAgdG9kb0FkZGVkOiB0b2RvID0+IHtcbiAgICAgICAgdG9kb3MudG9kb3NMaXN0LnB1c2godG9kbylcbiAgICAgICAgdG9kb3MudG9kb0NyZWF0ZUVsZW1lbnQodG9kbyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWJ1dHRvblwiKTtcblxuICAgICAgICBjaGVja0J1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9zLnRvZG9DaGVja2VkKTtcbiAgICAgICAgfSlcbiAgICAgICAgdHJhc2hCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2Rvcy50b2RvVHJhc2hlZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHB1YnN1Yi5wdWJsaXNoKFwidG9kb3NVcGRhdGVkXCIsIHRvZG9zLnRvZG9MaXN0KVxuICAgIH0sXG4gICAgdG9kb0NoZWNrZWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9kb3MudG9kb3NMaXN0KVxuICAgIH0sXG4gICAgdG9kb1RyYXNoZWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHRvZG9XcmFwcGVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpO1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0RhdGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtY29udGVudFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tY29udGVudFwiKS50ZXh0Q29udGVudDtcblxuICAgICAgICB0b2Rvcy50b2Rvc0xpc3QgPSB0b2Rvcy50b2Rvc0xpc3QuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0b2RvLnRpdGxlICE9PSB0b2RvVGl0bGUpICYmICh0b2RvLmRhdGUgIT09IHRvZG9EYXRlKSAmJiAodG9kby5kZXNjcmlwdGlvbiAhPT0gdG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvV3JhcHBlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRvZG9XcmFwcGVyKTtcbiAgICB9LFxuICAgIHRvZG9DcmVhdGVFbGVtZW50OiB0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICAgICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidG9kby13cmFwcGVyXCIpO1xuXG4gICAgICAgIC8vVE9ETyBFTEVNRU5UIENPTlRFTlRcbiAgICAgICAgLy90aXRsZVxuICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LXRpdGxlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3VG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250ZW50XCIpO1xuICAgICAgICBuZXdUb2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQobmV3VG9kb1RpdGxlKTtcblxuICAgICAgICAvL2RhdGVcbiAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC1kYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdUb2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250ZW50XCIpO1xuICAgICAgICBuZXdUb2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICAgICAgdG9kb0RhdGVEaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0RhdGUpO1xuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld1RvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIG5ld1RvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tY29udGVudFwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgLy9DSEVDSyBNQVJLIEJVVFRPTlxuICAgICAgICBjb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZWRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idXR0b25cIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdXR0b24pO1xuXG4gICAgICAgIC8vQ0hFQ0sgVFJBU0ggQlVUVE9OXG4gICAgICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdHJhc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcbiAgICAgICAgdHJhc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcInRyYXNoLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgICAgICAvL0FQUEVORCBUTyBMSVNUXG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZURpdik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9EYXRlRGl2KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvV3JhcHBlcik7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyB0b2RvRm9ybSB9IGZyb20gXCIuL3RvZG8tZm9ybS5qc1wiO1xuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuXG4vLyBGT1JNXG4gICAgLy8gZWFjaCB0b2RvIGlzIGdvbm5hIGhhdmUgYSB0aXRsZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5KG5vcm1hbCwgYW55dGltZSwgaW1wb3J0YW50KSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUoZXhjZXB0IGFueXRpbWUpLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gcHJvcGVydHlcblxuLy8gQlVUVE9OU1xuICAgIC8vICBmb3IgZWFjaCBidXR0b24gd2UgYXJlIGdvbm5hIGRvIGRpZmZlcmVudCB0aGluZ3NcbiAgICAvLyB0b2RheSBpcyBnb25uYSBmaWx0ZXIgdG9kb3Mgd2l0aCB0aGUgY3VycmVudCBkYXRlLFxuICAgIC8vIHVwY29taW5nIGlzIGdvbm5hIGZpbHRlciB0b2RvcyB3aXRoIGEgZGF0ZSBiZXR3ZWVuIGN1cnJlbnQgZGF0ZSBhbmQgbmV4dCA3IGRheXMuXG4gICAgLy8gYW55dGltZSBhbmQgaW1wb3J0YW50IGlzIGdvbm5hIGZpbHRlciB0b2RvcyBsYWJlbGVkIHdpdGggdGhhdCB0YWdcblxuLy8gVE9ET1NcbiAgICAvLyBlYWNoIHRvZG8gaXMgZ29ubmEgYmUgc3RvcmVkIGluc2lkZSBhbiBhcnJheVxuLy8gUFJPSkVDVFNcbiAgICAvLyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHRvZG9zLmluaXQoKTtcbiAgICB0b2RvRm9ybS5pbml0KCk7XG59KVxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
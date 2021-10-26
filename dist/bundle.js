/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/anytime.js":
/*!************************!*\
  !*** ./src/anytime.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anytimeTodos": () => (/* binding */ anytimeTodos)
/* harmony export */ });
const anytimeTodos = {
    init: () => {
        const anytimeBtn = document.querySelector(".anytime-btn");
        anytimeBtn.addEventListener("click", anytimeTodos.render);
    },
    render: () => {
        const todoWrapper = document.querySelectorAll(".todo-wrapper");
        const notAnytime = [...todoWrapper].filter(node => 
            !node.classList.contains("anytime")
        )
        const anytime = [...todoWrapper].filter(node => 
            node.classList.contains("anytime")
        )
        notAnytime.forEach(element => {
            element.style.display = "none";
        })
        anytime.forEach(element => {
            element.style.display = "block";
        })
    }
}

/***/ }),

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
        todoTitleDiv.appendChild(completedButton);

        //CHECK TRASH BUTTON
        const trashButton = document.createElement("button");
        trashButton.textContent = "-";
        trashButton.classList.add("trash-button");
        todoTitleDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoWrapper.appendChild(todoTitleDiv);
        todoWrapper.appendChild(todoDateDiv);
        todoWrapper.appendChild(todoDescriptionDiv);

        todoList.appendChild(todoWrapper);
    },
    todoCheckPriority: (todo, todoWrapper) => {
        if (todo.priority === "important") {
            todoWrapper.style.background = "#e68585";
            todoWrapper.classList.add("important");
        }
        else if (todo.priority === "anytime") {
            todoWrapper.style.background = "#68a9ff85";
            todoWrapper.classList.add("anytime");
        }
    }
}

/***/ }),

/***/ "./src/upcoming.js":
/*!*************************!*\
  !*** ./src/upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upcomingTodos": () => (/* binding */ upcomingTodos)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");


const upcomingTodos = {
    init: () => {
        const upcomingBtn = document.querySelector(".upcoming-btn");
        upcomingBtn.addEventListener("click", upcomingTodos.render);
    },
    render: () => {
        const dateContent = document.querySelectorAll(".date-content");

        let upcomingDays = [];
        for (let i = 0 ; i < 7 ; i++) {
            upcomingDays.push((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), i).toJSON().slice(0,10))
        }

        const notUpcoming = [...dateContent].filter(node =>
            !upcomingDays.includes(node.textContent)
        )
        const upcoming = [...dateContent].filter(node =>
            upcomingDays.includes(node.textContent)
        )

        notUpcoming.forEach(element => {
            element.closest(".todo-wrapper").style.display = "none";
        })
        upcoming.forEach(element => {
            element.closest(".todo-wrapper").style.display = "block";
        })
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
/* harmony import */ var _anytime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anytime.js */ "./src/anytime.js");
/* harmony import */ var _upcoming_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcoming.js */ "./src/upcoming.js");










document.addEventListener("DOMContentLoaded", () => {
    _todos_js__WEBPACK_IMPORTED_MODULE_2__.todos.init();
    _todo_form_js__WEBPACK_IMPORTED_MODULE_1__.todoForm.init();
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.init();
    _today_js__WEBPACK_IMPORTED_MODULE_4__.todayTodos.init();
    _anytime_js__WEBPACK_IMPORTED_MODULE_6__.anytimeTodos.init();
    _important_js__WEBPACK_IMPORTED_MODULE_5__.importantTodos.init();
    _upcoming_js__WEBPACK_IMPORTED_MODULE_7__.upcomingTodos.init();
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0s7QUFDUDtBQUNJO0FBQ0M7QUFDTztBQUNIO0FBQ0U7OztBQUc5QztBQUNBLElBQUksaURBQVU7QUFDZCxJQUFJLHdEQUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsSUFBSSxzREFBZTtBQUNuQixJQUFJLDBEQUFpQjtBQUNyQixJQUFJLDhEQUFtQjtBQUN2QixJQUFJLDREQUFrQjtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYW55dGltZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGNvbWluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGFueXRpbWVUb2RvcyA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFueXRpbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFueXRpbWUtYnRuXCIpO1xuICAgICAgICBhbnl0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbnl0aW1lVG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCBub3RBbnl0aW1lID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgICFub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImFueXRpbWVcIilcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBhbnl0aW1lID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW55dGltZVwiKVxuICAgICAgICApXG4gICAgICAgIG5vdEFueXRpbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgICAgICBhbnl0aW1lLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1wb3J0YW50LWJ0blwiKTtcbiAgICAgICAgaW1wb3J0YW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbXBvcnRhbnRUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IFsuLi50b2RvV3JhcHBlcl0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICAhbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbXBvcnRhbnRcIilcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBbLi4udG9kb1dyYXBwZXJdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbXBvcnRhbnRcIilcbiAgICAgICAgKVxuICAgICAgICBub3RJbXBvcnRhbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgICAgICBpbXBvcnRhbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLy9QdWJzdWIgZmFjaWxpdGF0ZXMgbG9vc2VseSBjb3VwbGVkIG1vZHVsZXNcbmV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbiAgICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBzdG9yYWdlLnJlbmRlclRvZG9zKCk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2RvQWRkZWRcIiwgc3RvcmFnZS5zYXZlTG9jYWxUb2Rvcyk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2Rvc1VwZGF0ZWRcIiwgc3RvcmFnZS51cGRhdGVMb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG4gICAgc2F2ZUxvY2FsVG9kb3M6IHRvZG8gPT4ge1xuICAgICAgICBsZXQgdG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0b2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH0sXG4gICAgcmVuZGVyVG9kb3M6ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRvZG9zO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic3RvcmVkVG9kb3NcIiwgc3RvcmVkVG9kb3MpO1xuICAgIH0sXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlOiB0b0RlbGV0ZVRvZG9zID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRvZG9zO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlZFRvZG9zID0gdG9EZWxldGVUb2RvcztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRUb2RvcykpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCB0b2RheVRvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ0blwiKTtcbiAgICAgICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZGF5VG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGUtY29udGVudFwiKTtcbiAgICAgICAgY29uc3Qgbm90VG9kYXkgPSBbLi4uZGF0ZUNvbnRlbnRdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCAhPSB0b2RheURhdGVcbiAgICAgICAgKVxuICAgICAgICBjb25zdCB0b2RheSA9IFsuLi5kYXRlQ29udGVudF0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID09PSB0b2RheURhdGVcbiAgICAgICAgKVxuICAgICAgICBub3RUb2RheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbG9zZXN0KFwiLnRvZG8td3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHRvZGF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9kb0Zvcm0gPSB7XG4gICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWZvcm1cIiksXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdG9kb0Zvcm0uYWRkKTtcbiAgICB9LFxuICAgIGFkZDogZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItdG9kb1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSBcIlwiKSB7IHByaW9yaXR5ID0gXCJub3JtYWxcIiB9O1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvRm9ybVwiLCB0b2RvKTtcbiAgICAgICAgdG9kb0Zvcm0uZm9ybS5yZXNldCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHRvZG9zID0ge1xuICAgIHRvZG9zTGlzdDogW10sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0Zvcm1cIiwgdG9kb3MuaGFuZGxlVG9kbyk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJzdG9yZWRUb2Rvc1wiLCB0b2Rvcy5yZW5kZXJTdG9yZWRUb2Rvcyk7XG4gICAgfSxcbiAgICByZW5kZXJTdG9yZWRUb2Rvczogc3RvcmVkVG9kb3MgPT4ge1xuICAgICAgICBzdG9yZWRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgdG9kb3MudG9kb0FkZGVkKHRvZG8pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVUb2RvOiB0b2RvID0+IHtcbiAgICAgICAgLy9DSEVDSyBJRiBUT0RPIEFMUkVBRFkgRVhJU1RcbiAgICAgICAgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKSAmJlxuICAgICAgICAgICAgICAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgIGEuZXZlcnkoKHZhbCwgaW5kZXgpID0+IHZhbCA9PT0gYltpbmRleF0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9kb3MudG9kb3NMaXN0LnNvbWUoZWxlbWVudCA9PiB7IHJldHVybiBhcnJheUVxdWFscyhPYmplY3QudmFsdWVzKGVsZW1lbnQpLCBPYmplY3QudmFsdWVzKHRvZG8pKTsgfSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVG9kbyBhbHJlYWR5IGV4aXN0cy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2Rvcy50b2RvQWRkZWQodG9kbyk7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaChcInRvZG9BZGRlZFwiLCB0b2RvKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdG9kb0FkZGVkOiB0b2RvID0+IHtcbiAgICAgICAgdG9kb3MudG9kb3NMaXN0LnB1c2godG9kbylcbiAgICAgICAgdG9kb3MudG9kb0NyZWF0ZUVsZW1lbnQodG9kbyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWJ1dHRvblwiKTtcblxuICAgICAgICBjaGVja0J1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9zLnRvZG9DaGVja2VkKTtcbiAgICAgICAgfSlcbiAgICAgICAgdHJhc2hCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2Rvcy50b2RvVHJhc2hlZCk7XG4gICAgICAgIH0pXG5cbiAgICB9LFxuICAgIHRvZG9DaGVja2VkOiBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zLnRvZG9zTGlzdClcbiAgICB9LFxuICAgIHRvZG9UcmFzaGVkOiBldmVudCA9PiB7XG4gICAgICAgIGxldCB0b2RvV3JhcHBlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRvZG8td3JhcHBlclwiKTtcbiAgICAgICAgbGV0IHRvZG9UaXRsZSA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtY29udGVudFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IHRvZG9EYXRlID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvSW5kZXggPSB0b2Rvcy50b2Rvc0xpc3QuZmluZEluZGV4KGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudGl0bGUgPT09IHRvZG9UaXRsZSAmJiBlbGVtZW50LmRhdGUgPT09IHRvZG9EYXRlICYmIGVsZW1lbnQuZGVzY3JpcHRpb24gPT09IHRvZG9EZXNjcmlwdGlvbjtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2Rvcy50b2Rvc0xpc3Quc3BsaWNlKHRvZG9JbmRleCwgMSk7XG5cbiAgICAgICAgdG9kb1dyYXBwZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0b2RvV3JhcHBlcik7XG5cbiAgICAgICAgLy8gUFVCU1VCIFBVQkxJU0hcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2Rvc1VwZGF0ZWRcIiwgdG9kb3MudG9kb3NMaXN0KTtcbiAgICB9LFxuICAgIHRvZG9DcmVhdGVFbGVtZW50OiB0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICAgICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidG9kby13cmFwcGVyXCIpO1xuXG4gICAgICAgIC8vQ0hFQ0sgUFJJT1JJVFlcbiAgICAgICAgdG9kb3MudG9kb0NoZWNrUHJpb3JpdHkodG9kbywgdG9kb1dyYXBwZXIpO1xuXG4gICAgICAgIC8vVE9ETyBFTEVNRU5UIENPTlRFTlRcbiAgICAgICAgLy90aXRsZVxuICAgICAgICBjb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1lbGVtZW50LXRpdGxlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3VG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250ZW50XCIpO1xuICAgICAgICBuZXdUb2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQobmV3VG9kb1RpdGxlKTtcblxuICAgICAgICAvL2RhdGVcbiAgICAgICAgY29uc3QgdG9kb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC1kYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuZXdUb2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250ZW50XCIpO1xuICAgICAgICBuZXdUb2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICAgICAgdG9kb0RhdGVEaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0RhdGUpO1xuXG4gICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5ld1RvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIG5ld1RvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tY29udGVudFwiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgLy9DSEVDSyBNQVJLIEJVVFRPTlxuICAgICAgICBjb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZWRCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idXR0b25cIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdXR0b24pO1xuXG4gICAgICAgIC8vQ0hFQ0sgVFJBU0ggQlVUVE9OXG4gICAgICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdHJhc2hCdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcbiAgICAgICAgdHJhc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcInRyYXNoLWJ1dHRvblwiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgICAgICAvL0FQUEVORCBUTyBMSVNUXG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZURpdik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9EYXRlRGl2KTtcbiAgICAgICAgdG9kb1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvV3JhcHBlcik7XG4gICAgfSxcbiAgICB0b2RvQ2hlY2tQcmlvcml0eTogKHRvZG8sIHRvZG9XcmFwcGVyKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBcImltcG9ydGFudFwiKSB7XG4gICAgICAgICAgICB0b2RvV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTY4NTg1XCI7XG4gICAgICAgICAgICB0b2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW1wb3J0YW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiYW55dGltZVwiKSB7XG4gICAgICAgICAgICB0b2RvV3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNjhhOWZmODVcIjtcbiAgICAgICAgICAgIHRvZG9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhbnl0aW1lXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IHVwY29taW5nVG9kb3MgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBjb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmctYnRuXCIpO1xuICAgICAgICB1cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBjb21pbmdUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlLWNvbnRlbnRcIik7XG5cbiAgICAgICAgbGV0IHVwY29taW5nRGF5cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCA3IDsgaSsrKSB7XG4gICAgICAgICAgICB1cGNvbWluZ0RheXMucHVzaChhZGREYXlzKG5ldyBEYXRlKCksIGkpLnRvSlNPTigpLnNsaWNlKDAsMTApKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90VXBjb21pbmcgPSBbLi4uZGF0ZUNvbnRlbnRdLmZpbHRlcihub2RlID0+XG4gICAgICAgICAgICAhdXBjb21pbmdEYXlzLmluY2x1ZGVzKG5vZGUudGV4dENvbnRlbnQpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgdXBjb21pbmcgPSBbLi4uZGF0ZUNvbnRlbnRdLmZpbHRlcihub2RlID0+XG4gICAgICAgICAgICB1cGNvbWluZ0RheXMuaW5jbHVkZXMobm9kZS50ZXh0Q29udGVudClcbiAgICAgICAgKVxuXG4gICAgICAgIG5vdFVwY29taW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgdXBjb21pbmcuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IHRvZG9Gb3JtIH0gZnJvbSBcIi4vdG9kby1mb3JtLmpzXCI7XG5pbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9zLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgdG9kYXlUb2RvcyB9IGZyb20gXCIuL3RvZGF5LmpzXCI7XG5pbXBvcnQgeyBpbXBvcnRhbnRUb2RvcyB9IGZyb20gXCIuL2ltcG9ydGFudC5qc1wiXG5pbXBvcnQgeyBhbnl0aW1lVG9kb3MgfSBmcm9tIFwiLi9hbnl0aW1lLmpzXCI7XG5pbXBvcnQgeyB1cGNvbWluZ1RvZG9zIH0gZnJvbSBcIi4vdXBjb21pbmcuanNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdG9kb3MuaW5pdCgpO1xuICAgIHRvZG9Gb3JtLmluaXQoKTtcbiAgICBzdG9yYWdlLmluaXQoKTtcbiAgICB0b2RheVRvZG9zLmluaXQoKTtcbiAgICBhbnl0aW1lVG9kb3MuaW5pdCgpO1xuICAgIGltcG9ydGFudFRvZG9zLmluaXQoKTtcbiAgICB1cGNvbWluZ1RvZG9zLmluaXQoKTtcbn0pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
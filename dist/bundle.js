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
        todoForm.openForm();
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
        todoForm.handleOpenFormBtn();
        todoForm.handleForm();
    },
    openForm: () => {
        const openFormBtn = document.querySelector(".open-form-btn");
        const formBtn = document.querySelector("form button");
        const formTitle = document.querySelector(".todo-title");
        const formSelect = document.querySelector(".select");
        const formDate = document.querySelector(".date-picker");
        const formDescription = document.querySelector(".todo-description");

        openFormBtn.addEventListener("click", () => {
            openFormBtn.style.display = "none";
            formBtn.style.display = "flex";
            formTitle.style.display = "block";
            formSelect.style.display = "block";
            formDate.style.display = "block";
            formDescription.style.display = "block";
        })
    },
    handleOpenFormBtn: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const openFormBtn = document.querySelector(".open-form-btn");
        if ((mediaQuery.matches) && (openFormBtn.style.display === "none")) {
            openFormBtn.style.display = "block";
        }
    },
    handleForm: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const formBtn = document.querySelector("form button");
        const formTitle = document.querySelector(".todo-title");
        const formSelect = document.querySelector(".select");
        const formDate = document.querySelector(".date-picker");
        const formDescription = document.querySelector(".todo-description");

        if (mediaQuery.matches) {
            formBtn.style.display = "none";
            formTitle.style.display = "none";
            formSelect.style.display = "none";
            formDate.style.display = "none";
            formDescription.style.display = "none";
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEVxQzs7QUFFOUI7QUFDUDtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEIsUUFBUSx3REFBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLGtFQUFrRTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQWM7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25JbUM7O0FBRTVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQyw4QkFBOEIsb0RBQU87QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDSztBQUNQO0FBQ0k7QUFDQztBQUNPO0FBQ0g7QUFDRTs7O0FBRzlDO0FBQ0EsSUFBSSxpREFBVTtBQUNkLElBQUksd0RBQWE7QUFDakIsSUFBSSxxREFBWTtBQUNoQixJQUFJLHNEQUFlO0FBQ25CLElBQUksMERBQWlCO0FBQ3JCLElBQUksOERBQW1CO0FBQ3ZCLElBQUksNERBQWtCO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbnl0aW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VwY29taW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgYW55dGltZVRvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYW55dGltZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW55dGltZS1idG5cIik7XG4gICAgICAgIGFueXRpbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFueXRpbWVUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IG5vdEFueXRpbWUgPSBbLi4udG9kb1dyYXBwZXJdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW55dGltZVwiKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGFueXRpbWUgPSBbLi4udG9kb1dyYXBwZXJdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbnl0aW1lXCIpXG4gICAgICAgIClcbiAgICAgICAgbm90QW55dGltZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGFueXRpbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGltcG9ydGFudFRvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbXBvcnRhbnQtYnRuXCIpO1xuICAgICAgICBpbXBvcnRhbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGltcG9ydGFudFRvZG9zLnJlbmRlcik7XG4gICAgfSxcbiAgICByZW5kZXI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8td3JhcHBlclwiKTtcbiAgICAgICAgY29uc3Qgbm90SW1wb3J0YW50ID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgICFub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImltcG9ydGFudFwiKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IFsuLi50b2RvV3JhcHBlcl0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImltcG9ydGFudFwiKVxuICAgICAgICApXG4gICAgICAgIG5vdEltcG9ydGFudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGltcG9ydGFudC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCIvL1B1YnN1YiBmYWNpbGl0YXRlcyBsb29zZWx5IGNvdXBsZWQgbW9kdWxlc1xuZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZOYW1lLCBmbikge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKGYgPT4gZiAhPT0gZm4pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBmKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2UucmVuZGVyVG9kb3MoKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9BZGRlZFwiLCBzdG9yYWdlLnNhdmVMb2NhbFRvZG9zKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9zVXBkYXRlZFwiLCBzdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSk7XG4gICAgfSxcbiAgICBzYXZlTG9jYWxUb2RvczogdG9kbyA9PiB7XG4gICAgICAgIGxldCB0b2RvcztcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRvZG9zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfSxcbiAgICByZW5kZXJUb2RvczogKCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkVG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZWRUb2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJzdG9yZWRUb2Rvc1wiLCBzdG9yZWRUb2Rvcyk7XG4gICAgfSxcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2U6IHRvRGVsZXRlVG9kb3MgPT4ge1xuICAgICAgICBsZXQgc3RvcmVkVG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZWRUb2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVkVG9kb3MgPSB0b0RlbGV0ZVRvZG9zO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFRvZG9zKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHRvZGF5VG9kb3MgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktYnRuXCIpO1xuICAgICAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXlUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApO1xuICAgICAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZS1jb250ZW50XCIpO1xuICAgICAgICBjb25zdCBub3RUb2RheSA9IFsuLi5kYXRlQ29udGVudF0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ICE9IHRvZGF5RGF0ZVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPT09IHRvZGF5RGF0ZVxuICAgICAgICApXG4gICAgICAgIG5vdFRvZGF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgdG9kYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2RvRm9ybSA9IHtcbiAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm8tZm9ybVwiKSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHRvZG9Gb3JtLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0b2RvRm9ybS5hZGQpO1xuICAgICAgICB0b2RvRm9ybS5vcGVuRm9ybSgpO1xuICAgIH0sXG4gICAgYWRkOiBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlci10b2RvXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiXCIpIHsgcHJpb3JpdHkgPSBcIm5vcm1hbFwiIH07XG5cbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcInRvZG9Gb3JtXCIsIHRvZG8pO1xuICAgICAgICB0b2RvRm9ybS5mb3JtLnJlc2V0KCk7XG4gICAgICAgIHRvZG9Gb3JtLmhhbmRsZU9wZW5Gb3JtQnRuKCk7XG4gICAgICAgIHRvZG9Gb3JtLmhhbmRsZUZvcm0oKTtcbiAgICB9LFxuICAgIG9wZW5Gb3JtOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLWZvcm0tYnRuXCIpO1xuICAgICAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIik7XG4gICAgICAgIGNvbnN0IGZvcm1TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtcGlja2VyXCIpO1xuICAgICAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgb3BlbkZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Gb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZm9ybVRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBmb3JtU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBmb3JtRGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZm9ybURlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVPcGVuRm9ybUJ0bjogKCkgPT4ge1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDkwMHB4KScpXG4gICAgICAgIGNvbnN0IG9wZW5Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLWZvcm0tYnRuXCIpO1xuICAgICAgICBpZiAoKG1lZGlhUXVlcnkubWF0Y2hlcykgJiYgKG9wZW5Gb3JtQnRuLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgb3BlbkZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlRm9ybTogKCkgPT4ge1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDkwMHB4KScpXG4gICAgICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZm9ybVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBmb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1EYXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1EZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9IHtcbiAgICB0b2Rvc0xpc3Q6IFtdLFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9Gb3JtXCIsIHRvZG9zLmhhbmRsZVRvZG8pO1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwic3RvcmVkVG9kb3NcIiwgdG9kb3MucmVuZGVyU3RvcmVkVG9kb3MpO1xuICAgIH0sXG4gICAgcmVuZGVyU3RvcmVkVG9kb3M6IHN0b3JlZFRvZG9zID0+IHtcbiAgICAgICAgc3RvcmVkVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIHRvZG9zLnRvZG9BZGRlZCh0b2RvKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlVG9kbzogdG9kbyA9PiB7XG4gICAgICAgIC8vQ0hFQ0sgSUYgVE9ETyBBTFJFQURZIEVYSVNUXG4gICAgICAgIGZ1bmN0aW9uIGFycmF5RXF1YWxzKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgICAgICAgICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvZG9zLnRvZG9zTGlzdC5zb21lKGVsZW1lbnQgPT4geyByZXR1cm4gYXJyYXlFcXVhbHMoT2JqZWN0LnZhbHVlcyhlbGVtZW50KSwgT2JqZWN0LnZhbHVlcyh0b2RvKSk7IH0pKSB7XG4gICAgICAgICAgICBhbGVydChcIlRvZG8gYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MudG9kb0FkZGVkKHRvZG8pO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kbyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRvZG9BZGRlZDogdG9kbyA9PiB7XG4gICAgICAgIHRvZG9zLnRvZG9zTGlzdC5wdXNoKHRvZG8pXG4gICAgICAgIHRvZG9zLnRvZG9DcmVhdGVFbGVtZW50KHRvZG8pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZS1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaC1idXR0b25cIik7XG5cbiAgICAgICAgY2hlY2tCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2Rvcy50b2RvQ2hlY2tlZCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRyYXNoQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb3MudG9kb1RyYXNoZWQpO1xuICAgICAgICB9KVxuXG4gICAgfSxcbiAgICB0b2RvQ2hlY2tlZDogZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy50b2Rvc0xpc3QpXG4gICAgfSxcbiAgICB0b2RvVHJhc2hlZDogZXZlbnQgPT4ge1xuICAgICAgICBsZXQgdG9kb1dyYXBwZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvRGF0ZSA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0luZGV4ID0gdG9kb3MudG9kb3NMaXN0LmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnRpdGxlID09PSB0b2RvVGl0bGUgJiYgZWxlbWVudC5kYXRlID09PSB0b2RvRGF0ZSAmJiBlbGVtZW50LmRlc2NyaXB0aW9uID09PSB0b2RvRGVzY3JpcHRpb247XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb3MudG9kb3NMaXN0LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuXG4gICAgICAgIHRvZG9XcmFwcGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9kb1dyYXBwZXIpO1xuXG4gICAgICAgIC8vIFBVQlNVQiBQVUJMSVNIXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidG9kb3NVcGRhdGVkXCIsIHRvZG9zLnRvZG9zTGlzdCk7XG4gICAgfSxcbiAgICB0b2RvQ3JlYXRlRWxlbWVudDogdG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZG8td3JhcHBlclwiKTtcblxuICAgICAgICAvL0NIRUNLIFBSSU9SSVRZXG4gICAgICAgIHRvZG9zLnRvZG9DaGVja1ByaW9yaXR5KHRvZG8sIHRvZG9XcmFwcGVyKTtcblxuICAgICAgICAvL1RPRE8gRUxFTUVOVCBDT05URU5UXG4gICAgICAgIC8vdGl0bGVcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC10aXRsZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGVudFwiKTtcbiAgICAgICAgbmV3VG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9UaXRsZSk7XG5cbiAgICAgICAgLy9kYXRlXG4gICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3VG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGVudFwiKTtcbiAgICAgICAgbmV3VG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gICAgICAgIHRvZG9EYXRlRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9EYXRlKTtcblxuICAgICAgICAvL2Rlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWNvbnRlbnRcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIC8vQ0hFQ0sgTUFSSyBCVVRUT05cbiAgICAgICAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGUtYnV0dG9uXCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnV0dG9uKTtcblxuICAgICAgICAvL0NIRUNLIFRSQVNIIEJVVFRPTlxuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRyYXNoQnV0dG9uLnRleHRDb250ZW50ID0gXCItXCI7XG4gICAgICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaC1idXR0b25cIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgICAgICAgLy9BUFBFTkQgVE8gTElTVFxuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGF0ZURpdik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb1dyYXBwZXIpO1xuICAgIH0sXG4gICAgdG9kb0NoZWNrUHJpb3JpdHk6ICh0b2RvLCB0b2RvV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ODU4NVwiO1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImltcG9ydGFudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSBcImFueXRpbWVcIikge1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzY4YTlmZjg1XCI7XG4gICAgICAgICAgICB0b2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYW55dGltZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjb25zdCB1cGNvbWluZ1RvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLWJ0blwiKTtcbiAgICAgICAgdXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwY29taW5nVG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZS1jb250ZW50XCIpO1xuXG4gICAgICAgIGxldCB1cGNvbWluZ0RheXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgNyA7IGkrKykge1xuICAgICAgICAgICAgdXBjb21pbmdEYXlzLnB1c2goYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKS50b0pTT04oKS5zbGljZSgwLDEwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdFVwY29taW5nID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PlxuICAgICAgICAgICAgIXVwY29taW5nRGF5cy5pbmNsdWRlcyhub2RlLnRleHRDb250ZW50KVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHVwY29taW5nID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PlxuICAgICAgICAgICAgdXBjb21pbmdEYXlzLmluY2x1ZGVzKG5vZGUudGV4dENvbnRlbnQpXG4gICAgICAgIClcblxuICAgICAgICBub3RVcGNvbWluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbG9zZXN0KFwiLnRvZG8td3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHVwY29taW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyB0b2RvRm9ybSB9IGZyb20gXCIuL3RvZG8tZm9ybS5qc1wiO1xuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IHRvZGF5VG9kb3MgfSBmcm9tIFwiLi90b2RheS5qc1wiO1xuaW1wb3J0IHsgaW1wb3J0YW50VG9kb3MgfSBmcm9tIFwiLi9pbXBvcnRhbnQuanNcIlxuaW1wb3J0IHsgYW55dGltZVRvZG9zIH0gZnJvbSBcIi4vYW55dGltZS5qc1wiO1xuaW1wb3J0IHsgdXBjb21pbmdUb2RvcyB9IGZyb20gXCIuL3VwY29taW5nLmpzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHRvZG9zLmluaXQoKTtcbiAgICB0b2RvRm9ybS5pbml0KCk7XG4gICAgc3RvcmFnZS5pbml0KCk7XG4gICAgdG9kYXlUb2Rvcy5pbml0KCk7XG4gICAgYW55dGltZVRvZG9zLmluaXQoKTtcbiAgICBpbXBvcnRhbnRUb2Rvcy5pbml0KCk7XG4gICAgdXBjb21pbmdUb2Rvcy5pbml0KCk7XG59KVxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
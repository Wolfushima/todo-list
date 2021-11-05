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
        todoForm.handleFilter();
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
        const filterIcon = document.querySelector(".filter-icon");
        const mediaQuery = window.matchMedia('(max-width: 900px)');
        const nav = document.querySelector("nav");

        openFormBtn.addEventListener("click", () => {
            filterIcon.style.display = "none";
            openFormBtn.style.display = "none";
            formBtn.style.display = "flex";
            formTitle.style.display = "block";
            formSelect.style.display = "block";
            formDate.style.display = "block";
            formDescription.style.display = "block";
        })

        if (mediaQuery.matches) {
            nav.style.display = "none";
        }
        else {
            openFormBtn.style.display = "none";
        }
        window.addEventListener("resize", () => {
            if (mediaQuery.matches) {
                filterIcon.style.display = "block";
                nav.style.display = "none";
                openFormBtn.style.display = "block";
                formBtn.style.display = "none";
                formTitle.style.display = "none";
                formSelect.style.display = "none";
                formDate.style.display = "none";
                formDescription.style.display = "none";
            }
            else {
                nav.style.display = "flex";
                openFormBtn.style.display = "none";
                filterIcon.style.display = "none";
                formBtn.style.display = "flex";
                formTitle.style.display = "block";
                formSelect.style.display = "block";
                formDate.style.display = "block";
                formDescription.style.display = "block";
            }
        })
    },
    handleOpenFormBtn: () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)')
        const openFormBtn = document.querySelector(".open-form-btn");
        const filterIcon = document.querySelector(".filter-icon");
        if ((mediaQuery.matches) && (openFormBtn.style.display === "none")) {
            openFormBtn.style.display = "block";
            filterIcon.style.display = "block";
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
    },
    handleFilter: () => {
        const filterIcon = document.querySelector(".filter-icon");
        const openFormBtn = document.querySelector(".open-form-btn");
        const nav = document.querySelector("nav");
        filterIcon.addEventListener("click", () => {
            if (nav.style.display === "none") {
                nav.style.display = "flex";
                openFormBtn.style.display = "none";
            }
            else {
                nav.style.display = "none";
                openFormBtn.style.display = "block";
            }
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsSUFBSSxzREFBZTtBQUNuQixJQUFJLDBEQUFpQjtBQUNyQixJQUFJLDhEQUFtQjtBQUN2QixJQUFJLDREQUFrQjtBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYW55dGltZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91cGNvbWluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGFueXRpbWVUb2RvcyA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFueXRpbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFueXRpbWUtYnRuXCIpO1xuICAgICAgICBhbnl0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbnl0aW1lVG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby13cmFwcGVyXCIpO1xuICAgICAgICBjb25zdCBub3RBbnl0aW1lID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgICFub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImFueXRpbWVcIilcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBhbnl0aW1lID0gWy4uLnRvZG9XcmFwcGVyXS5maWx0ZXIobm9kZSA9PiBcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW55dGltZVwiKVxuICAgICAgICApXG4gICAgICAgIG5vdEFueXRpbWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgICAgICBhbnl0aW1lLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IHtcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1wb3J0YW50LWJ0blwiKTtcbiAgICAgICAgaW1wb3J0YW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbXBvcnRhbnRUb2Rvcy5yZW5kZXIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IG5vdEltcG9ydGFudCA9IFsuLi50b2RvV3JhcHBlcl0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICAhbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbXBvcnRhbnRcIilcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSBbLi4udG9kb1dyYXBwZXJdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbXBvcnRhbnRcIilcbiAgICAgICAgKVxuICAgICAgICBub3RJbXBvcnRhbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgICAgICBpbXBvcnRhbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLy9QdWJzdWIgZmFjaWxpdGF0ZXMgbG9vc2VseSBjb3VwbGVkIG1vZHVsZXNcbmV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XG4gICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcbiAgICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgZihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSB7XG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBzdG9yYWdlLnJlbmRlclRvZG9zKCk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2RvQWRkZWRcIiwgc3RvcmFnZS5zYXZlTG9jYWxUb2Rvcyk7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2Rvc1VwZGF0ZWRcIiwgc3RvcmFnZS51cGRhdGVMb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG4gICAgc2F2ZUxvY2FsVG9kb3M6IHRvZG8gPT4ge1xuICAgICAgICBsZXQgdG9kb3M7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0b2RvcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH0sXG4gICAgcmVuZGVyVG9kb3M6ICgpID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRvZG9zO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwic3RvcmVkVG9kb3NcIiwgc3RvcmVkVG9kb3MpO1xuICAgIH0sXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlOiB0b0RlbGV0ZVRvZG9zID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFRvZG9zO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlZFRvZG9zID0gdG9EZWxldGVUb2RvcztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRUb2RvcykpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCB0b2RheVRvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ0blwiKTtcbiAgICAgICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZGF5VG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGUtY29udGVudFwiKTtcbiAgICAgICAgY29uc3Qgbm90VG9kYXkgPSBbLi4uZGF0ZUNvbnRlbnRdLmZpbHRlcihub2RlID0+IFxuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCAhPSB0b2RheURhdGVcbiAgICAgICAgKVxuICAgICAgICBjb25zdCB0b2RheSA9IFsuLi5kYXRlQ29udGVudF0uZmlsdGVyKG5vZGUgPT4gXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID09PSB0b2RheURhdGVcbiAgICAgICAgKVxuICAgICAgICBub3RUb2RheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbG9zZXN0KFwiLnRvZG8td3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHRvZGF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCB7IGZpbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9kb0Zvcm0gPSB7XG4gICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWZvcm1cIiksXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICB0b2RvRm9ybS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdG9kb0Zvcm0uYWRkKTtcbiAgICAgICAgdG9kb0Zvcm0ub3BlbkZvcm0oKTtcbiAgICAgICAgdG9kb0Zvcm0uaGFuZGxlRmlsdGVyKCk7XG4gICAgfSxcbiAgICBhZGQ6IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyLXRvZG9cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJcIikgeyBwcmlvcml0eSA9IFwibm9ybWFsXCIgfTtcblxuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIHByaW9yaXR5LCBkYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidG9kb0Zvcm1cIiwgdG9kbyk7XG4gICAgICAgIHRvZG9Gb3JtLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgdG9kb0Zvcm0uaGFuZGxlT3BlbkZvcm1CdG4oKTtcbiAgICAgICAgdG9kb0Zvcm0uaGFuZGxlRm9ybSgpO1xuICAgIH0sXG4gICAgb3BlbkZvcm06ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbkZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tZm9ybS1idG5cIik7XG4gICAgICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZm9ybVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLWljb25cIik7XG4gICAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTAwcHgpJyk7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbiAgICAgICAgb3BlbkZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGZpbHRlckljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgb3BlbkZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBmb3JtVGl0bGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGZvcm1TZWxlY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGZvcm1EYXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBmb3JtRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3BlbkZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJJY29uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBvcGVuRm9ybUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGZvcm1UaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZm9ybVNlbGVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZm9ybURhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGZvcm1EZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIG9wZW5Gb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBmaWx0ZXJJY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBmb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgICBmb3JtVGl0bGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBmb3JtU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgZm9ybURhdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBmb3JtRGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZU9wZW5Gb3JtQnRuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTAwcHgpJylcbiAgICAgICAgY29uc3Qgb3BlbkZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tZm9ybS1idG5cIik7XG4gICAgICAgIGNvbnN0IGZpbHRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1pY29uXCIpO1xuICAgICAgICBpZiAoKG1lZGlhUXVlcnkubWF0Y2hlcykgJiYgKG9wZW5Gb3JtQnRuLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSkge1xuICAgICAgICAgICAgb3BlbkZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGZpbHRlckljb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlRm9ybTogKCkgPT4ge1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDkwMHB4KScpXG4gICAgICAgIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZm9ybVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpO1xuICAgICAgICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1waWNrZXJcIik7XG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICBpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBmb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1EYXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1EZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUZpbHRlcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXItaWNvblwiKTtcbiAgICAgICAgY29uc3Qgb3BlbkZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tZm9ybS1idG5cIik7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgICAgIGZpbHRlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIG9wZW5Gb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgb3BlbkZvcm1CdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9IHtcbiAgICB0b2Rvc0xpc3Q6IFtdLFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9Gb3JtXCIsIHRvZG9zLmhhbmRsZVRvZG8pO1xuICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKFwic3RvcmVkVG9kb3NcIiwgdG9kb3MucmVuZGVyU3RvcmVkVG9kb3MpO1xuICAgIH0sXG4gICAgcmVuZGVyU3RvcmVkVG9kb3M6IHN0b3JlZFRvZG9zID0+IHtcbiAgICAgICAgc3RvcmVkVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIHRvZG9zLnRvZG9BZGRlZCh0b2RvKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlVG9kbzogdG9kbyA9PiB7XG4gICAgICAgIC8vQ0hFQ0sgSUYgVE9ETyBBTFJFQURZIEVYSVNUXG4gICAgICAgIGZ1bmN0aW9uIGFycmF5RXF1YWxzKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgICAgICAgICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvZG9zLnRvZG9zTGlzdC5zb21lKGVsZW1lbnQgPT4geyByZXR1cm4gYXJyYXlFcXVhbHMoT2JqZWN0LnZhbHVlcyhlbGVtZW50KSwgT2JqZWN0LnZhbHVlcyh0b2RvKSk7IH0pKSB7XG4gICAgICAgICAgICBhbGVydChcIlRvZG8gYWxyZWFkeSBleGlzdHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MudG9kb0FkZGVkKHRvZG8pO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kbyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRvZG9BZGRlZDogdG9kbyA9PiB7XG4gICAgICAgIHRvZG9zLnRvZG9zTGlzdC5wdXNoKHRvZG8pXG4gICAgICAgIHRvZG9zLnRvZG9DcmVhdGVFbGVtZW50KHRvZG8pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wbGV0ZS1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaC1idXR0b25cIik7XG5cbiAgICAgICAgY2hlY2tCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2Rvcy50b2RvQ2hlY2tlZCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRyYXNoQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb3MudG9kb1RyYXNoZWQpO1xuICAgICAgICB9KVxuXG4gICAgfSxcbiAgICB0b2RvQ2hlY2tlZDogZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy50b2Rvc0xpc3QpXG4gICAgfSxcbiAgICB0b2RvVHJhc2hlZDogZXZlbnQgPT4ge1xuICAgICAgICBsZXQgdG9kb1dyYXBwZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi50b2RvLXdyYXBwZXJcIik7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSB0b2RvV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNvbnRlbnRcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCB0b2RvRGF0ZSA9IHRvZG9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1jb250ZW50XCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdG9kb0luZGV4ID0gdG9kb3MudG9kb3NMaXN0LmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnRpdGxlID09PSB0b2RvVGl0bGUgJiYgZWxlbWVudC5kYXRlID09PSB0b2RvRGF0ZSAmJiBlbGVtZW50LmRlc2NyaXB0aW9uID09PSB0b2RvRGVzY3JpcHRpb247XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb3MudG9kb3NMaXN0LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuXG4gICAgICAgIHRvZG9XcmFwcGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodG9kb1dyYXBwZXIpO1xuXG4gICAgICAgIC8vIFBVQlNVQiBQVUJMSVNIXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidG9kb3NVcGRhdGVkXCIsIHRvZG9zLnRvZG9zTGlzdCk7XG4gICAgfSxcbiAgICB0b2RvQ3JlYXRlRWxlbWVudDogdG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZG8td3JhcHBlclwiKTtcblxuICAgICAgICAvL0NIRUNLIFBSSU9SSVRZXG4gICAgICAgIHRvZG9zLnRvZG9DaGVja1ByaW9yaXR5KHRvZG8sIHRvZG9XcmFwcGVyKTtcblxuICAgICAgICAvL1RPRE8gRUxFTUVOVCBDT05URU5UXG4gICAgICAgIC8vdGl0bGVcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZWxlbWVudC10aXRsZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG5ld1RvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGVudFwiKTtcbiAgICAgICAgbmV3VG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9UaXRsZSk7XG5cbiAgICAgICAgLy9kYXRlXG4gICAgICAgIGNvbnN0IHRvZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIHRvZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbmV3VG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGVudFwiKTtcbiAgICAgICAgbmV3VG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XG4gICAgICAgIHRvZG9EYXRlRGl2LmFwcGVuZENoaWxkKG5ld1RvZG9EYXRlKTtcblxuICAgICAgICAvL2Rlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVsZW1lbnQtZGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBuZXdUb2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWNvbnRlbnRcIik7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIC8vQ0hFQ0sgTUFSSyBCVVRUT05cbiAgICAgICAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGUtYnV0dG9uXCIpO1xuICAgICAgICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnV0dG9uKTtcblxuICAgICAgICAvL0NIRUNLIFRSQVNIIEJVVFRPTlxuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRyYXNoQnV0dG9uLnRleHRDb250ZW50ID0gXCItXCI7XG4gICAgICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaC1idXR0b25cIik7XG4gICAgICAgIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgICAgICAgLy9BUFBFTkQgVE8gTElTVFxuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xuICAgICAgICB0b2RvV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGF0ZURpdik7XG4gICAgICAgIHRvZG9XcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkRpdik7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb1dyYXBwZXIpO1xuICAgIH0sXG4gICAgdG9kb0NoZWNrUHJpb3JpdHk6ICh0b2RvLCB0b2RvV3JhcHBlcikgPT4ge1xuICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ODU4NVwiO1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImltcG9ydGFudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSBcImFueXRpbWVcIikge1xuICAgICAgICAgICAgdG9kb1dyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzY4YTlmZjg1XCI7XG4gICAgICAgICAgICB0b2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYW55dGltZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjb25zdCB1cGNvbWluZ1RvZG9zID0ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nLWJ0blwiKTtcbiAgICAgICAgdXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwY29taW5nVG9kb3MucmVuZGVyKTtcbiAgICB9LFxuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZS1jb250ZW50XCIpO1xuXG4gICAgICAgIGxldCB1cGNvbWluZ0RheXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgNyA7IGkrKykge1xuICAgICAgICAgICAgdXBjb21pbmdEYXlzLnB1c2goYWRkRGF5cyhuZXcgRGF0ZSgpLCBpKS50b0pTT04oKS5zbGljZSgwLDEwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdFVwY29taW5nID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PlxuICAgICAgICAgICAgIXVwY29taW5nRGF5cy5pbmNsdWRlcyhub2RlLnRleHRDb250ZW50KVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHVwY29taW5nID0gWy4uLmRhdGVDb250ZW50XS5maWx0ZXIobm9kZSA9PlxuICAgICAgICAgICAgdXBjb21pbmdEYXlzLmluY2x1ZGVzKG5vZGUudGV4dENvbnRlbnQpXG4gICAgICAgIClcblxuICAgICAgICBub3RVcGNvbWluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbG9zZXN0KFwiLnRvZG8td3JhcHBlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHVwY29taW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsb3Nlc3QoXCIudG9kby13cmFwcGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyB0b2RvRm9ybSB9IGZyb20gXCIuL3RvZG8tZm9ybS5qc1wiO1xuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IHRvZGF5VG9kb3MgfSBmcm9tIFwiLi90b2RheS5qc1wiO1xuaW1wb3J0IHsgaW1wb3J0YW50VG9kb3MgfSBmcm9tIFwiLi9pbXBvcnRhbnQuanNcIlxuaW1wb3J0IHsgYW55dGltZVRvZG9zIH0gZnJvbSBcIi4vYW55dGltZS5qc1wiO1xuaW1wb3J0IHsgdXBjb21pbmdUb2RvcyB9IGZyb20gXCIuL3VwY29taW5nLmpzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHRvZG9zLmluaXQoKTtcbiAgICB0b2RvRm9ybS5pbml0KCk7XG4gICAgc3RvcmFnZS5pbml0KCk7XG4gICAgdG9kYXlUb2Rvcy5pbml0KCk7XG4gICAgYW55dGltZVRvZG9zLmluaXQoKTtcbiAgICBpbXBvcnRhbnRUb2Rvcy5pbml0KCk7XG4gICAgdXBjb21pbmdUb2Rvcy5pbml0KCk7XG59KVxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
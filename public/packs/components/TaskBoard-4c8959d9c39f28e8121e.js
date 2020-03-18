/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
/*!*******************************************************!*\
  !*** ./app/javascript/packs/components/TaskBoard.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"./Fetch\"");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TasksBoard = function (_React$Component) {
  _inherits(TasksBoard, _React$Component);

  function TasksBoard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TasksBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TasksBoard.__proto__ || Object.getPrototypeOf(TasksBoard)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, "state", {
      enumerable: true,
      writable: true,
      value: {
        board: {
          new_task: null,
          in_development: null,
          in_qa: null,
          in_code_review: null,
          ready_for_release: null,
          released: null,
          archived: null
        }
      }
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TasksBoard, [{
    key: "generateLane",
    value: function generateLane(id, title) {
      var tasks = this.state[id];

      return {
        id: id,
        title: title,
        total_count: tasks ? tasks.meta.total_count : "None",
        cards: tasks ? tasks.items.map(function (task) {
          return _extends({}, task, {
            label: task.state,
            title: task.name
          });
        }) : []
      };
    }
  }, {
    key: "getBoard",
    value: function getBoard() {
      return {
        lanes: [this.generateLane("new_task", "New"), this.generateLane("in_development", "In Dev"), this.generateLane("in_qa", "In QA"), this.generateLane("in_code_review", "in CR"), this.generateLane("ready_for_release", "Ready for release"), this.generateLane("released", "Released"), this.generateLane("archived", "Archived")]
      };
    }
  }, {
    key: "loadLines",
    value: function loadLines() {
      this.loadLine("new_task");
      this.loadLine("in_development");
      this.loadLine("in_qa");
      this.loadLine("in_code_review");
      this.loadLine("ready_for_release");
      this.loadLine("released");
      this.loadLine("archived");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadLines();
    }
  }, {
    key: "loadLine",
    value: function loadLine(state) {
      var _this2 = this;

      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.fetchLine(state, page).then(function (data) {
        _this2.setState(_defineProperty({}, state, data));
      });
    }
  }, {
    key: "fetchLine",
    value: function fetchLine(state) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      return Object(__WEBPACK_IMPORTED_MODULE_0__Fetch__["fetch"])("GET", window.Routes.api_v1_tasks_path({
        q: { state_eq: state },
        page: page,
        per_page: 10,
        format: "json"
      })).then(function (_ref2) {
        var data = _ref2.data;

        return data;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Your tasks"
        ),
        React.createElement(Board, { data: this.getBoard() })
      );
    }
  }]);

  return TasksBoard;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (TasksBoard);

/***/ })

/******/ });
//# sourceMappingURL=TaskBoard-4c8959d9c39f28e8121e.js.map
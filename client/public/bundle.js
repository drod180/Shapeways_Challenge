/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	User = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", function(event) {
	  var root = document.getElementById('root');
	  var user = new User(root);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function User(parent) {
	  this.parent = parent || document.createElement("div");
	  this.userName = localStorage.getItem("SWC_userName") || "Username";
	  this.userEmail = localStorage.getItem("SWC_userEmail") || "Email";
	  this.userAvatar = localStorage.getItem("SWC_userAvatar") || "Default-avatar";
	  this.build();
	}

	User.prototype.setUserName = function (username) {
	  this.userName = username;
	  localStorage.setItem("SWC_userName", username);
	}

	User.prototype.setEmailAddress = function (email) {
	  this.userEmail = email;
	  localStorage.setItem("SWC_userEmail", email);
	}

	User.prototype.setAvatar = function (avatar) {
	  this.userAvatar = avatar;
	  localStorage.setItem("SWC_userAvatar", avatar);
	}

	User.prototype.build = function () {
	  var userNameEl = document.createElement("h2");
	  var userEmailEl = document.createElement("h3");
	  var userAvatarEl = document.createElement("img");

	  this.parent.appendChild(userNameEl);
	  this.parent.appendChild(userEmailEl);
	  this.parent.appendChild(userAvatarEl);

	  userNameEl.innerHTML = this.userName;
	  userEmailEl.innerHTML = this.userEmail;

	  userNameEl.classList.add("username");
	  userEmailEl.classList.add("email");
	  userAvatarEl.classList.add("avatar");
	}

	module.exports = User;


/***/ }
/******/ ]);
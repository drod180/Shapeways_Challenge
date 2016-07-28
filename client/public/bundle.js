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
	  this.userEmail = localStorage.getItem("SWC_userEmail") || "Contact";
	  this.userAvatar = localStorage.getItem("SWC_userAvatar") || "https://api.adorable.io/avatars/285/default@adorable.io.png";
	  this.userHandle = localStorage.getItem("SWC_userHandle") || "@twitter-handle"
	  this.build();
	}

	User.prototype._addInlineTextEdit = function (element) {
	  element.addEventListener("input", function () {
	    this.setData(element.classList[0], element.innerHTML);
	    console.log(element.classList[0]);
	    console.log(element.innerHTML);
	  }.bind(this));
	}

	User.prototype._addImageEditor = function (image, input) {
	  input.addEventListener('change', function() {
	    var file = this.files[0];
	    var reader = new FileReader();

	    reader.addEventListener("load", function() {
	      var imgData = reader.result;
	      image.src = imgData;
	      localStorage.setItem("SWC_userAvatar", imgData);
	    }, false);

	    reader.readAsDataURL(file);
	  });
	}

	User.prototype._buildUserName = function () {
	  var userNameEl = document.createElement("h2");
	  this.parent.appendChild(userNameEl);
	  userNameEl.innerHTML = this.userName;
	  userNameEl.classList.add("username");
	  userNameEl.setAttribute("contentEditable", true);
	  this._addInlineTextEdit(userNameEl);
	}

	User.prototype._buildUserEmail = function () {
	  var userEmailEl = document.createElement("h3");
	  this.parent.appendChild(userEmailEl);
	  userEmailEl.innerHTML = this.userEmail;
	  userEmailEl.classList.add("email");
	  userEmailEl.setAttribute("contentEditable", true);
	  this._addInlineTextEdit(userEmailEl);
	}

	User.prototype._buildUserAvatar = function () {
	  var userAvatarEl = document.createElement("img");
	  this.parent.appendChild(userAvatarEl);
	  userAvatarEl.src = this.userAvatar;
	  userAvatarEl.classList.add("avatar");

	  var input = document.createElement("input");
	  this.parent.appendChild(input);
	  input.type = "file";
	  input.classList.add("input-avatar");
	  this._addImageEditor(userAvatarEl, input);
	}

	User.prototype._buildUserHandle = function () {
	  var userHandleEl = document.createElement("h3");
	  this.parent.appendChild(userHandleEl);
	  userHandleEl.innerHTML = this.userHandle;
	  userHandleEl.classList.add("handle");
	  userHandleEl.setAttribute("contentEditable", true);
	  this._addInlineTextEdit(userHandleEl);
	}

	User.prototype._buildFollowButton = function () {
	    var followButtonEl = document.createElement("h3");
	    this.parent.appendChild(followButtonEl);
	    followButtonEl.innerHTML = "Follow";
	}

	User.prototype._setUserName = function (username) {
	  this.userName = username;
	  localStorage.setItem("SWC_userName", username);
	}

	User.prototype._setEmailAddress = function (email) {
	  this.userEmail = email;
	  localStorage.setItem("SWC_userEmail", email);
	}

	User.prototype._setAvatar = function (avatar) {
	  this.userAvatar = avatar;
	  localStorage.setItem("SWC_userAvatar", avatar);
	}

	User.prototype._setHandle = function (handle) {
	  this.userHandle = handle;
	  localStorage.setItem("SWC_userHandle", handle);
	}

	User.prototype.build = function () {
	  this._buildUserAvatar();
	  this._buildUserName();
	  this._buildUserEmail();
	  this._buildFollowButton();
	  this._buildUserHandle();
	}

	User.prototype.setData = function (dataElement, data) {
	  switch(dataElement) {
	    case "username":
	      this._setUserName(data);
	      break;
	    case "email":
	      this._setEmailAddress(data);
	      break;
	    case "avatar":
	      this._setAvatar(data);
	      break;
	    case "handle":
	      this._setHandle(data);
	      break;
	    default:
	      break;
	  }
	}

	module.exports = User;


/***/ }
/******/ ]);
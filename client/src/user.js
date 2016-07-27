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

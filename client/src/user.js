function User(root) {
  this.parent = document.createElement("div");
  root.appendChild(this.parent);
  this.parent.classList.add("user-badge");

  this.userName = localStorage.getItem("SWC_userName") || "Username";
  this.userEmail = localStorage.getItem("SWC_userEmail") || "Contact";
  this.userAvatar = localStorage.getItem("SWC_userAvatar") || "https://api.adorable.io/avatars/285/default@adorable.io.png";
  this.userHandle = localStorage.getItem("SWC_userHandle") || "@twitter-handle"
  this.build();
}

User.prototype._addInlineTextEdit = function (element) {
  element.addEventListener("input", function () {
    this.setData(element.classList[0], element.innerHTML);
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

User.prototype._buildUserName = function (container) {
  var userNameEl = document.createElement("h2");
  container.appendChild(userNameEl);
  userNameEl.innerHTML = this.userName;
  userNameEl.classList.add("username");
  userNameEl.setAttribute("contentEditable", true);
  this._addInlineTextEdit(userNameEl);
}

User.prototype._buildUserEmail = function (container) {
  var userEmailEl = document.createElement("div");
  userEmailEl.classList.add("detail-item");
  container.appendChild(userEmailEl);

  var emailIconEl = document.createElement("span");
  emailIconEl.classList.add("email-icon");
  userEmailEl.appendChild(emailIconEl);

  var userEmailHeaderEl = document.createElement("h3");
  userEmailEl.appendChild(userEmailHeaderEl);
  userEmailHeaderEl.innerHTML = this.userEmail;
  userEmailHeaderEl.classList.add("email");
  userEmailHeaderEl.setAttribute("contentEditable", true);
  this._addInlineTextEdit(userEmailHeaderEl);
}

User.prototype._buildUserAvatar = function (container) {
  var userAvatarImgEl = document.createElement("img");
  userAvatarImgEl.src = this.userAvatar;
  userAvatarImgEl.classList.add("avatar-img");
  container.appendChild(userAvatarImgEl);

  var input = document.createElement("input");
  container.appendChild(input);
  input.type = "file";
  input.classList.add("input-avatar");
  input.classList.add("hide");
  this._addImageEditor(userAvatarImgEl, input);

  container.appendChild(userAvatarImgEl);
  container.appendChild(input);

  userAvatarImgEl.addEventListener("click", function () {
    input.classList.remove("hide");
  });

}


User.prototype._buildUserHandle = function (container) {
  var userHandleEl = document.createElement("div");
  userHandleEl.classList.add("detail-item");
  container.appendChild(userHandleEl);

  var handleIconEl = document.createElement("span");
  handleIconEl.classList.add("handle-icon");
  userHandleEl.appendChild(handleIconEl);

  var userHandleHeaderEl = document.createElement("h3");
  userHandleEl.appendChild(userHandleHeaderEl);
  userHandleHeaderEl.innerHTML = this.userHandle;
  userHandleHeaderEl.classList.add("handle");
  userHandleHeaderEl.setAttribute("contentEditable", true);
  this._addInlineTextEdit(userHandleHeaderEl);
}

User.prototype._buildFollowButton = function (container) {
  var followButtonEl = document.createElement("div");
  followButtonEl.classList.add("detail-item");
  container.appendChild(followButtonEl);

  var followIconEl = document.createElement("span");
  followIconEl.classList.add("follow-icon");
  followButtonEl.appendChild(followIconEl);

  var followButtonHeaderEl = document.createElement("h3");
  followButtonEl.appendChild(followButtonHeaderEl);
  followButtonHeaderEl.innerHTML = "Follow";
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
  var userAvatarEl = document.createElement("div");
  this.parent.appendChild(userAvatarEl);
  userAvatarEl.classList.add("avatar");
  this._buildUserAvatar(userAvatarEl);

  var userDetailsEl = document.createElement("div");
  this.parent.appendChild(userDetailsEl);
  userDetailsEl.classList.add("details");
  this._buildUserName(userDetailsEl);
  this._buildUserEmail(userDetailsEl);
  this._buildFollowButton(userDetailsEl);
  this._buildUserHandle(userDetailsEl);
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

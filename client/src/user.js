/*User component
  Bulid a user component which contains an avatar image and user details
  Stores data in localStorage.

  localStorage data -
  SWC_userName - Username
  SWC_userEmail - Email
  SWC_userAvatar - Avatar image data URI
  SWC_userHandle - Twitter Handle
*/
function User(root) {
  this.parent = document.createElement("div");
  root.appendChild(this.parent);
  this.parent.classList.add("user-badge");
  this.parent.classList.add("group");

  this.userName = localStorage.getItem("SWC_userName") || "Username";
  this.userEmail = localStorage.getItem("SWC_userEmail") || "Contact";
  this.userAvatar = localStorage.getItem("SWC_userAvatar") || "https://api.adorable.io/avatars/180/default@adorable.io.png";
  this.userHandle = localStorage.getItem("SWC_userHandle") || "@twitter-handle"
  this.build();
}

// Allows elements to be inline editable and save to local storage
User.prototype._addInlineTextEdit = function (element) {
  element.setAttribute("contentEditable", true);
  element.addEventListener("input", function () {
    this.setData(element.classList[0], element.innerHTML);
  }.bind(this));
}

//Reads file and uploads it as the avatar image on change
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

//Methods for building different sub components

//Username
User.prototype._buildUserName = function (container) {
  var userNameEl = document.createElement("h2");
  container.appendChild(userNameEl);
  userNameEl.innerHTML = this.userName;
  userNameEl.classList.add("username");
  this._addInlineTextEdit(userNameEl);
}

//Email address
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
  this._addInlineTextEdit(userEmailHeaderEl);
}

//Avatar
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
    input.classList.toggle("hide");
  });

}

//Twitter Handle
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
  this._addInlineTextEdit(userHandleHeaderEl);
}

//Follow button
User.prototype._buildFollowButton = function (container) {
  var followButtonEl = document.createElement("div");
  followButtonEl.classList.add("detail-item");
  container.appendChild(followButtonEl);

  var followIconEl = document.createElement("span");
  followIconEl.classList.add("follow-icon");
  followButtonEl.appendChild(followIconEl);

  var followButtonHeaderEl = document.createElement("h3");
  followButtonHeaderEl.classList.add("follow-header");
  followButtonEl.appendChild(followButtonHeaderEl);
  followButtonHeaderEl.innerHTML = "Follow";
}

//Construct the user badge avatar and details
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

//Save data locally and to local storage
User.prototype.setData = function (dataElement, data) {
  switch(dataElement) {
    case "username":
      this.userName = data;
      localStorage.setItem("SWC_userName", data);
      break;
    case "email":
      this.userEmail = data;
      localStorage.setItem("SWC_userEmail", data);
      break;
    case "avatar":
      this.userAvatar = data;
      localStorage.setItem("SWC_userAvatar", data);
      break;
    case "handle":
      this.userHandle = data;
      localStorage.setItem("SWC_userHandle", data);
      break;
    default:
      break;
  }
}

module.exports = User;

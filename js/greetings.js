//항상 마지막순서! (다른 파일의 변수를 사용하기 때문.)

const loginContainer = document.querySelector("#login-container");
const container = document.querySelector("#container");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  const usernameInput = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameInput);
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  container.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(usernameInput);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요:) ${username} 님`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  container.classList.remove(HIDDEN_CLASSNAME);
}

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  toDoList.appendChild(li);
  li.appendChild(span);
  span.innerText = newToDo;
  li.appendChild(button);
  button.innerText = "🗑";
  button.addEventListener("click", delectToDo);
}

function delectToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener("submit", handleToDoForm);

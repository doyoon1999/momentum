// 상수 및 전역변수 선언
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = []; // 할 일

// 함수 정의

/**
 * 로컬 스토리지에 할 일 배열을 저장하는 함수
 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * 할 일 폼 제출 시 호출되는 함수
 * @param {Event} event
 */
function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    completed: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

/**
 * 화면에 할 일을 그리는 함수
 * @param {Object} newToDo
 */
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const label = document.createElement("label");
  label.classList.add("custom-checkbox");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = newToDo.completed;
  checkbox.addEventListener("change", toggleComplete);

  const checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", delectToDo);

  label.appendChild(checkbox);
  label.appendChild(checkmark);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/**
 * 할 일을 삭제하는 함수
 * @param {Event} event
 */
function delectToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

/**
 * 체크박스 상태를 토글하고 저장하는 함수
 * @param {Event} event
 */
function toggleComplete(event) {
  const li = event.target.parentElement.parentElement;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(li.id));
  toDo.completed = event.target.checked;
  saveToDos();
}

/**
 * 페이지 로드 시, 로컬 스토리지에 저장된 할 일을 불러오는 함수
 */
function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

// 초기화면
loadToDos();
toDoForm.addEventListener("submit", handleToDoForm);

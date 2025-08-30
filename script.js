const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// When user types in the input box
inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  let tasks = [];
  listContainer.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.childNodes[0].nodeValue, // the task text
      done: li.classList.contains("checked") // true/false
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  listContainer.innerHTML = "";
  tasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) {
      li.classList.add("checked");
    }
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
  });
}

function showTasks() {
let savedTasks = localStorage.getItem("data");
listContainer.innerHTML = savedTasks;
}
showTasks();

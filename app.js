const todoList = document.querySelector("#todo-list");
const todoText = document.getElementById("todoText")
const todoForm = document.querySelector("#todo-form");


todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", removeTodo);


function createAlert(type, message) {

    let prevAlert = todoList.parentElement.children[0];

    // The previous alert is removed to prevent duplicate notifications.
    if (prevAlert.classList.contains("alert")) {
        prevAlert.remove();
    }


    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    alert.textContent = message;
    todoList.parentElement.prepend(alert);

    setTimeout(() => {
        alert.remove();
    }, 1000);

}


function showLoader(button) {

    let addTodoBtn = button.target.children[0].children[1];

    addTodoBtn.setAttribute("disabled", true);
    addTodoBtn.textContent = "";

    const faloader = document.createElement("i");
    faloader.className = "fas fa-spinner fa-spin";
    addTodoBtn.appendChild(faloader);

    setTimeout(() => {
        addTodoBtn.removeAttribute("disabled");
        addTodoBtn.textContent = "Add Todo";
        faloader.remove();
    }, 300);

}


function addTodo(e) {

    // console.log(e.1target);

    const newTodo = todoText.value.trim();

    showLoader(e);
    if (todoText.value != "") {
        addTodoUI(newTodo);
        // createAlert("success", "Todo başarıyla eklendi.");
    } else {
        createAlert("danger", "Lütfen bir todo girin.");
    }
    e.preventDefault();
}


function addTodoUI() {
    todoList.innerHTML += `

  <div class="card d-flex flex-row">
  <div class="card-body todo-text">
  ${todoText.value}
  </div>
  <span class="span-delete-todo align-self-center me-4">
      <a class="btn btn-outline-success btn-block delete-todo" href="">Remove</a>
    </span>
</div>

    `
}


function removeTodo(e) {

    if (e.target.classList.contains("delete-todo")) {

        // removeTodoStorage(e.target.parentElement.parentElement.textContent);
        removeTodoUI(e.target.parentElement.parentElement);

    }



    e.preventDefault();
}

function removeTodoUI(i) {
    i.remove();
}
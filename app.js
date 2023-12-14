const todoTable = document.querySelector("#todo-list");
const todoText = document.getElementById("todoText")
const todoForm = document.querySelector("#todo-form");


todoForm.addEventListener("submit", addTodo);
todoTable.addEventListener("click", removeTodo);




function createAlert(type, message) {

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    alert.textContent = message;
    todoTable.parentElement.prepend(alert);

    setTimeout(() => {
        alert.remove();
    }, 1500);

}


function showLoader(e) {

    console.log('object :>> ', e);

    // const todoDelBtn = this;
    // const todoDelBtnSpan = e.target;
    // todoDelBtn.setAttribute("disabled", true);
    // // ch1.disabled = true;
    // todoDelBtnSpan.textContent = "";

    // const faloader = document.createElement("i");
    // faloader.className = "fas fa-spinner fa-spin";
    // todoDelBtn.appendChild(faloader)


    // setTimeout(() => {
    //     // ch1.disabled = false;
    //     todoDelBtn.removeAttribute("disabled");
    //     todoDelBtnSpan.textContent = "Add Todo";
    //     faloader.remove();
    // }, 1500);

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
    todoTable.innerHTML += `

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
    console.log('object :>> ', e);

    if (e.target.classList.contains("delete-todo")) {

        // removeTodoStorage(e.target.parentElement.parentElement.textContent);
        removeTodoUI(e.target.parentElement.parentElement);

    }



    e.preventDefault();
}

function removeTodoUI(i) {
    i.remove();
}
const input = document.querySelector(".txt-input");
const btn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

const addTodo = () => {
    const todo = document.createElement("li");

    todo.innerHTML = `${input.value} <button onclick="deleteTodo(event)" class="btn-X">X</button>`;
    ul.appendChild(todo);
}

btn.addEventListener("click", () => {
    if (input.value !== "") {        
        addTodo();
        input.value = "";
        empty.style.display = "none";
    } else {
        input.placeholder = "You must to write a task :)";
    }
});

const deleteTodo = (event) => {
    this.event.target.parentElement.remove(); 
    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
}
const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_container= document.querySelector(".todo_container")
let deleteBtn;
let checkboxes;
let editBtns;

const addHTML = (todo) =>{
  const todoDiv =document.createElement("div")
  todoDiv.classList.add("todo")

  const todoLeft =document.createElement("div")
  todoLeft.classList.add("todo_left")

  const todocb =document.createElement("input")
  todocb.type= "checkbox"
  todocb.classList.add("todo_cb")
  todocb.checked = todo.isCompleted

  const todoText =document.createElement("span")
  todoText.classList.add("todo_text")
  todoText.textContent= todo.text

  const todoRight =document.createElement("div")
  todoRight.classList.add("todo_right")

  const deleteBtn =document.createElement("button")
  deleteBtn.classList.add("todo_delete")
  deleteBtn.innerHTML=  "delete" 

  const editBtn =document.createElement("button")
  editBtn.classList.add("todo_edit")
  editBtn.innerHTML=  "edit" 

  todo_container.appendChild(todoDiv)
  todoDiv.appendChild(todoLeft)
  todoDiv.appendChild(todoRight)
  todoLeft.appendChild(todocb)
  todoLeft.appendChild(todoText)
  todoRight.appendChild(deleteBtn)
  todoRight.appendChild(editBtn)
  
};


const startConf = () => {
  // baslangic ayarlari
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
     localStorage.setItem("todos", JSON.stringify([]));
  } else {
     todos.forEach((todo)=> {
        addHTML(todo);
     });
     deleteBtn = document.querySelectorAll(".todo_delete")
     checkboxes = document.querySelectorAll(".todo_cb")
     editBtns = document.querySelectorAll(".todo_edit")
  } 
}

startConf();

const addTodo = (e) => {
  e.preventDefault();
  const inputVal = input.value;
  const todo = {
     text: inputVal,
     isCompleted: false,
  };

  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  addHTML(todo);

  form.reset();
}


function deleteTodo(e){
  
  const todo = e.target.parentElement.parentElement;
  const text = todo.firstChild.children[1].textContent;
  console.log(todo)
  todo.remove();
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter(td => td.text != text);
  localStorage.setItem("todos", JSON.stringify(todos));
  
}
function completeTodo(e){
  const todo = e.target.parentElement.parentElement;
  const text = todo.firstChild.children[1].textContent;
  let todos = JSON.parse(localStorage.getItem("todos"))
  todos.forEach(td =>{
    if(td.text===text)td.isCompleted = !td.iscompleted
  })
  localStorage.setItem("todos", JSON.stringify(todos));
}
function editTodo(e){
  const todo = e.target.parentElement.parentElement;
  const text = todo.firstChild.children[1].textContent;
  console.log(todo)
  todo.remove();
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter(td => td.text != text);
  localStorage.setItem("todos", JSON.stringify(todos));
  inputVal =input.Text
}




form.addEventListener("submit", addTodo);
deleteBtn.forEach((btn) => btn.addEventListener("click", deleteTodo))
checkboxes.forEach((btn) => btn.addEventListener("click", completeTodo))
editBtns.forEach((btn) => btn.addEventListener("click", editTodo))

const baslık = document.querySelector(".todo_title")
text = "HAYAL'S TO DO"
idx = 0
function sadık(){
  idx++
  baslık.innerHTML = text.slice(0,idx)
  if(idx>text.length){
    idx= 0  }
}
setInterval(sadık, 300)


import Todo from "./todo.js";
import Project from "./project.js";

const todoContainer=document.querySelector(".todo-list")
const todoForm=document.querySelector(".todo-form");

const newTodoBtn=document.querySelector(".new-todo");
newTodoBtn.addEventListener("click",()=>{
    todoForm.classList.add("todo-display")
});

const closeTodoBtn=document.querySelector("#todo-close");
closeTodoBtn.addEventListener("click",()=>{
    todoForm.classList.remove("todo-display")
});

const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");


const home =Project("home");
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let newTodo = Todo(todoName.value,todoDate.value,todoDescription.value,todoPriority.value)
    home.todoList.push(newTodo);
    console.log(home)
});


const todo1= Todo("Uradi","111","Midamd","low");
const todo2= Todo("dsad","dsd","edasda","high");

home.todoList.push(todo1);
home.todoList.push(todo2);

const homeBtn=document.getElementById("home");
homeBtn.addEventListener("click", ()=>{
    todoContainer.innerHTML="";
    home.todoList.forEach((todo)=>{
        makeTodoInterface(todo);
    })
    addAddBtn();
});

function makeTodoInterface(todo){
    const todoInterface=document.createElement("div");
    todoInterface.classList.add("todo");
    
    const todoTitle=document.createElement("div");
    todoTitle.innerHTML=todo.title;
    todoInterface.appendChild(todoTitle);

    const todoDate=document.createElement("div");
    todoDate.innerHTML=todo.dueDate;
    todoInterface.appendChild(todoDate);

    const todoDescription=document.createElement("div");
    todoDescription.innerHTML=todo.description;
    todoInterface.appendChild(todoDescription);

    const todoPriority=document.createElement("div");
    todoPriority.innerHTML=todo.priority;
    todoInterface.appendChild(todoPriority);
    
    todoContainer.appendChild(todoInterface);
};

function addAddBtn(){
    const addBtn=document.createElement("button");
    addBtn.classList.add("new-todo");
    addBtn.innerHTML="Add Task";
    todoContainer.appendChild(addBtn)
}
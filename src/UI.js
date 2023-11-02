import Todo from "./todo.js";
import Project from "./project.js";
import {populateHomePage,deleteTodo} from "./controller.js";


const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");
export const home =Project("home");
const todo1= Todo("Iznesi Djubre","12.1.2004","Blablabla","High");
const todo2= Todo("Smrsaj","14.02.2015","truxturc","Low");
home.todoList.push(todo1);
home.todoList.push(todo2);

export const todoContainer=document.querySelector(".todo-list")

const todoForm=document.querySelector(".todo-form");
const newTodoBtn=document.querySelector(".new-todo");
const closeTodoBtn=document.querySelector("#todo-close");


const projectForm=document.querySelector(".project-form");
const projectBtn=document.querySelector(".new-project");
const closeProjectBtn=document.getElementById("p-close");

const homeBtn=document.getElementById("home");

window.addEventListener("load",()=>{
    populateHomePage();
})

newTodoBtn.addEventListener("click",()=>{
    todoForm.classList.add("display")
});
closeTodoBtn.addEventListener("click",()=>{
     todoForm.classList.remove("display");
});


projectBtn.addEventListener("click",()=>{
    projectForm.classList.add("display")
});
closeProjectBtn.addEventListener("click",()=>{
    projectForm.classList.remove("display")
});
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let newTodo = Todo(todoName.value,todoDate.value,todoDescription.value,todoPriority.value)
    home.todoList.push(newTodo);
    populateHomePage();
    todoForm.classList.remove("display");
});
homeBtn.addEventListener("click", ()=>{
    populateHomePage()
});


import Todo from "./todo.js";
import Project from "./project.js";

const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");
const home =Project("home");
const todo1= Todo("Iznesi Djubre","12.1.2004","Blablabla","High");
const todo2= Todo("Smrsaj","14.02.2015","truxturc","Low");
home.todoList.push(todo1);
home.todoList.push(todo2);

const todoContainer=document.querySelector(".todo-list")
const todoForm=document.querySelector(".todo-form");
const projectForm=document.querySelector(".project-form")
const newTodoBtn=document.querySelector(".new-todo")
const closeTodoBtn=document.querySelector("#todo-close");
const homeBtn=document.getElementById("home");
const projectBtn=document.querySelector(".new-project")
const closeProjectBtn=document.getElementById("p-close")
window.addEventListener("load",()=>{
    controller.populateHomePage();
})

projectBtn.addEventListener("click",()=>{
    projectForm.classList.add("display")
    });

newTodoBtn.addEventListener("click",()=>{
    todoForm.classList.add("display")
    });

closeProjectBtn.addEventListener("click",()=>{
    projectForm.classList.remove("display")
});
closeTodoBtn.addEventListener("click",()=>{
    controller.removeTodoForm();
});
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let newTodo = Todo(todoName.value,todoDate.value,todoDescription.value,todoPriority.value)
    home.todoList.push(newTodo);
    controller.populateHomePage();
    controller.removeTodoForm();
});
homeBtn.addEventListener("click", ()=>{
    controller.populateHomePage()
});
const controller=(()=>{
    function populateHomePage(){
        todoContainer.innerHTML="";
        home.todoList.forEach((todo)=>{
            makeTodoInterface(todo);
        })
    }
    function makeTodoInterface(todo){
        const todoInterface=document.createElement("div");
        todoInterface.classList.add("todo");
        
        const todoTitle=document.createElement("div");
        todoTitle.innerHTML=todo.title;
        todoTitle.classList.add("todo-title")
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
    function removeTodoForm(){
        todoForm.classList.remove("display");
    }
    return{populateHomePage,removeTodoForm,}
})()
export default controller
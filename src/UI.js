import Todo from "./todo.js";
import Project, { projectList } from "./project.js";
import {fillTodoPage,fillProjectsMenu,fillTodayPage,fillHomePage} from "./controller.js";
import { storage } from "./storage.js";


const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");

const projectName = document.getElementById("p-title")

const project1=Project("Gym");
const project2=Project("School");

projectList[project1.name]=project1;
projectList[project2.name]=project2;

let idCounter=3;
const todo1= Todo("Make todo list","Create website were users can save and view their assignments",new Date("2023-12-14"),"High",0);
const todo2= Todo("Six pack","Do plank every day for 1 month",new Date("2023-12-15"),"Low",1);
const todo3= Todo("Lose weight","Start going to the gym",new Date("2023-11-9"),"Mid",2);
const todo4= Todo("Odin Project","Finnish Odin Project",new Date("2023-11-9"),"High",3);

project1.todoList.push(todo3);
project1.todoList.push(todo2);
project2.todoList.push(todo4);
project2.todoList.push(todo1);

if(storage){
    Object.assign(projectList,storage)
}

export let currentProjectKey=""
export const setKey=(string)=>(currentProjectKey=string)

export const todoContainer=document.querySelector(".todo-list");
export const projectContainer=document.querySelector(".project-list")

const todoForm=document.querySelector(".todo-form");
export const newTodoBtn=document.querySelector(".new-todo");
const closeTodoBtn=document.querySelector("#todo-close");


const projectForm=document.querySelector(".project-form");
const projectBtn=document.querySelector(".new-project");
const closeProjectBtn=document.getElementById("p-close");

const homeBtn=document.getElementById("home");
const todayBtn=document.getElementById("today");

window.addEventListener("load",()=>{
    fillHomePage();
    fillProjectsMenu();
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
    idCounter ++;
    let newTodo = Todo(todoName.value,todoDescription.value,new Date(todoDate.value),todoPriority.value,idCounter)
    projectList[currentProjectKey].todoList.push(newTodo);
    localStorage.setItem(currentProjectKey,JSON.stringify(projectList[currentProjectKey]))
    fillTodoPage();
    todoForm.classList.remove("display");
    todoForm.reset();
});
homeBtn.addEventListener("click", ()=>{
    fillHomePage();

});

projectForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newProject=Project(projectName.value);
    localStorage.setItem(projectName.value,JSON.stringify(newProject))
    projectList[projectName.value]=newProject;
    fillProjectsMenu();
    projectForm.classList.remove("display");
    projectForm.reset();
})
todayBtn.addEventListener("click",()=>{
    fillTodayPage();
})

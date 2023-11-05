import Todo from "./todo.js";
import Project, { projectList } from "./project.js";
import {populateHomePage,populateProjectsMenu} from "./controller.js";


const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");

const projectName = document.getElementById("p-title")

export const home =Project("home");

const project1=Project("Teretana");
const project2=Project("Skola");

projectList[home.name]=home;
projectList[project1.name]=project1;
projectList[project2.name]=project2;

const todo1= Todo("Iznesi Djubre","Potrudi se da izneses djubre napolju","12.01.2004","High");
const todo2= Todo("Smrsaj","Skini salo sa stomaka","14.02.2015","Low");
const todo3= Todo("Do This","IMINISADSAJDSDADS","24.01.2016","Mid");
const todo4= Todo("sdasdasds","IMINsadasdasdasdDSDADS","21.11.2022","High");
home.todoList.push(todo1);
home.todoList.push(todo2);
home.todoList.push(todo3);
home.todoList.push(todo4);
project1.todoList.push(todo3);
project2.todoList.push(todo4);

export let currentProjectKey="home";
export const setKey=(string)=>(currentProjectKey=string)

export const todoContainer=document.querySelector(".todo-list");
export const projectContainer=document.querySelector(".project-list")

const todoForm=document.querySelector(".todo-form");
const newTodoBtn=document.querySelector(".new-todo");
const closeTodoBtn=document.querySelector("#todo-close");


const projectForm=document.querySelector(".project-form");
const projectBtn=document.querySelector(".new-project");
const closeProjectBtn=document.getElementById("p-close");

const homeBtn=document.getElementById("home");

window.addEventListener("load",()=>{
    populateHomePage();
    populateProjectsMenu();
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
    let newTodo = Todo(todoName.value,todoDescription.value,todoDate.value,todoPriority.value)
    home.todoList.push(newTodo);
    if (currentProjectKey!=="home"){
        projectList[currentProjectKey].todoList.push(newTodo);
    };
    populateHomePage();
    todoForm.classList.remove("display");
    todoForm.reset();
});
homeBtn.addEventListener("click", ()=>{
    currentProjectKey="home"
    populateHomePage()
});

projectForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newProject=Project(projectName.value);
    projectList[projectName.value]=newProject;
    populateProjectsMenu();
    projectForm.classList.remove("display");
    projectForm.reset();
})


import Todo from "./todo.js";
import Project, { projectList } from "./project.js";
import {fillHomePage,fillProjectsMenu,fillTodayPage} from "./controller.js";
import { format,parseISO } from 'date-fns'


const todoName = document.getElementById("title");
const todoDate = document.getElementById("dueDate");
const todoDescription = document.getElementById("description");
const todoPriority = document.getElementById("priority");

const projectName = document.getElementById("p-title")

const project1=Project("Teretana");
const project2=Project("Skola");

projectList[project1.name]=project1;
projectList[project2.name]=project2;

let idCounter=3;
const todo1= Todo("Iznesi Djubre","Potrudi se da izneses djubre napolju",new Date("2023-12-14"),"High",0);
const todo2= Todo("Smrsaj","Skini salo sa stomaka",new Date("2023-12-15"),"Low",1);
const todo3= Todo("Do This","IMINISADSAJDSDADS",new Date("2023-11-9"),"Mid",2);
const todo4= Todo("sdasdasds","IMINsadasdasdasdDSDADS",new Date("2023-11-9"),"High",3);

project1.todoList.push(todo3);
project1.todoList.push(todo2);
project2.todoList.push(todo4);
project2.todoList.push(todo1);

export const home =(()=>{
    const name="home"
    const todoList=[];
    
    Object.keys(projectList).forEach(key => {
        projectList[key].todoList.forEach((todo)=>{
            todoList.push(todo)
        })
    });

    return{name,todoList}
})();
projectList[home.name]=home;

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
    console.log(typeof(todoDate.value))
    home.todoList.push(newTodo);
    if (currentProjectKey!=="home"){
        projectList[currentProjectKey].todoList.push(newTodo);
    };
    fillHomePage();
    todoForm.classList.remove("display");
    todoForm.reset();
});
homeBtn.addEventListener("click", ()=>{
    currentProjectKey="home";
    fillHomePage()
});

projectForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newProject=Project(projectName.value);
    projectList[projectName.value]=newProject;
    fillProjectsMenu();
    projectForm.classList.remove("display");
    projectForm.reset();
})
todayBtn.addEventListener("click",()=>{
    fillTodayPage();
})

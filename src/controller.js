import {todoContainer,projectContainer,currentProjectKey,setKey,home} from "./UI.js";
import { projectList } from "./project.js";
import { format} from 'date-fns'

export function fillHomePage(){
        todoContainer.innerHTML="";
        projectList[currentProjectKey].todoList.forEach((todo)=>{
            makeTodoInterface(todo,projectList[currentProjectKey]);
        })
}
export function fillProjectsMenu(){
    projectContainer.innerHTML="";
    Object.keys(projectList).forEach(key=>{
        if(key==="home"){
            return
        }
        makeProjectInterface(projectList[key])
})
}
export function fillTodayPage(){
    todoContainer.innerHTML="";
    home.todoList.forEach((todo)=>{
        if(todo.dueDate==format(new Date(),"dd.MM.yyyy.")){
            makeTodoInterface(todo)
        }
    })
}

function makeProjectInterface(project){
    const newProject = document.createElement("button");
    newProject.classList.add("project")
    newProject.innerHTML=project.name;
    newProject.addEventListener("click",()=>{
        setKey(project.name)
        fillHomePage();
    })

    projectContainer.appendChild(newProject);
}
function makeTodoInterface(todo,project){
        const todoInterface=document.createElement("div");
        todoInterface.classList.add("todo");

        if (todo.priority=="Low"){
            todoInterface.classList.add("green");
        }
        else if (todo.priority=="Mid"){
            todoInterface.classList.add("yellow");
        }
        else if (todo.priority=="High"){
            todoInterface.classList.add("red");
        }

        const doneBtnContainer=document.createElement("label");
        doneBtnContainer.classList.add("checkbox-wrapper")
        const doneBtn=document.createElement("input");
        doneBtn.type="checkbox";
        doneBtnContainer.appendChild(doneBtn);
        const checkMark =document.createElement("div");
        checkMark.classList.add("checkmark");
        doneBtnContainer.appendChild(checkMark);
        todoInterface.appendChild(doneBtnContainer);
        if(todo.isDone===true){
            doneBtn.checked=true
        }
        doneBtn.addEventListener('change', function() {
            if (this.checked) {
                todo.isDone=true;
            } else {
                todo.isDone=false;
            }  
          });

        const todoTitle=document.createElement("div");
        todoTitle.innerHTML=todo.title;
        todoTitle.classList.add("todo-title")
        todoInterface.appendChild(todoTitle);

        const descriptionBtn=document.createElement("div");
        descriptionBtn.classList.add("gg-details-more");
        todoInterface.appendChild(descriptionBtn);
        const descriptionContainer=document.createElement("div");
        descriptionContainer.classList.add("description-container");
        descriptionBtn.addEventListener("click",()=>{
            descriptionContainer.classList.add("flex");
            todoRemove.classList.remove("gg-trash");

            const todoDescription=document.createElement("div");
            todoDescription.classList.add("todo-description");
            todoDescription.innerHTML=todo.description;
            descriptionContainer.appendChild(todoDescription);

            const closeDescription=document.createElement("div");
            closeDescription.classList.add("gg-close-o");
            descriptionContainer.appendChild(closeDescription);
            closeDescription.addEventListener("click", ()=>{
                descriptionContainer.innerHTML="";
                descriptionContainer.classList.remove("flex")
                todoRemove.classList.add("gg-trash");
            })

            todoInterface.appendChild(descriptionContainer);
        });
        
        const todoDate=document.createElement("div");
        todoDate.innerHTML=todo.dueDate;
        todoInterface.appendChild(todoDate);

        const todoPriority=document.createElement("div");
        todoPriority.innerHTML=todo.priority;
        todoInterface.appendChild(todoPriority);

        const todoRemove=document.createElement("div");
        todoRemove.classList.add("gg-trash");
        todoRemove.setAttribute("id",todo.id)
        todoInterface.appendChild(todoRemove);
        todoRemove.addEventListener("click",function(e){
            const indexHome=home.todoList.findIndex(object=>{
                return object.id===todo.id
            });
            deleteTodo(indexHome,this.id);
        })
        
        todoContainer.appendChild(todoInterface);
    };
export function deleteTodo(indexHome,id){
    home.todoList.splice(indexHome,1)
    Object.keys(projectList).forEach(key=>{    
        if(key==="home"){
            return
        }
    projectList[key].todoList.forEach((todo)=>{
        if (todo.id==id){
        const index=projectList[key].todoList.findIndex(object=>{
                return object.id===todo.id
            });
            projectList[key].todoList.splice(index,1)
        }
        })
    });
    fillHomePage();
    }
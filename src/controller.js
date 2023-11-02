import {todoContainer,home} from "./UI.js";

export function populateHomePage(){
        todoContainer.innerHTML="";
        home.todoList.forEach((todo)=>{
            makeTodoInterface(todo,home);
        })
    }
function makeTodoInterface(todo,project){
        const todoInterface=document.createElement("div");
        todoInterface.classList.add("todo");

        const doneBtnContainer=document.createElement("label");
        doneBtnContainer.classList.add("checkbox-wrapper")
        const doneBtn=document.createElement("input");
        doneBtn.type="checkbox";
        doneBtnContainer.appendChild(doneBtn);
        const checkmark =document.createElement("div");
        checkmark.classList.add("checkmark")
        doneBtnContainer.appendChild(checkmark);
        todoInterface.appendChild(doneBtnContainer)

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

        const todoRemove=document.createElement("div");
        todoRemove.classList.add("gg-trash");
        todoInterface.appendChild(todoRemove);
        todoRemove.addEventListener("click",()=>{
            const index=project.todoList.findIndex(object=>{
                return object.title===todo.title
            });
            deleteTodo(index);
        })
        
        todoContainer.appendChild(todoInterface);
    };
export function deleteTodo(index){
    home.todoList.splice(index,1)
    populateHomePage();
    }

import {todoContainer,projectContainer,home} from "./UI.js";

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
        checkmark.classList.add("checkmark");
        doneBtnContainer.appendChild(checkmark);
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
export function populateProjectsMenu(){

}
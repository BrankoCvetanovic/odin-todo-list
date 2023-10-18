import Todo from "./todo.js";
import Project from "./project.js"

const gym = Project("Gym");
const school= Project("School");

const todo1 = Todo ("Six Pack","Nabaci six pack sto pre","12.12.2024","medium");
const todo2= Todo("Smršaj","smršaj sto pre","22.11.2023","High");
const todo3= Todo("Završi Školu","završi školu što pre","11.44.2123","low");

gym.todoList.push(todo1);
gym.todoList.push(todo2)

school.todoList.push(todo3)
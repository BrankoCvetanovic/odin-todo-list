import { projectList } from "./project";
export const storage={};

for (let i = 0; i < localStorage.length; i++){
    JSON.parse(localStorage.getItem(localStorage.key(i)))
    storage[JSON.parse(localStorage.getItem(localStorage.key(i))).name]=JSON.parse(localStorage.getItem(localStorage.key(i)))
}

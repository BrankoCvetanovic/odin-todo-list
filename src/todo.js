import { format,parseISO } from 'date-fns'

export default function Todo (title,description,dueDate,priority,id){
    const isDone = false;
    dueDate=format(dueDate, 'dd.MM.yyyy.');

    return{
       title,
       description,
       dueDate,
       priority,
       isDone,
       id
    }
}
import{ADD_TASK,DELETE_TASK,DONE_TASK,UPDATE_TASK} from './Types';
export const addTask=(task)=>{
    return{type:ADD_TASK,payload:task};
}
export const deleteTask=(id)=>{
    return{type:DELETE_TASK, payload: id};
}
export const doneTask=(id)=>{
    return{type:DONE_TASK,payload:id};
}
export const updateTask=(text,id)=>{
    return{type:UPDATE_TASK, payload:{id,text}};
}


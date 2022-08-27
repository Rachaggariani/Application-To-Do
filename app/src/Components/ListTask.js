import React from 'react'
import CardTask from './CardTask';
import {useSelector} from'react-redux';
function ListTask() {
    const tasks=useSelector((state)=>state);
  return (
    <div style={{display:'flex',justifyContent:'space-arround'}}>
      {tasks.map((task)=>(<CardTask key={task.id} task={task}/>))}
    </div>
  )
}

export default ListTask

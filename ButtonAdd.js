import React, { useState } from 'react';
function ButtonAdd(props){
    let [newTask, setNewTask]=useState("");
    return(
        <form>
            <input value={newTask} type="text" placeholder="Write your task here" onChange={e=>
            {setNewTask(e.target.value)}}></input>
            <button onClick={(e)=>{newTask!="" && setTasks([...props.tasks, newTask]);
            e.preventDefault();setNewTask("")}}>{topButton}</button>
        </form>
    )
}
export default ButtonAdd;
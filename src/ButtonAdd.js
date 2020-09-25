import React, { useState } from 'react';
import PropTypes from 'prop-types';
function ButtonAdd({addFunction}){
    let [newTask, setNewTask]=useState("");
    return(
        <form>
            <input value={newTask} type="text" style={{fontSize:'1em', width:'200px'}} placeholder="Write your new task"
            onChange={e=> {setNewTask(e.target.value)}}></input>
            <button onClick={(e)=>{newTask!=="" && addFunction(newTask);
            e.preventDefault();setNewTask("")}}>Add Task</button>
        </form>
    )
}
ButtonAdd.propTypes={addFunction:PropTypes.func,}
export default ButtonAdd;
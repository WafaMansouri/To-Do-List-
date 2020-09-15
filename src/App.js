import React, { useState } from 'react';
import './App.css';
import Task from './Task';
function App(props) {
  let [tasks, setTasks]=useState(["My first task", "My second task"]);
  let [newTask, setNewTask]=useState("");
  return (
    <div className="App">
        <h1 style={{color:'#008B8B',marginBottom: '70px'}}>My To-Do List</h1>
        <form>
            <input value={newTask} type="text" style={{fontSize:'1em', width:'200px'}} placeholder="Write your new task" onChange={e=>
            {setNewTask(e.target.value)}}></input>
            <button onClick={(e)=>{newTask!=="" && setTasks([...tasks, newTask]);
            e.preventDefault();setNewTask("")}}>Add Task</button>
        </form>
            {tasks.map((el,index)=> <Task elem={el} key={index}/>)}
    </div>
  );
}

export default App;
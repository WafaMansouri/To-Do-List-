import React, {useState} from 'react';
function Task(props) {
    const [remove, setRemove] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [textCompleted,setTextCompleted]=useState("Completed");
    const [editText, setEditText]=useState({edit:false, input:props.elem});
    let styleTask;
    completed ? styleTask = { textDecoration: 'line-through' } : styleTask = {};
    return (
        !remove &&
        (<div>
            {!editText.edit? 
            <h2 style={styleTask}>{editText.input}</h2>:
            <div style={{margin:'25px'}}>
                <input type="text" style={{fontSize:'1.2em'}} value={editText.input} 
                onChange={e=>setEditText({...editText, input:e.target.value})}></input>
            </div>}
            
            <button onClick={()=> {setEditText({...editText, edit:!editText.edit})}}>Edit</button>
            <button onClick={() => setRemove(true)}>Remove</button>
            <button onClick={() => {setCompleted(!completed); completed?
            setTextCompleted("Completed"):setTextCompleted("Uncompleted")}}>{textCompleted}</button>
        </div>)
    );
}
export default Task;
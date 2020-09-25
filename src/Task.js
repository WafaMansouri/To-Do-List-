import React, {useState} from 'react';
import PropTypes from 'prop-types';
function Task({elem, removeFunction, editFunction}) {
    // const [removed, setRemoved] = useState({remove:false, elemRemoved:null});
    const [completed, setCompleted] = useState(false);
    const [textCompleted,setTextCompleted]=useState("Completed");
    const [editText, setEditText]=useState({edit:false, input:elem.text, id:elem.id});
    let styleTask;
    completed ? styleTask = { textDecoration: 'line-through' } : styleTask = {};
    return (
        <div>
            {!editText.edit? 
            <h2 style={styleTask}>{editText.input}</h2>:
            <div style={{margin:'25px'}}>
                <input type="text" style={{fontSize:'1.2em'}} value={editText.input} 
                onChange={e=>setEditText({...editText, input:e.target.value})}></input>
            </div>}
            
            <button onClick={()=> {setEditText({...editText, edit:!editText.edit}); editFunction(editText.id,editText.input)}}>Edit</button>
            <button onClick={() => removeFunction(elem.id)}>Remove</button>
            <button onClick={() => {setCompleted(!completed); completed?
            setTextCompleted("Completed"):setTextCompleted("Uncompleted")}}>{textCompleted}</button>
        </div>)
}
Task.propTypes={elem: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,}),
    removeFunction:PropTypes.func,
    editFunction:PropTypes.func,
}
export default Task;
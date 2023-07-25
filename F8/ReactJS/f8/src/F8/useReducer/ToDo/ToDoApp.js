//useReducer
import { useReducer, useRef } from "react"
import reducer, {initState} from './Reducer'
import {setJob, addJob, delJob} from './Actions'
import Logger from "./Logger";

//4. Dispatch
//



function ToDoApp() {
    const [state, dispatch] = useReducer(Logger(reducer), initState);

    const {job, jobs} = state

    const inputRef = useRef()

    console.log(state);

    const handleClick = () => {
        dispatch(addJob(job))
        dispatch(setJob(""))

        inputRef.current.focus();
    }
 

    return (
        <div>
            <h3>Todo</h3>
            <input 
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                
                onChange={e => 
                    dispatch(setJob(e.target.value))
                }
            />
            <button onClick={handleClick}>Add</button>
            <ul>
                {jobs && jobs.map((item, index) => {
                    return <li key={index}>{item} <span onClick={() => dispatch(delJob(index))}>&times;</span></li>
                })}
            </ul>
        </div>
    )
}

export default ToDoApp
import { useContext, useRef, useState } from "react";
import { dayTodoContext } from "../../store";

const TaskInput = ()=> {

    const {addItemOnDaily, setDateHandel} = useContext(dayTodoContext);
    const [count, setCount] = useState(0)
    const dateInputElm = useRef();
    const handelDate =()=> {
        const dateInput = dateInputElm.current.value;
        setDateHandel(dateInput);
    }
    const taskTitleElm = useRef();
    const taskStartElm = useRef();
    const taskEndElm = useRef();
    const handelAddEvent = ()=> {
        const title = taskTitleElm.current.value;
        const start = taskStartElm.current.value;
        const end = taskEndElm.current.value;
        addItemOnDaily(title, start, end, count);
        setCount(count + 1);
    }
    return <div className="inside-input">
    <div className="date-input">
        <p>Date : </p>
        <input type="date" name="task-date" id="task-date" ref={dateInputElm} onChange={handelDate}/>
    </div>
    <input type="text" ref={taskTitleElm} name="task-body" id="task-body" placeholder="Your task.."/>
    <div className="start-time-input">
        <p>Start : </p>
        <input type="time" ref={taskStartElm} name="task-date" id="start-task"/>
    </div>
    <div className="end-time-input">
        <p>End : </p>
        <input type="time" ref={taskEndElm} name="task-date" id="end-task"/>
    </div>
    <div className="addBtn" id="addBTN">
        <button className="button-56" onClick={handelAddEvent}>
            Add
        </button>
    </div>
</div>
}

export default TaskInput;
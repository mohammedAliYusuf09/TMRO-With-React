import { useContext } from "react";
import InnerTask from "./InnerTask";
import InputDayHeadinf from "./InputDayHeading";
import TaskInput from "./TaskInput";
import { dayTodoContext } from "../../store";

const DaySide = ()=> {
    const {dailyTodoItems} = useContext(dayTodoContext);
    return <div className="task-input">
    <div className="inside-output">
        <InputDayHeadinf/>
        <div id="inner-tasklist"  className="inner-tasklist">
            {dailyTodoItems.length !== 0 ? dailyTodoItems.map(item=> <InnerTask key={item.taskID} item={item}/>) : <p> Add some task.....</p>}
        </div>
    </div>
    <TaskInput/>
</div>
}


export default DaySide;
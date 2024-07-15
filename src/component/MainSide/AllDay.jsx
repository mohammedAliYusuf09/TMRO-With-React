import { useContext } from "react";
import Day from "./Day";
import { dayTodoContext } from "../../store";
const AllDay = () => {
    const {allTask} = useContext(dayTodoContext);
    return <div className="task-day">
    {allTask.length !== 0 ? allTask.map(item=> <Day key={Math.random()} item={item}/>) : <h3>Your days are empty</h3>}   
</div> 
} 
export default AllDay;
import { useContext } from "react";
import { dayTodoContext } from "../../store";

const DayHeading = ({date})=> {

    const {handelDeleteFromAllTask} = useContext(dayTodoContext)
    const deleteHandel=()=> {
        handelDeleteFromAllTask(date);
    }
    return <div className="date-delet-button">
    <h5 className="date-output-display">{date}</h5> 
    <button className="button-89" onClick={deleteHandel}>Delite</button>
</div>
}

export default DayHeading;
import { useContext } from "react";
import { dayTodoContext } from "../../store";

const InputDayHeadinf = () => {
    const {dailyTodoItems, date, handlDoneClick, epmtyDayTask} = useContext(dayTodoContext);
    const onDoneClick =()=> {
        if(date !== "Date" && dailyTodoItems.length !== 0){
            handlDoneClick();
            epmtyDayTask();
        }else alert("Fill all fild")
    }
    return <div className="date-btn">
        <p id="innerTime" className="date" >
            {date}
        </p>
        <button id="btn_done" onClick={onDoneClick}>
            Done
        </button>
    </div>
}

export default InputDayHeadinf;
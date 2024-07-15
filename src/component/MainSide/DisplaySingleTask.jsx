import { useContext } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { dayTodoContext } from "../../store";

const DisplaySingleTask = ({item})=> {

    const {handelChack} = useContext(dayTodoContext);

    const handelChackTogole = ()=> {
        const ID = item.taskID;
        const doneState = item.done;
        handelChack(ID, doneState);
    }

    return <div className="task">
    {item.done == false ? <MdCheckBoxOutlineBlank onClick={handelChackTogole}/> : <FaCheckSquare onClick={handelChackTogole}/>}    
    <p>{item.task} |{item.duDate.start} - {item.duDate.end} </p>
</div>
}

export default DisplaySingleTask;
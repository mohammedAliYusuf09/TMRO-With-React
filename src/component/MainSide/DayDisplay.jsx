
import DisplaySingleTask from "./DisplaySingleTask";

const DayDisplay = ({taskPart})=> {
    return <>
        {taskPart.map(item=> <DisplaySingleTask key={Math.random()} item={item}/>)}
    </>
}

export default DayDisplay;
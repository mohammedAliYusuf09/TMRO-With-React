import DayDisplay from "./DayDisplay";
import DayHeading from "./DayHeading";

const Day =({item})=> {
    const date = item[0];
    const taskPart = item[1];
    return <>
    <DayHeading date={date}/>
    <DayDisplay taskPart={taskPart}/>
    </>
}

export default Day;
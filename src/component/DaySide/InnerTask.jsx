const InnerTask = ({item})=> {
    return <>
    <p className="task-margin">{item.task} | {item.duDate.start} - {item.duDate.end}</p>
    </>
}
export default InnerTask;
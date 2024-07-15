import { createContext, useReducer, useState } from "react";


    const DAYS_INi = [[
        "6/1/2024", [{
            taskID : 0,
            task: "DSA Quition Solving",
            duDate: {
                start: "7: 00",
                end: "8: 00"
            },
            done: false
        },{
            taskID : 1,
            task: "Core Development knoledg",
            duDate: {
                start: "9: 00",
                end: "10: 00"
            },
            done: false
        },{
            taskID : 2,
            task: "Telwind css projects",
            duDate: {
                start: "10: 00",
                end: "11: 00"
            },
            done: false
        }]
    ],[
        "6/30/2024", [{
            taskID : 0,  
            task: "Core Development knoledg",
            duDate: {
                start: "7: 00",
                end: "8: 00"
            },
            done: false
        },{
            taskID : 1,
            task: "DSA Quition Solving",
            duDate: {
                start: "9: 00",
                end: "10: 00"
            },
            done: false
        },{
            taskID : 2,
            task: "Telwind css projects",
            duDate: {
                start: "10: 00",
                end: "11: 00"
            },
            done: false
        }]
    ]
]

export const dayTodoContext = createContext({
    dailyTodoItems:  [],
    addItemOnDaily: ()=>{},
    date: "",
    allTask: []
})

const dailyReducer = (current, action)=> {
    switch (action.type) {
        case "ADD_DAILY_ITEM":
            return [...current, action.payload]
            break;
        case "MAKE_IT_EMPTY": 
            return []    
    }
}



const allTaskReducer = (current, action) => {
    switch (action.type) {
        case "ADD_ALl_TASK":
            return [...current, action.payload.ARR]
            break;
        case "DELETE": 
            return current.filter(item=> item[0] !== action.payload.date)   
            break;
        case 'TOGGLE_DONE':
            return current.map(date => [
                date[0], // Keep the date as is
                date[1].map(task => 
                task.taskID === action.payload.taskID
                    ? { ...task, done: !task.done }
                    : task
                )
            ]);   
    }
}



const TodoDailySrote = ({children}) => {
    const [dailyTodoItems , dispachDailyTodoItems] = useReducer(dailyReducer, []);
    const [allTask, dsiPachAllTask] = useReducer(allTaskReducer, [])
    const [date, setDate] = useState("Date");

    
    const handelChack = (ID, doneState)=> {
        const chackAction = {
            type: "TOGGLE_DONE",
            payload: {
                taskID:  ID
            }
        }
        dsiPachAllTask(chackAction);
    }

    const handlDoneClick = ()=> {
        const ARR = [];
        ARR.push(date);
        ARR.push(dailyTodoItems)
        // console.log(ARR);
        const addAllTaskAction = {
            type: "ADD_ALl_TASK",
            payload: {
                ARR
            }
        }
        dsiPachAllTask(addAllTaskAction);
        console.log(addAllTaskAction.payload);
    }

    const handelDeleteFromAllTask = (TaskDate)=> {
        const deleteAction = {
            type: "DELETE",
            payload: {
                date : TaskDate
            }
        }
        dsiPachAllTask(deleteAction);
    }


    const setDateHandel = (dateInput) => {
        setDate(dateInput);
    }


    const addItemOnDaily = (taskTitle, taskStart, taskEnd, count)=> {
        const addItemAction = {
            type: "ADD_DAILY_ITEM",
            payload: {
                taskID: count,
                task: taskTitle,
                duDate: {
                    start: taskStart,
                    end: taskEnd
                },
                done: false
            }
        }
        dispachDailyTodoItems(addItemAction);
    }


    // after clicking done day task will be empty 
    // ------------------------------------------
    const epmtyDayTask = ()=> {
        const DayTaskEmptyAction = {
            type: "MAKE_IT_EMPTY"
        }
        dispachDailyTodoItems(DayTaskEmptyAction);
        console.log("hello");
    }

    
    return <dayTodoContext.Provider 
    value={{dailyTodoItems, addItemOnDaily, date, setDateHandel, allTask, handlDoneClick, epmtyDayTask, handelDeleteFromAllTask, handelChack}}> 
    {children} 
    </dayTodoContext.Provider>
}


export default TodoDailySrote;




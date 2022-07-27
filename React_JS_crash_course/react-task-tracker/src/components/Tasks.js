// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors appointment',
//         day: 'Feb 5th at 1:00pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Online meeting',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     }
// ]

// import { useState } from 'react'

import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // const [tasks, setTasks] = useState(
    //     [
    //         {
    //             id: 1,
    //             text: 'Doctors appointment',
    //             day: 'Feb 5th at 1:00pm',
    //             reminder: true,
    //         },
    //         {
    //             id: 2,
    //             text: 'Online meeting',
    //             day: 'Feb 6th at 1:30pm',
    //             reminder: true,
    //         },
    //         {
    //             id: 3,
    //             text: 'Shopping',
    //             day: 'Feb 5th at 2:30pm',
    //             reminder: false,
    //         }
    //     ]        
    // )

    return (
        <div className="p-4 flex flex-col gap-4">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} className="" />
            ))}
        </div>
    )
}

export default Tasks
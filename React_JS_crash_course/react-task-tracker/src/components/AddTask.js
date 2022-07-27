import { useState } from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi";


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="px-4 flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" className="border border-gray-500 px-4 py-2" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Day</label>
                <input type="text" placeholder="Add Day & Time" className="border border-gray-500 px-4 py-2" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="flex gap-2">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} className="self-start w-6 h-6" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <button type="submit" value="Save Task" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md flex justify-center items-center gap-2"><HiOutlineCheckCircle className="w-5 h-5" />Save Task</button>
        </form>
    )
}

export default AddTask
import { HiOutlineX } from "react-icons/hi";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={ () => onToggle(task.id) } className={`px-4 py-2 bg-gray-200 rounded-sm ${task.reminder ? 'border-l-8 border-green-500' : ''}`}>
      <h3 className="text-lg font-bold flex justify-between items-center">{task.text}
        <HiOutlineX className="text-red-500 cursor-pointer w-6 h-6" onClick={ () => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
import {useState} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function TaskManager() {

const [tasks, setTasks] = useState([])/* arreglo */; 
const addTask = (task)=>{
  setTasks([...tasks, task])/* al arreglo task agregale un task */
}
    return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks}/>
    </div>
  )
}

export default TaskManager
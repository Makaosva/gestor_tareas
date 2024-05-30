import React from 'react'

function TaskForm() {
  return (
    
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit">Add Task</button>
</form>

  )
}

export default TaskForm
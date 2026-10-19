import Task from "./Task"

const Tasks = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add your first task!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Tasks
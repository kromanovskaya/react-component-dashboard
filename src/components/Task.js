const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={task.completed ? "task-item completed" : "task-item"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as completed`}
      />

      <div className="task-details">
        <span className="task-title">{task.title}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </div>
  )
}

export default Task
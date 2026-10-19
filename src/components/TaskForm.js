import { useState } from "react"

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
        alert('Please add a task')
        return
    }

    onAddTask(title.trim(), priority);
    setTitle('');
    setPriority("Medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)} >
        <option value="High">High priority</option>
        <option value="Medium">Medium priority</option>
        <option value="Low">Low priority</option>
      </select>

      <button type="submit">+ Add task</button>
    </form>
  )
}

export default TaskForm

import Stats from "./Stats"
import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

const Dashboard = ({ tasks, completedCount, addTask, toggleTask, deleteTask }) => {
  return (
    <>
      <section className="welcome">
        <h1>Student Dashboard</h1>
      </section>

      <Stats
        total={tasks.length}
        completed={completedCount}
        remaining={tasks.length - completedCount}
      />

      <section className="panel">
        <h2>Add a new task</h2>
        <TaskForm onAddTask={addTask} />
      </section>

      <section className="panel">
        <h2>My tasks</h2>
        <Tasks
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </section>
    </>
  )
}

export default Dashboard

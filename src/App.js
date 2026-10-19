import { useState } from "react"
import "./index.css"
import Header from './components/Header'
import About from "./components/About"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"

const App = () => {
  const [view, setView] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React assignment", priority: "High", completed: false }
  ]);

  // Add Task
  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  // Toggle Task Completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        view={view}
        setView={setView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="container">
  {view === "dashboard" ? (
    <Dashboard
      tasks={tasks}
      completedCount={completedCount}
      addTask={addTask}
      toggleTask={toggleTask}
      deleteTask={deleteTask}
    />
  ) : (
    <About setView={setView} />
  )}
</main>

      <Footer />
    </div>
  )
}

export default App

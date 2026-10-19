const Header = ({ view, setView, darkMode, setDarkMode }) => {
  return (
    <header className='header'>
      <div className='brand'>FocusSpace</div>

      <nav>
        <button
          className={view === "dashboard" ? "nav-button active" : "nav-button"}
          onClick={() => setView("dashboard")} > Dashboard
        </button>

        <button
          className={view === "about" ? "nav-button active" : "nav-button"}
          onClick={() => setView("about")} > About
        </button>

        <button
          className='theme-button'
          onClick={() => setDarkMode(!darkMode)} > {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  view: "dashboard",
  darkMode: false,
}

export default Header

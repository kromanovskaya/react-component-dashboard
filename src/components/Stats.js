const Stats = ({ total, completed, remaining }) => {
  return (
    <section className="stats">
      <div className="stat-card">
        <p>Total tasks</p>
        <h2>{total}</h2>
      </div>

      <div className="stat-card">
        <p>Completed</p>
        <h2>{completed}</h2>
      </div>

      <div className="stat-card">
        <p>Remaining</p>
        <h2>{remaining}</h2>
      </div>
    </section>
  )
}

export default Stats

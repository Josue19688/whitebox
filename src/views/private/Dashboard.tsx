

export const Dashboard = () => {
  return (
    <>
    <div className="stats">
  <div className="stat">
    <div className="stat-figure text-base-content size-8">
      <span className="icon-[tabler--world] size-8"></span>
    </div>
    <div className="stat-title">Website Traffic</div>
    <div className="stat-value">32K</div>
    <div className="stat-desc">5% ↗︎ than last week</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-base-content size-8">
      <span className="icon-[tabler--users-group] size-8"></span>
    </div>
    <div className="stat-title">New Signups</div>
    <div className="stat-value">1.2K</div>
    <div className="stat-desc">12% increase this month</div>
  </div>

  <div className="stat">
    <div className="stat-figure size-12">
      <div className="avatar">
        <div className="size-12 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Avatar"/>
        </div>
      </div>
    </div>
    <div className="stat-value text-success">95%</div>
    <div className="stat-title">Customer Retention</div>
    <div className="stat-desc">Steady over last quarter</div>
  </div>
</div>
    </>
  )
}

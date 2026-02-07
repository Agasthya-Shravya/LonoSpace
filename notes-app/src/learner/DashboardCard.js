function DashboardCard({ title, description, buttonText, link, icon }) {
  return (
    <div className="dashboard-card shadow-sm">
      <div className="dashboard-card-icon">{icon}</div>

      <h5 className="fw-bold mt-3">{title}</h5>

      <p className="text-muted">
        {description}
      </p>

      <a href={link} className="lonospace-btn">
        {buttonText}
      </a>
    </div>
  );
}

export default DashboardCard;

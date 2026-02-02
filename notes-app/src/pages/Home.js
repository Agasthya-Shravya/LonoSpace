import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* ===== Carousel Section ===== */}
      <div
        id="lonospaceCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#lonospaceCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#lonospaceCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#lonospaceCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://via.placeholder.com/1200x400?text=Organize+Your+Notes"
              className="d-block w-100"
              alt="Notes"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Organize Your Notes</h5>
              <p>Keep all your learning in one calm space.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400?text=Learn+Smarter"
              className="d-block w-100"
              alt="Learn"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Learn Smarter</h5>
              <p>Short notes, PDFs, and structured content.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400?text=Grow+With+LonoSpace"
              className="d-block w-100"
              alt="Grow"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Grow With LonoSpace</h5>
              <p>Your personal learning companion.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#lonospaceCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#lonospaceCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h2 className="text-primary">120+</h2>
                <p className="card-text">Detailed Notes</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h2 className="text-success">300+</h2>
                <p className="card-text">Short Notes</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h2 className="text-warning">1,000+</h2>
                <p className="card-text">Active Learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Why LonoSpace Section ===== */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2>Why LonoSpace?</h2>
          <p className="text-muted">
            Built for learners who love clarity, calm, and consistency.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>📘 Structured Learning</h5>
                <p>
                  Well-organized notes and short notes to save your time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>⚡ Quick Access</h5>
                <p>
                  Find exactly what you need, when you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>🌱 Grow Daily</h5>
                <p>
                  Learn a little every day and track your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

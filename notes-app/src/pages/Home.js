import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    
  return (
    <>
      <Navbar />
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
              src="https://i.pinimg.com/736x/c4/21/ff/c421ff0fa2d163b0464b91c131369d2a.jpg"
              className="d-block w-100"
              alt="Organize Notes"
              
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>LonoSpace</h3>
              <p>Your own space to learn and grow.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://thedailygraceco.com/cdn/shop/articles/PodcastEp311_Header.jpg?v=1730823326&width=1920"
              className="d-block w-100"
              alt="Smart Learning"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Smart Learning</h3>
              <p>Access notes and short notes anytime.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/1200x/00/77/cb/0077cbd5b342e791060befe976f36d71.jpg"
              className="d-block w-100"
              alt="Grow"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Grow Every Day</h3>
              <p>Become interview ready with interview prep notes</p>
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

     <div className="section-light py-5">
  <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card stat-card shadow-sm h-100">
              <div className="card-body">
                <h2 className="stat-number-primary">120+</h2>
                <p>Detailed Notes</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card stat-card shadow-sm h-100">
              <div className="card-body">
                <h2 className="stat-number-secondary">300+</h2>
                <p>Short Notes</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card stat-card shadow-sm h-100">
              <div className="card-body">
                <h2 className="stat-number-accent">1,000+</h2>
                <p>Active Learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="section-light py-5">
  <div className="container">

        <div className="text-center mb-4">
          <h2>Why LonoSpace?</h2>
          <p className="text-muted">
            Designed for learners who love simplicity and focus.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 why-card">
              <div className="card-body">
                <h5> Organized Content</h5>
                <p>
                  All your notes and short notes structured clearly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 why-card">
              <div className="card-body">
                <h5> Quick Access</h5>
                <p>
                  Find what you need without distractions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 border-0 why-card">
              <div className="card-body">
                <h5> Learn Consistently</h5>
                <p>
                  Build habits and grow one note at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />

    </>
  );
}

export default Home;

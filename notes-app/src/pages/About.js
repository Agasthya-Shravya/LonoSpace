import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* ===== ABOUT INTRO ===== */}
      <div className="section-light py-5">
        <div className="container text-center">
          <h2 className="section-title mb-3">About LonoSpace</h2>
          <p className="text-muted">
            LonoSpace is a calm and focused learning platform built to help
            learners organize notes, revise smarter, and grow consistently.
          </p>
        </div>
      </div>

      {/* ===== MISSION & VISION ===== */}
      <div className="section-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <div className="about-card">
                <div className="about-card-body">
                  <h4> Our Mission</h4>
                  <p>
                    To provide a peaceful, distraction-free space where
                    learners can access high-quality notes, short notes, and
                    interview preparation material.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="about-card">
                <div className="about-card-body">
                  <h4> Our Vision</h4>
                  <p>
                    To become a trusted learning companion for students and
                    professionals by making learning simple, structured, and
                    stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHO IS IT FOR ===== */}
      <div className="section-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="section-title">Who is LonoSpace for?</h3>
            
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="about-card">
                <div className="about-card-body">
                  <h5>🎓 Students</h5>
                  <p>
                    Organize class notes, revise quickly, and stay consistent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="about-card">
                <div className="about-card-body">
                  <h5>💼 Job Seekers</h5>
                  <p>
                    Prepare for interviews with structured and focused content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="about-card">
                <div className="about-card-body">
                  <h5>📚 Lifelong Learners</h5>
                  <p>
                    Learn at your own pace without overwhelm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* ===== ABOUT THE CREATOR ===== */}
<div className="section-light py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="about-card">
          <div className="about-card-body">
            <h3 className="section-title mb-3">Message from developer</h3>
            <p>
              LonoSpace was created by me, a learner who understands how overwhelming
              studying can feel when everything is scattered and no proper learning materials are present when needed.
            <br></br><br></br>
              This platform was built from a simple idea — learning should feel
              calm, organized, and intentional. Instead of juggling multiple
              apps, notes, and resources, LonoSpace brings everything into one
              peaceful space designed for focus and consistency.
            </p>
            <p>
              As a developer and a learner, I believe that growth
              doesn’t come from pressure, but from clarity, small steps and dedication.
            </p>
            <p>
               -With Love, Agasthya Shravya ;)
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

export default About;

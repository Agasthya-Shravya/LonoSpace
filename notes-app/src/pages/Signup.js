import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="section-light py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">

              <div className="login-3d-wrapper">
                <div className="row g-0">

            
                  <div className="col-md-5 d-none d-md-flex login-left">
                    <div style={{ marginLeft: "20px" }}>
                      <h3>Join LonoSpace</h3>
                      <p>
                        Create an account and start your personalized learning journey.
                      </p>
                    </div>
                  </div>

                
                  <div className="col-md-6 login-right" style={{ marginLeft: "20px" }}>
                    <h4 className="mb-4">Sign Up</h4>

                    <form>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create a password"
                        />
                      </div>

                      <button className="btn btn-primary w-100 mt-3">
                        Create Account
                      </button>

                      <p className="text-center text-muted mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="login-link">
                          Login
                        </Link>
                      </p>
                    </form>
                  </div>

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

export default Signup;

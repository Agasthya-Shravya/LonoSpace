import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
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
                    <div style={{marginLeft:"20px"}}>
                      <h3 >Welcome Back</h3>
                      <p>
                        Log in to continue your learning journey with
                        LonoSpace.
                      </p>
                    </div>
                  </div>

                  {/* Right Side (Form) */}
                  <div className="col-md-6 login-right" style={{marginLeft:"20px"}}>
                    <h4 className="mb-4">Login</h4>

                    <form>
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
                          placeholder="Enter your password"
                        />
                      </div>

                      <button className="btn btn-primary w-100 mt-3">
                        Login
                      </button>

                      <p className="text-center text-muted mt-3">
                        Don’t have an account? <span className="login-link">Sign up</span>
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

export default Login;

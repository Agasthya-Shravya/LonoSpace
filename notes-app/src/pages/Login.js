import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Login data:", { email, password });
  };

  return (
    <>
      <Navbar />

      <div className="section-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="login-3d-wrapper">
                <div className="row g-0">

                  {/* Left */}
                  <div className="col-md-5 d-none d-md-flex login-left">
                    <div style={{ marginLeft: "20px" }}>
                      <h3>Welcome Back</h3>
                      <p>Log in to continue your learning journey.</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="col-md-6 login-right" style={{ marginLeft: "20px" }}>
                    <h4 className="mb-4">Login</h4>

                    {error && <p className="text-danger">{error}</p>}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 position-relative">
                        
                            <label>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="password-eye"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                            
                      </div>

                      <button className="btn btn-primary w-100 mt-3">
                        Login
                      </button>

                      <p className="text-center text-muted mt-3">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="login-link">
                          Sign up
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

export default Login;

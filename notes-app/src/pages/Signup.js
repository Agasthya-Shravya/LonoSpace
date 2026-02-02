import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Account created successfully. Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
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

                  <div className="col-md-5 d-none d-md-flex login-left">
                    <div style={{ marginLeft: "20px" }}>
                      <h3>Join LonoSpace</h3>
                      <p>Create an account and start learning.</p>
                    </div>
                  </div>

                  <div className="col-md-6 login-right" style={{ marginLeft: "20px" }}>
                    <h4 className="mb-4">Sign Up</h4>

                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label>Full Name</label>
                        <input
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 password-wrapper">
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

                      <div className="mb-3 password-wrapper">
                        <label>Confirm Password</label>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span
                          className="password-eye"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? "🙈" : "👁️"}
                        </span>
                      </div>

                      <button
                        className="btn btn-primary w-100 mt-3"
                        disabled={loading}
                      >
                        {loading ? "Creating Account..." : "Create Account"}
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

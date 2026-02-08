import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import emailjs from "emailjs-com";

function BookRequest() {
  const [formData, setFormData] = useState({
    name:"",
    notes_subject: "",
    type: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendRequest = (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    emailjs
      .send(
        "service_sc2v4yh",
        "template_mrv2d79",
        formData,
        "Wx5U4zqD--qTY-jjM"
      )
      .then(
        () => {
          setStatus("✅ Book request sent successfully!");
          setFormData({
            name:"",
            notes_subject: "",
            type: "",
            user_email: "",
            message: "",
          });
        },
        () => {
          setStatus("❌ Failed to send request. Try again.");
        }
      )
      .finally(() => setLoading(false));
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

                  {/* LEFT SIDE (same as login-left) */}
                  <div className="col-md-5 d-none d-md-flex login-left">
                    <div style={{ marginLeft: "20px" }}>
                      <h3>Request a Book</h3>
                      <p>
                        Didn’t find the book you need?  
                        Drop a request — we’ll add it soon 📚
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SIDE FORM */}
                  <div
                    className="col-md-6 login-right"
                    style={{ marginLeft: "20px" }}
                  >
                    <h4 className="mb-4">Notes Request Form</h4>

                    {status && (
                      <p
                        className={
                          status.includes("✅")
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {status}
                      </p>
                    )}

                    <form onSubmit={sendRequest}>
                      <div className="mb-3">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Notes Subject</label>
                        <input
                          type="text"
                          name="notes_subject"
                          className="form-control"
                          value={formData.notes_subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label>Type</label>
                        <input
                          type="text"
                          name="type"
                          className="form-control"
                          value={formData.type}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label>Your Email</label>
                        <input
                          type="email"
                          name="user_email"
                          className="form-control"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label>Message (optional)</label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <button
                        className="btn btn-primary w-100 mt-3"
                        disabled={loading}
                        style={{backgroundColor:"#d6a77a"}}
                      >
                        {loading ? "Sending..." : "Request Book"}
                      </button>
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

export default BookRequest;

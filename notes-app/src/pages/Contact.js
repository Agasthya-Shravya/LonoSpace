import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

<div className="section-light py-5">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-md-5 mb-4">
        <h3 className="section-title mb-3">Get in Touch</h3>
        <p className="text-muted">
            Have a question, feedback, or suggestion?  <br/>
                 Your thoughts help us build a better learning space.<br/>We’d love to hear from you.
        </p>
      </div>

      <div className="col-md-7">
        <form className="contact-form">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary px-4">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Contact;

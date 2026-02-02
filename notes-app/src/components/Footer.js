function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-6 mb-3">
            <h5 className="footer-title">LonoSpace</h5>
            <p className="footer-text">
              Your very own space to learn, revise, and grow.<br></br>
              Notes, short notes, and interview prep all in one place.<br></br>
              No more last minute exam stress.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 mb-3">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>

        </div>

        <hr />

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} LonoSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

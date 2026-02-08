import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-4">
        <div className="row">          
          <div className="col-md-6 mb-3">
            <h5 className="footer-title">LonoSpace</h5>
            <p className="footer-text">
              Your very own space to learn, revise, and grow.<br></br>
              Notes, short notes, and interview prep all in one place.<br></br>
              No more last minute exam stress.
            </p>
          </div>
        
          <div className="col-md-6 mb-3">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
               <Link to="/" style={{color:"#f8f0e3"}}>Home</Link><br/>
               <Link to="/about" style={{color:"#f8f0e3"}}>About</Link><br/>
               <Link to="/contact" style={{color:"#f8f0e3"}}>Contact</Link><br/>
               <Link to="/login" style={{color:"#f8f0e3"}}>Login</Link><br/>
               <Link to="/signup" style={{color:"#f8f0e3"}}>Signup</Link><br/>
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

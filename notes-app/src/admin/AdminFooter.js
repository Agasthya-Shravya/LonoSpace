function Footer() {
  return (
    <footer className="footer-section">
        <div className="container py-4">
            <div className="row justify-content-center">          
            <div className="col-md-6 mb-1 text-center">
                <h5 className="footer-title">LonoSpace</h5>
                <p className="footer-text">
                Your very own space to learn, revise, and grow.<br></br>
                Notes, short notes, and interview prep all in one place.<br></br>
                No more last minute exam stress.
                </p>
            </div>
            </div>
        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} LonoSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
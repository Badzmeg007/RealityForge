import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-icon">RF</span>
              <span className="footer-logo-text">RealityForge</span>
            </div>
            <p className="footer-tagline">
              Creating imaginative ideas into reality
            </p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#solutions">Solutions</a>
            <a href="#updates">Updates</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#docs">Documentation</a>
            <a href="#help">Help Center</a>
            <a href="#community">Community</a>
            <a href="#status">Status</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} RealityForge. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

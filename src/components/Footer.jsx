const Footer = ({ navItems, scrollToSection }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <button
              className="footer-brand"
              onClick={() => scrollToSection("home")}
              aria-label="Go to home"
            >
              MM COMPUTERS
            </button>
            <p className="footer-text">
              Trusted computer sales, upgrades, networking, and support services for homes,
              students, offices, and growing businesses.
            </p>
          </div>

          <div className="footer-links-block">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="footer-link"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-contact-block">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <a href="tel:+918807329654" className="footer-contact-link">
                <i className="bi bi-telephone-fill" />
                <span>+91 88073 29654 (or) 82204 51927</span>
              </a>
              <a
                href="https://wa.me/918807329654"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-link"
              >
                <i className="bi bi-whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mmcomputers.nnm@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-link"
              >
                <i className="bi bi-envelope-fill" />
                <span>Mail Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} MM COMPUTERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

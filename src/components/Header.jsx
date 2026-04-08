const Header = ({
  activeSection,
  menuOpen,
  navItems,
  scrollToSection,
  setMenuOpen,
  theme,
  toggleTheme,
}) => {
  return (
    <header className="site-header">
      <div className="top-contact-bar">
        <div className="container">
          <div className="top-contact-inner">
            <div className="top-contact-left">
              <i className="bi bi-clock-fill" />
              <span>Mon - Sat, 9:00 AM - 8:00 PM</span>
            </div>

            <button
              className="top-brand desktop-brand"
              onClick={() => scrollToSection("home")}
              aria-label="Go to home"
            >
              <strong>MM COMPUTERS</strong>
              {/* <img src="/img/logo.png" alt="MM Computers" className="brand-logo" /> */}
              {/* <small>IT Consulting & Digital Solution</small> */}
            </button>

            <div className="top-contact-right">
              <a
                className="top-contact-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mmcomputers.nnm@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email MM Computers"
              >
                <i className="bi bi-envelope-fill" />
                <span className="desktop-label">Email</span>
                <span className="mobile-label">Email</span>
              </a>
              <a
                className="top-contact-link"
                href="https://wa.me/918807329654"
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp chat"
              >
                <i className="bi bi-whatsapp" />
                <span className="desktop-label">WhatsApp</span>
                <span className="mobile-label">WhatsApp</span>
              </a>
              <a
                className="top-contact-link phone-link"
                href="tel:+918807329654"
                aria-label="Call MM Computers"
              >
                <i className="bi bi-telephone-fill" />
                <span className="desktop-label">+91 88073 29654</span>
                <span className="mobile-label">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div> 

      <div className="nav-wrap">
        <div className="container">
          <div className="nav-bar">
            <button
              className="menu-toggle d-xl-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            <button
              className="top-brand mobile-brand"
              onClick={() => scrollToSection("home")}
              aria-label="Go to home"
            >
              <strong>MM COMPUTERS</strong>
              {/* <img src="/img/logo.png" alt="MM Computers" className="brand-logo" /> */}
              {/* <small>IT Consulting & Digital Solution</small> */}
            </button>

            <nav className="menu-panel">
              <div className="menu-links">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`menu-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button className="cta-button" onClick={() => scrollToSection("contact")}>
                Get Support
              </button>
            </nav>

            <div className="nav-actions">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <i className={`bi ${theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-menu-head">
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          <div className="mobile-menu-meta">
            <div className="mobile-meta-time">
              <i className="bi bi-clock-fill" />
              <span>Mon - Sat, 9:00 AM - 8:00 PM</span>
            </div>
            <div className="mobile-meta-links">
              <a
                className="mobile-meta-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mmcomputers.nnm@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email MM Computers"
              >
                <i className="bi bi-envelope-fill" />
                <span>Email</span>
              </a>
              <a
                className="mobile-meta-link"
                href="https://wa.me/918807329654"
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp chat"
              >
                <i className="bi bi-whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                className="mobile-meta-link mobile-call-link"
                href="tel:+918807329654"
                aria-label="Call MM Computers"
              >
                <i className="bi bi-telephone-fill" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="mobile-drawer-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`menu-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="cta-button" onClick={() => scrollToSection("contact")}>
            Get Support
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;

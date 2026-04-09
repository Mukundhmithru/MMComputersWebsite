const Stat = ({ number, label }) => (
  <div className="stat-card text-center">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const heroStats = [
  { number: "30+", label: "Services" },
  { number: "500+", label: "Satisfied Clients" },
  { number: "24/7", label: "Remote guidance availability" },
  { number: "100%", label: "Deliverability" },
];

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section section-shell">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="eyebrow">IT Consulting & Digital Solution</div>
            <h1 className="hero-title">
              Delivering <span className="hero-title-highlight">AI-Driven</span> IT solutions to
              empower businesses in the digital era.
            </h1>
            <p className="hero-text">
              We provide a wide range of services including web and mobile
              development, digital marketing, data analytics, and IT support.
              Our team focuses on delivering reliable, scalable, and efficient
              solutions tailored to your business needs. From technology to
              government services, we help you grow, streamline operations, and
              stay ahead in a digital world.
            </p>
            <div className="hero-actions">
              <button
                className="primary-pill"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </button>
              <button
                className="ghost-pill"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </button>
            </div>
            <div className="hero-meta">
              <span>
                <i className="bi bi-check-circle-fill me-2" />
                Quality Service
              </span>
              <span>
                <i className="bi bi-check-circle-fill me-2" />
                Stress Free IT Solutions
              </span>
              <span>
                <i className="bi bi-check-circle-fill me-2" />
                Trusted by leading companies
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-panel hero-panel-main">
                <img src="/img/carousel-1.jpg" alt="MM Computers showcase" />
              </div>
              <div className="hero-panel hero-panel-card">
                <div className="hero-card-label">Why choose us</div>
                <h3>Reliable solutions. Faster delivery. Better results. Smart solutions. Seamless experience. Real growth. Driven by innovation</h3>
                {/* <p>
                  Sales guidance, preventive maintenance, network support, and
                  genuine parts.
                </p> */}
              </div>
              <div className="hero-panel hero-panel-side">
                <img
                  src="/img/android.gif"
                  alt="Computer service assistance"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {heroStats.map((item) => (
            <Stat key={item.label} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

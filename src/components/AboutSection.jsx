const aboutFeatures = [
  {
    icon: "bi-cpu-fill",
    title: "End-to-End IT Solutions",
    text: "From web and mobile development to networking and support, we handle complete digital transformation.",
  },
  {
    icon: "bi-router-fill",
    title: "Smart Digital Services",
    text: "E-government services, data entry, and IT-enabled solutions designed for efficiency and accuracy.",
  },
  {
    icon: "bi-shield-check",
    title: "Reliable & Scalable",
    text: "We build secure, scalable systems that grow with your business and ensure long-term performance.",
  },
  {
    icon: "bi-phone-fill",
    title: "Growth-Focused Approach",
    text: "With digital marketing and data analytics, we help you reach the right audience and make smarter decisions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-shell about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="image-stack">
              <img
                src="/img/about-1.png"
                className="stack-main"
                alt="MM Computers team"
              />
              <img
                src="/img/about-2.gif"
                className="stack-float"
                alt="MM Computers workspace"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-tag">About</div>
            <h2 className="section-title">
              MM COMPUTERS keeps technology practical, fast, and dependable.
            </h2>
            <p className="section-text">
              we are a full-service digital online service provider dedicated to
              helping businesses thrive in an ever-evolving technological world.
              We bridge the gap between complex digital strategies and
              real-world business growth, delivering tailored solutions that
              drive results.
            </p>
            <div className="feature-grid">
              {aboutFeatures.map((item) => (
                <div key={item.title} className="feature-box">
                  <i className={`bi ${item.icon}`} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const serviceItems = [
  {
    title: "E-Government",
    text: "Simplifying access to government services through secure digital solutions. We provide seamless assistance for registrations, documentation, and online services. Our goal is to make public services faster, transparent, and accessible.",
    image: "/img/services-1.jpg",
    tag: "Services",
  },
  {
    title: "Mobile Development",
    text: "Building powerful mobile apps tailored to your business needs. We develop high-performance Android and iOS applications with great user experience. Turn your ideas into scalable and impactful mobile solutions.",
    image: "/img/services-2.gif",
    tag: "Development",
  },
  {
    title: "Web Development",
    text: "Creating modern, responsive websites that enhance your online presence. We build fast, SEO-friendly, and user-focused web applications. From design to deployment, we deliver complete web solutions.",
    image: "/img/services-3.gif",
    tag: "Development",
  },
  {
    title: "IT Enabled Service (Data Entry)",
    text: "Accurate and efficient data entry services for smooth business operations. We handle large volumes of data with precision and confidentiality. Focus on your core work while we manage your data tasks.",
    image: "/img/services-4.gif",
    tag: "IT Services",
  },
  {
    title: "Networking & Hardware Services",
    text: "Reliable networking and hardware solutions for seamless connectivity. We provide installation, maintenance, and troubleshooting support. Ensure stable performance for both small and enterprise setups.",
    image: "/img/services-5.gif",
    tag: "Infrastructure",
  },
  {
    title: "Digital Marketing",
    text: "Growing your brand with result-driven digital marketing strategies. We help you reach the right audience through SEO and social media. Increase visibility, engagement, and business conversions.",
    image: "/img/services-6.gif",
    tag: "Marketing",
  },
  {
    title: "Data Analytics",
    text: "Transforming raw data into meaningful business insights. We analyze trends to help you make smarter decisions. Unlock growth opportunities with data-driven strategies.",
    image: "/img/services-1.jpg",
    tag: "Analytics",
  },
];

const ServicesSection = ({
  serviceIndex,
  servicesPerView,
  setServiceIndex,
  showNextService,
  showPrevService,
}) => {
  return (
    <section id="services" className="section-shell services-section">
      <div className="container">
        <div className="section-heading text-center">
          <div className="section-tag justify-content-center">Services</div>
          <h2 className="section-title">Solutions built around real computer service needs.</h2>
          <p className="section-text center-text">
            From one-off repairs to long-term support, MM COMPUTERS is structured to help
            individuals, students, and business teams stay productive.
          </p>
        </div>

        <div className="services-carousel">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={showPrevService}
            aria-label="Previous service"
          >
            <i className="bi bi-arrow-left" />
          </button>

          <div className="services-track-wrap">
            <div
              className="services-track"
              style={{ transform: `translateX(-${serviceIndex * (100 / servicesPerView)}%)` }}
            >
              {serviceItems.map((service) => (
                <div
                  key={service.title}
                  className="service-slide"
                  style={{ flex: `0 0 ${100 / servicesPerView}%` }}
                >
                  <article className="service-card">
                    <div className="service-image-wrap">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-card-body">
                      <div className="service-title-badge">{service.title}</div>
                      <p>{service.text}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={showNextService}
            aria-label="Next service"
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>

        <div className="carousel-dots" aria-label="Service carousel navigation">
          {Array.from({
            length: Math.max(1, serviceItems.length - servicesPerView + 1),
          }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === serviceIndex ? "active" : ""}`}
              onClick={() => setServiceIndex(index)}
              aria-label={`Go to service slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

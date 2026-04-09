const reviewItems = [
  {
    name: "Rahul Kumar",
    role: "Startup Founder",
    title: "Complete Digital Support",
    rating: 5,
    text: "MM COMPUTERS handled our website and mobile app development perfectly. Their team understood our requirements clearly and delivered a smooth, scalable solution on time.",
  },
  {
    name: "Sujith Kumar",
    role: "Business Owner",
    title: "Reliable E-Government Services",
    rating: 4,
    text: "Their e-government service support is quick and hassle-free. From documentation to processing, everything was handled smoothly without any confusion.",
  },
  {
    name: "Karthik R",
    role: "Marketing Manager",
    title: "Growth-Focused Marketing",
    rating: 5,
    text: "We saw a noticeable improvement in our online presence after their digital marketing services. Their strategies helped us reach the right audience effectively.",
  },
  {
    name: "Mithru",
    role: "Operations Head",
    title: "Efficient Data & IT Services",
    rating: 5,
    text: "Their data entry and IT-enabled services are accurate and reliable. It helped us reduce workload and focus more on core business operations.",
  },
  {
    name: "Chitra",
    role: "Entrepreneur",
    title: "Smart Insights with Analytics",
    rating: 5,
    text: "The data analytics insights provided by MM COMPUTERS helped us make better business decisions. Clear reports and actionable insights made a big difference.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-shell reviews-section">
      <div className="container">
        <div className="section-heading text-center">
          <div className="section-tag justify-content-center">Review</div>
          <h2 className="section-title">What our customers say about MM COMPUTERS.</h2>
          <p className="section-text center-text">
            Real feedback from people and businesses who rely on us.
          </p>
        </div>

        <div className="review-marquee">
          <div className="review-track review-track-a">
            {[...reviewItems, ...reviewItems].map((item, index) => (
              <article key={`${item.name}-${index}`} className="review-card">
                <p className="review-copy">{item.text}</p>
                <div className="review-person">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={`fas fa-star ${starIndex < item.rating ? "filled" : ""}`}
                    />
                  ))}
                </div>
                <h5>{item.title}</h5>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

const pricingItems = [
  {
    name: "Basic Plan",
    price: "Flexible",
    period: "",
    features: [
      "General consultation & support",
      "Basic service assistance",
      "Standard turnaround time",
      "Email/phone support",
    ],
  },
  {
    name: "Standard Plan",
    price: "Custom",
    period: "",
    features: [
      "All basic services included",
      "Priority support",
      "Faster delivery & execution",
      "Regular updates & reporting",
    ],
  },
  {
    name: "Premium Plan",
    price: "Tailored",
    period: "",
    features: [
      "Complete end-to-end solutions",
      "Dedicated support & consultation",
      "High-priority service handling",
      "Scalable & business-focused solutions",
    ],
  },
];
const PricingSection = ({ scrollToSection }) => {
  return (
    <section id="price" className="section-shell price-section">
      <div className="container">
        <div className="section-heading text-center">
          <div className="section-tag justify-content-center">Price</div>
          <h2 className="section-title">
            Straightforward service plans with a clean blue presentation.
          </h2>
        </div>
        <div className="row g-4">
          {pricingItems.map((plan) => (
            <div key={plan.name} className="col-md-6 col-xl-4">
              <div className="price-card">
                <div className="price-top">
                  <h3>{plan.name}</h3>
                  <div className="price-value">
                    {plan.price}
                    <span>{plan.period}</span>
                  </div>
                </div>
                <ul className="price-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="bi bi-check-circle-fill" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="primary-pill w-100" onClick={() => scrollToSection("contact")}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

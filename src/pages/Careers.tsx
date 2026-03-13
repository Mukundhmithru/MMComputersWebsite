const reviews = [
  {
    name: 'Arun K.',
    role: 'Small Business Owner',
    text: 'MM Computers helped us refresh five aging desktops, set up shared storage and secure our Wi‑Fi. The process was clear from quote to completion.',
  },
  {
    name: 'Sneha P.',
    role: 'Student',
    text: 'My laptop was overheating and shutting down. They cleaned the cooling system, replaced thermal paste and had it ready the next day.',
  },
  {
    name: 'Vijay R.',
    role: 'Remote Professional',
    text: 'They built a custom workstation and multi-monitor setup for my home office. Everything was neatly wired and ready to work from day one.',
  },
]

export function Careers() {
  return (
    <div id="careers" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" style={{ padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', textAlign: 'center', color: '#e2e8f0' }}>
          What Our Clients Say
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Just as Arise Constructions highlights detailed testimonials, MM
          Computers showcases real feedback so new clients know what to expect.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="mm-grid-3">
          {reviews.map((review) => (
            <div key={review.name} className="mm-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', marginBottom: '8px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#94a3b8', marginBottom: '16px', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {review.text}
              </p>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px', color: '#e2e8f0' }}>
                {review.name}
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


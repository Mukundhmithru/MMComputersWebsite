export function About() {
  return (
    <div id="about" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" style={{ padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="mm-grid-2">
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
              Full-Service Computer & IT Partner
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
              MM Computers is a full-service IT support company, taking
              inspiration from the end-to-end approach shown by Arise
              Constructions. We handle everything from quick laptop repairs and
              virus removal to complete small-office network design.
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
              Our goal is simple: keep your systems fast, secure and dependable so
              you can stay focused on work, study or business. We listen first,
              explain options in plain language, and then deliver the right
              solution for your budget and timeline.
            </p>
          </div>
          <div>
            <div className="mm-card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px', color: '#e2e8f0' }}>
                At a glance
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                • 10+ years supporting home users and offices
                <br />
                • Transparent quotes before we start any work
                <br />
                • Pickup & drop options available in select areas
                <br />• Ongoing maintenance plans for businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


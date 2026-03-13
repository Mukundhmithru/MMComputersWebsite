export function Contact() {
  return (
    <div id="contact" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" style={{ padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="mm-grid-2">
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
              Get It Fixed with MM Computers
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
              Like the clear call-to-action section on Arise Constructions, this
              page gives clients an easy way to request service, ask questions, or
              schedule an on-site visit.
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
              Call us during working hours, or send a quick request and we will
              get back with an approximate quote and time window.
            </p>
            <div className="mm-card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px', color: '#e2e8f0' }}>
                Contact Details
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Phone: +91-XXXXXXXXXX
                <br />
                Email: support@mmcomputers.example
                <br />
                Hours: Mon - Sat, 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
          <div>
            <div className="mm-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
                Quick Service Request
              </h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
                <input
                  type="text"
                  placeholder="Phone or Email"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    fontSize: '14px'
                  }}
                />
                <textarea
                  placeholder="Device / Issue"
                  rows={4}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
                <button type="submit" className="mm-btn-primary">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


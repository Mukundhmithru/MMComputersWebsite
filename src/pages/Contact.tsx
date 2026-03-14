import { Snackbar, Alert } from '@mui/material';

export function Contact() {
  const handleCallClick = () => {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  const isMobileUa =
    /android|iphone|ipad|ipod|iemobile|mobile/i.test(ua || '')

  if (isTouchDevice || isMobileUa) {
    window.location.href = 'tel:+918807329654'
  }
}
const handleWhatsappClick = () => {
  const whatsappUrl = 'https://wa.me/8807329654'
  window.open(whatsappUrl, '_blank')
}
  return (
    <div id="contact" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="mm-grid-2">
          <div>
              <h2 className="sylish-header" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
              Contact Us
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6,textAlign: 'center' }}>
              “வாங்க! எது வேணும்? PAN, Aadhar ?”
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6,textAlign: 'center' }}>
              “என்ன உதவி வேணும்? ஆவணங்களை சரிபார்த்து தரலாமா? ஆன்லைன் விண்ணப்பம் செய்யலாமா?”
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6,textAlign: 'center' }}>
            “WhatsApp பண்ணுங்க / Call பண்ணுங்க – நாங்க இருக்கோம்!”
            </p>
    
            <div className="mm-card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px', color: '#e2e8f0' }}>
                Contact Details
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Phone: +91-8807329654
                <br />
                Email: support@mmcomputers.example
                <br />
                Hours: Mon - Sat, 9:00 AM - 8:00 PM
              </p>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                          <button
                    className="mm-btn-primary"
                    onClick={handleCallClick}
                    style={{ minWidth: '160px', fontSize: '0.875rem' }}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="mm-btn-primary"
                    onClick={handleWhatsappClick}
                    style={{ minWidth: '160px', fontSize: '0.875rem' }}
                  >
                    💬 WhatsApp Us
                  </button>
                </div>
            </div>
          </div>
          <div>
            <div className="mm-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
                Quick Service Request
              </h3>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScT0ctGNdNUAbfOL0fw4O7F4KX9CsiD1huxC4UoKdWkPRAaQg/viewform?usp=publish-editor"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


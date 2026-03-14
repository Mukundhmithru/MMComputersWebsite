const reviews = [
  {
    name: 'Arun K.',
    role: 'Small Business Owner',
    text: 'Excellent service by Mr. Mathavan. He is very knowledgeable and highly experienced. He answered all my queries cordially. He assisted me in getting patta and legal heir certificate. I sincerely and gladly recommend him.',
  },
  {
    name: 'Sneha P.',
    role: 'Student',
    text: 'They are helpful , I have visited there for a information regarding Passport renewal,eventhough there is no benefit he gave all the right information ,,,this is really a Sevai Maiyam ...Thankyou',
  },
  {
    name: 'Vijay R.',
    role: 'Car Driver',
    text: 'Timely response and suggests all possible and alternate solutions for all sort of applications and name change or new Aadhaar related queries and other requests. Helps in documentation works as well!',
  },
]

export function Policy() {
  return (
    <div id="Policy" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" >
          <div>
            <h2 className="sylish-header" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
              Our Pricing Policy
            </h2>
                 <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Fair & Transparent We believe in clear, honest pricing with no surprises - நியாயமான மற்றும் வெளிப்படையான கட்டணம்
        </p>

                <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Service-based charges – Fees depend on the type of service and the effort involved. Sometimes, after reviewing your documents, we may suggest additional related services to ensure your work is completed successfully - சேவை அடிப்படையிலான கட்டணம்
        </p>
                <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          No hidden costs – Any extra work and updated charges will be discussed with your approval before we start - மறைமுக கட்டணங்கள் இல்லை
        </p>
            </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', textAlign: 'center', color: '#e2e8f0' }}>
         Why Choose MM Computers? See What Our Clients Say
        </h2>

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


const serviceGroups = [
  {
    title: 'Repairs & Upgrades',
    items: [
      'Laptop and desktop hardware repair',
      'SSD & RAM upgrades',
      'Battery, keyboard and screen replacements',
      'OS install and cleanup',
    ],
  },
  {
    title: 'Data & Security',
    items: [
      'Data backup and recovery (where possible)',
      'Virus and malware removal',
      'Secure reformat and data wipe',
      'Basic cybersecurity hardening',
    ],
  },
  {
    title: 'Networking & Office Setup',
    items: [
      'Wi‑Fi planning and router configuration',
      'Structured cabling for small offices',
      'Printer and shared storage setup',
      'Ongoing IT support retainers',
    ],
  },
  {
    title: 'Custom Systems',
    items: [
      'Custom workstation builds',
      'Gaming PC assembly and tuning',
      'Multi-monitor and ergonomic setups',
      'Performance optimization',
    ],
  },
]

export function Services() {
  return (
    <div id="services" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" style={{ padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', textAlign: 'center', color: '#e2e8f0' }}>
          Comprehensive Computer Services
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Similar to how Arise Constructions covers everything from remodels to
          structural work, MM Computers delivers a complete range of services for
          your devices and network. Whether you need a single repair or a full
          office rollout, we plan and execute every stage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="mm-grid-2">
          {serviceGroups.map((group) => (
            <div key={group.title} className="mm-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#e2e8f0' }}>
                {group.title}
              </h3>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {group.items.map((item) => (
                  <div key={item}>• {item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


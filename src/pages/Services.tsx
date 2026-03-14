import { useEffect, useMemo, useRef, useState } from 'react'
import esevai from '../assets/services/esevai.jpg'
import accounts from '../assets/services/accounts.jpg'
import document from '../assets/services/document.jpg'
import govern from '../assets/services/govern.jpg'
import print from '../assets/services/print.jpg'
const serviceGroups = [
  {
    title: 'Esevai / CSC',
    items:  [
  "Income, Community, Nativity",
  "First Graduate, Legal Heir, Widow Certificate, Unemployment Certificate, Family Migration Certificate",
  "Patta, EC, Certified Copy of Document",
  "Old Age Pension, Widow Pension, Disability Pension",
  "Unmarried Certificate, Solvency Certificate",
  "Pawn Broker License, Money Lender License",
  "No Male Child, Child Girl Protection Certificate",
  "NFDP, PMKisan, TeleLaw, Crop Insurance"
],
    image: esevai,
  },

  {
    title: 'General ',
    items:  [
  "Aadhar Corrections, Udyog Aadhar, GST Registration, GST Filing",
  "PAN - New, Correction, PAN Aadhaar Linking",
  "Aadhar Bank Seeding",
  "College Applications, College Scholarships",
  "Marriage Registration",
  "EB - New Connection, Conversion, Name Transfer",
  "Birth Certificate - Printing, Name Inclusion",
  "CIBIL Score",
  "Driving License - New, Update and Renewal",
  "Nalavariyam - Registration and Updates",
  "Ration Card - New, Corrections, Card Reprint",
  "Voter ID - New, Update and Card Printing",
  "UDID Registration",
  "Stamp Paper - Sales, Rental Agreement, Lease Agreement, Notary, Affidavit"
],
       image: govern,
  },
  {
    title: 'Documentation & Payments',
    items: [
  "Document Printing, Scanning and Lamination",
  "Photo Editing and Passport Size Photo Printing",
  "Xerox (Black & White / Color) and Printouts",
  "Electricity Bill Payment",
  "Water Bill Payment",
  "Gas Bill Payment",
  "Mobile Recharge (All Networks)",
  "DTH Recharge (All Operators)",
  "FASTag Recharge",
  "Credit Card Bill Payment",
  "Loan EMI Payments",
  "Online Utility Bill Payments",
  "All Types of Digital Payments"
],
       image: document,
  },
  {
    title: 'Xerox & Printing',
    items: [
  "Black & White Printouts",
  "Color Printouts",
  "Single Side and Double Side Printing",
  "Document Photocopy (Xerox)",
  "A4 and Legal Size Printing",
  "Bulk Printing for Projects and Documents",
  "Passport Size Photo Printing",
  "Document Scanning",
  "Lamination Services",
  "Online Ticket / Application Printouts"
],
       image: print,
  },
    {
    title: 'Accounts related services',
    items: [
  "Account Opening for Tamil Pudhalvan, Puthumai Pen, School/College Scholarships",
  "Life Insurance, Vehicle Insurance, Term Insurance, Accidental Insurance",
  "Amount Withdrawal using AePS",
  "Pon Magal Thittam, PPF, NPS",
  "Bank Loan, Car Loan, Personal Loan, Jewel Loan, Housing Loan",
  "Credit Card",
  "Aadhar Bank Seeding"
],
       image: accounts,
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const maxIndex = serviceGroups.length - 1

  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(maxIndex, idx))
    setActiveIndex(next)
  }

  const next = () => goTo(activeIndex >= maxIndex ? 0 : activeIndex + 1)
  const prev = () => goTo(activeIndex <= 0 ? maxIndex : activeIndex - 1)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prevIdx) => (prevIdx >= maxIndex ? 0 : prevIdx + 1))
    }, 5000)
    return () => window.clearInterval(id)
  }, [maxIndex])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const target = scroller.querySelector<HTMLDivElement>(
      `[data-svc-idx="${activeIndex}"]`,
    )
    if (!target) return

    const left =
      target.offsetLeft - (scroller.clientWidth - target.clientWidth) / 2
    scroller.scrollTo({ left, behavior: 'smooth' })
  }, [activeIndex])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }
  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return
    const dx = touchStartX - touchEndX
    if (dx > 50) next()
    if (dx < -50) prev()
  }

  const buttonStyle = useMemo(
    () => ({
      position: 'absolute' as const,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.45)',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 999,
      width: 44,
      height: 44,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      zIndex: 2,
    }),
    [],
  )

  return (
    <div id="services" className="mm-section" style={{ backgroundColor: '#0f172a' }}>
      <div className="mm-container" >
      <h2 className="sylish-header" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', color: '#e2e8f0' }}>
              Service
            </h2>
        {/* <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          Similar to how Arise Constructions covers everything from remodels to
          structural work, MM Computers delivers a complete range of services for
          your devices and network. Whether you need a single repair or a full
          office rollout, we plan and execute every stage.
        </p> */}

        <div
          style={{
            position: 'relative',
            marginTop: 16,
          }}
        >
          {/* Left / Right controls (work on mobile + desktop) */}
          <button
            type="button"
            aria-label="Previous service group"
            onClick={prev}
            style={{ ...buttonStyle, left: 8 }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next service group"
            onClick={next}
            style={{ ...buttonStyle, right: 8 }}
          >
            ›
          </button>

          {/* Horizontal moving blocks */}
          <div
            ref={scrollerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              padding: '8px 56px', // leave room for buttons
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {serviceGroups.map((group, idx) => (
              <div
                key={`${group.title}-${idx}`}
                data-svc-idx={idx}
                className="mm-card bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs"
                style={{
                  flex: '0 0 auto',
                  width: 'min(86vw, 380px)',
                  scrollSnapAlign: 'center',
                  border:
                    idx === activeIndex
                      ? '1px solid rgba(96,165,250,0.9)'
                      : undefined,
                }}
              >
                   <a href="#">
        <img className="rounded-t-base" style={{    height: '250px',
    width: '100%',
    objectFit: 'cover'}} src={group.image} alt="" />
    </a>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#e2e8f0',
                  }}
                >
                  {group.title}
                </h3>
                <div
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    maxHeight: 220,
                    overflowY: 'auto',
                    paddingRight: 6,
                  }}
                >
                  {group.items.map((item, itemIdx) => (
                    <div key={`${item}-${itemIdx}`}>• {item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Small dots indicator */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            {serviceGroups.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to service group ${idx + 1}`}
                onClick={() => goTo(idx)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor:
                    idx === activeIndex ? 'white' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


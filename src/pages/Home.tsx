import { useState, useEffect } from 'react'
import { About } from './About'
import { Services } from './Services'
import { Careers } from './Careers'
import { Contact } from './Contact'
import hero from '../assets/hero.png'
import documentation from '../assets/home-assests/documentation.png'
import eservice from '../assets/home-assests/eservice.jpg'
import itImage from '../assets/home-assests/IT.png'
import software from '../assets/home-assests/software.jpg'

const coreServices = [
  {
    title: 'Laptop & Desktop Repairs',
    body: 'Screen replacements, performance tuning, OS cleanup and data backup with clear timelines and upfront pricing.',
    image: hero
  },
  {
    title: 'Custom PC Builds',
    body: 'From high-performance workstations to gaming rigs, we assemble and configure systems tailored to your workload.',
    image: documentation
  },
  {
    title: 'Home & Office Networking',
    body: 'Wi‑Fi planning, router setup, cabling and secure configurations that keep your devices connected and protected.',
    image: eservice
  },
  {
    title: 'IT Support & Maintenance',
    body: 'Ongoing technical support, system updates, security monitoring, and preventive maintenance for your business.',
    image: itImage
  },
  {
    title: 'Software Installation & Training',
    body: 'Professional software setup, configuration, user training, and troubleshooting for all your digital needs.',
    image: software
  },
]

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreServices.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coreServices.length) % coreServices.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      {/* Hero Carousel Section */}
      <div
        id="home"
        style={{
          position: 'relative',
          minHeight: '50vh',
          height: '50vh',
          overflow: 'hidden',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {coreServices.map((service, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  maxWidth: 600,
                  width: '100%',
                  padding: '0 16px',
                }}
              >
                <div
                  style={{
                    marginBottom: '24px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    display: 'inline-block',
                    fontSize: '0.875rem',
                    color: 'white',
                  }}
                >
                  MM Computers • Service & Solutions
                </div>
                <h1
                  style={{
                    marginBottom: '24px',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h1>
                <p
                  style={{
                    marginBottom: '32px',
                    fontSize: '1.2rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    lineHeight: 1.4,
                  }}
                >
                  {service.body}
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
                    onClick={() => scrollToSection('contact')}
                    style={{ minWidth: '160px', fontSize: '0.875rem' }}
                  >
                    Book a Service
                  </button>
                  <button
                    className="mm-btn-outline"
                    onClick={() => scrollToSection('services')}
                    style={{ minWidth: '160px', fontSize: '0.875rem' }}
                  >
                    View All Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            zIndex: 10,
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            zIndex: 10,
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '4px',
            zIndex: 10,
            justifyContent: 'center',
          }}
        >
          {coreServices.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) e.currentTarget.style.backgroundColor = 'white';
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Careers/Testimonials Section */}
      <Careers />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}


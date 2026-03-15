import { useState, useEffect } from "react";
import { About } from "./About";
import { Services } from "./Services";
import { Policy } from "./Policy";
import { Contact } from "./Contact";
import { Request } from "../components/Request";
import documentation from "../assets/home-assests/document_service.png";
import eservice from "../assets/home-assests/e_service.png";
import idImage from "../assets/home-assests/ID_service.png";
import printout from "../assets/home-assests/printout_service.png";

const coreServices = [
  {
    title: "All Government ID Services (அனைத்து அரசு அடையாள அட்டை சேவைகள்)",
    body: "We help you apply, update, and correct government ID documents such as Aadhaar, PAN, Voter ID, and other official records quickly and safely.",
    image: idImage,
  },
  {
    title: "Online & Documentation Services (ஆன்லைன் மற்றும் ஆவண சேவைகள்)",
    body: "We assist with online form filling, document preparation, application submissions, and other digital services for education, jobs, and government portals.",
    image: documentation,
  },
  {
    title: "CSC & E-Sevai Services (CSC மற்றும் இ-சேவை சேவைகள்)",
    body: "Access various Tamil Nadu government services through E-Sevai including certificates, registrations, and official applications in one place.",
    image: eservice,
  },
  {
    title: "Xerox & Printouts (ஜெராக்ஸ் மற்றும் பிரிண்ட் அவுட்)",
    body: "Fast and clear photocopying, color and black-and-white printouts, document scanning, and basic printing services for all your needs.",
    image: printout,
  },
];

const handleCallClick = () => {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const isMobileUa = /android|iphone|ipad|ipod|iemobile|mobile/i.test(ua || "");

  if (isTouchDevice || isMobileUa) {
    window.location.href = "tel:+918807329654";
  }
};
const handleWhatsappClick = () => {
  const whatsappUrl = "https://wa.me/8807329654";
  window.open(whatsappUrl, "_blank");
};
export function Home() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + coreServices.length) % coreServices.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        {/* Hero Carousel Section */}
        <div
          id="home"
          style={{
            position: "relative",
            minHeight: "50vh",
            height: "50vh",
            overflow: "hidden",
            width: "99vw",
            marginLeft: "calc(-50vw + 50%)",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {coreServices.map((service, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    maxWidth: 600,
                    width: "100%",
                    padding: "0 16px",
                  }}
                >
                  <div
                    className="mm-desktop-only-badge"
                    style={{
                      marginBottom: "25px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      fontSize: "0.875rem",
                      color: "white",
                    }}
                  >
                    MM Computers • Service & Solutions
                  </div>
                  <h1
                    style={{
                      marginBottom: "14px",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h1>
                  <p
                    style={{
                      marginBottom: "12px",
                      fontSize: "1.0rem",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                      lineHeight: 1.4,
                    }}
                  >
                    {service.body}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="mm-btn-primary"
                      onClick={handleCallClick}
                      style={{ minWidth: "160px", fontSize: "0.875rem" }}
                    >
                      📞 Call Us
                    </button>
                    <button
                      className="mm-btn-primary"
                      onClick={handleWhatsappClick}
                      style={{ minWidth: "160px", fontSize: "0.875rem" }}
                    >
                      💬 WhatsApp Us
                    </button>
                    <button
                      className="mm-btn-primary"
                      onClick={() => setOpen(true)}
                      style={{ minWidth: "160px", fontSize: "0.875rem" }}
                    >
                      📞 Request a Callback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            className="slidebutton"
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              zIndex: 10,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            ‹
          </button>

          <button
            className="slidebutton"
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              zIndex: 10,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
            }
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "4px",
              zIndex: 10,
              justifyContent: "center",
            }}
          >
            {coreServices.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentSlide
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (index !== currentSlide)
                    e.currentTarget.style.backgroundColor = "white";
                }}
                onMouseLeave={(e) => {
                  if (index !== currentSlide)
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.5)";
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
        <Policy />

        {/* Contact Section */}
        <Contact />
      </div>
      <Request
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

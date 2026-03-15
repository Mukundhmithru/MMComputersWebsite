import { useState } from "react";
import mmLogo from "../assets/mm.jpg";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Policy", href: "#Policy" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setMobileOpen(false);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const handleEmailClick = () => {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&cc=mmcomputers.nmm@gmail.com";
    window.open(gmailUrl, "_blank");
  };

  const handleWhatsappClick = () => {
    const whatsappUrl = "https://wa.me/8807329654";
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const isMobileUa = /android|iphone|ipad|ipod|iemobile|mobile/i.test(
      ua || "",
    );

    if (isTouchDevice || isMobileUa) {
      window.location.href = "tel:+918807329654";
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#020617",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Top info bar (desktop only) */}
      <div
        className="header-top"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 16px",
          fontSize: "12px",
          color: "rgba(255,255,255,0.8)",
          width: "100%",
          margin: "0 auto",
          display: "none",
        }}
      >
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleEmailClick}
          >
            <span style={{ fontSize: "16px" }}>✉</span>
            <span>Click To Email</span>
          </div>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span style={{ fontSize: "16px" }}>🕒</span>
            <span>Mon - Sat, 9:00 AM - 8:00 PM</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              cursor: "pointer",
              right: "20px",
              position: "fixed",
            }}
            onClick={handleWhatsappClick}
          >
            <span style={{ fontSize: "16px", color: "#22c55e" }}>📱</span>
            <span>Click To WhatsApp</span>
          </div>
        </div>
        {/* <div style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }} onClick={handleCallClick}>
          <span>Call Us Today</span>
          <span style={{ fontWeight: 600 }}>+91-8807329654</span>
        </div> */}
      </div>

      <div
        className="header-divider"
        style={{
          borderBottom: "1px solid rgba(31,41,55,0.9)",
          display: "none",
        }}
      ></div>

      {/* Main nav bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          minHeight: "64px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Logo / brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h1
            onClick={() => scrollToSection("#home")}
            style={{
              fontWeight: 700,
              textDecoration: "none",
              color: "white",
              letterSpacing: "0.4px",
              fontSize: "1.25rem",
              cursor: "pointer",
              margin: 0,
            }}
          >
            <img
              src={mmLogo}
              alt="MM Computers"
              width={70}
              height={70}
              style={{ display: "block" }}
            />
          </h1>
          <span
            className="header-subtitle"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem" }}
          >
            IT Consulting & Digital solution
          </span>
        </div>

        {/* Centered nav (desktop) */}
        <nav
          className="header-nav"
          style={{
            flexGrow: 1,
            justifyContent: "center",
            gap: "8px",
            display: "none",
          }}
        >
          {navItems.map((item) => {
            const isActive = window.location.hash === item.href;
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                style={{
                  padding: "8px 14px",
                  fontSize: "13px",
                  backgroundColor: isActive ? "#1d4ed8" : "transparent",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side actions (desktop) */}
        <div
          className="header-actions"
          style={{ alignItems: "center", gap: "12px", display: "none" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              border: "1px solid rgba(148,163,184,0.6)",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "border-color 0.3s",
            }}
            onClick={handleCallClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(96,165,250,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(148,163,184,0.6)")
            }
          >
            <span style={{ fontSize: "18px", color: "#1d4ed8" }}>📞</span>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(148,163,184,0.9)" }}>
                Call Us Today
              </div>
              <div
                style={{ fontSize: "14px", color: "white", fontWeight: 600 }}
              >
                +91-8807329654
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="header-mobile-btn"
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            marginLeft: "auto",
          }}
          onClick={toggleMobile}
          aria-label="open navigation"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1001,
            backgroundColor: "#020617",
            padding: "16px",
            boxShadow: "-4px 0 6px -1px rgba(0, 0, 0, 0.1)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "white",
                  margin: 0,
                }}
              >
                MM Computers
              </h2>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: 0 }}>
                IT Consulting & Digital solution
              </p>
            </div>
            <button
              onClick={toggleMobile}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
          <div
            style={{ borderBottom: "1px solid #334155", marginBottom: "16px" }}
          ></div>
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleEmailClick}
              >
                <span style={{ color: "white" }}>✉</span>
                <span style={{ color: "white", fontSize: "14px" }}>
                  Click To Email
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "6px", alignItems: "center" }}
              >
                <span>🕒</span>
                <span style={{ color: "white", fontSize: "14px" }}>
                  Mon - Sat, 9:00 AM - 8:00 PM
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleWhatsappClick}
              >
                <span style={{ color: "#22c55e" }}>📱</span>
                <span style={{ color: "white", fontSize: "14px" }}>
                  Click To WhatsApp
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ borderBottom: "1px solid #334155", marginBottom: "16px" }}
          ></div>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navItems.map((item) => {
                const isActive = window.location.hash === item.href;
                return (
                  <li key={item.href} style={{ marginBottom: "8px" }}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px",
                        backgroundColor: isActive ? "#1d4ed8" : "transparent",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            style={{ borderBottom: "1px solid #334155", margin: "16px 0" }}
          ></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              border: "1px solid rgba(148,163,184,0.6)",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "border-color 0.3s",
            }}
            onClick={handleCallClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(96,165,250,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(148,163,184,0.6)")
            }
          >
            <span style={{ fontSize: "18px", color: "#1d4ed8" }}>📞</span>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(148,163,184,0.9)" }}>
                Call Us Today
              </div>
              <div
                style={{ fontSize: "14px", color: "white", fontWeight: 600 }}
              >
                +91-8807329654
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

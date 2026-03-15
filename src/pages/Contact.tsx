import { Request } from "../components/Request";
import { useEffect, useState } from "react";
import MapLocation from "../components/MapLocation";

export function Contact() {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const handleWhatsappClick = () => {
    const whatsappUrl = "https://wa.me/8807329654";
    window.open(whatsappUrl, "_blank");
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="contact" className="mm-section">
        <div className="mm-container">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}
            className="mm-grid-2"
          >
            <div>
              <h2
                className="sylish-header"
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#e2e8f0",
                }}
              >
                Contact Us
              </h2>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "16px",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                “வாங்க! எது வேணும்? PAN, Aadhar ?”
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "16px",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                “என்ன உதவி வேணும்? ஆவணங்களை சரிபார்த்து தரலாமா? ஆன்லைன்
                விண்ணப்பம் செய்யலாமா?”
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "16px",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                “WhatsApp பண்ணுங்க / Call பண்ணுங்க – நாங்க இருக்கோம்!”
              </p>

              <div
                className={
                  !isMobileView
                    ? "flex justify-evenly items-center mm-card "
                    : "mm-card"
                }
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#e2e8f0",
                    }}
                  >
                    Contact Details
                  </h3>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Phone: +91-8807329654
                    <br />
                    Email: support@mmcomputers.example
                    <br />
                    Hours: Mon - Sat, 9:00 AM - 8:00 PM
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
                  </div>
                </div>
                {!isMobileView && (
                  <div style={{ padding: "10px 0px" }}>
                    <MapLocation
                      lat={10.7927}
                      lng={78.7047}
                      placeName="MM Computers"
                    />
                  </div>
                )}
              </div>
            </div>
            {isMobileView && (
              <div style={{ padding: "10px 0px" }}>
                <MapLocation
                  lat={10.7927}
                  lng={78.7047}
                  placeName="MM Computers"
                />
              </div>
            )}

            <div className="mm-card flex items-center justify-center">
              <button className="request-btn" onClick={() => setOpen(true)}>
                Request Call Back - நாங்கள் உங்களை அழைக்க
              </button>
            </div>
          </div>
        </div>
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

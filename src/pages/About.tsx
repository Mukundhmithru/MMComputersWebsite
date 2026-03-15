import { useEffect, useState } from "react";
import shopImage from "../assets/shop.jpg";
export function About() {
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

  return (
    <div id="about" className="mm-about-section mm-section">
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
              About Us
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={isMobileView ? "flex-col" : "flex-row"}
            >
              <div
                style={{
                  marginRight: "20px",
                  minWidth: isMobileView ? "" : "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <img
                  src={shopImage}
                  alt="Shop"
                  style={{
                    display: "block",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                {" "}
                <div className="mm-card" style={{ marginTop: "10px" }}>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    Govt Approved center for Esevaimaiyam and CSC in Thiruvarur,
                    Tamil Nadu. Authorized partners for PAN, Aadhar, PM & CM
                    Schemes, Stamp Paper & 50+Digital Services. Our services
                    include applying for various Government Certificates,
                    complete E-Sevai services, and assistance with many
                    government-related online applications. - Support available
                    in Tamil, English.
                  </p>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    தமிழ்நாடு, திருவாரூரில் உள்ள இ-சேவை மையம் (E-Sevai Maiyam)
                    மற்றும் CSC க்கான அரசு அங்கீகரிக்கப்பட்ட மையம். PAN,
                    Aadhaar, பிரதமர் மற்றும் முதலமைச்சர் திட்டங்கள், ஸ்டாம்ப்
                    பேப்பர் மற்றும் 50க்கும் மேற்பட்ட டிஜிட்டல் சேவைகளுக்கான
                    அங்கீகரிக்கப்பட்ட சேவை மையம். முழுமையான இ-சேவை (E-Sevai)
                    சேவைகள், மற்றும் பல்வேறு அரசு தொடர்பான ஆன்லைன்
                    விண்ணப்பங்களுக்கு உதவி போன்ற சேவைகளை நாங்கள் வழங்குகிறோம்.
                    தமிழ் மற்றும் ஆங்கிலத்தில் சேவை மற்றும் உதவி
                    வழங்கப்படுகிறது.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="mm-card">
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px', color: '#e2e8f0' }}>
                At a glance
              </h3>

            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

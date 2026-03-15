import { useEffect, useState, useRef } from "react";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function Request({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const loadCount = useRef(0);

  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScT0ctGNdNUAbfOL0fw4O7F4KX9CsiD1huxC4UoKdWkPRAaQg/viewform";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (open) {
      loadCount.current = 0;

      // Open full form for mobile
      if (isMobile) {
        window.open(formURL, "_blank");
        onClose();
      }
    }
  }, [open, isMobile, onClose]);

  // auto close success alert
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleIframeLoad = () => {
    loadCount.current += 1;

    if (loadCount.current > 1) {
      setSuccess(true);
      onClose();
    }
  };

  if (!open || isMobile) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        {/* Modal */}
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            maxHeight: "90vh",
            overflow: "auto",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#020617",
            color: "white",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ margin: 0 }}>MM Computers - Request Call Back</h2>

            <IconButton onClick={onClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Google Form */}
          <iframe
            src={formURL}
            width="100%"
            height="500"
            style={{
              border: "none",
              background: "white",
              pointerEvents: "auto",
            }}
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Success Alert */}
      {success && (
        <Alert
          severity="success"
          onClose={() => setSuccess(false)}
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 10000,
          }}
        >
          Request submitted successfully!
        </Alert>
      )}
    </>
  );
}

import { Box, Container, Typography, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import type React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const handleWhatsappClick = () => {
    const whatsappUrl = "https://wa.me/8807329654";
    window.open(whatsappUrl, "_blank");
  };
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={false} className="mm-container">
          {children}
        </Container>
      </Box>

      <Footer />

      <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
        onClick={handleWhatsappClick}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}

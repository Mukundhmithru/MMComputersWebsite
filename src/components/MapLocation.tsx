import React from "react";

type MapLocationProps = {
  lat: number;
  lng: number;
  placeName?: string;
  zoom?: number;
  height?: number;
};

export default function MapLocation({
  lat,
  lng,
  placeName = "View Location",
  zoom = 15,
  height = 250,
}: MapLocationProps) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
      }}
    >
      <a
        href={mapOpenUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }}
      >
        <iframe
          title="Google Map Location"
          src={mapEmbedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          loading="lazy"
        />

        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          📍 {placeName} — Open in Google Maps
        </div>
      </a>
    </div>
  );
}

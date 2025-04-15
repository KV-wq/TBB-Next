import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/svg+xml",
      size: { width: 32, height: 32 },
      id: "icon",
    },
  ];
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "black",
        }}
      >
        TB
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}

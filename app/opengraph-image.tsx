import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <img
      src="https://wedding-invitation-12.vercel.app/og/preview_1200x630_v2.jpg?v=3"
      width={1200}
      height={630}
      style={{ objectFit: "cover" }}
      alt="preview"
    />,
    size,
  );
}

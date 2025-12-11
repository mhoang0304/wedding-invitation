import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <img
      src="https://wedding-invitation-12.vercel.app/TAW00351.JPG"
      width={1200}
      height={630}
      style={{ objectFit: "cover" }}
      alt="preview"
    />,
    size,
  );
}

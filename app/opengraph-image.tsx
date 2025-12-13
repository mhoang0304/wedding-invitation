import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <img
      src="https://res.cloudinary.com/djr13cwo7/image/upload/v1765619606/previewv2_ymtnkt.jpg"
      width={1200}
      height={630}
      style={{ objectFit: "cover" }}
      alt="preview"
    />,
    size,
  );
}

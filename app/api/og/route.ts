import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public/og/preview_1200x630_v2.jpg",
  );
  const imageBuffer = fs.readFileSync(filePath);

  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": imageBuffer.length.toString(),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

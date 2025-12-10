"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import "@/style/main.css";

export default function HeartRain() {
  const createFallingHeart = () => {
    const heart = document.createElement("img");
    heart.className = "falling-heart";
    heart.src = "/heart1.png"; // ảnh của bạn
    heart.alt = "heart";

    // random vị trí ngang
    const startLeft = Math.random() * window.innerWidth;

    heart.style.left = startLeft + "px";
    document.body.appendChild(heart);

    // animation GSAP
    gsap.to(heart, {
      y: window.innerHeight + 100,
      x: startLeft + (Math.random() * 200 - 100), // lắc trái phải
      duration: 18 + Math.random() * 2, // random tốc độ rơi
      ease: "power1.out",
      opacity: 0,
      onComplete: () => heart.remove(),
    });
  };

  useEffect(() => {
    // Tạo trái tim mỗi 300ms
    const interval = setInterval(() => {
      createFallingHeart();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null; // hiệu ứng chạy global
}

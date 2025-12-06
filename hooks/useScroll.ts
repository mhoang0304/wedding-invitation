"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export const useAutoScroll = () => {
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);

  const startAutoScroll = () => {
    // Tính lại maxScroll sau khi curtain mở
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // Không scroll nếu trang quá thấp
    if (maxScroll <= 0) return;

    // Event dừng scroll khi user tương tác
    const killScroll = () => {
      scrollTweenRef.current?.kill();
      removeListeners();
    };

    const events = [
      "wheel",
      "touchstart",
      "mousedown",
      "keydown",
      "pointerdown",
    ];

    const addListeners = () => {
      events.forEach((ev) =>
        window.addEventListener(ev, killScroll, { once: true, passive: true }),
      );
    };

    const removeListeners = () => {
      events.forEach((ev) => window.removeEventListener(ev, killScroll));
    };

    scrollTweenRef.current = gsap.to(window, {
      duration: 80,
      scrollTo: { y: maxScroll, autoKill: false },
      ease: "linear",
    });

    addListeners();
  };

  return { startAutoScroll };
};

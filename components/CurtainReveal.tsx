"use client";

import { useAudio } from "@/hooks/useAudio";
import { useAutoScroll } from "@/hooks/useScroll";
import { Button } from "antd";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useState } from "react";
import Audio from "./Audio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const CurtainReveal = ({ children }: { children: React.ReactNode }) => {
  const { startAutoScroll } = useAutoScroll();
  const { isPlaying, play, pause } = useAudio("/mp3/beautiful-in-white.mp3");

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpen = () => {
    if (isOpened) return;

    setIsOpened(true);

    const tl = gsap.timeline({
      onComplete: () => {
        play();
        startAutoScroll();
      },
    });

    tl.to(btnRef.current, {
      opacity: 0,
      scale: 0.7,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(leftRef.current, {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .to(
        rightRef.current,
        {
          x: "100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "<",
      )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );
  };

  const handleAudio = () => {
    if (isPlaying) pause();
    else play();
  };

  return (
    <div
      className={clsx("relative w-full overflow-hidden", {
        "h-screen": !isOpened,
        "min-h-screen": isOpened,
      })}
    >
      {/* Left curtain */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 z-50 h-full w-1/2 bg-[#5A0F1B]"
      />
      {/* Right curtain */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 z-50 h-full w-1/2 bg-[#5A0F1B]"
      />
      {!isOpened && (
        <Button
          ref={btnRef}
          onClick={handleOpen}
          className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white px-6 py-3 text-lg font-semibold text-black shadow-lg transition hover:scale-105"
        >
          Thiệp Mời
        </Button>
      )}
      <div ref={contentRef} className="h-full w-full opacity-0">
        {children}
      </div>

      <Audio isPlaying={isPlaying} handleAudio={handleAudio} />
    </div>
  );
};

export default CurtainReveal;

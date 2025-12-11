"use client";

import { useAudio } from "@/hooks/useAudio";
import { useAutoScroll } from "@/hooks/useScroll";
import "@/style/main.css";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { useRef, useState } from "react";
import Audio from "./Audio";
import HeartRain from "./HeartRain";
import { useSearchParams } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const CurtainReveal = ({ children }: { children: React.ReactNode }) => {
  const { startAutoScroll } = useAutoScroll();
  const { isPlaying, play, pause } = useAudio("/mp3/beautiful-in-white.mp3");
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [showHeart, setShowHeart] = useState<boolean>(false);

  const handleOpen = () => {
    if (isOpened) return;

    setIsOpened(true);
    setTimeout(() => {
      setShowHeart(true);
    }, 2500);

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
        <div className="absolute inset-0 z-50 flex cursor-pointer items-center justify-center">
          <div
            className="flex flex-col items-center gap-2"
            onClick={handleOpen}
          >
            <div className="relative h-24 w-24">
              <Image
                src="/btn-open.png"
                className="left-0.5! object-cover"
                alt="button-open"
                fill={true}
              />
            </div>
            <div className="gold-text text-xl font-bold">Thiệp Mời</div>
            {name ? (
              <div className="gold-text text-lg font-bold">
                {name.replaceAll("-", " ")}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      <div ref={contentRef} className="h-full w-full opacity-0">
        {children}
      </div>

      {showHeart && <HeartRain />}

      <Audio isPlaying={isPlaying} handleAudio={handleAudio} />
    </div>
  );
};

export default CurtainReveal;

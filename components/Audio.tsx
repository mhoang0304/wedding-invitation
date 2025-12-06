"use client";

import clsx from "clsx";
import Image from "next/image";

type AudioProps = {
  isPlaying: boolean;
  handleAudio: () => void;
};

const Audio: React.FC<AudioProps> = ({ isPlaying, handleAudio }) => {
  return (
    <div
      className={clsx(
        "fixed bottom-4 left-3 z-20 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#727e5f]",
        {
          "animate-spin duration-1000": isPlaying,
        },
      )}
      onClick={handleAudio}
    >
      <Image
        src="/music-note-sparkle.png"
        alt="banner"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Audio;

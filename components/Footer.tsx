import Image from "next/image";
import Countdown from "./Countdown";

const Footer: React.FC = () => {
  return (
    <div className="relative mt-4 w-full">
      <div className="h-[355px]">
        <Image
          src="/TAW00223.JPG"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="absolute bottom-11 z-2 w-full bg-black/45 pt-4 pb-3 text-white">
        <Countdown />

        <div className="mb-3 px-3 text-center text-sm">
          Cảm ơn bạn đã dành tình cảm cho chúng mình! Sự hiện diện của bạn chính
          là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng
          bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.
        </div>
        <div className="text-center text-xl font-semibold">Thank you!</div>
      </div>
    </div>
  );
};

export default Footer;

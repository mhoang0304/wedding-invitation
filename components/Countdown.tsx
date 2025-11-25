"use client";

import { useCountdown } from "@/helpers/function";

const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <>
      <div className="text-2xl text-center font-semibold mb-6">
        Thời gian đếm ngược
      </div>

      <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center">
          <div className="rounded-lg bg-[#707b5f] w-12 mb-1 h-10 text-white font-semibold flex items-center justify-center">
            {days}
          </div>
          <div className="text-sm">Ngày</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-lg bg-[#707b5f] w-12 mb-1 h-10 text-white font-semibold flex items-center justify-center">
            {hours}
          </div>
          <div className="text-sm">Giờ</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-lg bg-[#707b5f] w-12 mb-1 h-10 text-white font-semibold flex items-center justify-center">
            {minutes}
          </div>
          <div className="text-sm">Phút</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-lg bg-[#707b5f] w-12 mb-1 h-10 text-white font-semibold flex items-center justify-center">
            {seconds}
          </div>
          <div className="text-sm">Giây</div>
        </div>
      </div>
    </>
  );
};

export default Countdown;

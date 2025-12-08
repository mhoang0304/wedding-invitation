"use client";

import { useCountdown, formatToTwoDigits } from "@/helpers/function";

const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <>
      <div className="mb-1 text-center text-2xl font-semibold">Countdown</div>

      <div className="mb-7 flex justify-center gap-2 text-xl">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-white">
            {formatToTwoDigits(days)}
          </div>
          <div className=""> :</div>
          {/* <div className="text-sm">Ngày</div> */}
        </div>

        <div className="flex items-center gap-2 text-xl">
          <div className="flex items-center justify-center text-white">
            {formatToTwoDigits(hours)}
          </div>
          <div className=""> :</div>

          {/* <div className="text-sm">Giờ</div> */}
        </div>

        <div className="flex items-center gap-2 text-xl">
          <div className="flex items-center justify-center text-white">
            {formatToTwoDigits(minutes)}
          </div>
          <div className=""> :</div>

          {/* <div className="text-sm">Phút</div> */}
        </div>

        <div className="flex items-center gap-2 text-xl">
          <div className="flex items-center justify-center text-white">
            {formatToTwoDigits(seconds)}
          </div>
          {/* <div className="text-sm">Giây</div> */}
        </div>
      </div>
    </>
  );
};

export default Countdown;

import Image from "next/image";

const TimeLine: React.FC = () => {
  return (
    <div className="relative mx-auto h-[410px] w-full bg-black bg-[url(/TAW01507.JPG)] bg-cover bg-position-[100px_center] bg-no-repeat px-6 pt-16 before:absolute before:inset-0 before:z-1 before:bg-black/35">
      <ul className="absolute z-1">
        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src="/mess1.png"
                  className="object-contain"
                  alt="timeline"
                  fill={true}
                />
              </div>
              <div className="text-base font-semibold">06/2024</div>
            </div>
            <div className="mt-2 text-sm">Lần đầu nhắn tin</div>
          </div>
        </li>

        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src="/heart.png"
                  className="object-cover"
                  alt="timeline"
                  fill={true}
                />
              </div>
              <div className="text-base font-semibold">10/2024</div>
            </div>
            <div className="mt-2 text-sm">Ngày hẹn hò</div>
          </div>
        </li>

        <li className="relative flex items-baseline gap-6 pb-5">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src="/note.png"
                  className="object-cover"
                  alt="timeline"
                  fill={true}
                />
              </div>
              <div className="text-base font-semibold">11/2025</div>
            </div>
            <div className="mt-2 text-sm">Đính hôn</div>
          </div>
        </li>

        <li className="relative flex items-baseline gap-6 pb-1">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src="/ring-wedding.png"
                  className="object-contain"
                  alt="timeline"
                  fill={true}
                />
              </div>
              <div className="text-base font-semibold">12/2025</div>
            </div>
            <div className="mt-2 text-sm">Thành hôn</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;

import Image from "next/image";

const TimeLine: React.FC = () => {
  return (
    <div className="mx-auto max-w-[420px] bg-[url(/TAW01238.JPG)] bg-cover bg-no-repeat px-6 py-8 pb-20">
      <div className="mb-3 text-center text-2xl font-semibold text-white">
        Love Story
      </div>

      <ul>
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
            <div className="mt-2 text-sm">Ngày lần đầu nhắn tin</div>
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
              <div className="text-base font-semibold">11/2024</div>
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
              <div className="text-base font-semibold">12/2024</div>
            </div>
            <div className="mt-2 text-sm">Thành hôn</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;

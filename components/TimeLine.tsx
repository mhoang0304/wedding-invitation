const TimeLine: React.FC = () => {
  return (
    <div className="max-w-[420px] mx-auto py-8 bg-[url(/TAW01238.JPG)] bg-no-repeat bg-cover px-6 pb-20">
      <div className="text-center text-2xl font-semibold mb-3 text-white">
        Love Story
      </div>

      <ul>
        <li className="relative flex gap-6 pb-5 items-baseline">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="text-lg">03/2024</div>
            <div className="mt-2 text-base">Ngày lần đầu gặp</div>
          </div>
        </li>

        <li className="relative flex gap-6 pb-5 items-baseline">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="text-lg">04/2024</div>
            <div className="mt-2 text-base">Ngày hẹn hò</div>
          </div>
        </li>

        <li className="relative flex gap-6 pb-5 items-baseline">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="text-lg">05/2024</div>
            <div className="mt-2 text-base">Đính hôn</div>
          </div>
        </li>

        <li className="relative flex gap-6 pb-1 items-baseline">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-px before:bg-white">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div className="text-sm text-white">
            <div className="text-lg">06/2024</div>
            <div className="mt-2 text-base">Thành hôn</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine;

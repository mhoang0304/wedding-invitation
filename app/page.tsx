import Countdown from "@/components/Countdown";
import MasonryLayout from "@/components/MasonryLayout";
import TimeLine from "@/components/TimeLine";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-3xl pt-10 mx-auto bg-[#f0f1ec] px-4">
      <div className="text-center font-bold text-4xl text-[#800020] mb-5">
        Nhà có hỷ
      </div>

      <div className="text-center text-3xl  font-semibold text-[#5A0F1B]">
        Minh Hoàng - Mai Phương
      </div>

      <div className="flex justify-center mb-8 relative h-50 items-center">
        <Image
          src="/flower.png"
          alt="banner"
          className="absolute left-0"
          height={300}
          width={150}
        />

        <div className="flex flex-col gap-1 items-center">
          <div className="text-xl">Chủ Nhật - 11h30</div>
          <div className="text-2xl text-[#5A0F1B] font-semibold">
            21.12.2025
          </div>
        </div>
      </div>

      <div className="relative h-[750px] mb-15 mx-10">
        <Image
          src="/banner.jpeg"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="flex justify-center mb-20 items-center">
        <div className="px-6 text-right">
          <div>NHÀ TRAI</div>
          <div className="invisible">Ông:</div>
          <div>Bà: Nguyễn Thị Thanh Xuân</div>
        </div>

        <div className="w-0.5  bg-[#5A0F1B] h-16"></div>

        <div className="px-6">
          <div>NHÀ GÁI</div>
          <div>Ông: Nguyễn Văn Trọng</div>
          <div>Bà: Phương Thị Ngọc</div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="mb-6">Trân trọng thông báo LỄ THÀNH HÔN của</div>

        <div className="flex flex-col gap-1 text-2xl text-[#800020] font-semibold items-center">
          <div>Minh Hoàng</div>
          <div>&</div>
          <div>Mai Phương</div>
        </div>
      </div>

      <div className="relative h-[350px] mb-10">
        <Image
          src="/banner1.jpg"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="text-center">Trân trọng kính mời</div>
      <div className="text-center mb-2">Gia đình</div>
      <hr className="w-[300px] mx-auto mb-10" />

      <TimeLine />

      <div className="mb-10 mt-8">
        <Countdown />
      </div>

      <MasonryLayout />

      <div className="mt-20 flex gap-8 justify-center">
        <div>
          <div className="text-center text-lg mb-1">Nhà trai</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.599167116449!2d105.83530747541789!3d21.008698780635576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0038489635%3A0xd4326cffd4eb28b4!2sVCCI%20Tower!5e0!3m2!1svi!2s!4v1763399737310!5m2!1svi!2s"
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="mx-auto"
          ></iframe>
        </div>

        <div>
          <div className="text-center  text-lg mb-1">Nhà gái</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.95282885691955!2d105.39181687825334!3d21.124223082340084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134618b262512fb%3A0x4beff3487c6ec096!2zTFBCYW5rIFThuqNuIEzEqW5o!5e0!3m2!1svi!2s!4v1763400568528!5m2!1svi!2s"
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map1"
            className="mx-auto"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-lg font-semibold">
        <div className="text-center">Thank you!</div>
        <div className="text-center">Rất hân hạnh được đón tiếp</div>
      </div>

      <div className="w-9 h-9 flex items-center sticky justify-center overflow-hidden rounded-full bottom-4 left-3 bg-[#727e5f] animate-spin">
        <Image
          src="/music-note-sparkle.png"
          alt="banner"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

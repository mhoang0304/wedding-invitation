import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import MasonryLayout from "@/components/MasonryLayout";
import TimeLine from "@/components/TimeLine";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-3xl mx-auto bg-[#f0f1ec]">
      <HomeBanner />

      <div className="text-center py-4 mb-3">
        <div className="font-bold text-lg">Quý khách thân mến</div>
        <div className="mb-2">
          Khoảnh khắc thiêng liêng nhất cuộc đời chúng tôi
        </div>
        <div className="w-[65%] mx-auto h-px bg-black"></div>
      </div>

      <div className="font-medium text-center mb-5">
        <div className="font-semibold">Trân trọng kính mời</div>
        <div className="mb-8">Bạn và gia đình tới dự lễ cưới của</div>
        <div className="font-semibold text-2xl">Minh Hoàng & Mai Phương</div>
      </div>

      <div className="relative h-[350px] mb-10 before:absolute before:bg-black/45 text-white before:inset-0 before:z-1">
        <Image
          src="/banner1.jpg"
          alt="banner"
          className="object-cover"
          fill={true}
        />

        <div className="absolute z-2 inset-0 text-center">
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="flex justify-center mb-8 relative h-50 items-center">
        <div className="flex absolute z-[1px] flex-col gap-1 items-center">
          <div className="text-xl">Chủ Nhật - 11h30</div>
        </div>
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

      <TimeLine />

      <div className="mb-10 mt-8">
        <Countdown />
      </div>

      <MasonryLayout />

      <div className="mt-20 md:flex-row flex flex-col gap-8 justify-center">
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

      <div className="w-9 h-9 flex items-center sticky justify-center overflow-hidden rounded-full bottom-4 left-3 bg-[#727e5f] animate-spin">
        <Image
          src="/music-note-sparkle.png"
          alt="banner"
          width={24}
          height={24}
        />
      </div>

      <Footer />
    </div>
  );
}
// text-[#800020]
// text-[#5A0F1B]

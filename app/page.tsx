"use client";

import Audio from "@/components/Audio";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import MasonryLayout from "@/components/MasonryLayout";
import TimeLine from "@/components/TimeLine";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  const openGoogleMap1 = () => {
    window.open(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.599167116449!2d105.83530747541789!3d21.008698780635576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0038489635%3A0xd4326cffd4eb28b4!2sVCCI%20Tower!5e0!3m2!1svi!2s!4v1763399737310!5m2!1svi!2s",
    );
  };

  const openGoogleMap2 = () => {
    window.open(
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.95282885691955!2d105.39181687825334!3d21.124223082340084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134618b262512fb%3A0x4beff3487c6ec096!2zTFBCYW5rIFThuqNuIEzEqW5o!5e0!3m2!1svi!2s!4v1763400568528!5m2!1svi!2s",
    );
  };

  return (
    <div className="mx-auto max-w-3xl bg-[#f0f1ec]">
      <HomeBanner />

      <div className="mb-4 py-4 text-center">
        <div className="text-lg font-bold">Quý khách thân mến</div>
        <div className="mb-2">
          Khoảnh khắc thiêng liêng nhất cuộc đời chúng tôi
        </div>
        <div className="mx-auto h-px w-[65%] bg-black"></div>
      </div>

      <div className="mb-5 text-center font-medium">
        <div className="text-xl font-semibold">Trân trọng kính mời</div>
        <div className="mb-8">Bạn và gia đình tới dự lễ thành hôn của</div>
        <div className="text-[26px] font-semibold">Minh Hoàng & Mai Phương</div>
      </div>

      <div className="relative mb-9 h-[535px] text-white before:absolute before:inset-0 before:z-1 before:bg-black/50">
        <Image
          src="/banner1.jpg"
          alt="banner"
          className="object-cover"
          fill={true}
        />

        <div className="absolute inset-0 z-2 py-8 text-center">
          <div className="text-lg font-semibold">Địa điểm</div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            <div className="font-semibold">
              Trung tâm tiệc cưới & Hội Nghị Seasons
            </div>
            <div className="">Tầng 2, Tháp VCCI Tower</div>
            <div className="">9 Đào Duy Anh - Đống Đa - Hà Nội</div>
          </div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            <div className="font-semibold">Chủ Nhật - 11h30</div>
            <div>Ngày 21 Tháng 12 Năm 2025</div>
          </div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <Button color="default" variant="solid" onClick={openGoogleMap1}>
            Xem địa chỉ
          </Button>
        </div>
      </div>

      <div className="mt-8 mb-10">
        <Countdown />
      </div>

      <div className="mb-10">
        <TimeLine />
      </div>

      <MasonryLayout />

      <Footer />
    </div>
  );
}
// text-[#800020]
// text-[#5A0F1B]

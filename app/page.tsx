"use client";

import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import MasonryLayout from "@/components/MasonryLayout";
import TimeLine from "@/components/TimeLine";
import { LOCATION } from "@/helpers/constant";
import { Button, Divider } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const name = searchParams.get("name");
  console.log(99, name);

  const openGoogleMap1 = () => {
    if (location === LOCATION.HA_NOI) {
      window.open(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.599167116449!2d105.83530747541789!3d21.008698780635576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0038489635%3A0xd4326cffd4eb28b4!2sVCCI%20Tower!5e0!3m2!1svi!2s!4v1763399737310!5m2!1svi!2s",
      );
    } else {
      window.open(
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.95282885691955!2d105.39181687825334!3d21.124223082340084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134618b262512fb%3A0x4beff3487c6ec096!2zTFBCYW5rIFThuqNuIEzEqW5o!5e0!3m2!1svi!2s!4v1763400568528!5m2!1svi!2s",
      );
    }
  };

  return (
    <div className="mx-auto max-w-3xl bg-[#f0f1ec]">
      <HomeBanner />

      <div className="px-4">
        <div className="mt-7 mb-6 text-center font-medium">
          <div className="mb-5 text-sm italic">
            <div>
              Trân trọng kính mời{" "}
              <div className="inline-block font-semibold">
                {name ? name.replaceAll("-", " ") : "Quý Khách"}
              </div>
            </div>
            <div> tới dự bữa tiệc cùng lễ thành hôn của hai chúng tôi</div>
          </div>

          <div>
            <div className="font-dancing text-[30px] font-semibold">
              Phạm Minh Hoàng
            </div>
            <div className="my-1 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-gray-300"></div>
              <div className="italic">và</div>
              <div className="h-px w-6 bg-gray-300"></div>
            </div>
            <div className="font-dancing text-[30px] font-semibold">
              Nguyễn Mai Phương
            </div>
          </div>
        </div>

        <Divider />
        <div className="mb-5 flex justify-center gap-5">
          <div className="text-center">
            <div className="text-sm font-semibold">NHÀ TRAI</div>
            <div className="text-sm">
              <div>Bà Nguyễn T. Thanh Xuân</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm font-semibold">NHÀ GÁI</div>
            <div className="text-sm">
              <div>Bà Phương Thị Ngọc</div>
              <div>Ông Nguyễn Văn Trọng</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-9 h-[520px] text-white before:absolute before:inset-0 before:z-1 before:bg-black/50">
        <Image
          src="/banner3.jpg"
          alt="banner"
          className="object-cover"
          fill={true}
        />

        <div className="absolute inset-0 z-2 py-8 text-center">
          <div className="text-lg font-semibold">Địa điểm</div>
          <div className="mx-auto my-2.5 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            {location === LOCATION.HA_NOI ? (
              <>
                <div className="font-semibold">
                  Trung tâm tiệc cưới & Hội Nghị Seasons
                </div>
                <div className="text-sm">Tầng 2, Tháp VCCI Tower</div>
                <div className="text-sm">9 Đào Duy Anh - Đống Đa - Hà Nội</div>
              </>
            ) : (
              <>
                <div className="font-semibold">Tư gia nhà gái</div>
                <div className="text-sm">Số nhà 15, ngõ 3</div>
                <div className="text-sm">
                  Thôn Yên Thành, xã Suối Hai, Hà Nội
                </div>
              </>
            )}
          </div>
          <div className="mx-auto my-2.5 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            {location === LOCATION.HA_NOI ? (
              <>
                <div className="font-semibold">Chủ Nhật - 11h30</div>
                <div>Ngày 21 Tháng 12 Năm 2025</div>
              </>
            ) : (
              <>
                <div className="font-semibold">Thứ 7 - 15h30</div>
                <div>Ngày 20 Tháng 12 Năm 2025</div>
              </>
            )}
          </div>
          <div className="mx-auto my-2.5 h-14 w-0.5 bg-white"></div>

          <div className="mb-3 font-semibold">Trân Trọng Kính Mời</div>

          <Button
            icon={
              <Image
                src="/googleMaps.svg"
                width={14}
                height={14}
                alt="location"
              />
            }
            onClick={openGoogleMap1}
            className="animate-bounce font-semibold! text-white!"
            type="text"
          >
            Xem địa chỉ
          </Button>
        </div>
      </div>

      <div>
        <div className="text-center text-xl font-semibold">SAVE THE DATE</div>

        <div className="relative mx-4 mb-10 h-[274px]">
          <Image
            src="/wedding-calendar-day.png"
            alt="banner"
            className="object-contain"
            fill={true}
          />
        </div>
      </div>

      <div className="mb-8 px-4">
        <div className="w-[265px]">
          <div className="font-dancing mb-1 text-center text-[22px]">
            Cô dâu
          </div>
          <div className="relative mb-1 h-[245px] w-full">
            <Image
              src="/TAW00036.JPG"
              alt="cover"
              className="object-cover object-[50%_-40px]"
              fill={true}
            />
          </div>
        </div>
        <div className="text-right text-[22px]">MAI PHƯƠNG</div>

        <div className="mt-4 ml-auto w-[265px]">
          <div className="font-dancing mb-1 text-center text-[22px]">
            Chú rể
          </div>
          <div className="relative mb-1 h-[245px] w-full">
            <Image
              src="/TAW00424.JPG"
              alt="cover"
              className="object-cover"
              fill={true}
            />
          </div>
        </div>
        <div className="text-[22px]">MINH HOÀNG</div>
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

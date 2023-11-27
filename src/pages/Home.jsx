import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
import { Typography } from "@material-tailwind/react";
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["salon jihozlari", "antiradarlar", "tuning jihozlari"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {swiperImages.map(item => {
          return (
            <SwiperSlide key={item.id} className="max-h-[700px]">
              <img src={item.image} alt="" />
            </SwiperSlide>
          );
        })}
        <div className="z-[999] absolute left-0 bottom-0 pb-[152px] flex justify-between items-end">
          <div className="flex flex-col space-y-12">
            <Typography
              variant="h1"
              color="white"
              className="space-x-3 text-white"
            >
              <span>Mashinalar uchun</span>
              <span ref={typedElement}></span>
            </Typography>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Home;

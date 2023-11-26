import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";

const Home = () => {
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
        {swiperImages.map((image, index) => {
          return (
            <SwiperSlide key={index} className="max-h-[700px]">
              <img src={image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Home;

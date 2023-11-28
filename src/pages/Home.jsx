import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";
import "../styles/typedStyle.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
import { Button, Typography } from "@material-tailwind/react";
import Typed from "typed.js";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { products } from "../data/data";

const Home = () => {
  const typedElement = useRef(null);

  const [productsCategory, setProductsCategory] = useState([]);

  function setCategoryToArray(arr) {
    let categoryes = new Set();
    arr.forEach(function (item) {
      let category = item.category;
      categoryes.add(category);
    });
    let categoryArr = Array.from(categoryes);
    return categoryArr;
  }

  useEffect(() => {
    setProductsCategory(setCategoryToArray(products));
  }, []);

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
    <div className={`${styles.container} !px-0 max-w-[1920px]`}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper relative navigation-styled w-full"
      >
        {swiperImages.map(item => {
          return (
            <SwiperSlide
              key={item.id}
              className="max-h-[700px] h-min min-h-min flex justify-center items-center"
            >
              <img src={item.image} className="h-full w-full" alt="" />
            </SwiperSlide>
          );
        })}
        <div className="z-[999] px-20 absolute left-0 bottom-0 pb-[52px] lg:pb-[152px]">
          <div className={`flex justify-between items-end ${styles.container}`}>
            <div className="flex flex-col space-y-5 lg:space-y-12 items-start h-48 lg:h-24">
              <Typography
                variant="h1"
                color="white"
                className="h-full space-x-0 lg:space-x-3 flex flex-col lg:flex-row text-white"
              >
                <span>Mashinalar uchun</span>
                <div ref={typedElement}> </div>
              </Typography>
              <Link>
                <Button variant="filled" color="red" className="text-white">
                  Mahsulotga buyurtma bering
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Swiper>
      <Typography
        variant="h2"
        color="black"
        className={`${styles.container} pt-5`}
      >
        Mahsulotlar
      </Typography>
      <div className="flex justify-center items-center gap-5">
        {productsCategory.map((category, index) => {
          return (
            <Button key={index} variant="outlined">
              {category}
            </Button>
          );
        })}
      </div>
      <Products />
    </div>
  );
};

export default Home;

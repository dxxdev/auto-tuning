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
import { styles } from "../styles";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { products } from "../data/data";
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);
  const [render, setRender] = useState(true);
  const [allBtnActive, setAllBtnActive] = useState(true);

  const [productsCategory, setProductsCategory] = useState([]);
  const [category, setCategory] = useState(setCategoryToArray(products));

  const categoryBtnActive = productsCategory.map(category => {
    let obj = {
      active: false,
      category,
    };
    return obj;
  });

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
      strings: productsCategory.map(str => str.toLowerCase()),
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });

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
                className="h-full space-x-0 lg:space-x-3 flex flex-col lg:flex-row text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white"
              >
                <span>Mashinalar uchun</span>
                <div ref={typedElement}></div>
              </Typography>
              <Link>
                <Button variant="filled" color="red" className="text-white">
                  Tuning jihozlariga buyurtma berish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Swiper>
      <Typography
        variant="h2"
        color="black"
        className={`${styles.container} pt-20 pb-5 text-center`}
      >
        Eng yaxshi mahsulotlar
      </Typography>
      <div className="flex justify-center items-center py-5">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <li>
            <Button
              onClick={() => {
                setRender(prev => !prev);
                setCategory(setCategoryToArray(products));
                setAllBtnActive(true);
              }}
              className="w-full"
              variant={allBtnActive ? "filled" : "outlined"}
            >
              Hammasi
            </Button>
          </li>
          {productsCategory.map((category, index) => {
            return (
              <li key={index}>
                <Button
                  onClick={() => {
                    setRender(prev => !prev);
                    setAllBtnActive(false);
                    setCategory([category]);
                    
                  }}
                  className="w-full"
                  variant={
                    categoryBtnActive[index].active ? "filled" : "outlined"
                  }
                >
                  {category}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <Products productsCategory={category} />
    </div>
  );
};

export default Home;

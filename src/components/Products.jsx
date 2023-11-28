import React from "react";
import { styles } from "../styles";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Typography } from "@material-tailwind/react";

const Products = () => {
  return (
    <ul
      className={`${styles.container} py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8`}
    >
      {products.map(product => {
        return (
          <li
            key={product.id}
            className="rounded-lg bg-white shadow-md space-y-4"
          >
            <Link to={`/${product.id}`}>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper relative rounded-lg"
              >
                {product.images.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="max-h-[470px]">
                      <img src={item} className="w-full" alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Link>
            <div className="flex flex-col px-3 pb-3">
              <Typography variant="h5" className="font-medium">
                {product.productName}
              </Typography>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;

import React, { useState } from "react";
import { styles } from "../styles";
import { products } from "../data/data";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IconButton, Typography } from "@material-tailwind/react";
import {
  AddShoppingCartOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";

let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};
const Products = () => {
  const [render, setRender] = useState(false);

  const addToCart = id => {
    setRender(prev => !prev);
    products.map((product, index) => {
      index === id
        ? (product.inTheCart = !product.inTheCart)
        : (product.inTheCart = product.inTheCart);
    });
  };

  return (
    <ul
      className={`${styles.container} py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8`}
    >
      {products.map((product, index) => {
        return (
          <li
            key={product.id}
            className="rounded-lg bg-white flex flex-col shadow-md space-y-4"
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
            <div className="flex flex-col h-full px-3 pb-3 space-y-3 justify-between">
              <Typography variant="h5" className="font-medium">
                {product.productName}
              </Typography>
              <div>
                <Typography variant="small">
                  Turkum: {product.category}
                </Typography>
                <Typography variant="small" color="black">
                  <span className="flex items-end justify-start space-x-1">
                    <Star className="text-yellow-500" />
                    <span className="text-gray-700">{product.rating}</span>
                  </span>
                </Typography>
                <div className="w-full flex justify-between items-end">
                  <Typography variant="h6">
                    {product.price
                      .toLocaleString("uz-UZ", options)
                      .replaceAll(",", " ")}{" "}
                    so'm
                  </Typography>
                  <IconButton
                    onClick={() => addToCart(index)}
                    variant={`${product.inTheCart ? "filled" : "outlined"}`}
                    color="gray"
                  >
                    {product.inTheCart ? (
                      <RemoveShoppingCartOutlined />
                    ) : (
                      <AddShoppingCartOutlined />
                    )}
                  </IconButton>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiperStyle.css";

import { Pagination, EffectFade } from "swiper/modules";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { Chip, IconButton, Typography } from "@material-tailwind/react";
import { addCartProduct, options, viewProduct } from "../data/data";

const Products = ({
  rendered,
  product,
  productId,
  productCategory,
  productName,
  productImages,
  productSaved,
  productIsItNew,
  productInAction,
  productRating,
  productPrice,
  productInTheCart,
}) => {
  const [render, setRender] = useState(true);

  return (
    <li
      // key={productId}
      className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper relative group"
    >
      <Link
        to={`/${productCategory}/${productName}`}
        onClick={() => {
          viewProduct(product);
        }}
      >
        <div className="bg-gray-200 rounded-t-lg">
          <Swiper
            effect="fade"
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, EffectFade]}
            className="mySwiper relative rounded-t-lg h-[400px]"
          >
            {productImages.map((item, index) => {
              return (
                <SwiperSlide key={index} className="max-h-[400px]">
                  <img src={item} className="w-full" alt={productName} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Link>
      <button
        onClick={() => {
          rendered();
          setRender((prev) => !prev);
          productSaved(product);
        }}
        className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
      >
        {product.saved ? (
          <Bookmark fontSize="large" />
        ) : (
          <BookmarkBorderOutlined fontSize="large" />
        )}
      </button>
      <div className="flex space-x-3 absolute left-3 top-0 z-10">
        {productIsItNew && (
          <Chip
            className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
            value="Yangi"
            color="green"
            size="sm"
            variant="filled"
          />
        )}
        {productInAction && (
          <Chip
            className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
            value="Aksiya"
            size="sm"
            variant="filled"
            color="red"
          />
        )}
      </div>
      <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
        <Typography variant="h5" className="font-medium">
          {productName}
        </Typography>
        <div>
          <Typography variant="small">Turkum: {productCategory}</Typography>
          <Typography variant="small" color="black">
            <span className="flex items-end justify-start space-x-1">
              <Star className="text-yellow-700" />
              <span className="text-gray-700">{productRating}</span>
            </span>
          </Typography>
          <div className="w-full flex justify-between items-end">
            <Typography variant="h6">
              {productPrice
                .toLocaleString("uz-UZ", options)
                .replaceAll(",", " ")}{" "}
              so'm
            </Typography>
            <IconButton
              onClick={() => {
                rendered();
                setRender((prev) => !prev);
                addCartProduct(product);
              }}
              variant={`${productInTheCart ? "filled" : "outlined"}`}
              color="gray"
            >
              {productInTheCart ? (
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
};

export default Products;

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
  productCategory,
  actionPage,
  productName,
  productImages,
  card,
  productSaved,
  productIsItNew,
  productInAction,
  productRating,
  productPrice,
  productInTheCart,
}) => {
  const [render, setRender] = useState(true);

  const productSaves = (product) => {
    product.saved = !product.saved;
  };

  return (
    <li
      className={`rounded-lg bg-white ${
        actionPage ? "w-full" : "max-w-xs"
      } flex flex-col hover:shadow-md space-y-4 card-swiper w-72 md:${
        card ? "w-full" : "w-72"
      } relative group`}
    >
      <Link
        to={`/${productCategory}/${productName}`}
        onClick={() => {
          viewProduct(product);
        }}
        className="relative"
      >
        <div className="bg-gray-200 rounded-t-lg">
          <Swiper
            loop={true}
            effect="fade"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, EffectFade]}
            className="mySwiper overflow-hidden rounded-t-lg w-full h-[200px] sm:h-[260px]"
          >
            {productImages.slice(0, 3).map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="h-full w-full overflow-hidden flex items-center justify-center"
                >
                  <img
                    width="100%"
                    src={item}
                    className="w-full"
                    alt={productName}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex h-min space-x-1.5 md:space-x-3 absolute left-1.5 md:left-3 bottom-3 md:top-3 z-10">
            {productIsItNew && (
              <Chip
                className="transition-all duration-200 !py-0.5 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                value="Yangi"
                color="green"
                size="sm"
                variant="filled"
              />
            )}
            {productInAction && (
              <Chip
                className="transition-all duration-200 !py-0.5 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                value="Aksiya"
                size="sm"
                variant="filled"
                color="red"
              />
            )}
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          setRender((prev) => !prev);
          productSaves(product);
          rendered();
        }}
        aria-label="saved button"
        tabIndex="-1"
        className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
      >
        {product.saved ? (
          <Bookmark fontSize="large" />
        ) : (
          <BookmarkBorderOutlined fontSize="large" />
        )}
      </button>
      <div className="flex flex-col h-full px-1.5 pb-1.5 md:px-3 md:pb-3 space-y-3 relative justify-between">
        <Typography
          variant="paragraph"
          className="font-medium text-black lg:text-black/90 max-h-[56px] overflow-hidden"
        >
          {productName}
        </Typography>
        <div>
          <Typography variant="small">Turkum: {productCategory}</Typography>
          <Typography variant="small" color="black">
            <span className="flex items-end justify-start text-black lg:text-black/90 space-x-1">
              <Star className="text-yellow-700" />
              <span>{productRating}</span>
            </span>
          </Typography>
          <div className="w-full flex justify-between items-end">
            <b className="text-base text-black font-bold lg:text-black/90">
              {productPrice
                .toLocaleString("uz-UZ", options)
                .replaceAll(",", " ")}{" "}
              so'm
            </b>
            <IconButton
              aria-label="buying button"
              tabIndex="-1"
              onClick={() => {
                setRender((prev) => !prev);
                addCartProduct(product);
                rendered();
              }}
              variant={`${productInTheCart ? "filled" : "outlined"}`}
              color="gray"
              size="sm"
            >
              {productInTheCart ? (
                <RemoveShoppingCartOutlined fontSize="small" />
              ) : (
                <AddShoppingCartOutlined fontSize="small" />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Products;

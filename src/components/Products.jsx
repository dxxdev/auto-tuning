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
import {
  addCartProduct,
  options,
  productSaves,
  viewProduct,
} from "../data/data";

const Products = ({ rendered, product, actionPage, card }) => {
  const [render, setRender] = useState(true);

  return (
    <li
      className={`rounded-lg bg-white ${
        actionPage ? "w-full" : "max-w-xs"
      } flex flex-col hover:shadow-md space-y-4 card-swiper w-64 md:${
        card ? "w-full" : "w-72"
      } relative group`}
    >
      <Link
        to={`/${product.category}/${product.productName}`}
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
            className="mySwiper overflow-hidden flex justify-center items-center rounded-t-lg w-full h-72"
          >
            {product.images.slice(0, 3).map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="h-full w-full overflow-hidden flex items-center justify-center"
                >
                  <img
                    width="100%"
                    src={item}
                    className="w-full"
                    alt={product.productName}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex h-min space-x-1.5 md:space-x-2 absolute left-1 md:left-1.5 bottom-2 md:top-2 z-10">
            {product.isItNew && (
              <Chip
                className="transition-all !text-[10px] !px-2 bg-[#060] duration-200 !py-0.5 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                value="Yangi"
                color="green"
                variant="filled"
              />
            )}
            {product.inAction && (
              <Chip
                className="transition-all !text-[10px] !px-2 bg-[#b30000] duration-200 !py-0.5 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                value="Aksiya"
                variant="filled"
                color="red"
              />
            )}
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          productSaves(product);
          rendered((prev) => !prev);
          setRender((prev) => !prev);
        }}
        aria-label="saved button"
        tabIndex="-1"
        className="absolute top-0 -translate-y-1/2 right-0 z-10 text-[#b30000]"
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
          {product.productName}
        </Typography>
        <div>
          <div className="w-full flex justify-between items-end">
            <b className="text-base text-black font-bold lg:text-black/90">
              {product.price
                .toLocaleString("uz-UZ", options)
                .replaceAll(",", " ")}{" "}
              so'm
            </b>
            <IconButton
              aria-label="buying button"
              tabIndex="-1"
              onClick={() => {
                setRender((prev) => !prev);
                rendered((prev) => !prev);
                addCartProduct(product);
              }}
              variant={`${product.inTheCart ? "filled" : "outlined"}`}
              color="gray"
              size="sm"
            >
              {product.inTheCart ? (
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

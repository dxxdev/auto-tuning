import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { options, products } from "../data/data";
import { styles } from "../styles";
import { ToastContainer } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkAdd,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { IconButton, Typography } from "@material-tailwind/react";

const Category = () => {
  const { category } = useParams();
  const [filterCategory, setFilterCategory] = useState([]);
  const filteredCategory = products.filter(product => {
    return product.category == category;
  });
  useEffect(() => {
    setFilterCategory(filteredCategory);
  }, [category, products.map(product => product)]);
  return (
    <ul
      className={`${styles.container} py-5 grid grid-cols-4 gap-8 overflow-auto products-swiper`}
    >
      {filterCategory.map(product => {
        return (
          <li
            key={product.id}
            className="rounded-lg bg-white max-w-sm flex flex-col shadow-md space-y-4 card-swiper"
          >
            <Link to={`/${product.category}/${product.productName}`}>
              <Swiper
                navigation={true}
                effect="fade"
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination, Navigation, EffectFade]}
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
            <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
              <button
                onClick={() => (product.saved = !product.saved)}
                className="absolute top-0 right-4 text-red-600"
              >
                {product.saved ? <Bookmark /> : <BookmarkAdd />}
              </button>
              <Typography variant="h5" className="font-medium">
                {product.productName}
              </Typography>
              <div>
                <Typography variant="small">
                  Turkum: {product.category}
                </Typography>
                <Typography variant="small" color="black">
                  <span className="flex items-end justify-start space-x-1">
                    <Star className="text-yellow-700" />
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
      <ToastContainer />
    </ul>
  );
};

export default Category;

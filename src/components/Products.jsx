import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { options, products } from "../data/data";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { IconButton, Typography } from "@material-tailwind/react";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkAdd,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";

import "swiper/css/effect-fade";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Products = ({ productsCategory }) => {
  const [render, setRender] = useState(false);

  const onCategory = productsCategory;

  const addToCart = id => {
    setRender(prev => !prev);
    products.map((product, index) => {
      if (index === id) {
        product.inTheCart = !product.inTheCart;
        if (product.inTheCart) {
          toast.success("Savatga qo'shildi", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Savatdan o'chirildi", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        product.inTheCart = product.inTheCart;
      }
    });
  };

  useEffect(() => {
    setRender(prev => !prev);
  }, [products.map(product => product)]);

  return (
    <>
      <ul
        className={`${styles.container} h-full min-h-[633px] py-5 flex gap-8 overflow-auto products-swiper`}
      >
        {products.map((product, index) => {
          if (product.top && onCategory.includes(product.category)) {
            return (
              <li
                key={product.id}
                className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper"
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
                        <SwiperSlide key={index} className="max-h-[400px]">
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
          }
        })}
        <ToastContainer />
      </ul>
    </>
  );
};

export default Products;

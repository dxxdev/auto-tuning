import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import { IconButton, Typography } from "@material-tailwind/react";
import { styles } from "../styles";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  AddShoppingCartOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";

const Basket = () => {
  const [render, setRender] = useState(true);
  const [inTheCartProduct, setInTheCartProduct] = useState([]);

  const filteredProductOnCart = arr => {
    const filteredProduct = arr.filter(product => {
      return product.inTheCart == true;
    });
    setInTheCartProduct(filteredProduct);
  };
  let options = {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };
  useEffect(() => {
    filteredProductOnCart(products);
  }, [products.map(product => product.inTheCart)]);

  return (
    <div className={`${styles.container} py-20`}>
      <Typography
        variant="h1"
        className="py-10 text-6xl font-normal tracking-[5px]"
      >
        Savatcha
      </Typography>
      {inTheCartProduct && inTheCartProduct.length > 0 && (
        <ul
          className={`${styles.container} py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8`}
        >
          {inTheCartProduct.map(product => {
            return (
              <li
                key={product.id}
                className="rounded-lg bg-white flex flex-col shadow-md space-y-4 card-swiper"
              >
                <Link to={`/${product.productName}`}>
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
                        onClick={() => {
                          product.inTheCart = false;
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
                        }}
                        variant="outlined"
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
      )}
      {inTheCartProduct.length <= 0 && (
        <Typography variant="lead" className="w-full max-w-sm">
          Savatcha bo'sh. Mahsulotni savatga qo'shish uchun mahsulotning pastki
          qismidagi savatcha tugmasini bosing
        </Typography>
      )}
      <ToastContainer />
    </div>
  );
};

export default Basket;

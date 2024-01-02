import React, { useEffect, useState } from "react";
import { addCartProduct, products, scrollTop, viewProduct } from "../data/data";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { styles } from "../styles";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";

const Saved = () => {
  const [render, setRender] = useState(true);
  const [inTheCartProduct, setInTheCartProduct] = useState([]);
  const navigate = useNavigate();
  const filteredProductOnCart = (arr) => {
    const filteredProduct = arr.filter((product) => {
      return product.saved;
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
  }, [render]);

  return (
    <div className={`${styles.container} py-2`}>
      <Typography
        variant="h1"
        className="py-5 text-4xl sm:text-6xl font-normal tracking-[5px]"
      >
        Saqlanganlar
      </Typography>
      {inTheCartProduct && inTheCartProduct.length > 0 && (
        <ul
          className={`${styles.container} py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8`}
        >
          {inTheCartProduct.map((product) => {
            return (
              <li
                key={product.id}
                className="relative rounded-lg bg-white flex flex-col shadow-md space-y-4 card-swiper"
              >
                <Link
                  onClick={() => viewProduct(product)}
                  to={`/${product.category}/${product.productName}`}
                >
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
                          <img
                            src={item}
                            className="w-full"
                            alt={product.productName}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Link>
                <button
                  onClick={() => {
                    setRender((prev) => !prev);
                    product.saved = !product.saved;
                  }}
                  className="absolute top-0 -translate-y-1/2 right-0 z-[999] text-red-600"
                >
                  {product.saved ? (
                    <Bookmark fontSize="large" />
                  ) : (
                    <BookmarkBorderOutlined fontSize="large" />
                  )}
                </button>
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
                          addCartProduct(product);
                          setRender((prev) => !prev);
                        }}
                        variant={product.inTheCart ? "filled" : "outlined"}
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
        <div className="flex flex-col justify-between items-start space-y-10">
          <Typography variant="lead" className="w-full max-w-sm">
            Sizda keyinchalik xarid qilish uchun mahsulot mavjud emas
          </Typography>
          <Button
            onClick={() => {
              navigate("/");
              scrollTop();
            }}
          >
            Bosh saxifaga o'tish
          </Button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Saved;

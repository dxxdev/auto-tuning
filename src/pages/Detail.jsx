import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";
import { styles } from "../styles";
import { IconButton, Typography } from "@material-tailwind/react";
import {
  Add,
  AddShoppingCartOutlined,
  Remove,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

const Detail = () => {
  const [info, setInfo] = useState([]);
  let locationProductArr;
  let location = useLocation();
  locationProductArr = location.pathname.slice(1);
  let infoProductArr = products.filter(product => {
    return product.id == locationProductArr;
  });
  useEffect(() => {
    setInfo(infoProductArr[0]);
  }, []);

  const addToCart = () => {
    info.inTheCart = !info.inTheCart;
    if (info.inTheCart) {
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
  };

  console.log(info);
  return (
    <div className={`py-20 flex ${styles.container} gap-x-10`}>
      {info && (
        <div className="flex flex-row-reverse space-x-5 w-96 p-5">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper6"
          >
            {info &&
              info.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
      {info && (
        <div className="w-full relative p-5">
          <div className="absolute right-5 top-5">
            <IconButton
              onClick={addToCart}
              variant={`${info.inTheCart ? "filled" : "outlined"}`}
              color="gray"
            >
              {info.inTheCart ? (
                <RemoveShoppingCartOutlined />
              ) : (
                <AddShoppingCartOutlined />
              )}
            </IconButton>
          </div>
          <div className="flex justify-start items-center space-x-2 text-xs">
            <Star fontSize="small" className="text-yellow-700" />
            <Star fontSize="small" className="text-yellow-700" />
            <Star fontSize="small" className="text-yellow-700" />
            <Star
              fontSize="small"
              className={`${
                info.rating > 3 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Star
              fontSize="small"
              className={`${
                info.rating > 4 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Typography variant="small">{info.rating}</Typography>
          </div>
          <Typography variant="h2">{info.productName}</Typography>
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => {
                if (info.countProduct > 1) {
                  info.countProduct--;
                }
              }}
              size="sm"
              variant="outlined"
              color="gray"
            >
              <Remove />
            </IconButton>
            <Typography variant="h5">{info.countProduct}</Typography>
            <IconButton
              onClick={() => {
                info.countProduct++;
              }}
              size="sm"
              variant="outlined"
              color="gray"
            >
              <Add />
            </IconButton>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Detail;

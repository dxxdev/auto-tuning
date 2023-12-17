import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filteredProductForId } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "../styles";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import {
  Add,
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  Remove,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

import "react-toastify/dist/ReactToastify.css";

const Detail = () => {
  const { productName } = useParams();
  const [info, setInfo] = useState();
  const [render, setRender] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (!info) {
      setInfo(filteredProductForId(productName));
    }
  }, []);

  useEffect(() => {
    document.title = productName;
  }, []);

  const addToCart = () => {
    setRender(prev => !prev);
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

  return (
    <div
      className={`py-2 flex ${styles.container} gap-x-10 flex-col md:flex-row`}
    >
      {info && (
        <div className="w-full space-y-3 p-5">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Autoplay]}
            className="mySwiper2 relative md:max-w-xl max-h-[600px]"
          >
            {info &&
              info.images.map((image, index) => {
                return (
                  <SwiperSlide className="flex justify-center items-center" key={index}>
                    <img
                      src={image}
                      className="hover:scale-110 transition-all w-full h-full object-cover"
                      alt={info.productName}
                    />
                  </SwiperSlide>
                );
              })}
            <button
              onClick={() => {
                setRender(prev => !prev);
                info.saved = !info.saved;
              }}
              className="absolute top-0 right-0 z-[999] text-red-600"
            >
              {info.saved ? (
                <Bookmark fontSize="large" />
              ) : (
                <BookmarkBorderOutlined fontSize="large" />
              )}
            </button>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper max-w-xl max-h-[100px]"
          >
            {info &&
              info.images.map((image, index) => {
                return (
                  <SwiperSlide
                    className="relative flex justify-center items-center"
                    key={index}
                  >
                    <img
                      src={image}
                      alt={info.productName}
                      className="w-full h-full"
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
      {info && (
        <div className="w-full relative p-5">
          <div className="absolute right-5 bottom-0">
            <Button
              onClick={addToCart}
              variant={`${info.inTheCart ? "filled" : "outlined"}`}
              color="gray"
              className="flex justify-center items-center space-x-2"
            >
              {info.inTheCart ? (
                <RemoveShoppingCartOutlined />
              ) : (
                <AddShoppingCartOutlined />
              )}
              <span className="hidden sm:block">sotib olish</span>
            </Button>
          </div>
          <div className="flex justify-start items-center space-x-2 text-xs">
            <Star fontSize="medium" className="text-yellow-700" />
            <Star
              fontSize="medium"
              className={`${
                info.rating > 1 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Star
              fontSize="medium"
              className={`${
                info.rating > 2 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Star
              fontSize="medium"
              className={`${
                info.rating > 3 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Star
              fontSize="medium"
              className={`${
                info.rating > 4 ? "text-yellow-700" : "text-gray-700"
              }`}
            />
            <Typography variant="lead">{info.rating}</Typography>
          </div>
          <Typography className="text-2xl py-5 sm:text-3xl lg:text-4xl">
            {info.productName}
          </Typography>
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => {
                if (info.countProduct > 1) {
                  info.countProduct--;
                }
                setRender(prev => !prev);
              }}
              size="sm"
              variant="filled"
              color="red"
            >
              <Remove />
            </IconButton>
            <Typography variant="h5">{info.countProduct}</Typography>
            <IconButton
              onClick={() => {
                info.countProduct++;
                setRender(prev => !prev);
              }}
              size="sm"
              variant="filled"
              color="red"
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

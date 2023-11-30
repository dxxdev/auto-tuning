import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { styles } from "../styles";
import { Typography, typography } from "@material-tailwind/react";

const Detail = () => {
  const [info, setInfo] = useState();
  let locationProductArr;
  let location = useLocation();
  locationProductArr = location.pathname.slice(1);
  useEffect(() => {
    let infoProductArr = products.filter(product => {
      return product.id == locationProductArr;
    });
    setInfo(infoProductArr[0]);
  }, []);
  console.log(info);
  return (
    <div className={`py-20 flex ${styles.container}`}>
      {info && (
        <div className="flex flex-row-reverse space-x-5 w-96 p-5">
          <Swiper
            grabCursor={true}
            effect={"creative"}
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
            modules={[EffectCreative]}
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
        <div className="w-full p-5">
          <Typography variant="h2">{info.productName}</Typography>
        </div>
      )}
    </div>
  );
};

export default Detail;

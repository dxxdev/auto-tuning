import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TOAST_CONFIG,
  filteredProductForId,
  options,
  products,
} from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "../styles";
import {
  Button,
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  DeliveryDiningOutlined,
  InfoOutlined,
  RemoveShoppingCartOutlined,
  ShortTextOutlined,
  Star,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";
import { FreeMode, Autoplay, Thumbs, Navigation } from "swiper/modules";

import "react-toastify/dist/ReactToastify.css";
import Questions from "../components/Questions";
import Products from "../components/Products";

const Detail = ({ rendered }) => {
  const { productName } = useParams();
  const [viewIndex, setViewIndex] = useState(4);
  const [info, setInfo] = useState();
  const [render, setRender] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [tabValue, setTabValue] = useState("description");

  useEffect(() => {
    document.title = productName;
    setInfo(filteredProductForId(productName));
  }, [productName]);

  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  const addToCart = () => {
    setRender((prev) => !prev);
    info.inTheCart = !info.inTheCart;
    if (info.inTheCart) {
      toast.success("Savatga qo'shildi", TOAST_CONFIG);
    } else {
      toast.error("Savatdan o'chirildi", TOAST_CONFIG);
    }
  };

  return (
    <>
      {info && (
        <h3
          className={`text-2xl font-semibold leading-normal w-full max-w-xl mx-auto lg:max-w-7xl px-0 lg:px-3`}
        >
          {info.productName}
        </h3>
      )}
      <div
        className={`py-2 flex ${styles.container} gap-x-5 gap-y-3 xl:gap-x-10 justify-start items-start flex-col lg:flex-row`}
      >
        {info && (
          <div className="w-full lg:sticky lg:top-0 p-2 md:p-5 rounded-3xl space-y-3">
            <div className="space-y-3">
              <Swiper
                navigation={true}
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
                modules={[FreeMode, Thumbs, Autoplay, Navigation]}
                className="mySwiper2 relative md:max-w-xl sceleton-animation detail bg-gray-400 h-[500px] sm:h-[650px] md:h-[600px]"
              >
                {info &&
                  info.images.map((image, index) => {
                    return (
                      <SwiperSlide
                        className="flex justify-center cursor-grab sceleton-animation items-center"
                        key={index}
                      >
                        <img
                          width="100%"
                          height="100%"
                          src={image}
                          className="hover:scale-110 transition-all h-full md:h-max w-full"
                          alt={info.productName}
                        />
                      </SwiperSlide>
                    );
                  })}
                <button
                  onClick={() => {
                    rendered();
                    setRender((prev) => !prev);
                    info.saved = !info.saved;
                  }}
                  aria-label="saved button"
                  className="absolute top-0 right-0 z-[999] text-[#b30000]"
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
                className="mySwiper relative max-w-xl max-h-[100px] sm:max-h-[150px] md:max-h-44 flex items-center"
              >
                {info &&
                  info.images.map((image, index) => {
                    return (
                      <SwiperSlide
                        className="flex justify-center h-[176px] items-stretch relative sceleton-animation"
                        key={index}
                      >
                        <img
                          width="100%"
                          height="100%"
                          src={image}
                          alt={info.productName}
                          className="w-full h-full"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        )}
        {info && (
          <div className="w-full sticky border border-gray-200 top-5 rounded-3xl shadow px-5 py-6 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-between w-full">
              <p className="flex gap-2.5">
                <span className="text-base md:text-xl leading-[152%] font-medium">
                  Narxi:
                </span>
                <span className="text-xl md:text-2xl leading-normal font-bold">
                  {info.price
                    .toLocaleString("UZ-uz", options)
                    .replaceAll(",", " ")}{" "}
                  so'm
                </span>
              </p>
              <button
                className="p-1 rounded-lg hover:bg-black/20"
                onClick={() => {
                  rendered((prev) => !prev);
                  addToCart(info);
                }}
              >
                {info.inTheCart ? (
                  <RemoveShoppingCartOutlined />
                ) : (
                  <AddShoppingCartOutlined />
                )}
              </button>
            </div>
            <div className="flex flex-col w-full gap-2">
              {info && info.description && (
                <h6 className="text-xl">Mahsulot tavsifi</h6>
              )}
              <ul>
                {info &&
                  info.description &&
                  info.description.slice(0, 2).map((desc, index) => {
                    return <li key={index}>{desc}</li>;
                  })}
              </ul>
              {info && info.description && (
                <p className="text-lg">Mahsulot haqida qisqacha:</p>
              )}
              <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 list-inside space-y-1">
                {info &&
                  info.shortly &&
                  info.shortly.slice(0, viewIndex).map((short, index) => {
                    return <li key={index}>{short}</li>;
                  })}
                {viewIndex == 4 && (
                  <li
                    onClick={() => setViewIndex(-1)}
                    className="list-none px-5 cursor-pointer"
                  >
                    barchasini ko'rish
                  </li>
                )}
                {viewIndex == -1 && (
                  <li
                    onClick={() => setViewIndex(4)}
                    className="list-none px-5 cursor-pointer"
                  >
                    yopish
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="my-3 flex flex-col gap-3">
        <div className="w-full max-w-[1440px] mx-auto px-1.5 md:px-3 rounded-xl shadow-md py-5">
          {info && (
            <div className="w-full space-y-5 text-black">
              <div>
                <h5 className="text-2xl">Yetkazib berish</h5>
              </div>
              <div>
                <p>Toshkent bo'ylab yetkazib berish</p>
                <p className="text-gray-700">
                  Narxi 100.000 so'mdan, omborda mavjud bo'lgan tovar bir soat
                  ichida yetkazib beriladi, biz sizga buyurtmani joylashtirishda
                  aniq vaqt haqida xabar beramiz.
                </p>
              </div>

              <div>
                <p>Boshqa hududlar</p>
                <p className="text-gray-700">
                  Xarajat va shartlarni alohida hisoblab chiqamiz, batafsil
                  ma'lumot uchun mutaxassislarimizga murojaat qiling.
                </p>
              </div>
              <div>
                <p>Kompaniyadan olib ketish</p>
                <p className="text-gray-700">
                  Buyurtmani quyidagi manzildan olishingiz mumkin: <br />{" "}
                  Toshkent, Amir Temur K: 47b
                </p>
              </div>

              <p className="text-gray-700">
                Ish vaqti: ish kunlari 09:00 dan 18:00 gacha, yakshanba kuni
                10:00 dan 15:00 gacha.
              </p>
            </div>
          )}
        </div>
      </div>

      {products.find((product) => product.recommend == true) && (
        <section className={`${styles.container}`}>
          <div className="py-2">
            <Typography variant="h4">Sizga yoqishi mumkin</Typography>
          </div>
          <ul
            className={`${styles.container} !px-0 py-8 flex justify-start overflow-auto gap-5 products-swiper`}
          >
            {products.map((product) => {
              if (product.recommend) {
                return (
                  <Products
                    key={product.id}
                    rendered={rendered}
                    product={product}
                    productSaved={productSaved}
                  />
                );
              }
            })}
          </ul>
        </section>
      )}

      {products.find((product) => product.viewed == true) && (
        <section className={`${styles.container}`}>
          <div className="py-3 lg:py-5">
            <Typography variant="h4">Ko'rilganlar</Typography>
          </div>
          <ul
            className={`${styles.container} !px-0 py-8 flex justify-start overflow-auto gap-5 products-swiper`}
          >
            {products.map((product) => {
              if (product.viewed) {
                return (
                  <Products
                    rendered={rendered}
                    product={product}
                    key={product.id}
                    productSaved={productSaved}
                  />
                );
              }
            })}
          </ul>
        </section>
      )}

      <Questions />
      <ToastContainer />
    </>
  );
};

export default Detail;

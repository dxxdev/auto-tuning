import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filteredProductForId, options, products } from "../data/data";
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
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

import "react-toastify/dist/ReactToastify.css";
import Questions from "../components/Questions";
import Products from "../components/Products";

const TOAST_CONFIG = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const Detail = ({ rendered }) => {
  const { productName } = useParams();
  const [info, setInfo] = useState();
  const [render, setRender] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const savedProductName = localStorage.getItem("savedProductName");

    if (productName || savedProductName) {
      setRender((prev) => !prev);

      if (productName) {
        setInfo(filteredProductForId(productName)[0]);
        localStorage.setItem("savedProductName", productName);
      } else if (savedProductName) {
        setInfo(filteredProductForId(savedProductName)[0]);
      }
    }
  }, [productName]);

  useEffect(() => {
    document.title = productName;
  }, [productName]);

  useEffect(() => {
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
      <div
        className={`py-2 flex ${styles.container} gap-x-10 flex-col lg:flex-row`}
      >
        {info && (
          <div className="w-full space-y-3">
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
              className="mySwiper2 relative md:max-w-xl sceleton-animation bg-gray-400 h-[500px] sm:h-[650px] md:h-[600px]"
            >
              {info &&
                info.images.map((image, index) => {
                  return (
                    <SwiperSlide
                      className="flex justify-center items-center"
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
        )}
        {info && (
          <div className="w-full relative">
            <div className="absolute hidden lg:block right-5 bottom-0 translate-y-1/2">
              <Button
                onClick={() => {
                  addToCart();
                  rendered();
                }}
                aria-label="buying button"
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
            <div className="flex justify-between items-center mx-auto lg:m-0 py-1 max-w-3xl lg:max-w-full">
              <div className="flex justify-start items-center space-x-1 text-sm">
                <Star fontSize="small" className="text-yellow-800" />
                <p>{info.rating}</p>
              </div>
              <IconButton
                onClick={() => {
                  addToCart();
                  rendered();
                }}
                aria-label="buying button"
                variant={`${info.inTheCart ? "filled" : "outlined"}`}
                color="gray"
                className="block lg:hidden"
              >
                {info.inTheCart ? (
                  <RemoveShoppingCartOutlined />
                ) : (
                  <AddShoppingCartOutlined />
                )}
              </IconButton>
            </div>
            <Typography className="text-xl mx-auto lg:m-0 py-1 max-w-3xl lg:max-w-full lg:py-5 sm:text-2xl lg:text-3xl">
              {info.productName}
            </Typography>
            <Typography className="text-xl mx-auto lg:m-0 py-1 max-w-3xl lg:max-w-full lg:text-2xl">
              {info.price.toLocaleString("uz-UZ", options).replaceAll(",", " ")}{" "}
              so'm <span>/</span> <sub>dona</sub>
            </Typography>
            <Tabs value="info" className="w-full max-w-3xl mx-auto py-3">
              <TabsHeader className="bg-red-900 bg-opacity-80">
                <Tab value={"info"}>
                  <div className="flex justify-center items-center space-x-2 text-white">
                    <span>
                      <InfoOutlined />
                    </span>
                    <span className="hidden sm:block lg:hidden xl:block">
                      Tavsif
                    </span>
                  </div>
                </Tab>
                <Tab value={"shortly"}>
                  <div className="flex justify-center items-center space-x-2 text-white">
                    <span>
                      <ShortTextOutlined />
                    </span>
                    <span className="hidden sm:block lg:hidden xl:block">
                      Qisqacha
                    </span>
                  </div>
                </Tab>
                <Tab value={"delivery"}>
                  <div className="flex justify-center items-center space-x-2 text-white">
                    <span>
                      <DeliveryDiningOutlined />
                    </span>
                    <span className="hidden sm:block lg:hidden xl:block">
                      Yetkazib berish
                    </span>
                  </div>
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel
                  className="w-full max-w-3xl mx-auto px-0"
                  value={"info"}
                >
                  {Boolean(info.description) ? (
                    info.description.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-black tracking-widest md:tracking-normal"
                        >
                          {item}
                        </p>
                      );
                    })
                  ) : (
                    <div>
                      <Typography>Hech qanday malumot mavjud emas</Typography>
                    </div>
                  )}
                </TabPanel>
                <TabPanel
                  className="w-full max-w-3xl px-0 mx-auto"
                  value={"shortly"}
                >
                  {info.shortly ? (
                    info.shortly.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })
                  ) : (
                    <div>
                      <Typography>Hech qanday malumot mavjud emas</Typography>
                    </div>
                  )}
                </TabPanel>
                <TabPanel
                  value={"delivery"}
                  className="w-full max-w-2xl px-0 space-y-5 text-black"
                >
                  {/* <Typography variant="h5">Yetkazib berish</Typography> */}
                  <div>
                    <p>Toshkent bo'ylab yetkazib berish</p>
                    <p className="text-gray-700">
                      Narxi 100.000 so'mdan, omborda mavjud bo'lgan tovar bir
                      soat ichida yetkazib beriladi, biz sizga buyurtmani
                      joylashtirishda aniq vaqt haqida xabar beramiz.
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
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        )}
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
                    productName={product.productName}
                    productCategory={product.category}
                    productImages={product.images}
                    productSaved={productSaved}
                    productIsItNew={product.isItNew}
                    productInAction={product.inAction}
                    productRating={product.rating}
                    productPrice={product.price}
                    productInTheCart={product.inTheCart}
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
                    productName={product.productName}
                    productCategory={product.category}
                    productImages={product.images}
                    productSaved={productSaved}
                    productIsItNew={product.isItNew}
                    productInAction={product.inAction}
                    productRating={product.rating}
                    productPrice={product.price}
                    productInTheCart={product.inTheCart}
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

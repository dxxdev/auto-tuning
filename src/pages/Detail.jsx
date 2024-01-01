import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filteredProductForId, products } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "../styles";
import {
  Button,
  Rating,
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
  RemoveShoppingCartOutlined,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";

import "react-toastify/dist/ReactToastify.css";
import Questions from "../components/Questions";
import Products from "../components/Products";

const Detail = ({ rendered }) => {
  const { productName } = useParams();
  const [info, setInfo] = useState();
  const [render, setRender] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    // localStorage dan productName olish
    const savedProductName = localStorage.getItem("savedProductName");

    if (productName) {
      // Agar useParams dan productName olinmasa, localStorage dan olinadi
      setRender((prev) => !prev);
      setInfo(filteredProductForId(productName)[0]);
      localStorage.setItem("savedProductName", productName);
    } else if (savedProductName) {
      // Agar useParams dan productName olinmagan bo'lsa, localStorage dan olinadi
      setRender((prev) => !prev);
      setInfo(filteredProductForId(savedProductName)[0]);
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
    <>
      <div
        className={`py-2 flex ${styles.container} gap-x-10 flex-col lg:flex-row`}
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
                    <SwiperSlide
                      className="flex justify-center items-center h-full w-full"
                      key={index}
                    >
                      <img
                        src={image}
                        className="hover:scale-110 transition-all w-full h-full"
                        alt={info.productName}
                      />
                    </SwiperSlide>
                  );
                })}
              <button
                onClick={() => {
                  setRender((prev) => !prev);
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
              className="mySwiper relative max-w-xl max-h-[150px] flex items-center"
            >
              {info &&
                info.images.map((image, index) => {
                  return (
                    <SwiperSlide
                      className="flex justify-center items-stretch relative h-full"
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
              <Rating value={info.rating} readonly />
              <Typography variant="lead">{info.rating}</Typography>
            </div>
            <Typography className="text-2xl py-5 sm:text-3xl lg:text-4xl">
              {info.productName}
            </Typography>
            <Tabs value="info" className="w-full max-w-3xl mx-auto py-5">
              <TabsHeader>
                <Tab value={"info"}>Tavsif</Tab>
                <Tab value={"shortly"}>Qisqacha</Tab>
                <Tab value={"delivery"}>Yetkazib berish</Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel className="w-full max-w-3xl mx-auto" value={"info"}>
                  {Boolean(info.description) ? (
                    info.description.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })
                  ) : (
                    <div>
                      <Typography>Hech qanday malumot mavjud emas</Typography>
                    </div>
                  )}
                </TabPanel>
                <TabPanel
                  className="w-full max-w-3xl mx-auto"
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
                  className="w-full max-w-2xl space-y-5 text-black"
                >
                  <Typography variant="h5">Yetkazib berish</Typography>
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
      {products.find((product) => product.viewed == true) && (
        <section className={`${styles.container}`}>
          <div className="py-5">
            <Typography variant="h4">Ko'rilganlar</Typography>
          </div>
          <ul
            className={`${styles.container} py-8 flex justify-start overflow-auto gap-5 products-swiper`}
          >
            {products.map((product) => {
              if (product.viewed) {
                return (
                  <Products
                    rendered={rendered}
                    product={product}
                    productId={product.id}
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

      {products.find((product) => product.recommend == true) && (
        <section className={`${styles.container}`}>
          <div className="py-5">
            <Typography variant="h4">Sizga yoqishi mumkin</Typography>
          </div>
          <ul
            className={`${styles.container} py-8 flex justify-start overflow-auto gap-5 products-swiper`}
          >
            {products.map((product) => {
              if (product.recommend) {
                return (
                  <Products
                    rendered={rendered}
                    product={product}
                    productId={product.id}
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

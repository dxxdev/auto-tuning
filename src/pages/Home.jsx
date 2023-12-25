import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { category, commentaries, products } from "../data/data";
import { ArrowRightAltOutlined, Star } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import Products from "../components/Products";
import { companies } from "../assets/images";

const Home = ({ rendered }) => {
  let [groupedTopProducts, setGroupedTopProducts] = useState([]);
  const inActionInfo = products.filter((product) => product.inAction);
  const navigate = useNavigate();

  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  let lastNumbersArr = products.length
    .toString()
    .slice(1)
    .split("")
    .map((i) => {
      return 0 + "";
    });
  let lastNumber = lastNumbersArr.join("");
  useEffect(() => {
    function saveTopProductsToLocalStorage(topProducts) {
      localStorage.setItem("topProducts", JSON.stringify(topProducts));
    }

    const groupTopProductsByCategory = (products) => {
      const groupedProducts = {};

      products.forEach((product) => {
        if (product.top) {
          if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = {
              category: product.category,
              products: [],
            };
          }

          groupedProducts[product.category].products.push(product);
        }
      });

      return Object.values(groupedProducts);
    };

    setGroupedTopProducts((prevGroupedTopProducts) => {
      if (!prevGroupedTopProducts.length) {
        const newGroupedTopProducts = groupTopProductsByCategory(products);
        saveTopProductsToLocalStorage(newGroupedTopProducts);
        return newGroupedTopProducts;
      }

      return prevGroupedTopProducts;
    });
  }, []);

  useEffect(() => {
    document.title = "AUTO TUNING";
  }, []);

  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper relative navigation-styled w-full"
      >
        {swiperImages.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="max-h-[700px] h-min min-h-min flex justify-center items-center"
            >
              <img src={item.image} className="h-full w-full" alt="Hero img" />
            </SwiperSlide>
          );
        })}
        <div className="z-[999] px-20 absolute left-0 bottom-0 pb-[52px] lg:pb-[152px]">
          <div className={`flex justify-between items-end ${styles.container}`}>
            <div className="flex flex-col space-y-5 lg:space-y-12 items-start h-48 lg:h-24">
              <Typography
                variant="h1"
                color="white"
                className="h-full space-x-0 lg:space-x-3 flex flex-col lg:flex-row text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white"
              >
                <span>Servis xizmati Toshkentda</span>
              </Typography>
              <Link to="/">
                <Button variant="filled" color="red" className="text-white">
                  Tuning jihozlariga buyurtma berish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Swiper>
      <div className={`${styles.container} py-20 space-y-20`}>
        <div className="space-y-5">
          <Typography
            variant="h2"
            color="black"
            className={`${styles.container} text-center`}
          >
            Eng yaxshi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {groupedTopProducts && groupedTopProducts.length > 0 && (
              <Tabs value="allCategories" className={`${styles.container}`}>
                <div className="flex justify-center items-center">
                  <TabsHeader className="w-min bg-red-900">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      className="w-min px-5 text-white"
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-5 text-white"
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabsHeader>
                </div>
                <TabsBody>
                  <TabPanel
                    key="allCategories"
                    value="allCategories"
                    className="flex gap-x-5 overflow-auto products-swiper"
                  >
                    {products.map((product) => {
                      if (product.top) {
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
                  </TabPanel>
                  {category.map((category) => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.top) {
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
                      {products.filter(
                        (product) =>
                          product.category === category && product.top
                      ).length === 0 && (
                        <div
                          key="noProductFound"
                          className="flex w-full min-h-[200px] justify-center items-center"
                        >
                          <Typography
                            className="text-center w-full"
                            variant="h5"
                          >
                            Hech narsa topilmadi
                          </Typography>
                        </div>
                      )}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center space-y-3 sm:space-y-0 flex-col sm:flex-row">
          <Typography className="" variant="h2">
            {products.length.toString().slice(0, 1) + lastNumber} dan ortiq avto
            tovarlar bir joyda
          </Typography>
          <Button
            className="w-full sm:w-min"
            onClick={() => navigate("/Katalog")}
            variant="outlined"
          >
            Katalog
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div
              className={`bg-[url('/src/assets/img/antiradar.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl group transition-opacity`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Antiradarlar
                </Typography>
                <Typography color="white" variant="lead">
                  Politsiya radarlariga qarshi yuqori masofaga va maksimal
                  shovqin immuniteti
                </Typography>
                <Link
                  to="/Antiradarlar"
                  className="text-white space-x-3 underline underline-offset-2"
                >
                  <span>Antiradarlar</span>
                  <ArrowRightAltOutlined />
                </Link>
              </div>
            </div>
            <div
              className={`bg-[url('/src/assets/img/atir+vizitka.jpg')] bg-cover bg-center h-96 flex rounded-2xl group transition-opacity`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Diffuzor
                </Typography>
                <Typography color="white" variant="lead">
                  Mashina uchun aqlli hushbo'ylagich. Havoni namlaydi, o'zida
                  hushbo'y hid taratadi va vizitka
                </Typography>
                <Link
                  to="/Suvenirlar"
                  className="text-white space-x-3 underline underline-offset-2"
                >
                  <span>Suvenirlar</span>
                  <ArrowRightAltOutlined />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`bg-[url('/src/assets/img/interyer.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl group transition-opacity`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Interyer
                </Typography>
                <Typography color="white" variant="lead">
                  Mashina salonini bezatish uchun avto tovarlarga buyurtma
                  bering
                </Typography>
                <Link
                  to="/catalog"
                  className="text-white space-x-3 underline underline-offset-2"
                >
                  <span>Katalog</span>
                  <ArrowRightAltOutlined />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* New products */}
        <div className="space-y-5">
          <Typography
            variant="h2"
            color="black"
            className={`${styles.container} text-center`}
          >
            Yangi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <Tabs value="allCategories" className={`${styles.container}`}>
                <div className="flex justify-center items-center">
                  <TabsHeader className="w-min bg-red-900">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      className="w-min px-5 text-white"
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-5 text-white"
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabsHeader>
                </div>
                <TabsBody>
                  {/* All products tab */}
                  <TabPanel
                    key="allCategories"
                    value="allCategories"
                    className="flex gap-x-5 overflow-auto products-swiper"
                  >
                    {products.map((product) => {
                      if (product.isItNew) {
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
                  </TabPanel>
                  {/* Tab by category */}
                  {category.map((category) => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.isItNew) {
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
                      {products.filter(
                        (product) =>
                          product.category === category && product.isItNew
                      ).length === 0 && (
                        <div
                          key="noProductFound"
                          className="flex w-full min-h-[200px] justify-center items-center"
                        >
                          <Typography
                            className="text-center w-full"
                            variant="h5"
                          >
                            Hech narsa topilmadi
                          </Typography>
                        </div>
                      )}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            )}
          </div>
        </div>
        {/* Discounted products */}
        <div className="space-y-5">
          <Typography
            variant="h2"
            color="black"
            className={`${styles.container} text-center`}
          >
            Aksiyadagi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <Tabs value="allCategories" className={`${styles.container}`}>
                <div className="flex justify-center items-center">
                  <TabsHeader className="w-min bg-red-900">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      className="w-min px-5 text-white"
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-5 text-white"
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabsHeader>
                </div>
                <TabsBody>
                  {/* All products tab */}
                  <TabPanel
                    key="allCategories"
                    value="allCategories"
                    className="flex gap-x-5 overflow-auto products-swiper"
                  >
                    {products.map((product) => {
                      if (product.inAction) {
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
                  </TabPanel>
                  {/* Tab by category */}
                  {category.map((category) => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.inAction) {
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
                      {products.filter(
                        (product) =>
                          product.category === category && product.inAction
                      ).length === 0 && (
                        <div
                          key="noProductFound"
                          className="flex w-full min-h-[200px] justify-center items-center"
                        >
                          <Typography
                            className="text-center w-full"
                            variant="h5"
                          >
                            Hech narsa topilmadi
                          </Typography>
                        </div>
                      )}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            )}
          </div>
        </div>
        {/* Commentaries section */}
        <section>
          <div className="py-5">
            <Typography variant="h4">Izohlar</Typography>
          </div>
          <ul className="py-8 flex justify-start items-center overflow-auto gap-5 products-swiper">
            {commentaries.map((note) => {
              return (
                <li
                  key={note.id}
                  className="w-full min-w-[320px] min-h-[320px] px-8 py-10 bg-red-800 font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-xl"
                >
                  <div className="space-y-5">
                    <div>
                      {note.rating.map((star) => {
                        return <Star key={star} />;
                      })}
                    </div>
                    <p className="tracking-[0.5px]">{note.comment}</p>
                  </div>
                  <p className="tracking-[0.5px] text-sm">{note.from}</p>
                </li>
              );
            })}
          </ul>
        </section>
        {/* Recommended products section */}
        <section>
          <div className="py-5">
            <Typography variant="h4">Tavsiya qilinadi</Typography>
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

        <section>
          <div>
            <Typography variant="h3">
              Biz eng yirik kompaniyalar bilan hamkorlik qilamiz
            </Typography>
          </div>
          <div className="flex justify-between items-center gap-x-8 py-14">
            {companies.map((company, index) => {
              return (
                <div className="w-[224px] box-border px-4 flex justify-center items-center h-[105px] filter grayscale bg-gray-300 rounded-2xl">
                  <img src={company} alt="Company" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

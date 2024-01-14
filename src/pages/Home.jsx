import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
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
import { styles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { category, commentaries, products, scrollTop } from "../data/data";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import Products from "../components/Products";
import { companies } from "../assets/images";

const Home = ({ rendered }) => {
  const [topTabValue, setTopTabValue] = useState("allCategories");
  const [newTabValue, setNewTabValue] = useState("allCategories");
  const [discountTabValue, setDiscountTabValue] = useState("allCategories");
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
    document.title = "AUTO TUNING";
  }, []);

  return (
    <div>
      <div className="bg-[#555]">
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
          className="mySwiper relative navigation-styled"
        >
          {swiperImages.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="flex justify-center items-center h-[400px] md:h-[480px] xl:h-[700px] w-full overflow-hidden"
              >
                <img
                  height="100%"
                  src={item.image}
                  className="h-full lg:h-min min-w-max md:min-w-full"
                  alt="Hero img"
                />
              </SwiperSlide>
            );
          })}
          <div className="z-[999] px-3 md:px-20 absolute w-full left-0 bottom-0 pb-10 md:pb-32 xl:pb-[152px]">
            <div className={`flex items-end !px-0 ${styles.container}`}>
              <div className="flex flex-col items-stretch w-full space-y-10 sm:items-start">
                <Typography
                  variant="h1"
                  color="white"
                  className="h-full flex flex-col font-medium tracking-[2px] text-3xl lg:text-4xl xl:text-5xl text-white"
                >
                  <span>
                    Servis xizmati <br /> Toshkentda
                  </span>
                </Typography>
                <Link onClick={scrollTop} to="/Avto bezaklar">
                  <Button
                    aria-label="page link button"
                    tabIndex="-1"
                    variant="filled"
                    color="red"
                    size="sm"
                    className="text-white bg-[#AD110B] !w-full"
                  >
                    Tuning jihozlariga buyurtma berish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
      <div className={`${styles.container} py-10 space-y-5`}>
        <div className="space-y-5">
          <Typography
            variant="h2"
            color="black"
            className={`${styles.container} !px-0 text-2xl lg:text-4xl text-center`}
          >
            Eng yaxshi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <Tabs value={topTabValue} className={`${styles.container} px-0`}>
                <div className="flex justify-start w-full items-center lg:justify-center scroll-none overflow-auto">
                  <TabsHeader className="w-min bg-red-800 !bg-opacity-100 flex justify-center items-center">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      className="w-min px-5 text-white"
                      onClick={() => setTopTabValue("allCategories")}
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-3 text-white"
                        onClick={() => setTopTabValue(category)}
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabsHeader>
                </div>
                <TabsBody>
                  <TabPanel
                    className="px-0 py-0"
                    key="allCategories"
                    value="allCategories"
                  >
                    <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                      {products.map((product, index) => {
                        if (product.top) {
                          return (
                            <Products
                              card={false}
                              key={index}
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
                  </TabPanel>
                  {category.map(
                    (category) =>
                      topTabValue == category && (
                        <TabPanel
                          className="px-0 py-0"
                          key={category}
                          value={category}
                        >
                          <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                            {products.map((product, index) => {
                              if (product.category == category && product.top) {
                                return (
                                  <Products
                                    card={false}
                                    key={index}
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
                              <li
                                key="noProductFound"
                                className="flex w-full min-h-[200px] justify-center items-center"
                              >
                                <Typography
                                  className="text-center w-full"
                                  variant="h3"
                                >
                                  Hech narsa topilmadi
                                </Typography>
                              </li>
                            )}
                          </ul>
                        </TabPanel>
                      )
                  )}
                </TabsBody>
              </Tabs>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center space-y-3 sm:space-y-0 flex-col sm:flex-row">
          <Typography className="text-xl md:text-2xl lg:text-3xl" variant="h2">
            {products.length.toString().slice(0, 1) + lastNumber} dan ortiq avto
            tovarlar bir joyda
          </Typography>
          <Button
            className="w-full sm:w-min"
            onClick={() => {
              navigate("/Katalog");
              scrollTop();
            }}
            aria-label="catalog page button"
            tabIndex="-1"
            size="sm"
            variant="outlined"
          >
            Katalog
          </Button>
        </div>
        <div className="flex flex-col gap-5 pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div
              className={`bg-[url('/src/assets/img/antiradar.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl group transition-opacity`}
            >
              <div className="flex w-full bg-black bg-opacity-30 p-8  lg:p-14 flex-col justify-end items-start space-y-2 lg:space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Antiradarlar
                </Typography>
                <Typography
                  color="white"
                  variant="paragraph"
                  className="lg:text-lg"
                >
                  Politsiya radarlariga qarshi yuqori masofaga va maksimal
                  shovqin immuniteti
                </Typography>
                <Link
                  to="/Antiradarlar"
                  onClick={scrollTop}
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
              <div className="flex w-full bg-black bg-opacity-30 p-8  lg:p-14 flex-col justify-end items-start space-y-2 lg:space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Suvenirlar
                </Typography>
                <Typography
                  color="white"
                  variant="paragraph"
                  className="lg:text-lg"
                >
                  Mashina uchun hushbo'ylagichlar, havo namlagichlar va telefon
                  ushlagichlar
                </Typography>
                <Link
                  to="/Suvenirlar"
                  onClick={scrollTop}
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
              className={`bg-[url('/src/assets/img/monitor.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl group transition-opacity`}
            >
              <div className="flex w-full bg-black bg-opacity-30 p-8  lg:p-14 flex-col justify-end items-start space-y-2 lg:space-y-4 rounded-2xl group-hover:bg-opacity-40">
                <Typography variant="h3" color="white">
                  Monitorlar
                </Typography>
                <Typography
                  color="white"
                  variant="paragraph"
                  className="lg:text-lg"
                >
                  Mashina uchun monitorlar
                </Typography>
                <Link
                  to="/Monitorlar"
                  onClick={scrollTop}
                  className="text-white space-x-3 underline underline-offset-2"
                >
                  <span>Monitorlar</span>
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
            className={`${styles.container} !px-0 text-2xl lg:text-4xl text-center`}
          >
            Yangi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <Tabs value={newTabValue} className={`${styles.container} px-0`}>
                <div className="flex justify-start w-full items-center lg:justify-center scroll-none overflow-auto">
                  <TabsHeader className="w-min bg-red-800 !bg-opacity-100 flex justify-center items-center">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      onClick={() => setNewTabValue("allCategories")}
                      className="w-min px-5 text-white"
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-5 text-white"
                        onClick={() => setNewTabValue(category)}
                      >
                        {category}
                      </Tab>
                    ))}
                  </TabsHeader>
                </div>
                <TabsBody>
                  {/* All products tab */}
                  <TabPanel
                    className="py-0 px-0"
                    key="allCategories"
                    value="allCategories"
                  >
                    <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                      {products.map((product, index) => {
                        if (product.isItNew) {
                          return (
                            <Products
                              card={false}
                              key={index}
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
                  </TabPanel>
                  {/* Tab by category */}
                  {category.map(
                    (category) =>
                      newTabValue == category && (
                        <TabPanel
                          className="px-0 py-0"
                          key={category}
                          value={category}
                        >
                          <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                            {products.map((product, index) => {
                              if (
                                product.category == category &&
                                product.isItNew
                              ) {
                                return (
                                  <Products
                                    card={false}
                                    key={index}
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
                              <li
                                key="noProductFound"
                                className="flex w-full min-h-[200px] justify-center items-center"
                              >
                                <Typography
                                  className="text-center w-full"
                                  variant="h3"
                                >
                                  Hech narsa topilmadi
                                </Typography>
                              </li>
                            )}
                          </ul>
                        </TabPanel>
                      )
                  )}
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
            className={`${styles.container} !px-0 text-2xl lg:text-4xl text-center`}
          >
            Aksiyadagi mahsulotlar
          </Typography>
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <Tabs
                value={discountTabValue}
                className={`${styles.container} px-0`}
              >
                <div className="flex justify-start w-full items-center lg:justify-center scroll-none overflow-auto">
                  <TabsHeader className="w-min bg-red-800 !bg-opacity-100 flex justify-center items-center">
                    <Tab
                      key="allCategories"
                      value="allCategories"
                      onClick={() => setDiscountTabValue("allCategories")}
                      className="w-min px-5 text-white"
                    >
                      Hammasi
                    </Tab>
                    {category.map((category) => (
                      <Tab
                        key={category}
                        value={category}
                        className="w-max px-5 text-white"
                        onClick={() => setDiscountTabValue(category)}
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
                    className="py-0 px-0"
                  >
                    <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                      {products.map((product, index) => {
                        if (product.inAction) {
                          return (
                            <Products
                              card={false}
                              key={index}
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
                  </TabPanel>
                  {/* Tab by category */}
                  {category.map(
                    (category) =>
                      discountTabValue == category && (
                        <TabPanel
                          className="px-0 py-0"
                          key={category}
                          value={category}
                        >
                          <ul className="flex gap-x-5 py-5 lg:py-8 overflow-auto products-swiper px-0">
                            {products.map((product, index) => {
                              if (
                                product.category == category &&
                                product.inAction
                              ) {
                                return (
                                  <Products
                                    card={false}
                                    key={index}
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
                                product.category === category &&
                                product.inAction
                            ).length === 0 && (
                              <li
                                key="noProductFound"
                                className="flex w-full min-h-[200px] justify-center items-center"
                              >
                                <Typography
                                  className="text-center w-full"
                                  variant="h3"
                                >
                                  Hech narsa topilmadi
                                </Typography>
                              </li>
                            )}
                          </ul>
                        </TabPanel>
                      )
                  )}
                </TabsBody>
              </Tabs>
            )}
          </div>
        </div>
        {/* Commentaries section */}
        <section>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between">
            <Typography variant="h3">Izohlar</Typography>
            <Button
              onClick={() => {
                navigate("/Sharhlar");
                scrollTop();
              }}
              aria-label="commentaries page button"
              tabIndex="-1"
              variant="outlined"
            >
              Barcha sharhlar
            </Button>
          </div>
          <ul className="py-5 flex justify-start items-center overflow-auto gap-5 products-swiper">
            {commentaries.map((note) => {
              if (note.rating == 5) {
                return (
                  <li
                    key={note.id}
                    className="w-full min-w-[320px] min-h-[320px] px-8 py-10 bg-[#B30000] font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-xl"
                  >
                    <div className="space-y-5">
                      <div>
                        <Rating
                          ratedColor="white"
                          value={note.rating}
                          readonly
                        />
                      </div>
                      <p className="tracking-[0.5px]">{note.comment}</p>
                    </div>
                    <p className="tracking-[0.5px] text-sm">{note.from}</p>
                  </li>
                );
              }
            })}
          </ul>
        </section>
        {/* Recommended products section */}
        <section className="py-0 lg:py-5">
          <div>
            <Typography variant="h4">Tavsiya qilinadi</Typography>
          </div>
          <ul
            className={`${styles.container} !px-0 py-5 flex justify-start overflow-auto gap-5 products-swiper`}
          >
            {products.map((product, index) => {
              if (product.recommend) {
                return (
                  <Products
                    card={false}
                    key={index}
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
            <Typography
              variant="h3"
              className="text-2xl text-center md:text-left"
            >
              Biz eng yirik kompaniyalar bilan hamkorlik qilamiz
            </Typography>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 py-8 pb-0">
            {companies.map((company, index) => {
              return (
                <div
                  key={index}
                  className="w-[224px] box-border px-4 flex justify-center items-center h-[105px] filter grayscale bg-gray-300 rounded-2xl"
                >
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

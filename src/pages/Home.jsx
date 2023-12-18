import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";
import "../styles/typedStyle.css";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
import {
  Button,
  Chip,
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { addCartProduct, category, options, products } from "../data/data";
import {
  AddShoppingCartOutlined,
  ArrowRightAltOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

const Home = ({ rendered }) => {
  let [groupedTopProducts, setGroupedTopProducts] = useState([]);
  const inActionInfo = products.filter(product => product.inAction);
  const navigate = useNavigate();

  let lastNumbersArr = products.length
    .toString()
    .slice(1)
    .split("")
    .map(i => {
      return 0 + "";
    });
  let lastNumber = lastNumbersArr.join("");
  useEffect(() => {
    function saveTopProductsToLocalStorage(topProducts) {
      localStorage.setItem("topProducts", JSON.stringify(topProducts));
    }

    const groupTopProductsByCategory = products => {
      const groupedProducts = {};

      products.forEach(product => {
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

    setGroupedTopProducts(prevGroupedTopProducts => {
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
        {swiperImages.map(item => {
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
                    {category.map(category => (
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
                    {products.map(product => {
                      if (product.top) {
                        return (
                          <li
                            key={product.id}
                            className="rounded-lg bg-white max-w-xs flex flex-col shadow-md group space-y-4 card-swiper relative"
                          >
                            <Link
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
                                    <SwiperSlide
                                      key={index}
                                      className="max-h-[400px]"
                                    >
                                      <img
                                        src={item}
                                        className="w-full"
                                        alt=""
                                      />
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </Link>
                            <button
                              onClick={() => {
                                rendered();
                                product.saved = !product.saved;
                              }}
                              className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                            >
                              {product.saved ? (
                                <Bookmark fontSize="large" />
                              ) : (
                                <BookmarkBorderOutlined fontSize="large" />
                              )}
                            </button>
                            <div className="flex space-x-3 absolute left-3 top-0 z-10">
                              {product.isItNew && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Yangi"
                                  size="sm"
                                  color="green"
                                  variant="filled"
                                />
                              )}
                              {product.inAction && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Aksiya"
                                  size="sm"
                                  variant="filled"
                                  color="red"
                                />
                              )}
                            </div>
                            <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
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
                                    <span className="text-gray-700">
                                      {product.rating}
                                    </span>
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
                                      rendered();
                                      addCartProduct(product);
                                    }}
                                    variant={`${
                                      product.inTheCart ? "filled" : "outlined"
                                    }`}
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
                      }
                    })}
                  </TabPanel>
                  {category.map(category => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.top) {
                          return (
                            <li
                              key={product.id}
                              className="rounded-lg bg-white max-w-xs flex flex-col group shadow-md space-y-4 card-swiper relative"
                            >
                              <Link
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
                                      <SwiperSlide
                                        key={index}
                                        className="max-h-[400px]"
                                      >
                                        <img
                                          src={item}
                                          className="w-full"
                                          alt=""
                                        />
                                      </SwiperSlide>
                                    );
                                  })}
                                </Swiper>
                              </Link>
                              <button
                                onClick={() => {
                                  rendered();
                                  product.saved = !product.saved;
                                }}
                                className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                              >
                                {product.saved ? (
                                  <Bookmark fontSize="large" />
                                ) : (
                                  <BookmarkBorderOutlined fontSize="large" />
                                )}
                              </button>
                              <div className="flex space-x-3 absolute left-3 top-0 z-10">
                                {product.isItNew && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Yangi"
                                    color="green"
                                    size="sm"
                                    variant="filled"
                                  />
                                )}
                                {product.inAction && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Aksiya"
                                    size="sm"
                                    variant="filled"
                                    color="red"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
                                <Typography
                                  variant="h5"
                                  className="font-medium"
                                >
                                  {product.productName}
                                </Typography>
                                <div>
                                  <Typography variant="small">
                                    Turkum: {product.category}
                                  </Typography>
                                  <Typography variant="small" color="black">
                                    <span className="flex items-end justify-start space-x-1">
                                      <Star className="text-yellow-700" />
                                      <span className="text-gray-700">
                                        {product.rating}
                                      </span>
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
                                        rendered();
                                        addCartProduct(product);
                                      }}
                                      variant={`${
                                        product.inTheCart
                                          ? "filled"
                                          : "outlined"
                                      }`}
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
                        }
                      })}
                      {products.filter(
                        product => product.category === category && product.top
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
            onClick={() => navigate("/catalog")}
            variant="outlined"
          >
            Katalog
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div
              className={`bg-[url('/src/assets/img/antiradar.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl">
                <Typography variant="h3" color="white">
                  Antiradarlar
                </Typography>
                <Typography color="white" variant="lead">
                  Politsiya radarlariga qarshi yuqori masofaga va maksimal
                  shovqin immuniteti
                </Typography>
                <Link to="/Antiradarlar" className="text-white group">
                  <span>Antiradarlar</span>
                  <ArrowRightAltOutlined className="translate-x-2 group-hover:translate-x-full" />
                </Link>
              </div>
            </div>
            <div
              className={`bg-[url('/src/assets/img/atir+vizitka.jpg')] bg-cover bg-center h-96 flex rounded-2xl`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl">
                <Typography variant="h3" color="white">
                  Diffuzor
                </Typography>
                <Typography color="white" variant="lead">
                  Mashina uchun aqlli hushbo'ylagich. Havoni namlaydi, o'zida
                  hushbo'y hid taratadi va vizitka
                </Typography>
                <Link to="/Suvenirlar" className="text-white group">
                  <span>Suvenirlar</span>
                  <ArrowRightAltOutlined className="translate-x-2 group-hover:translate-x-full" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`bg-[url('/src/assets/img/interyer.jpg')] bg-cover bg-left sm:bg-center lg:bg-left h-96 flex rounded-2xl`}
            >
              <div className="flex w-full bg-black bg-opacity-30  p-14 flex-col justify-end items-start space-y-4 rounded-2xl">
                <Typography variant="h3" color="white">
                  Interyer
                </Typography>
                <Typography color="white" variant="lead">
                  Mashina salonini bezatish uchun avto tovarlarga buyurtma
                  bering
                </Typography>
                <Link to="/catalog" className="text-white group">
                  <span>Katalog</span>
                  <ArrowRightAltOutlined className="translate-x-2 group-hover:translate-x-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
                    {category.map(category => (
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
                    {products.map(product => {
                      if (product.isItNew) {
                        return (
                          <li
                            key={product.id}
                            className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper relative group"
                          >
                            <Link
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
                                    <SwiperSlide
                                      key={index}
                                      className="max-h-[400px]"
                                    >
                                      <img
                                        src={item}
                                        className="w-full"
                                        alt=""
                                      />
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </Link>
                            <button
                              onClick={() => {
                                rendered();
                                product.saved = !product.saved;
                              }}
                              className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                            >
                              {product.saved ? (
                                <Bookmark fontSize="large" />
                              ) : (
                                <BookmarkBorderOutlined fontSize="large" />
                              )}
                            </button>
                            <div className="flex space-x-3 absolute left-3 top-0 z-10">
                              {product.isItNew && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Yangi"
                                  color="green"
                                  size="sm"
                                  variant="filled"
                                />
                              )}
                              {product.inAction && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Aksiya"
                                  size="sm"
                                  variant="filled"
                                  color="red"
                                />
                              )}
                            </div>
                            <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
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
                                    <span className="text-gray-700">
                                      {product.rating}
                                    </span>
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
                                      rendered();
                                      addCartProduct(product);
                                    }}
                                    variant={`${
                                      product.inTheCart ? "filled" : "outlined"
                                    }`}
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
                      }
                    })}
                  </TabPanel>
                  {category.map(category => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.isItNew) {
                          return (
                            <li
                              key={product.id}
                              className="rounded-lg bg-white max-w-xs flex flex-col shadow-md group space-y-4 card-swiper relative"
                            >
                              <Link
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
                                      <SwiperSlide
                                        key={index}
                                        className="max-h-[400px]"
                                      >
                                        <img
                                          src={item}
                                          className="w-full"
                                          alt=""
                                        />
                                      </SwiperSlide>
                                    );
                                  })}
                                </Swiper>
                              </Link>
                              <button
                                onClick={() => {
                                  rendered();
                                  product.saved = !product.saved;
                                }}
                                className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                              >
                                {product.saved ? (
                                  <Bookmark fontSize="large" />
                                ) : (
                                  <BookmarkBorderOutlined fontSize="large" />
                                )}
                              </button>
                              <div className="flex space-x-3 absolute left-3 top-0 z-10">
                                {product.isItNew && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Yangi"
                                    color="green"
                                    size="sm"
                                    variant=""
                                  />
                                )}
                                {product.inAction && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Aksiya"
                                    size="sm"
                                    variant="filled"
                                    color="red"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
                                <Typography
                                  variant="h5"
                                  className="font-medium"
                                >
                                  {product.productName}
                                </Typography>
                                <div>
                                  <Typography variant="small">
                                    Turkum: {product.category}
                                  </Typography>
                                  <Typography variant="small" color="black">
                                    <span className="flex items-end justify-start space-x-1">
                                      <Star className="text-yellow-700" />
                                      <span className="text-gray-700">
                                        {product.rating}
                                      </span>
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
                                        rendered();
                                        addCartProduct(product);
                                      }}
                                      variant={`${
                                        product.inTheCart
                                          ? "filled"
                                          : "outlined"
                                      }`}
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
                        }
                      })}
                      {products.filter(
                        product =>
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
                    {category.map(category => (
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
                    {products.map(product => {
                      if (product.inAction) {
                        return (
                          <li
                            key={product.id}
                            className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper relative group"
                          >
                            <Link
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
                                    <SwiperSlide
                                      key={index}
                                      className="max-h-[400px]"
                                    >
                                      <img
                                        src={item}
                                        className="w-full"
                                        alt=""
                                      />
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </Link>
                            <button
                              onClick={() => {
                                rendered();
                                product.saved = !product.saved;
                              }}
                              className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                            >
                              {product.saved ? (
                                <Bookmark fontSize="large" />
                              ) : (
                                <BookmarkBorderOutlined fontSize="large" />
                              )}
                            </button>
                            <div className="flex space-x-3 absolute left-3 top-0 z-10">
                              {product.isItNew && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Yangi"
                                  color="green"
                                  size="sm"
                                  variant="filled"
                                />
                              )}
                              {product.inAction && (
                                <Chip
                                  className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                  value="Aksiya"
                                  size="sm"
                                  variant="filled"
                                  color="red"
                                />
                              )}
                            </div>
                            <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
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
                                    <span className="text-gray-700">
                                      {product.rating}
                                    </span>
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
                                      rendered();
                                      addCartProduct(product);
                                    }}
                                    variant={`${
                                      product.inTheCart ? "filled" : "outlined"
                                    }`}
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
                      }
                    })}
                  </TabPanel>
                  {category.map(category => (
                    <TabPanel
                      key={category}
                      value={category}
                      className="flex gap-x-5 overflow-auto products-swiper"
                    >
                      {products.map((product, index) => {
                        if (product.category == category && product.inAction) {
                          return (
                            <li
                              key={product.id}
                              className="rounded-lg bg-white max-w-xs flex flex-col shadow-md group space-y-4 card-swiper relative"
                            >
                              <Link
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
                                      <SwiperSlide
                                        key={index}
                                        className="max-h-[400px]"
                                      >
                                        <img
                                          src={item}
                                          className="w-full"
                                          alt=""
                                        />
                                      </SwiperSlide>
                                    );
                                  })}
                                </Swiper>
                              </Link>
                              <button
                                onClick={() => {
                                  rendered();
                                  product.saved = !product.saved;
                                }}
                                className="absolute top-0 -translate-y-1/2 right-0 z-10 text-red-600"
                              >
                                {product.saved ? (
                                  <Bookmark fontSize="large" />
                                ) : (
                                  <BookmarkBorderOutlined fontSize="large" />
                                )}
                              </button>
                              <div className="flex space-x-3 absolute left-3 top-0 z-10">
                                {product.isItNew && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Yangi"
                                    color="green"
                                    size="sm"
                                    variant=""
                                  />
                                )}
                                {product.inAction && (
                                  <Chip
                                    className="transition-all duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                                    value="Aksiya"
                                    size="sm"
                                    variant="filled"
                                    color="red"
                                  />
                                )}
                              </div>
                              <div className="flex flex-col h-full px-3 pb-3 space-y-3 relative justify-between">
                                <Typography
                                  variant="h5"
                                  className="font-medium"
                                >
                                  {product.productName}
                                </Typography>
                                <div>
                                  <Typography variant="small">
                                    Turkum: {product.category}
                                  </Typography>
                                  <Typography variant="small" color="black">
                                    <span className="flex items-end justify-start space-x-1">
                                      <Star className="text-yellow-700" />
                                      <span className="text-gray-700">
                                        {product.rating}
                                      </span>
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
                                        rendered();
                                        addCartProduct(product);
                                      }}
                                      variant={`${
                                        product.inTheCart
                                          ? "filled"
                                          : "outlined"
                                      }`}
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
                        }
                      })}
                      {products.filter(
                        product =>
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

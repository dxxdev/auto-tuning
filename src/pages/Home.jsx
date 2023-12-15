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
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { addCartProduct, options, products } from "../data/data";
import {
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

const Home = ({ rendered }) => {
  let [groupedTopProducts, setGroupedTopProducts] = useState([]);

  useEffect(() => {
    function getTopProductsFromLocalStorage() {
      const storedTopProducts = localStorage.getItem("topProducts");
      return storedTopProducts ? JSON.parse(storedTopProducts) : [];
    }

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
      <Typography
        variant="h2"
        color="black"
        className={`${styles.container} pt-20 pb-5 text-center`}
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
                {groupedTopProducts.map(({ category }) => (
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
                        className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper relative"
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
                                  <img src={item} className="w-full" alt="" />
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
              {groupedTopProducts.map(({ category }) => (
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
                          className="rounded-lg bg-white max-w-xs flex flex-col shadow-md space-y-4 card-swiper relative"
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
                                    <img src={item} className="w-full" alt="" />
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
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

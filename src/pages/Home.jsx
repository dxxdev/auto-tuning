import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiperStyle.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { swiperImages } from "../data/hero-swiper";
import {
  Button,
  IconButton,
  Option,
  Rating,
  Select,
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
import {
  ArrowBackOutlined,
  ArrowForwardOutlined,
  ArrowRightAltOutlined,
} from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import Products from "../components/Products";
import { companies } from "../assets/images";

const Home = ({ rendered }) => {
  const [topTabValue, setTopTabValue] = useState("all");
  const [newTabValue, setNewTabValue] = useState("all");
  const [discountTabValue, setDiscountTabValue] = useState("all");
  const [topProductListScroll, setTopProductListScroll] = useState(0);
  const topProductList = useRef(null);
  const newProductList = useRef(null);
  const recommendProductList = useRef(null);
  const discountProductList = useRef(null);
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
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <div className={`${styles.container}`}>
                <div className="flex space-y-10 md:space-y-0 flex-col md:flex-row justify-between items-center">
                  <Typography
                    variant="h2"
                    color="black"
                    className={`!px-0 text-2xl lg:text-4xl text-center`}
                  >
                    Eng yaxshi mahsulotlar
                  </Typography>
                  <div className="flex gap-2 justify-between w-full md:w-min">
                    <div>
                      <Select
                        onChange={(value) => {
                          setTopTabValue(value);
                        }}
                        size="md"
                        label="Filtr"
                        animate={{
                          mount: { y: 0, scale: 1 },
                          unmount: { y: 25, scale: 0.5 },
                        }}
                        defaultValue="all"
                      >
                        <Option value="all">Hammasi</Option>
                        {category.length > 0 &&
                          category.map((item, index) => {
                            return (
                              <Option key={index} value={item}>
                                {item}
                              </Option>
                            );
                          })}
                      </Select>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          topProductList.current.scrollLeft -= 200;
                        }}
                      >
                        <ArrowBackOutlined />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          topProductList.current.scrollLeft += 200;
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <ul
                  ref={topProductList}
                  className="flex gap-x-5 scroll-smooth py-5 lg:py-8 overflow-hidden px-0"
                >
                  {products.map((product, index) => {
                    if (topTabValue == product.category && product.top) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    } else if (topTabValue == "all" && product.top) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    }
                  })}
                  {products.filter((product) => {
                    if (topTabValue == "all" && product.top) {
                      return product;
                    } else if (topTabValue == product.category && product.top) {
                      return product;
                    }
                  }).length == 0 && (
                    <li className="flex w-full min-h-[200px] justify-center items-center">
                      <Typography className="text-center w-full" variant="h3">
                        Hech narsa topilmadi
                      </Typography>
                    </li>
                  )}
                </ul>
              </div>
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
          <div className="flex w-full justify-center items-center py-5">
            {category.length > 0 && (
              <div className={`${styles.container}`}>
                <div className="flex space-y-10 md:space-y-0 flex-col md:flex-row justify-between items-center">
                  <Typography
                    variant="h2"
                    color="black"
                    className={`!px-0 text-2xl lg:text-4xl text-center`}
                  >
                    Yangi kelgan mahsulotlar
                  </Typography>
                  <div className="flex gap-2 justify-between w-full md:w-min">
                    <div>
                      <Select
                        onChange={(value) => {
                          setNewTabValue(value);
                        }}
                        size="md"
                        label="Filtr"
                        animate={{
                          mount: { y: 0, scale: 1 },
                          unmount: { y: 25, scale: 0.5 },
                        }}
                        defaultValue="all"
                      >
                        <Option value="all">Hammasi</Option>
                        {category.length > 0 &&
                          category.map((item, index) => {
                            return (
                              <Option key={index} value={item}>
                                {item}
                              </Option>
                            );
                          })}
                      </Select>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          newProductList.current.scrollLeft -= 200;
                        }}
                      >
                        <ArrowBackOutlined />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          newProductList.current.scrollLeft += 200;
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <ul
                  ref={newProductList}
                  className="flex gap-x-5 scroll-smooth py-5 lg:py-8 overflow-hidden px-0"
                >
                  {products.map((product, index) => {
                    if (newTabValue == product.category && product.isItNew) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    } else if (newTabValue == "all" && product.isItNew) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    }
                  })}
                  {products.filter((product) => {
                    if (newTabValue == "all" && product.isItNew) {
                      return product;
                    } else if (
                      newTabValue == product.category &&
                      product.isItNew
                    ) {
                      return product;
                    }
                  }).length == 0 && (
                    <li className="flex w-full min-h-[200px] justify-center items-center">
                      <Typography className="text-center w-full" variant="h3">
                        Hech narsa topilmadi
                      </Typography>
                    </li>
                  )}
                </ul>
              </div>
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
              <div className={`${styles.container}`}>
                <div className="flex space-y-10 md:space-y-0 flex-col md:flex-row justify-between items-center">
                  <Typography
                    variant="h2"
                    color="black"
                    className={`!px-0 text-2xl lg:text-4xl text-center`}
                  >
                    Yangi kelgan mahsulotlar
                  </Typography>
                  <div className="flex gap-2 justify-between w-full md:w-min">
                    <div>
                      <Select
                        onChange={(value) => {
                          setDiscountTabValue(value);
                        }}
                        size="md"
                        label="Filtr"
                        animate={{
                          mount: { y: 0, scale: 1 },
                          unmount: { y: 25, scale: 0.5 },
                        }}
                        defaultValue="all"
                      >
                        <Option value="all">Hammasi</Option>
                        {category.length > 0 &&
                          category.map((item, index) => {
                            return (
                              <Option key={index} value={item}>
                                {item}
                              </Option>
                            );
                          })}
                      </Select>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          discountProductList.current.scrollLeft -= 200;
                        }}
                      >
                        <ArrowBackOutlined />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        size="sm"
                        className="rounded-full"
                        onClick={() => {
                          discountProductList.current.scrollLeft += 200;
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <ul
                  ref={discountProductList}
                  className="flex gap-x-5 scroll-smooth py-5 lg:py-8 overflow-hidden px-0"
                >
                  {products.map((product, index) => {
                    if (
                      discountTabValue == product.category &&
                      product.inAction
                    ) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    } else if (discountTabValue == "all" && product.inAction) {
                      return (
                        <Products
                          card={false}
                          key={index}
                          rendered={rendered}
                          product={product}
                          productId={product.id}
                          productSaved={productSaved}
                        />
                      );
                    }
                  })}
                  {products.filter((product) => {
                    if (discountTabValue == "all" && product.inAction) {
                      return product;
                    } else if (
                      discountTabValue == product.category &&
                      product.inAction
                    ) {
                      return product;
                    }
                  }).length == 0 && (
                    <li className="flex w-full min-h-[200px] justify-center items-center">
                      <Typography className="text-center w-full" variant="h3">
                        Hech narsa topilmadi
                      </Typography>
                    </li>
                  )}
                </ul>
              </div>
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
          <div className="flex justify-between">
            <Typography variant="h4">Tavsiya qilinadi</Typography>
            <div className="flex gap-2 items-center">
              <IconButton
                variant="outlined"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  recommendProductList.current.scrollLeft -= 200;
                }}
              >
                <ArrowBackOutlined />
              </IconButton>
              <IconButton
                variant="outlined"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  recommendProductList.current.scrollLeft += 200;
                }}
              >
                <ArrowForwardOutlined />
              </IconButton>
            </div>
          </div>
          <ul
            ref={recommendProductList}
            className={`${styles.container} scroll-smooth !px-0 py-5 flex justify-start overflow-hidden gap-5`}
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
                    productSaved={productSaved}
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

import React, { useEffect, useState } from "react";
import { products, scrollTop, viewProduct } from "../data/data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import {
  Add,
  AddShoppingCartOutlined,
  Bookmark,
  BookmarkBorderOutlined,
  Remove,
  RemoveShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import axios from "axios";
import Products from "../components/Products";

const Basket = ({ rendered }) => {
  const [render, setRender] = useState(true);
  const navigate = useNavigate();
  const [inTheCartProduct, setInTheCartProduct] = useState([]);
  //   Send question Telegram bot
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Mijoz mahsulot xarid qildi❕\n\n Manzil: ${address}\n\n Mijozning ism familiyasi: ${clientName}\n\n Sotib olganlari:\n ${inTheCartProduct.map(
      (product) => {
        return `${product.productName} - ${product.countProduct}dona summa: ${(
          product.price * product.countProduct
        )
          .toLocaleString("UZ-uz", options)
          .replaceAll(",", " ")}so'm\n\n`;
      }
    )}\n\n Jami: ${totalSum
      .toLocaleString("uz-UZ", options)
      .replaceAll(",", " ")}so'm`;

    try {
      if (address.trim() != "" && clientName.trim() != "") {
        await axios.post(
          `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
          {
            chat_id: chatId,
            text,
          }
        );
        toast.success("Adminga yuborildi", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setRender((prev) => !prev);
      } else {
        toast.error("Formani to'ldirib qayta urining", {
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

      setClientName("");
      setAddress("");
    } catch (error) {
      if (address.trim() !== "" && clientName.trim() !== "") {
        toast.error("Tarmoqdagi xato", {
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
        toast.error("Formani to'ldiring", {
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
    }
  };

  const filteredProductOnCart = () => {
    const filteredProduct = products.filter((product) => product.inTheCart);
    setInTheCartProduct(filteredProduct);
  };

  let options = {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };
  useEffect(() => {
    filteredProductOnCart();
  }, [render, products, inTheCartProduct]);

  function calculateTotal(cartItems) {
    return cartItems.map(({ price, countProduct }) => price * countProduct);
  }

  const totalPriceArray = calculateTotal(
    products.filter((product) => product.inTheCart)
  );

  function calculateTotalSum(totalPriceArray) {
    return totalPriceArray.reduce((total, current) => total + current, 0);
  }

  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  const totalSum = calculateTotalSum(totalPriceArray);

  return (
    <div className={`${styles.container} py-2`}>
      <Typography
        variant="h1"
        className="py-5 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
      >
        Savatcha
      </Typography>
      <div
        className={`${styles.container} !px-0 flex flex-col gap-x-8 lg:flex-row gap-y-5 justify-between items-start py-2`}
      >
        <div className="w-full lg:grow">
          {inTheCartProduct && inTheCartProduct.length > 0 && (
            <div>
              <ul
                className={`${styles.container} !px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8`}
              >
                {inTheCartProduct.map((product) => {
                  return (
                    <li
                      key={product.id}
                      className="rounded-lg group bg-white flex flex-col shadow-md space-y-4 card-swiper relative"
                    >
                      <Link
                        onClick={() => viewProduct(product)}
                        to={`/${product.category}/${product.productName}`}
                      >
                        <div className="h-[450px] overflow-hidden bg-gray-200 rounded-t-lg">
                          <Swiper
                            effect="fade"
                            pagination={{
                              clickable: true,
                            }}
                            loop={true}
                            modules={[Pagination, EffectFade]}
                            className="mySwiper h-full w-full relative rounded-t-lg"
                          >
                            {product.images.map((item, index) => {
                              return (
                                <SwiperSlide
                                  key={index}
                                  className="h-full w-full flex justify-center items-center"
                                >
                                  <img
                                    src={item}
                                    alt={product.productName}
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                      </Link>
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
                      <div className="flex flex-col h-full">
                        <button
                          onClick={() => {
                            setRender((prev) => !prev);
                            product.saved = !product.saved;
                          }}
                          className="absolute top-0  right-0 z-[999] text-red-600"
                        >
                          {product.saved ? (
                            <Bookmark fontSize="large" />
                          ) : (
                            <BookmarkBorderOutlined fontSize="large" />
                          )}
                        </button>
                        <div className="flex flex-col h-full px-3 pb-3 space-y-3 justify-between">
                          <Typography variant="h5" className="font-medium">
                            {product.productName}
                          </Typography>
                          <div>
                            <Typography variant="small">
                              Turkum: {product.category}
                            </Typography>
                            <Typography variant="small">
                              Qancha: {product.countProduct}ta
                            </Typography>
                            <Typography variant="small" color="black">
                              <span className="flex items-end justify-start space-x-1">
                                <Star className="text-yellow-700" />
                                <span className="text-gray-700">
                                  {product.rating}
                                </span>
                              </span>
                            </Typography>
                            <div className="flex items-center space-x-2">
                              <IconButton
                                onClick={() => {
                                  if (product.countProduct > 1) {
                                    product.countProduct--;
                                  }
                                  setRender((prev) => !prev);
                                }}
                                size="sm"
                                variant="filled"
                                color="red"
                              >
                                <Remove />
                              </IconButton>
                              <Typography variant="h5">
                                {product.countProduct}
                              </Typography>
                              <IconButton
                                onClick={() => {
                                  product.countProduct++;
                                  setRender((prev) => !prev);
                                }}
                                size="sm"
                                variant="filled"
                                color="red"
                              >
                                <Add />
                              </IconButton>
                            </div>
                            <div className="w-full flex justify-between items-end">
                              <Typography variant="h6">
                                {product.price
                                  .toLocaleString("uz-UZ", options)
                                  .replaceAll(",", " ")}{" "}
                                so'm{" "}
                                <span className="text-2xl font-extralight leading-none relative top-1 text-gray-700">
                                  /
                                </span>{" "}
                                <sub className="text-gray-700">dona</sub>
                              </Typography>
                              <IconButton
                                onClick={() => {
                                  product.inTheCart = false;
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
                                  setRender((prev) => !prev);
                                }}
                                variant={
                                  product.inTheCart ? "filled" : "outlined"
                                }
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
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className={`${styles.container} !px-0 py-3 lg:py-5`}>
                <Typography variant="h5">
                  Jami:{" "}
                  {totalSum
                    .toLocaleString("uz-UZ", options)
                    .replaceAll(",", " ")}{" "}
                  so'm
                </Typography>
              </div>
            </div>
          )}
          {inTheCartProduct.length <= 0 && (
            <div className="flex flex-col justify-between items-start space-y-10">
              <Typography
                variant="lead"
                className="w-full text-sm sm:text-lg md:text-xl max-w-sm"
              >
                Savatcha bo'sh. Mahsulotni savatga qo'shish uchun mahsulotning
                pastki qismidagi savatcha tugmasini bosing
              </Typography>
              <Button
                className="w-full sm:w-max"
                onClick={() => {
                  navigate("/");
                  scrollTop();
                }}
              >
                Bosh sahifaga o'tish
              </Button>
            </div>
          )}
        </div>
        {inTheCartProduct.length > 0 && (
          <div className="w-full lg:w-min py-5 sticky top-5">
            <Card className="w-full lg:w-96">
              <CardHeader
                variant="gradient"
                color="red"
                className="grid h-20 place-items-center"
              >
                <Typography variant="h4" color="white">
                  Sotib olmoqchimisiz?
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  label="Manzilingiz"
                  size="lg"
                />
                <Input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  label="Ism, familiyangiz"
                  size="lg"
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  variant="gradient"
                  color="red"
                  fullWidth
                >
                  Sotib olish
                </Button>
                <Typography
                  variant="paragraph"
                  className="mt-6 flex justify-center"
                >
                  To'lovni mahsulotni olganingizda to'laysiz
                </Typography>
                <Typography variant="small" className="flex justify-center">
                  To'lov siz xohlagan usulda
                </Typography>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
      <section>
        <div className="py-3">
          <Typography variant="h4" className="text-2xl md:text-3xl">
            Tavsiya qilinadi
          </Typography>
        </div>
        <ul
          className={`${styles.container} !px-0 py-5 flex justify-start overflow-auto gap-5 products-swiper`}
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
      <ToastContainer />
    </div>
  );
};

export default Basket;

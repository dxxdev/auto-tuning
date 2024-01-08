import React, { useEffect, useState } from "react";
import {
  TOAST_CONFIG,
  headerRender,
  options,
  products,
  scrollTop,
  viewProduct,
} from "../data/data";
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
import { emptyCart } from "../assets/images";

const Basket = ({ rendered }) => {
  const [render, setRender] = useState(true);
  const navigate = useNavigate();
  const [inTheCartProduct, setInTheCartProduct] = useState([]);
  //   Send question Telegram bot
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [productChanges, setProductChanges] = useState(0);

  const filteredProductOnCart = () => {
    const filteredProduct = products.filter((product) => product.inTheCart);
    setInTheCartProduct(filteredProduct);
    rendered();
  };

  const countProductArr = () => {
    let result = 0;
    inTheCartProduct
      .map((product) => product.countProduct)
      .forEach((item) => {
        result += item;
      });
    return result * 12000;
  };

  useEffect(() => {
    document.title = "Savatcha";
  }, []);

  useEffect(() => {
    filteredProductOnCart();
  }, [render, productChanges]);

  useEffect(() => {
    filteredProductOnCart();
    headerRender.condition = !headerRender.condition;
  }, [products, render, productChanges]);

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Mijoz mahsulot xarid qildi❕\n\n Manzil: ${address}\n\n Mijozning ism familiyasi: ${clientName}\n\n Sotib olganlari:\n ${inTheCartProduct
      .map((product) => {
        return `• ${product.productName} - ${
          product.countProduct
        }dona \nsumma: ${(product.price * product.countProduct)
          .toLocaleString("UZ-uz", options)
          .replaceAll(",", " ")}so'm\n\n`;
      })}\n Jami:  ${totalSum
      .toLocaleString("uz-UZ", options)
      .replaceAll(",", " ")}so'm\n\nYetkazib berish narxi bilan: ${(
      totalSum + countProductArr()
    )
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
        toast.success("Adminga yuborildi", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldirib qayta urining", TOAST_CONFIG);
      }
      setClientName("");
      setAddress("");
    } catch (error) {
      console.log(error);
      if (address.trim() !== "" && clientName.trim() !== "") {
        toast.error("Tarmoqdagi xato", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldiring", TOAST_CONFIG);
      }
    }
  };

  function calculateTotal(cartItems) {
    return cartItems.map(({ price, countProduct }) => price * countProduct);
  }

  const totalPriceArray = calculateTotal(
    products.filter((product) => product.inTheCart)
  );

  function calculateTotalSum(totalPriceArray) {
    return totalPriceArray.reduce((total, current) => total + current, 0);
  }

  const totalSum = calculateTotalSum(totalPriceArray);

  return (
    <div className={`${styles.container} !px-0 py-2`}>
      <Typography
        variant="h1"
        className="py-5 px-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
      >
        Savatcha
      </Typography>
      <div
        className={`${styles.container} !px-0 flex flex-col gap-x-8 lg:flex-row gap-y-5 justify-between md:py-2`}
      >
        <div className="w-full grow flex flex-col h-full">
          {inTheCartProduct && inTheCartProduct.length > 0 && (
            <div className="h-full flex flex-col items-start justify-between">
              <ul className={`${styles.container} grow !px-0 space-y-5`}>
                {inTheCartProduct.map((product) => {
                  return (
                    <li
                      key={product.id}
                      className="rounded-lg p-2 bg-white shadow-md relative"
                    >
                      <div className="flex space-x-2 lg:space-x-4">
                        <div className="h-28 shrink-0 w-24 sm:h-52 sm:w-44 overflow-hidden bg-gray-200 flex justify-center items-center rounded-t-lg">
                          <img
                            src={product.images[0]}
                            alt={product.productName}
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <Typography
                            variant="h4"
                            className="text-lg sm:text-xl md:text-2xl font-medium md:pr-6"
                          >
                            {product.productName}
                          </Typography>
                          <div className="flex px-0 xl:px-4 py-4 items-center grow justify-between">
                            <Typography className="space-x-1 product-category xl:space-x-3">
                              <span>Turkum:</span>
                              <span>{product.category}</span>
                            </Typography>
                            <div className="hidden md:flex items-center rounded-lg border border-red-600 gap-2">
                              <IconButton
                                onClick={() => {
                                  rendered();
                                  if (product.countProduct > 1) {
                                    product.countProduct--;
                                  } else {
                                    product.countProduct = product.countProduct;
                                  }
                                }}
                                variant="text"
                                size="sm"
                                color="red"
                              >
                                <Remove fontSize="small" />
                              </IconButton>
                              <Typography variant="lead">
                                {product.countProduct}
                              </Typography>
                              <IconButton
                                onClick={() => {
                                  product.countProduct++;
                                  rendered();
                                }}
                                variant="text"
                                size="sm"
                                color="red"
                              >
                                <Add fontSize="small" />
                              </IconButton>
                            </div>
                            <div>
                              <Typography className="text-base xl:text-xl font-semibold">
                                {(product.price * product.countProduct)
                                  .toLocaleString("uz-UZ", options)
                                  .replaceAll(",", " ")}{" "}
                                so'm
                              </Typography>
                            </div>
                          </div>
                          <div className="hidden sm:flex justify-between md:justify-end items-end">
                            <button
                              onClick={() => {
                                rendered();
                                product.saved = !product.saved;
                              }}
                              className="static md:absolute top-0 left-0 z-[999] text-red-600"
                            >
                              {product.saved ? (
                                <Bookmark fontSize="large" />
                              ) : (
                                <BookmarkBorderOutlined fontSize="large" />
                              )}
                            </button>
                            <div className="flex md:hidden items-center rounded-lg border border-red-600 gap-2">
                              <IconButton
                                onClick={() => {
                                  rendered();
                                  if (product.countProduct > 1) {
                                    product.countProduct--;
                                  } else {
                                    product.countProduct = product.countProduct;
                                  }
                                }}
                                variant="text"
                                size="sm"
                                color="red"
                              >
                                <Remove fontSize="small" />
                              </IconButton>
                              <Typography variant="lead">
                                {product.countProduct}
                              </Typography>
                              <IconButton
                                onClick={() => {
                                  product.countProduct++;
                                  rendered();
                                }}
                                variant="text"
                                size="sm"
                                color="red"
                              >
                                <Add fontSize="small" />
                              </IconButton>
                            </div>
                            <IconButton
                              onClick={() => {
                                setRender((prev) => !prev);
                                product.inTheCart = false;
                                rendered();
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
                      <div className="flex sm:hidden justify-between md:justify-end items-end">
                        <div className="flex md:hidden items-center rounded-lg border border-red-600 gap-2">
                          <IconButton
                            onClick={() => {
                              rendered();
                              if (product.countProduct > 1) {
                                product.countProduct--;
                              } else {
                                product.countProduct = product.countProduct;
                              }
                            }}
                            variant="text"
                            size="sm"
                            color="red"
                          >
                            <Remove fontSize="small" />
                          </IconButton>
                          <Typography variant="lead">
                            {product.countProduct}
                          </Typography>
                          <IconButton
                            onClick={() => {
                              product.countProduct++;
                              rendered();
                            }}
                            variant="text"
                            size="sm"
                            color="red"
                          >
                            <Add fontSize="small" />
                          </IconButton>
                        </div>
                        <IconButton
                          onClick={() => {
                            setRender((prev) => !prev);
                            product.inTheCart = false;
                            rendered();
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
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {inTheCartProduct.length <= 0 && (
            <div className="flex flex-col justify-between px-2 items-center space-y-7">
              <div className="w-56 h-52">
                <img src={emptyCart} className="w-full h-full" alt="" />
              </div>
              <Typography variant="h4">Savat bo'sh</Typography>
              <Button
                className="w-full sm:w-max"
                onClick={() => {
                  navigate("/");
                  scrollTop();
                }}
                variant="gradient"
                color="red"
              >
                Bosh sahifaga o'tish
              </Button>
            </div>
          )}
        </div>
        <div>
          {inTheCartProduct.length > 0 && (
            <div className="w-full lg:w-min sticky top-0">
              <Card className="w-full lg:w-96">
                <CardHeader
                  variant="gradient"
                  color="red"
                  className="grid m-0 md:m-5 h-20 place-items-center"
                >
                  <Typography variant="h4" color="white">
                    Sotib olmoqchimisiz?
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col px-2 md:px-6 gap-4">
                  <div className="flex justify-between items-start">
                    <Typography variant="h6" className="font-medium">
                      Mahsulotlar({inTheCartProduct.length}):
                    </Typography>
                    <Typography variant="h6">
                      {totalSum
                        .toLocaleString("uz-UZ", options)
                        .replaceAll(",", " ")}{" "}
                      so'm
                    </Typography>
                  </div>
                  <div className="">
                    <Typography
                      variant="h6"
                      className="flex font-medium justify-between"
                    >
                      <span>Jami:</span>
                      <span className="text-xl font-semibold">
                        {(totalSum + countProductArr())
                          .toLocaleString("uz-UZ", options)
                          .replaceAll(",", " ")}{" "}
                        so'm
                      </span>
                    </Typography>
                    <div className="flex flex-col justify-between items-end">
                      <Typography
                        variant="small"
                        color="green"
                        className="space-x-2"
                      >
                        <span>To'lovingiz:</span>
                        <span>
                          {countProductArr()
                            .toLocaleString("uz-UZ", options)
                            .replaceAll(",", " ")}{" "}
                          so'm
                        </span>
                      </Typography>
                    </div>
                  </div>
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
                <CardFooter className="pt-0 px-2 md:px-6">
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
                  <Typography
                    variant="small"
                    color="deep-orange"
                    className="text-center"
                  >
                    &#9888; Har bir mahsulotni yetkazib berish narxi: 12 000
                    so'm
                  </Typography>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
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
          {products.map((product, index) => {
            if (product.recommend) {
              return (
                <Products
                  key={index}
                  rendered={filteredProductOnCart}
                  product={product}
                  productName={product.productName}
                  productCategory={product.category}
                  productImages={product.images}
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

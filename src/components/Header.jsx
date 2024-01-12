import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo, productNotFound } from "../assets/images";
import {
  Badge,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Drawer,
  IconButton,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import {
  BookmarkBorderOutlined,
  Menu,
  Phone,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import {
  TOAST_CONFIG,
  headerRender,
  products,
  scrollTop,
  setCategoryToArray,
} from "../data/data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HeaderDrawer from "./HeaderDrawer";

const navlinks = [
  "Kompaniya haqida",
  "Yetkazib berish va to'lash",
  "Sharhlar",
  "Aksiya",
  "Katalog",
];

const Header = ({ rendered }) => {
  const navigate = useNavigate();
  const [openInput, setOpenInput] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [howMuch, setHowMuch] = useState(0);
  const [howSaved, setHowSaved] = useState(0);
  const [render, setRender] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [searched, setSearched] = useState(false);
  const input = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [productsCategory, setProductsCategory] = useState(
    setCategoryToArray(products)
  );

  const filteredProductOnCart = (arr) => {
    const filteredProduct = arr.filter((product) => {
      return product.inTheCart;
    });
    const filteredProductOnSaved = arr.filter((product) => {
      return product.saved;
    });
    setHowMuch(filteredProduct.length);
    setHowSaved(filteredProductOnSaved.length);
  };

  const [open2, setOpen2] = useState(false);

  const openDrawer2 = () => setOpen2(true);
  const closeDrawer2 = () => setOpen2(false);

  const openSearchInput = () => {
    setOpenInput((oldVal) => !oldVal);
    setSearchedProduct("");
  };

  useEffect(() => {
    filteredProductOnCart(products);
    setCartProducts(products);
  }, [products.map((product) => product), headerRender]);

  const searchFilteredProduct = products.filter((product) => {
    if (searchedProduct === "") {
      return undefined;
    } else {
      return product.productName.toLocaleLowerCase().includes(searchedProduct);
    }
  });

  const searchProduct = (e) => {
    setSearchedProduct(e.target.value);
  };

  useEffect(() => {
    if (openInput) {
      input.current.focus();
    }
  }, [openInput]);

  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Mijozdan murojaat❕\n\n Telegram: ${
      userName != "" ? "@" : ""
    }${userName}\n\n Telefon raqami: +${phoneNumber}\n\n Xabar: ${message}`;

    try {
      if (
        phoneNumber.trim() !== "" &&
        message.trim() !== "" &&
        userName.trim() !== ""
      ) {
        await axios.post(
          `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
          {
            chat_id: chatId,
            text,
          }
        );
        handleOpen();
        toast.success("Yuborildi", TOAST_CONFIG);
      } else {
        handleOpen();
        toast.error("Formani to'ldirib qayta urining", TOAST_CONFIG);
      }
      setphoneNumber("");
      setUserName("unnamed");
      setMessage("");
      handleOpen();
    } catch (error) {
      if (
        phoneNumber.trim() !== "" &&
        userName.trim() !== "" &&
        message.trim() !== ""
      ) {
        handleOpen();
        toast.error("Tarmoqdagi xato", TOAST_CONFIG);
      } else {
        handleOpen();
        toast.error("Formani to'ldiring", TOAST_CONFIG);
      }
    }
  };

  return (
    <>
      <header className="bg-[#eaf4f4] bg-opacity-80 backdrop-blur-[8px] header py-3 md:py-4 z-[9994] sticky top-0 md:static">
        <div
          className={`${styles.container} relative top-0 left-0 flex justify-between items-center`}
        >
          <h1>
            <Link
              to="/"
              className="flex items-center text-xl md:text-2xl space-x-2 font-bold"
            >
              <img src={logo} className="h-7 md:h-8 hidden logo" alt="" />
              <span>
                AUTO <span className="text-red-500">TUNING</span>
              </span>
            </Link>
          </h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-6">
              {navlinks.map((link, index) => {
                return (
                  <li key={index}>
                    <NavLink onClick={scrollTop} to={`/${link}`}>
                      {link}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex md:hidden justify-center items-center space-x-3">
              <div
                onClick={() => {
                  navigate("/Saqlanganlar");
                  scrollTop();
                }}
              >
                <Badge
                  color="red"
                  className="flex !top-[20%] min-w-[20px] min-h-[20px] !right-[30%] justify-center items-center"
                  content={howSaved}
                >
                  <button
                    ariaLabel="saved button"
                    ariaLabelledby="saved button"
                    tabIndex="-1"
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:opacity-75 active:opacity-[0.85]"
                  >
                    <BookmarkBorderOutlined />
                  </button>
                </Badge>
              </div>
              <div
                onClick={() => {
                  navigate("/Savatcha");
                  scrollTop();
                }}
              >
                <Badge
                  color="red"
                  className="flex !top-[20%] !right-[30%] min-w-[20px] min-h-[20px] justify-center items-center"
                  content={howMuch}
                >
                  <button
                    ariaLabel="cart button"
                    ariaLabelledby="cart button"
                    tabIndex="-1"
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:opacity-75 active:opacity-[0.85]"
                  >
                    <ShoppingBasketOutlined />
                  </button>
                </Badge>
              </div>
            </div>
            <div className="connect">
              <h3 className="font-semibold">Tel: +998 (99) 270-10-32</h3>
              <p className="text-xs text-gray-700">
                Ish vaqti: 9:00 dan 18:00 gacha
              </p>
            </div>
            <button
              ariaLabel="contact button"
              ariaLabelledby="contact button"
              onClick={handleOpen}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none relative w-10 md:w-full max-w-[40px] md:max-w-min h-10 max-h-[40px] md:max-h-min hover:opacity-75 focus:ring hidden focus:ring-red-200 md:flex justify-center items-center"
            >
              <div className="block xl:hidden">
                <Phone className="text-red-600 md:text-white" />
              </div>
              <div className="hidden xl:block space-x-0 xl:space-x-2">
                <span>Qo'ng'iroq</span>
                <span>qilish</span>
              </div>
            </button>
            <IconButton
              ariaLabel="drawer open button"
              ariaLabelledby="drawer open button"
              tabIndex="-1"
              onClick={openDrawer2}
              variant="outlined"
              color="red"
              className="block md:hidden"
            >
              <Menu />
            </IconButton>
          </div>
        </div>
        <div className="absolute w-full top-full left-0 bg-black bg-opacity-50 hidden md:flex">
          <div
            className={`${styles.container} px-5 xl:px-6 justify-between items-center space-x-3 py-4 hidden md:flex`}
          >
            <button
              ariaLabel="drawer open button"
              ariaLabelledby="drawer open button"
              tabIndex="-1"
              onClick={openDrawer2}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex space-x-2 items-center justify-center"
            >
              <span>
                <Menu />
              </span>
              <span>
                <Typography>Sahifalar</Typography>
              </span>
            </button>
            <nav className="w-full category-links">
              <ul className="flex gap-x-10 text-white">
                {productsCategory.map((category, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        onClick={scrollTop}
                        to={`/${category}`}
                        className="text-shadow"
                      >
                        {category}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex justify-end space-x-5 ">
              {/* Search box */}
              <div className="flex justify-end">
                <div
                  className={`border max-w-xs relative w-full flex justify-between rounded-lg border-white ${
                    openInput
                      ? `bg-white open-animation pl-3 ${
                          searchedProduct == "" ? "" : "rounded-b-none"
                        }`
                      : "bg-transparent close-animation cursor-pointer"
                  }`}
                >
                  <input
                    type="text"
                    ref={input}
                    className={`rounded-lg outline-none text-sm ${
                      openInput
                        ? "px-3 py-2.5 w-64 open-animation"
                        : "close-animation w-0 px-0 py-0"
                    }`}
                    placeholder="Qidirish..."
                    onInput={(e) => searchProduct(e)}
                  />
                  <IconButton
                    ariaLabel="search box open button"
                    ariaLabelledby="search box open button"
                    tabIndex="-1"
                    variant="text"
                    onClick={openSearchInput}
                  >
                    <Search
                      className={`cursor-pointer text-sm ${
                        openInput ? "text-black" : "text-white"
                      }`}
                    />
                  </IconButton>
                </div>
                <ul
                  className={`absolute box-border flex flex-col gap-y-2 bg-white transition-all max-h-[calc(100vh-30vh)] overflow-auto rounded-b-lg top-[calc(100%-16px)] search-product-scroll ${
                    openInput ? "" : "hidden"
                  } ${searchedProduct ? "p-1 px-3 w-[310px]" : "p-0"} ${
                    searchFilteredProduct && searchFilteredProduct.length == 0
                      ? "hidden"
                      : "p-1"
                  }`}
                >
                  {searchFilteredProduct &&
                    searchFilteredProduct.length > 0 &&
                    searchFilteredProduct.map((product) => {
                      return (
                        <li key={product.id} onClick={openSearchInput}>
                          <Link
                            onClick={() => {
                              input.target.value = "";
                              scrollTop();
                            }}
                            to={`/${product.category}/${product.productName}`}
                            className="flex justify-start space-x-4 items-center"
                          >
                            <span className="rounded sceleton-animation w-14 h-16">
                              <img
                                className="w-full"
                                src={product.images[0]}
                                alt={product.productName}
                              />
                            </span>
                            <p className="truncate w-full">
                              {product.productName}
                            </p>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>

              <Badge
                color="red"
                className="w-6 h-6 flex justify-center items-center"
                content={howSaved}
              >
                <IconButton
                  ariaLabel="saved button"
                  ariaLabelledby="saved button"
                  tabIndex="-1"
                  onClick={() => {
                    navigate("/Saqlanganlar");
                    scrollTop();
                  }}
                  variant="outlined"
                  color="white"
                >
                  <BookmarkBorderOutlined />
                </IconButton>
              </Badge>
              <Badge
                color="red"
                className="w-6 h-6 flex justify-center items-center"
                content={howMuch}
              >
                <IconButton
                  ariaLabel="cart button"
                  ariaLabelledby="cart button"
                  tabIndex="-1"
                  onClick={() => {
                    navigate("/Savatcha");
                    scrollTop();
                  }}
                  variant="outlined"
                  color="white"
                >
                  <ShoppingBasketOutlined />
                </IconButton>
              </Badge>
            </div>
          </div>
        </div>
      </header>
      {/* Pages drawer */}
      <HeaderDrawer
        open2={open2}
        closeDrawer2={closeDrawer2}
        handleOpen={handleOpen}
        input={input}
        searchedProduct={searchProduct}
        setSearched={setSearched}
        searchFilteredProduct={searchFilteredProduct}
        openSearchInput={openSearchInput}
        searched={searched}
        rendered={setRender}
        setCatalogOpen={setCatalogOpen}
      />

      <Dialog
        open={open}
        size="xs"
        className="p-2 py-0 m-0 md:h-max !w-screen overflow-auto h-full min-w-full"
        handler={handleOpen}
      >
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Biz bilan bog'lanish
            </Typography>
          </DialogHeader>
          <IconButton
            ariaLabel="close modal button"
            ariaLabelledby="close modal button"
            tabIndex="-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Bizga yuboring va biz siz bilan bog'lanamiz
          </Typography>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                *Telefon raqamingiz
              </Typography>
              <Input
                placeholder="+998992701032"
                type="number"
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <Input
                placeholder="Telegram username"
                type="text"
                onChange={(e) => {
                  if (e.target.value.trim() !== "") {
                    setUserName(e.target.value.trim());
                  } else {
                    setUserName("unnamed");
                  }
                }}
              />
              <Textarea
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            ariaLabel="close modal button"
            ariaLabelledby="close modal button"
            tabIndex="-1"
            variant="text"
            color="gray"
            onClick={handleOpen}
          >
            Bekor qilish
          </Button>
          <Button
            ariaLabel="send message button"
            ariaLabelledby="send message button"
            tabIndex="-1"
            variant="gradient"
            color="gray"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Yuborish
          </Button>
        </DialogFooter>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default Header;

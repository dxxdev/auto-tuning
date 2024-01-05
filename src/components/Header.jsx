import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { aksiyaImg, logo, productNotFound } from "../assets/images";
import {
  Alert,
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
import { headerRender, products, scrollTop } from "../data/data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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

  const openCatalog = () => setCatalogOpen((prev) => !prev);

  function setCategoryToArray(arr) {
    let categoryes = new Set();
    arr.forEach(function (item) {
      let category = item.category;
      categoryes.add(category);
    });
    let categoryArr = Array.from(categoryes);
    return categoryArr;
  }

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

      // Qo'shimcha logika (masalan, formani tozalash yoki foydalanuvchiga xabar berish)
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
              <li>
                <NavLink onClick={scrollTop} to={`/Kompaniya haqida`}>
                  Kompaniya haqida
                </NavLink>
              </li>
              <li>
                <NavLink onClick={scrollTop} to={`/Yetkazib berish va to'lash`}>
                  Yetkazib berish va to'lash
                </NavLink>
              </li>
              <li>
                <NavLink onClick={scrollTop} to={`/Sharhlar`}>
                  Sharhlar
                </NavLink>
              </li>
              <li>
                <NavLink onClick={scrollTop} to={`/Aksiya`}>
                  Aksiya
                </NavLink>
              </li>
              <li>
                <NavLink onClick={scrollTop} to={`/Katalog`}>
                  Katalog
                </NavLink>
              </li>
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
                  className="!w-4 !h-4 flex !top-[20%] !right-[30%] justify-center items-center"
                  content={howSaved}
                >
                  <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:opacity-75 active:opacity-[0.85]">
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
                  className="w-4 h-4 flex !top-[20%] !right-[30%] justify-center items-center"
                  content={howMuch}
                >
                  <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:opacity-75 active:opacity-[0.85]">
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
                  <IconButton variant="text" onClick={openSearchInput}>
                    <Search
                      className={`cursor-pointer text-sm ${
                        openInput ? "text-black" : "text-white"
                      }`}
                    />
                  </IconButton>
                </div>
                <ul
                  className={`absolute box-border flex flex-col gap-y-2 bg-white transition-all max-h-[calc(100vh-20vh)] overflow-auto rounded-b-lg top-[calc(100%-16px)] ${
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
      <Drawer
        open={open2}
        onClose={closeDrawer2}
        className={`p-4 side-bar-links flex flex-col transition-all ease-linear duration-75 !max-w-full md:!max-w-xs ${
          open2 ? "" : "!-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            <Link
              to="/"
              onClick={() => {
                scrollTop();
                closeDrawer2();
              }}
              className="flex items-center text-xl md:text-2xl space-x-2 font-bold"
            >
              <img src={logo} className="h-7 md:h-8" alt="" />
              <span>
                AUTO <span className="text-red-500">TUNING</span>
              </span>
            </Link>
          </Typography>
          <div className="flex justify-center items-center">
            <button
              onClick={handleOpen}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none relative w-10 md:w-full max-w-[40px] md:max-w-min h-10 max-h-[40px] md:max-h-min hover:opacity-75 focus:ring focus:ring-red-200 flex md:hidden justify-center items-center"
            >
              <div className="block xl:hidden">
                <Phone className="text-red-600 md:text-white" />
              </div>
            </button>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <ul className="overflow-auto grow flex flex-col gap-y-3 scroll-none">
          <li className="block md:hidden">
            <div className="flex justify-center items-center">
              <input
                type="text"
                ref={input}
                className={`rounded-lg outline-none px-3 w-full py-1 text-base border border-gray-500`}
                placeholder="Qidirish..."
                onInput={(e) => {
                  searchProduct(e);
                  if (e.target.value.trim() == "") {
                    setSearched(false);
                  } else {
                    setSearched(true);
                  }
                }}
              />
            </div>
            <ul
              className={`box-border w-full flex flex-col gap-y-2 bg-white transition-all h-full max-h-[calc(100vh-30vh)] overflow-auto ${
                searchedProduct ? "p-1 px-0 w-[310px]" : "p-0"
              } ${
                searchFilteredProduct && searchFilteredProduct.length == 0
                  ? "hidden"
                  : "p-0"
              }`}
            >
              {searchFilteredProduct &&
                searchFilteredProduct.length > 0 &&
                searchFilteredProduct.map((product) => {
                  return (
                    <li key={product.id}>
                      <Link
                        onClick={() => {
                          input.target.value = "";
                          scrollTop();
                          openSearchInput();
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
                        <p className="truncate w-full">{product.productName}</p>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {searched && searchFilteredProduct.length == 0 && (
              <div className="py-10 flex space-y-4 flex-col justify-center items-center">
                <div className="w-40 h-40">
                  <img className="w-40" src={productNotFound} alt="" />
                </div>
                <Typography variant="h5" color="gray">
                  Qidiruv natijasi mavjud emas
                </Typography>
              </div>
            )}
          </li>
          <li className={searched ? "hidden" : "block"}>
            <button
              onClick={openCatalog}
              className="flex items-center w-full py-2 text-gray-600 space-x-3 group hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="27"
                viewBox="0 0 576 512"
                className="group-hover:text-red-600"
                fill="currentColor"
              >
                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
              </svg>
              <span className="w-full flex items-center justify-between">
                <span className="text-xl">Mahsulot turkumlari</span>
                <span className="text-gray-600 text-sm">
                  ({products.length})
                </span>
              </span>
            </button>
          </li>
          {catalogOpen && (
            <li>
              <ul className="flex flex-col gap-y-4 text-black text-xl pl-5">
                {productsCategory.map((category, index) => {
                  let categoryHowMuchProduct = products.filter(
                    (product) => product.category === category
                  );
                  return (
                    <li key={index}>
                      <NavLink
                        className="space-x-2 w-full flex group items-center text-gray-700 hover:text-red-600"
                        to={`/${category}`}
                        onClick={() => {
                          scrollTop();
                          closeDrawer2();
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-red-600"></span>
                        <span className="w-full flex items-center justify-between">
                          <span>{category}</span>
                          <span className="text-gray-600 text-base">
                            ({categoryHowMuchProduct.length})
                          </span>
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
          <li className={`py-2 ${searched ? "hidden" : "block"}`}>
            <NavLink
              onClick={() => {
                closeDrawer2();
                setCatalogOpen(false);
              }}
              to={"/"}
              className="text-xl text-gray-600 leading-none flex items-center hover:text-red-600 space-x-3"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="27"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </span>
              <span>Bosh sahifa</span>
            </NavLink>
          </li>
          <li className={`py-2 ${searched ? "hidden" : "block"}`}>
            <NavLink
              onClick={() => {
                closeDrawer2();
                setCatalogOpen(false);
              }}
              to={"/Kompaniya haqida"}
              className="text-xl text-gray-600 leading-none flex items-center hover:text-red-600 space-x-3"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="27"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z" />
                </svg>
              </span>
              <span>Kompaniya haqida</span>
            </NavLink>
          </li>
          <li className={`py-2 ${searched ? "hidden" : "block"}`}>
            <NavLink
              onClick={() => {
                closeDrawer2();
                setCatalogOpen(false);
              }}
              to={"/Sharhlar"}
              className="text-xl text-gray-600 leading-none flex items-center hover:text-red-600 space-x-2"
            >
              <span className="px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="22"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                </svg>
              </span>
              <span>Sharhlar</span>
            </NavLink>
          </li>
          <li className={`py-2 ${searched ? "hidden" : "block"}`}>
            <NavLink
              onClick={() => {
                closeDrawer2();
                setCatalogOpen(false);
              }}
              to={"/Yetkazib berish va to'lash"}
              className="text-xl text-gray-600 leading-none flex items-center hover:text-red-600 space-x-3"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  fill="currentColor"
                  width="27"
                  viewBox="0 0 512 512"
                >
                  <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" />
                </svg>
              </span>
              <span>Yetkazib berish va to'lash</span>
            </NavLink>
          </li>
          <li className={`py-2 ${searched ? "hidden" : "block"}`}>
            <NavLink
              onClick={() => {
                closeDrawer2();
                setCatalogOpen(false);
              }}
              to={"/Aksiya"}
              className="text-xl text-gray-600 leading-none flex items-center hover:text-red-600 space-x-3"
            >
              <span className="px-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="22"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
              </span>
              <span>Aksiyalar</span>
            </NavLink>
          </li>
        </ul>
      </Drawer>

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
          <IconButton>
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
          <Button variant="text" color="gray" onClick={handleOpen}>
            Bekor qilish
          </Button>
          <Button
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

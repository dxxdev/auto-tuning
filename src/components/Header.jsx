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
  ArrowForwardIos,
  BookmarkBorderOutlined,
  Menu,
  Phone,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { products, scrollTop } from "../data/data";
import axios from "axios";

const Header = () => {
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

  const [productsCategory, setProductsCategory] = useState([]);

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

  useEffect(() => {
    setProductsCategory(setCategoryToArray(products));
  }, []);

  const [open2, setOpen2] = useState(false);

  const openDrawer2 = () => setOpen2(true);
  const closeDrawer2 = () => setOpen2(false);

  const [open1, setOpen1] = useState(false);

  const openDrawer1 = () => setOpen1(true);
  const closeDrawer1 = () => setOpen1(false);

  const openSearchInput = () => {
    setOpenInput((oldVal) => !oldVal);
    setSearchedProduct("");
  };

  const openSearchDrawer = () => {
    openDrawer1();
  };

  useEffect(() => {
    filteredProductOnCart(products);
    setCartProducts(products);
    setRender((prev) => !prev);
  }, [render]);

  const searchFilteredProduct = products.filter((product) => {
    if (searchedProduct === "") {
      return undefined;
    } else {
      return product.productName.toLocaleLowerCase().includes(searchedProduct);
    }
  });

  const searchProduct = (e) => {
    setSearchedProduct(e.target.value);
    console.log(searchFilteredProduct);
  };

  useEffect(() => {
    if (openInput) {
      input.current.focus();
    }
  }, [openInput]);

  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("unnamed");

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Telegram: ${
      userName !== "unnamed" ? "@" : ""
    }${userName}\n\n Telefon raqami: +${phoneNumber}\n\n Izoh: ${message}`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );

      // Qo'shimcha logika (masalan, formani tozalash yoki foydalanuvchiga xabar berish)
      setphoneNumber("");
      setUserName("unnamed");
      setMessage("");
      handleOpen();
    } catch (error) {
      alert("Habar yuborishda xatolik:", error.message);
    }
  };

  return (
    <>
      <header className="md:bg-[#f5f5f5] bg-white bg-opacity-80 backdrop-blur-[8px] header py-3 md:py-4 z-[999] sticky top-0 md:static">
        <div
          className={`${styles.container} relative top-0 left-0 flex justify-between items-center`}
        >
          <h1>
            <Link
              to="/"
              className="flex items-center text-xl md:text-2xl space-x-2 font-bold"
            >
              <img src={logo} className="h-7 md:h-8" alt="" />
              <span className="hidden sm:block">
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
                <NavLink
                  onClick={scrollTop}
                  to={`/Katalog`}
                >
                  Katalog
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden justify-center items-center space-x-4">
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
                color="black"
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
                color="black"
              >
                <ShoppingBasketOutlined />
              </IconButton>
            </Badge>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="hidden xl:block">
              <h3 className="font-semibold">Tel: +998 (99) 270-10-32</h3>
              <p className="text-xs text-gray-700">
                Ish vaqti: 9:00 dan 18:00 gacha
              </p>
            </div>
            <button
              onClick={handleOpen}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs md:py-3 md:px-6 border border-red-600 md:border-none rounded-lg md:bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none relative w-10 md:w-full max-w-[40px] md:max-w-min h-10 max-h-[40px] md:max-h-min hover:opacity-75 focus:ring focus:ring-red-200 flex justify-center items-center"
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
              className="block md:hidden"
              variant="outlined"
              color="red"
              onClick={openSearchDrawer}
            >
              <Search className={`cursor-pointer text-sm`} />
            </IconButton>
            <IconButton
              onClick={openDrawer2}
              variant="outlined"
              color="red"
              className="block md:hidden"
            >
              <Menu />
            </IconButton>
          </div>
          <div
            className={`${styles.container} px-5 xl:px-6 rounded-b-xl xl:rounded-b-3xl justify-between absolute top-full left-0 translate-y-1/4 items-center space-x-3 py-4 bg-black bg-opacity-50 hidden md:flex`}
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
            <nav className="w-full hidden xl:block">
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
                            className="flex justify-start items-center gap-x-3"
                          >
                            <img
                              className="w-10 rounded"
                              src={product.images[0]}
                              alt={product.productName}
                            />
                            <p className="truncate">{product.productName}</p>
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
      <Drawer
        open={open2}
        onClose={closeDrawer2}
        className={`p-4 transition-all ease-linear duration-75 !max-w-full md:!max-w-xs ${
          open2 ? "" : "!-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Sahifalar
          </Typography>
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
        <ul>
          <li>
            <button
              onClick={openCatalog}
              className="flex items-center py-2 space-x-3"
            >
              <ArrowForwardIos
                fontSize="12px"
                className={`transition-transform ${
                  catalogOpen ? "rotate-90" : "rotate-0"
                }`}
              />
              <span className="text-xl">Mahsulot turkumlari</span>
              <span className="text-gray-600 text-sm">({products.length})</span>
            </button>
          </li>
        </ul>
        {catalogOpen && (
          <ul className="gap-x-10 text-black text-xl">
            {productsCategory.map((category, index) => {
              let categoryHowMuchProduct = products.filter(
                (product) => product.category === category
              );
              return (
                <li key={index}>
                  <NavLink
                    className="space-x-2 flex items-center"
                    to={`/${category}`}
                    onClick={() => {
                      closeDrawer2();
                      scrollTop();
                    }}
                  >
                    <span>{category}</span>
                    <span className="text-gray-600 text-base">
                      ({categoryHowMuchProduct.length})
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </Drawer>

      {/* Search drawer */}
      <Drawer
        open={open1}
        onClose={closeDrawer1}
        className={`p-4 transition-all ease-linear block md:hidden duration-75 !max-w-full md:!max-w-xs ${
          open1 ? "" : "!-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Mahsulotni qidirish
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer1}>
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
        <div className="flex justify-center items-center py-4">
          <input
            type="text"
            ref={input}
            className={`rounded-lg outline-none px-3 w-full max-w-sm py-1 text-base border border-gray-500`}
            placeholder="Qidirish..."
            onInput={(e) => {
              searchProduct(e);
              if (searchFilteredProduct.length >= products.length) {
                setSearched(false);
              } else {
                setSearched(true);
              }
            }}
          />
        </div>
        <ul
          className={`box-border w-full flex flex-col gap-y-2 bg-white transition-all h-full max-h-[calc(100vh-30vh)] overflow-auto rounded-b-lg ${
            searchedProduct ? "p-1 px-3 w-[310px]" : "p-0"
          } ${
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
                    className="flex justify-start items-center gap-x-3"
                  >
                    <img
                      className="w-10 rounded"
                      src={product.images[0]}
                      alt={product.productName}
                    />
                    <p className="truncate">{product.productName}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
        {searched && searchFilteredProduct.length == 0 && (
          <div className="py-10 flex space-y-4 flex-col justify-center items-center">
            <img className="w-40" src={productNotFound} alt="" />
            <Typography variant="h5" color="gray">
              Qidiruv natijasi mavjud emas
            </Typography>
          </div>
        )}
      </Drawer>
      <Dialog open={open} size="xs" className="p-2 py-0" handler={handleOpen}>
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
                  if (e.target.value.trim !== "") {
                    setUserName(e.target.value.trim);
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
    </>
  );
};

export default Header;

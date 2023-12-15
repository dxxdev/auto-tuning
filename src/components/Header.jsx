import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import {
  Badge,
  Button,
  Drawer,
  IconButton,
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
import { products } from "../data/data";

const Header = () => {
  const navigate = useNavigate();
  const [openInput, setOpenInput] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [howMuch, setHowMuch] = useState(0);
  const [howSaved, setHowSaved] = useState(0);
  const [render, setRender] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const [productsCategory, setProductsCategory] = useState([]);

  const openCatalog = () => setCatalogOpen(prev => !prev);

  function setCategoryToArray(arr) {
    let categoryes = new Set();
    arr.forEach(function (item) {
      let category = item.category;
      categoryes.add(category);
    });
    let categoryArr = Array.from(categoryes);
    return categoryArr;
  }

  const filteredProductOnCart = arr => {
    const filteredProduct = arr.filter(product => {
      return product.inTheCart;
    });
    const filteredProductOnSaved = arr.filter(product => {
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

  const openSearchInput = () => {
    setOpenInput(oldVal => !oldVal);
  };

  useEffect(() => {
    filteredProductOnCart(products);
    setCartProducts(products);
    setRender(prev => !prev);
  }, [render]);
  return (
    <>
      <header className="bg-[#f5f5f5] py-4 z-[999]">
        <div
          className={`${styles.container} relative top-0 left-0 flex justify-between items-center`}
        >
          <h1>
            <Link
              to="/"
              className="flex items-center text-2xl space-x-2 font-bold"
            >
              <img src={logo} className="h-8" alt="" />
              <span>
                AUTO <span className="text-red-500">TUNING</span>
              </span>
            </Link>
          </h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-6">
              <li>
                <NavLink to={`/faq`}>Kompaniya haqida</NavLink>
              </li>
              <li>
                <NavLink to={`/delivery`}>Yetkazib berish manzillari</NavLink>
              </li>
              <li>
                <NavLink to={`/payment`}>Yetkazib berish va to'lash</NavLink>
              </li>
              <li>
                <NavLink to={`/action`}>Aksiya</NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="hidden xl:block">
              <h3 className="font-semibold">Tel: +998 (99) 270-10-32</h3>
              <p className="text-xs text-gray-700">
                Ish vaqti: 9:00 dan 18:00 gacha
              </p>
            </div>
            <a href="tel:+998992701032">
              <Button color="gray" variant="filled" className="flex">
                <div className="block xl:hidden">
                  <Phone />
                </div>
                <div className="hidden xl:block">Qo'ng'iroq qilish</div>
              </Button>
            </a>
          </div>
          <div
            className={`${styles.container} px-5 xl:px-6 rounded-b-xl xl:rounded-b-3xl flex justify-between absolute top-full left-0 translate-y-1/4 items-center space-x-3 py-4 bg-black bg-opacity-50`}
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
                      <NavLink to={`/${category}`} className="text-shadow">
                        {category}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex justify-end space-x-5 ">
              <div
                className={`border max-w-xs w-full flex justify-between rounded-lg border-white ${
                  openInput
                    ? "bg-white open-animation pl-3"
                    : "bg-transparent close-animation cursor-pointer"
                }`}
              >
                <input
                  type="text"
                  className={`rounded-lg outline-none text-sm ${
                    openInput
                      ? "px-3 py-2.5 w-64 open-animation"
                      : "close-animation w-0 px-0 py-0"
                  }`}
                  placeholder="Qidirish..."
                />
                <IconButton variant="text" onClick={openSearchInput}>
                  <Search
                    className={`cursor-pointer text-sm ${
                      openInput ? "text-black" : "text-white"
                    }`}
                  />
                </IconButton>
              </div>
              <Badge
                color="red"
                className="w-6 h-6 flex justify-center items-center"
                content={howSaved}
              >
                <IconButton
                  onClick={() => navigate("/saved")}
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
                  onClick={() => navigate("/basket")}
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
      <Drawer open={open2} onClose={closeDrawer2} className="p-4">
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
            </button>
          </li>
        </ul>
        {catalogOpen && (
          <ul className="gap-x-10 text-black text-xl">
            {productsCategory.map((category, index) => {
              return (
                <li key={index}>
                  <NavLink onClick={closeDrawer2} to={`/${category}`}>
                    {category}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </Drawer>
    </>
  );
};

export default Header;

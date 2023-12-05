import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Add,
  Delete,
  Menu,
  Phone,
  Remove,
  Search,
  ShoppingBasketOutlined,
  ShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { products } from "../data/data";
let options = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

const Header = () => {
  const [openInput, setOpenInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const totalAmoutArr = products.map(product => {
    if (product.inTheCart) {
      return product.price * product.countProduct;
    }
  });

  const [productsCategory, setProductsCategory] = useState([]);

  function setCategoryToArray(arr) {
    let categoryes = new Set();
    arr.forEach(function (item) {
      let category = item.category;
      categoryes.add(category);
    });
    let categoryArr = Array.from(categoryes);
    return categoryArr;
  }

  useEffect(() => {
    setProductsCategory(setCategoryToArray(products));
  }, []);

  const filteredAmout = totalAmoutArr.filter(amout => {
    return amout !== undefined;
  });

  const totalAmout = arr => {
    let result = 0;
    arr.forEach(number => {
      return (result += Number(number));
    });
    return result;
  };

  const total = totalAmout(filteredAmout);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const openSearchInput = () => {
    setOpenInput(oldVal => !oldVal);
  };

  const removeToCart = index => {
    products[index].inTheCart = false;
  };

  useEffect(() => {
    setCartProducts(products);
  }, [products]);

  return (
    <>
      <header className="bg-[#f5f5f5] py-4 z-[999] sticky top-0">
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
                AUTO <span className="text-red-500">CAR</span>
              </span>
            </Link>
          </h1>
          <nav className="hidden xl:block">
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
            <div className="hidden sm:block">
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
                <span className="hidden xl:block">Qo'ng'iroq qilish</span>
              </Button>
            </a>
          </div>
          <div
            className={`${styles.container} px-5 xl:px-6 rounded-b-xl xl:rounded-b-3xl flex justify-between absolute top-full left-0 translate-y-1/4 items-center py-4 bg-black bg-opacity-50`}
          >
            <IconButton className="block xl:hidden">
              <Menu />
            </IconButton>
            <nav className="w-full hidden xl:block">
              <ul className="flex gap-x-10 text-white">
                {productsCategory.map((category, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={`/${category.toLowerCase()}`}
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
              <button
                onClick={openDrawer}
                className="!w-11 px-2 text-white border border-white rounded-lg flex justify-center items-center !aspect-square"
              >
                <ShoppingBasketOutlined />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="p-4 flex flex-col justify-between"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="space-x-2 flex items-center"
          >
            <ShoppingCartOutlined />
            <span>Savatcha</span>
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
        <div className="flex flex-col gap-4 grow overflow-auto">
          {products.map((product, index) => {
            if (product.inTheCart) {
              return (
                <div key={product.id} className="flex gap-x-5">
                  <Link to={`/${product.id}`}>
                    <img
                      src={product.images[0]}
                      className="w-32 rounded-lg"
                      alt=""
                    />
                  </Link>
                  <div>
                    <Typography
                      variant="lead"
                      className="truncate w-40"
                      color="black"
                    >
                      {product.productName}
                    </Typography>
                    <div className="flex items-center space-x-1 text-xs mb-3">
                      <Star fontSize="12px" className="text-yellow-700" />
                      <span className="text-gray-700">{product.rating}</span>
                    </div>
                    <Typography className="mb-2" variant="small" color="black">
                      {product.price
                        .toLocaleString("uz-UZ", options)
                        .replaceAll(",", " ")}{" "}
                      so'm/<sub>dona</sub>
                    </Typography>
                    <div className="flex items-center space-x-2">
                      <IconButton
                        onClick={() => {
                          if (product.countProduct > 1) {
                            product.countProduct--;
                          }
                        }}
                        size="sm"
                        variant="outlined"
                        color="gray"
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="h5">
                        {product.countProduct}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          product.countProduct++;
                        }}
                        size="sm"
                        variant="outlined"
                        color="gray"
                      >
                        <Add />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          removeToCart(index);
                        }}
                        variant="filled"
                        color="red"
                        size="sm"
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex pt-4 space-x-2">
          <div>Jami:</div>
          <div>
            {total.toLocaleString("uz-UZ", options).replaceAll(",", " ")} so'm
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

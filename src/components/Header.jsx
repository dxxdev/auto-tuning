import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { Button, IconButton } from "@material-tailwind/react";
import { Search, ShoppingBasketOutlined } from "@mui/icons-material";

const Header = () => {
  const [openInput, setOpenInput] = useState(false);

  const openSearchInput = () => {
    setOpenInput(oldVal => !oldVal);
  };
  return (
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
              AUTO <span className="text-red-500">CAR</span>
            </span>
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <Link>Kompaniya haqida</Link>
            </li>
            <li>
              <Link>Yetkazib berish manzillari</Link>
            </li>
            <li>
              <Link>Yetkazib berish va to'lash</Link>
            </li>
            <li>
              <Link>Aksiya</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <div>
            <h3 className="font-semibold">Tel: +998 (99) 270-10-32</h3>
            <p className="text-xs text-gray-700">
              Ish vaqti: 9:00 dan 18:00 gacha
            </p>
          </div>
          <a href="tel:+998992701032">
            <Button variant="filled">Qo'ng'iroq qilish</Button>
          </a>
        </div>
        <div
          className={`${styles.container} flex justify-between items-center absolute top-full translate-y-1/4 py-4`}
        >
          <nav className="w-full">
            <ul className="flex gap-x-10">
              <li>
                <Link>Sotuv ofislarimiz</Link>
              </li>
              <li>
                <Link>Salon jihozlari</Link>
              </li>
              <li>
                <Link>Suvenirlar</Link>
              </li>
              <li>
                <Link>Antiradarlar</Link>
              </li>
              <li>
                <Link>Tuning jihozlari</Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end space-x-5 ">
            <div
              className={`border px-3 flex justify-between rounded-lg border-white relative ${
                openInput
                  ? "bg-white open-animation"
                  : "py-2 px-2 bg-transparent close-animation cursor-pointer"
              }`}
            >
              <input
                type="text"
                className={`rounded-lg outline-none text-sm ${
                  openInput
                    ? "px-3 py-2.5 open-animation"
                    : "close-animation w-0 px-0 py-0"
                }`}
                placeholder="Qidirish..."
              />
              <button
                className={`${
                  openInput ? "absolute bottom-2 right-3 block" : "inline"
                }`}
                onClick={openSearchInput}
              >
                <Search
                  className={`cursor-pointer text-sm ${
                    openInput ? "text-black" : "text-white"
                  }`}
                />
              </button>
            </div>
            <IconButton variant="outlined" color="white">
              <ShoppingBasketOutlined />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

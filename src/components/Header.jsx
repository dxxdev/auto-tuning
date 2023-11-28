import React, { useState } from "react";
import { styles } from "../styles";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { Button, IconButton } from "@material-tailwind/react";
import {
  Menu,
  Phone,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";

const Header = () => {
  const [openInput, setOpenInput] = useState(false);

  const openSearchInput = () => {
    setOpenInput(oldVal => !oldVal);
  };
  return (
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
              <NavLink>Kompaniya haqida</NavLink>
            </li>
            <li>
              <NavLink>Yetkazib berish manzillari</NavLink>
            </li>
            <li>
              <NavLink>Yetkazib berish va to'lash</NavLink>
            </li>
            <li>
              <NavLink>Aksiya</NavLink>
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
          className={`${styles.container} px-10 rounded-b-full flex justify-between absolute top-full translate-y-1/4 items-center py-4 bg-black bg-opacity-50`}
        >
          <IconButton className="block lg:hidden">
            <Menu />
          </IconButton>
          <nav className="w-full hidden lg:block">
            <ul className="flex gap-x-10 text-white">
              <li>
                <NavLink className="text-shadow">Sotuv ofislarimiz</NavLink>
              </li>
              <li>
                <NavLink className="text-shadow">Salon jihozlari</NavLink>
              </li>
              <li>
                <NavLink className="text-shadow">Suvenirlar</NavLink>
              </li>
              <li>
                <NavLink className="text-shadow">Antiradarlar</NavLink>
              </li>
              <li>
                <NavLink className="text-shadow">Tuning jihozlari</NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end space-x-5 ">
            <div
              className={`border max-w-xs w-full flex justify-between rounded-lg border-white relative ${
                openInput
                  ? "bg-white open-animation pl-3"
                  : "bg-transparent close-animation cursor-pointer"
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
              <IconButton variant="text" onClick={openSearchInput}>
                <Search
                  className={`cursor-pointer text-sm ${
                    openInput ? "text-black" : "text-white"
                  }`}
                />
              </IconButton>
            </div>
            <button className="!w-11 px-2 text-white border border-white rounded-lg flex justify-center items-center !aspect-square">
              <ShoppingBasketOutlined />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

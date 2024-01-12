import React from "react";
import { styles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { category, scrollTop } from "../data/data";
import { Button } from "@material-tailwind/react";
import { Phone, WhatsApp } from "@mui/icons-material";
import "../styles/footerStyle.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={`bg-gray-900 pt-20 pb-8`}>
      <div className={`${styles.container} flex flex-col gap-y-10`}>
        <div className="footer gap-8 px-5">
          <div className="pr-20 hidden md:flex flex-col gap-y-8 items-start w-full max-w-[416px]">
            <h1 className="inline-block text-3xl">
              <Link
                to="/"
                onClick={scrollTop}
                className="flex items-center space-x-2 font-bold text-white"
              >
                <span>
                  AUTO <span className="text-red-500">TUNING</span>
                </span>
              </Link>
            </h1>
            <p className="text-gray-400 text-sm">
              Saytdagi barcha ma'lumotlar faqat ma'lumot olish uchun
              mo'ljallangan.
            </p>
          </div>
          <div className="flex flex-col gap-y-8 w-full max-w-[416px]">
            <h2 className="text-white text-2xl">
              <Link onClick={scrollTop} to={`/Katalog`}>
                Katalog
              </Link>
            </h2>
            <ul className="flex flex-col items-start gap-y-2">
              {category.map((item, index) => {
                return (
                  <li key={index} className="text-gray-400 text-base">
                    <Link onClick={scrollTop} to={`/${item}`}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-y-8 w-full max-w-[416px]">
            <h2 className="text-white text-2xl">Kompaniya</h2>
            <ul className="flex flex-col items-start gap-y-2">
              <li>
                <Link
                  onClick={scrollTop}
                  className="text-gray-400"
                  to={`/Kompaniya haqida`}
                >
                  Kompaniya haqida
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollTop}
                  className="text-gray-400"
                  to={`/Yetkazib berish va to'lash`}
                >
                  Yetkazib berish va to'lash
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollTop}
                  className="text-gray-400"
                  to={`/Sharhlar`}
                >
                  Sharhlar
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollTop}
                  className="text-gray-400"
                  to={`/Aksiya`}
                >
                  Aksiya
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-8 w-full max-w-[416px]">
            <h2 className="text-white text-2xl">Bog'lanish</h2>
            <div className="flex flex-col justify-start items-start gap-y-6">
              <div className="flex justify-start items-center gap-x-4">
                <a
                  href="tel:+998992701032"
                  aria-label="contact admin"
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] text-xs border border-white text-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] rounded-full flex justify-center items-center"
                >
                  <Phone fontSize="small" />
                </a>
                <h2 className="font-normal text-xl md:text-2xl text-white">
                  Tel: +998 (99) 270-10-32
                </h2>
              </div>
              <div className="flex flex-col gap-y-2 text-gray-400">
                <p>Manzil: Toshkent sh, Amir Temur k. 47b</p>
                <p>Ish vaqti: 9:00 dan 18:00 gacha</p>
                <a href="mailto:diyorbekxojamberdiyevn1@gmail.com">
                  diyorbekxojamberdiyevn1@gmail.com
                </a>
              </div>
              <div className="flex gap-x-4">
                <a
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center"
                  href="https://www.whatsapp.com"
                  aria-label="contact whatsapp"
                >
                  <WhatsApp />
                </a>
                <a
                  href="https://vk.com"
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-2xl text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center"
                  aria-label="contact vkontakte"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48"
                    viewBox="0 0 448 512"
                    fill="#0277FF"
                  >
                    <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z" />
                  </svg>
                </a>
                <Button
                  onClick={() => {
                    navigate("/Katalog");
                    scrollTop();
                  }}
                  variant="filled"
                  color="red"
                >
                  Sotib olish
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <hr className="opacity-40" />
          <div className="flex justify-between flex-col space-y-5 md:space-y-0 md:flex-row items-center text-gray-400">
            <p className="text-xs">&copy; "AUTO TUNING", 2024</p>
            <Link onClick={scrollTop} to="/policy">
              Maxfiylik siyosati
            </Link>
            <a href="https://t.me/dxxdev">Mas'ul shaxs Diyorbek</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

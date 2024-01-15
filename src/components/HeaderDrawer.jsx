import React, { useState } from "react";
import { products, scrollTop, setCategoryToArray } from "../data/data";
import { logo, productNotFound } from "../assets/images";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "@mui/icons-material";

const HeaderDrawer = ({
  open2,
  closeDrawer2,
  handleOpen,
  input,
  searchedProduct,
  setSearched,
  searchFilteredProduct,
  openSearchInput,
  searched,
  setCatalogOpen,
  rendered,
}) => {
  const [productsCategory, setProductsCategory] = useState(
    setCategoryToArray(products)
  );
  const openCatalog = () => setCatalogOpen((prev) => !prev);
  return (
    <Drawer
      open={open2}
      onClose={closeDrawer2}
      className={`p-4 side-bar-links flex flex-col transition-all z-[99999] !max-w-full md:!max-w-xs ${
        open2 ? "duration-0" : "!-translate-x-full duration-300"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h1" color="blue-gray">
          <Link
            to="/"
            onClick={() => {
              scrollTop();
              closeDrawer2();
            }}
            className="flex items-center text-xl md:text-2xl space-x-2 font-bold"
          >
            <img height="100%" src={logo} className="h-7 md:h-8" alt="" />
            <span>
              AUTO <span className="text-[#b30000]">TUNING</span>
            </span>
          </Link>
        </Typography>
        <div className="flex justify-center items-center">
          <button
            aria-label="contact button"
            onClick={handleOpen}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none relative w-10 md:w-full max-w-[40px] md:max-w-min h-10 max-h-[40px] md:max-h-min hover:opacity-75 focus:ring focus:ring-red-200 flex md:hidden justify-center items-center"
          >
            <div>
              <Phone className="text-[#b30000] md:text-white" />
            </div>
          </button>
          <IconButton
            aria-label="close drawer button"
            variant="text"
            color="blue-gray"
            onClick={closeDrawer2}
          >
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
                searchedProduct(e);
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
                      <span className="rounded flex justify-center items-center bg-[#555] w-14 h-16">
                        <img
                          width="100%"
                          height="100%"
                          className="h-full"
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
                <img
                  width="100%"
                  height="100%"
                  className="w-40"
                  src={productNotFound}
                  alt=""
                />
              </div>
              <Typography variant="h2" color="gray">
                Qidiruv natijasi mavjud emas
              </Typography>
            </div>
          )}
        </li>

        <li className={`py-2 ${searched ? "hidden" : "block"}`}>
          <NavLink
            onClick={() => {
              closeDrawer2();
              setCatalogOpen(false);
              scrollTop();
            }}
            to={"/"}
            className="text-xl text-gray-600 leading-none flex items-center hover:text-[#b30000] space-x-3"
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
        <li className={searched ? "hidden" : "block"}>
          <button
            onClick={() => {
              rendered((prev) => !prev);
              openCatalog();
            }}
            aria-label="all category button"
            className="flex items-center w-full py-2 text-gray-600 space-x-3 group hover:text-[#b30000]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="27"
              viewBox="0 0 576 512"
              className="group-hover:text-[#b30000]"
              fill="currentColor"
            >
              <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
            </svg>
            <span className="w-full flex items-center justify-between">
              <span className="text-xl">Mahsulot turkumlari</span>
              <span className="text-gray-600 text-sm">({products.length})</span>
            </span>
          </button>
        </li>
        {setCatalogOpen && (
          <li>
            <ul className="flex flex-col gap-y-4 text-black text-xl pl-5">
              <li>
                <NavLink
                  className="space-x-2 w-full flex group items-center text-gray-700 hover:text-[#b30000]"
                  to={`/Katalog`}
                  onClick={() => {
                    scrollTop();
                    closeDrawer2();
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-red-600"></span>
                  <span className="w-full flex items-center justify-between">
                    <span>Katalog</span>
                    <span className="text-gray-600 text-base">
                      ({products.length})
                    </span>
                  </span>
                </NavLink>
              </li>
              {productsCategory.map((category, index) => {
                let categoryHowMuchProduct = products.filter(
                  (product) => product.category === category
                );
                return (
                  <li key={index}>
                    <NavLink
                      className="space-x-2 w-full flex group items-center text-gray-700 hover:text-[#b30000]"
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
              scrollTop();
            }}
            to={"/Kompaniya haqida"}
            className="text-xl text-gray-600 leading-none flex items-center hover:text-[#b30000] space-x-3"
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
              scrollTop();
            }}
            to={"/Sharhlar"}
            className="text-xl text-gray-600 leading-none flex items-center hover:text-[#b30000] space-x-2"
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
              scrollTop();
            }}
            to={"/Yetkazib berish va to'lash"}
            className="text-xl text-gray-600 leading-none flex items-center hover:text-[#b30000] space-x-3"
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
              scrollTop();
            }}
            to={"/Aksiya"}
            className="text-xl text-gray-600 leading-none flex items-center hover:text-[#b30000] space-x-3"
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
  );
};

export default HeaderDrawer;
